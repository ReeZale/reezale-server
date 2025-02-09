const express = require("express");
const prisma = require("../config/prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  const { locale } = req.query;
  const seller = req.seller;

  try {
    // Step 1: Get unique item IDs & offer data (offer count, min/max price, localeId)
    const offerData = await prisma.offer.groupBy({
      by: ["itemId", "localeId"], // Group by item & locale
      where: {
        sellerId: seller.id,
        archived: false,
        ...(locale && { locale: { code: locale } }), // ✅ Filter by locale if provided
      },
      _count: {
        itemId: true, // Count offers per item
      },
      _min: {
        price: true, // Get the lowest offer price for the item
        expirationDate: true,
      },
      _max: {
        price: true, // Get the highest offer price for the item
        expirationDate: true,
      },
    });

    // Extract unique item IDs & locale IDs
    const itemIds = [...new Set(offerData.map((o) => o.itemId))];
    const localeIds = [...new Set(offerData.map((o) => o.localeId))];

    // Step 2: Fetch item details for those IDs
    const items = await prisma.item.findMany({
      where: { id: { in: itemIds } },
      select: {
        id: true,
        sku: true,
      },
    });

    // Step 3: Fetch locale details for those locale IDs
    const locales = await prisma.locale.findMany({
      where: { id: { in: localeIds } },
      select: {
        id: true,
        code: true, // Get the locale code
      },
    });

    // Step 4: Merge offer data with item details
    const result = items
      .map((item) => {
        const matchingOffers = offerData.filter((o) => o.itemId === item.id);

        return matchingOffers.map((offer) => ({
          id: item.id,
          sku: item.sku,
          locale: locales.find((l) => l.id === offer.localeId)?.code || null, // Get the locale code
          quantity: offer._count.itemId || 0, // Number of offers
          minPrice: offer._min.price || null, // Lowest offer price
          minValidUntil: offer._min.expirationDate || null, // Lowest offer price
          maxPrice: offer._max.price || null, // Highest offer price
          maxValidUntil: offer._max.expirationDate || null, // Highest offer price
        }));
      })
      .flat(); // Flatten array for multiple locales per item

    return res.status(200).json({ data: result });
  } catch (error) {
    console.error("❌ Error fetching inventory items:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
