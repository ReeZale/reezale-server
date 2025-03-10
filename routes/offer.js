const express = require("express");
const router = express.Router();
const path = require("path");
const prisma = require("../config/prisma");
const getProductFromFeed = require("../helpers/getProductFromFeed");
const createCategoryHierarchy = require("../helpers/createCategoryHeirarchy");

router.get("/", async (req, res) => {
  const { locale } = req.query;
  const seller = req.seller;

  try {
    const requestLocale = await prisma.locale.findFirst({
      where: { code: locale },
    });

    if (!requestLocale) {
      return res.status(400).json({ error: "Invalid locale" });
    }

    const localizedItemGroups = await prisma.itemGroup.findMany({
      where: {
        itemDescription: {
          some: { localeId: requestLocale.id },
        },
      },
      select: {
        id: true, // ItemGroup ID
        name: true, // ItemGroup Title
        image: true, // Main Image
        brand: { select: { name: true } }, // Fetch Brand Name
        itemDescription: {
          where: { localeId: requestLocale.id }, // Only for the selected locale
          select: { salePrice: true, title: true }, // Get sale price
        },
        items: {
          select: {
            id: true, // Item ID
            offers: {
              where: { sellerId: seller.id },
              orderBy: { price: "asc" },
              take: 1,
              select: { price: true },
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

      const lowestOfferPrice = item.items?.flatMap((i) => i.offers).length
        ? parseFloat(
            item.items
              .flatMap((i) => i.offers)
              .sort((a, b) => a.price - b.price)?.[0]?.price
          )
        : null; // Default to null if missing

      return {
        id: item.id,
        title: item.itemDescription?.[0]?.title || item.name, // Use localized title if available
        image: item.image,
        salePrice: salePrice,
        offersPrice: lowestOfferPrice,
        discountAmount:
          salePrice !== null && lowestOfferPrice !== null
            ? salePrice - lowestOfferPrice
            : null, // Null if no offer available
        brand: item.brand?.name || "Unknown Brand",
      };
    });

    return res.status(200).json({ data: mappedData });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ error: "Uncaught internal error" });
  }
});

router.post("/", async (req, res) => {
  const seller = req.seller;
  const {
    id,
    locale,
    reference,
    offerType,
    condition,
    quantity,
    availableDate,
    expirationDate,
    price,
    shipAddress,
  } = req.body;

  try {
    const existingLocale = await prisma.locale.findFirst({
      where: {
        code: locale,
      },
    });

    const productFeeds = await prisma.productFeed.findMany({
      where: {
        sellerId: seller.id,
        locale: {
          code: locale,
        },
      },
    });

    console.log("Product Feed", productFeeds);

    for (const feed of productFeeds) {
      try {
        const offerItem = await getProductFromFeed(feed.link, id);

        console.log("Offer item", offerItem);

        const brandName = offerItem.brand.trim();
        const normalizedBrand = brandName.toLowerCase();

        const brand = await prisma.brand.upsert({
          where: {
            name_normalized: {
              name: brandName,
              normalized: normalizedBrand,
            },
          },
          create: {
            name: brandName,
            normalized: normalizedBrand,
          },
          update: {}, // No updates needed
        });

        const itemGroup = await prisma.itemGroup.upsert({
          where: {
            brandId_sku: {
              brandId: brand.id,
              sku: offerItem.item_group_id,
            },
          },
          create: {
            sku: offerItem.item_group_id,
            brandId: brand.id,
            name: offerItem.title,
            gender: offerItem.gender,
            ageGroup: offerItem.age_group,
            sellerId: seller.id,
            image: offerItem.image_link,
            images: offerItem.additional_image_link,
          },
          update: {},
        });

        const categories = await createCategoryHierarchy(
          offerItem.product_type,
          seller.id,
          existingLocale.id
        );

        await prisma.itemDescription.upsert({
          where: {
            itemGroupId_localeId: {
              itemGroupId: itemGroup.id,
              localeId: existingLocale.id,
            },
          },
          create: {
            itemGroupId: itemGroup.id,
            title: offerItem.title,
            description: offerItem.description,
            categoryId: categories.id,
            color: offerItem.color,
            material: offerItem.material,
            pattern: offerItem.pattern,
            price: offerItem.price.amount,
            salePrice: offerItem.sale_price.amount,
            currency: offerItem.price.currency,
            link: offerItem.link,
            localeId: existingLocale.id,
          },
          update: {},
        });

        const item = await prisma.item.upsert({
          where: {
            itemGroupId_sku: {
              itemGroupId: itemGroup.id,
              sku: offerItem.id,
            },
          },
          create: {
            itemGroupId: itemGroup.id,
            sku: offerItem.id,
            gtin: offerItem.gtin || null,
            mpn: offerItem.mpn || null,
            sellerId: seller.id,
            shipWeight: offerItem.shipping_weight,
            shipLength: offerItem.shipping_length,
            shipWidth: offerItem.shipping_width,
            shipHeight: offerItem.shipping_height,
          },
          update: {
            shipWeight: offerItem.shipping_weight,
            shipLength: offerItem.shipping_length,
            shipWidth: offerItem.shipping_width,
            shipHeight: offerItem.shipping_height,
          },
        });

        console.log("Item", item);

        const sizeOption = await prisma.sizeOption.upsert({
          where: {
            sizeSystem_sizeType_size: {
              sizeSystem: offerItem.size_system,
              sizeType: offerItem.size_type,
              size: offerItem.size,
            },
          },
          create: {
            sizeSystem: offerItem.size_system,
            sizeType: offerItem.size_type,
            size: offerItem.size,
          },
          update: {},
        });

        console.log("Item Option", sizeOption);

        const itemSize = await prisma.itemSize.upsert({
          where: {
            itemId_sizeOptionId_localeId: {
              itemId: item.id,
              sizeOptionId: sizeOption.id,
              localeId: existingLocale.id,
            },
          },
          create: {
            itemId: item.id,
            sizeOptionId: sizeOption.id,
            localeId: existingLocale.id,
          },
          update: {},
        });

        console.log("Item size", itemSize);

        const newOffer = await prisma.offer.upsert({
          where: {
            reference_sellerId_itemId: {
              // 👈 Match the composite unique key
              sellerId: seller.id,
              itemId: item.id,
              reference: reference,
            },
          },
          create: {
            sellerId: seller.id,
            localeId: existingLocale.id,
            offerType: offerType || "business",
            reference: reference,
            condition: condition || "new",
            availableDate: availableDate,
            expirationDate: expirationDate,
            itemId: item.id,
            price: price.amount,
            quantity: quantity,
            shipAddress: shipAddress,
            archived: false,
          },
          update: {
            condition: condition,
            price: price.amount,
            quantity: quantity,
            availableDate: availableDate,
            expirationDate: expirationDate,
            shipAddress: shipAddress,
          }, // 👈 No update needed, just prevents duplicates
        });

        return res.status(201).json({ data: newOffer });
      } catch (error) {
        console.log("Error", error);
      }
    }
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: "Uncaught internal error" });
  }
});

module.exports = router;
