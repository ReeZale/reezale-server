const express = require("express");
const prisma = require("../../../config/prisma");
const mergeFeedWithOffers = require("../../../helpers/mergeFeedData");
const router = express.Router();

router.get("/", async (req, res) => {
  const seller = req.seller;
  const locale = req.locale;
  const { relativePath } = req.query;

  try {
    const requestLocale = await prisma.locale.findUnique({
      where: {
        id: locale.id,
      },
    });

    if (!requestLocale) {
      return res.status(400).json({ error: "Invalid locale" });
    }

    const localizedItemGroups = await prisma.itemGroup.findMany({
      where: {
        itemDescription: {
          some: {
            localeId: requestLocale.id,
            category: {
              relativePath: {
                startsWith: relativePath,
              },
            },
          },
        },
      },
      select: {
        id: true,
        sku: true,
        name: true,
        image: true,
        brand: { select: { name: true } },
        itemDescription: {
          where: { localeId: requestLocale.id },
          select: { salePrice: true, title: true },
        },
        items: {
          select: {
            id: true,
            offers: {
              where: { sellerId: seller.id },
              orderBy: { expirationDate: "asc" }, // ✅ Order offers by expiration date
              take: 1, // ✅ Select only the soonest expiring offer
              select: {
                price: true,
                expirationDate: true, // ✅ Include expiration date for sorting
              },
            },
          },
        },
      },
    });

    // 🔹 Transform into a flat object
    const mappedData = localizedItemGroups.map((item) => {
      const salePrice = item.itemDescription?.[0]?.salePrice
        ? parseFloat(item.itemDescription[0].salePrice)
        : null; // Default to null if missing

      // Extract and sort offers by expiration date
      const sortedOffers =
        item.items
          ?.flatMap((i) => i.offers)
          ?.sort((a, b) => {
            return (
              new Date(a.expirationDate).getTime() -
              new Date(b.expirationDate).getTime()
            );
          }) || [];

      const lowestOffer = sortedOffers.length > 0 ? sortedOffers[0] : null;

      return {
        id: item.id,
        sku: item.sku,
        title: item.itemDescription?.[0]?.title || item.name, // Use localized title if available
        image: item.image,
        salePrice: salePrice,
        offersPrice: lowestOffer ? parseFloat(lowestOffer.price) : null, // Extract lowest offer price
        expirationDate: lowestOffer ? lowestOffer.expirationDate : null, // Extract soonest expiration date
        discountAmount:
          salePrice !== null && lowestOffer?.price !== null
            ? salePrice - parseFloat(lowestOffer.price)
            : null, // Null if no offer available
        brand: item.brand?.name || "Unknown Brand",
      };
    });

    return res.status(200).json({ data: mappedData });
  } catch (error) {
    console.log("❌ Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:sku", async (req, res) => {
  const { sku } = req.params;
  const seller = req.seller;
  const locale = req.locale;

  try {
    // Find the product feed associated with the seller & locale
    const feed = await prisma.productFeed.findFirst({
      where: {
        localeId: locale.id,
        sellerId: seller.id,
      },
    });

    if (!feed) {
      return res
        .status(400)
        .json({ error: "No product feed found for this seller and locale." });
    }

    // Fetch the item group from the database
    const itemGroup = await prisma.itemGroup.findFirst({
      where: { sellerId: seller.id, sku: sku },
      select: {
        id: true,
        sku: true,
        name: true,
        gender: true,
        ageGroup: true,
        image: true,
        images: true,
        brand: { select: { name: true } },
        itemDescription: {
          where: { localeId: locale.id },
          select: {
            description: true,
            salePrice: true,
            color: true,
            material: true,
            pattern: true,
            category: true,
            link: true,
          },
        },
      },
    });

    if (!itemGroup) {
      return res.status(404).json({ error: "Item group not found" });
    }

    // Merge product feed items with offers
    const updatedItems = await mergeFeedWithOffers(
      feed.link,
      itemGroup.sku,
      seller.id
    );

    // Return the final item group object with updated items list
    return res.status(200).json({
      data: {
        ...itemGroup,
        items: updatedItems, // Updated list of items with merged offers
      },
    });
  } catch (error) {
    console.log("❌ Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
