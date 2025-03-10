const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;

  try {
    // Fetch storefront by ID or domain
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
      include: { locales: true }, // Include localized storefront settings
    });

    if (!storefront) {
      return res.status(404).json({ error: "Storefront not found" });
    }

    return res.status(200).json({ storefront });
  } catch (error) {
    console.error("Error fetching storefront:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;

  try {
    const {
      name,
      logo,
      bannerImage,
      domain,
      refundPolicy,
      termsOfService,
      privacyPolicy,
      facebook,
      twitter,
      instagram,
      linkedin,
      tiktok,
      primaryColor,
      secondaryColor,
      backgroundColor,
      textColor,
      buttonColor,
      buttonTextColor,
      fontFamily,
      borderRadius,
    } = req.body;

    // Upsert (Update if exists, Create if not)
    const storefront = await prisma.storefront.upsert({
      where: { domain },
      update: {
        name,
        logo,
        bannerImage,
        refundPolicy: refundPolicy || "Default refund policy...",
        termsOfService: termsOfService || "Default terms of service...",
        privacyPolicy: privacyPolicy || "Default privacy policy...",
        facebook,
        twitter,
        instagram,
        linkedin,
        tiktok,
        primaryColor: primaryColor || "#5A643E",
        secondaryColor: secondaryColor || "#7F8D58",
        backgroundColor: backgroundColor || "#F4F4F4",
        textColor: textColor || "#333333",
        buttonColor: buttonColor || "#5A643E",
        buttonTextColor: buttonTextColor || "#FFFFFF",
        fontFamily: fontFamily || "Inter, sans-serif",
        borderRadius: borderRadius || 8,
        account: {
          connect: {
            id: accountId,
          },
        },
      },
      create: {
        name,
        logo,
        bannerImage,
        domain,
        refundPolicy: refundPolicy || "Default refund policy...",
        termsOfService: termsOfService || "Default terms of service...",
        privacyPolicy: privacyPolicy || "Default privacy policy...",
        facebook,
        twitter,
        instagram,
        linkedin,
        tiktok,
        primaryColor: primaryColor || "#5A643E",
        secondaryColor: secondaryColor || "#7F8D58",
        backgroundColor: backgroundColor || "#F4F4F4",
        textColor: textColor || "#333333",
        buttonColor: buttonColor || "#5A643E",
        buttonTextColor: buttonTextColor || "#FFFFFF",
        fontFamily: fontFamily || "Inter, sans-serif",
        borderRadius: borderRadius || 8,
        account: {
          connect: {
            id: accountId,
          },
        },
      },
    });

    return res.status(201).json({ storefront });
  } catch (error) {
    console.error("Error creating storefront:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
