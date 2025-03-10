const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

// 🟢 GET: Fetch all storefront locales
router.get("/", async (req, res) => {
  const accountId = req.accountId;

  try {
    const storefrontLocales = await prisma.storefrontLocale.findMany({
      where: {
        storefront: {
          account: {
            id: accountId,
          },
        },
      },
      include: {
        locale: true, // Include locale details
        storefront: true, // Include storefront details
      },
    });
    res.json({ storefrontLocales });
  } catch (error) {
    console.error("Error fetching storefront locales:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 🔵 POST/UPSERT: Create or update a storefront locale
router.post("/", async (req, res) => {
  const accountId = req.accountId;

  try {
    const {
      localeId,
      timezone = "",
      useStorefrontContact,
      contactEmail,
      contactPhone,
      address,
      domain,
      metaTitle,
      metaDescription,
      metaKeywords,
      ogTitle,
      ogDescription,
      ogImage,
    } = req.body;

    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    if (!storefront) {
      return res.status(404).json({ error: "No storefront found" });
    }

    const storefrontLocale = await prisma.storefrontLocale.upsert({
      where: {
        storefrontId_localeId: {
          storefrontId: storefront.id,
          localeId,
        },
      },
      update: {
        timezone,
        useStorefrontContact,
        contactEmail,
        contactPhone,
        address,
        domain,
        metaTitle,
        metaDescription,
        metaKeywords,
        ogTitle,
        ogDescription,
        ogImage,
        updatedAt: new Date(),
      },
      create: {
        storefrontId: storefront.id,
        localeId,
        timezone,
        useStorefrontContact,
        contactEmail,
        contactPhone,
        address,
        domain,
        metaTitle,
        metaDescription,
        metaKeywords,
        ogTitle,
        ogDescription,
        ogImage,
      },
    });

    return res.status(200).json({ storefrontLocale });
  } catch (error) {
    console.error("Error upserting storefront locale:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
