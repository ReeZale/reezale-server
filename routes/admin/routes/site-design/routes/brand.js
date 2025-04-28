const express = require("express");
const prisma = require("../../../../../config/prisma");
const { generateId } = require("../../../../../helpers/generateId");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const localeCode = req.localeCode;
  const {} = req.query;

  try {
    const storefrontBrand = await prisma.storefrontBranding.findFirst({
      where: {
        storefrontId: storefrontId,
      },
    });
    return res.status(200).json({ storefrontBrand });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const localeCode = req.localeCode;
  const { id } = req.params;

  try {
    return res.status(200).json({});
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const localeCode = req.localeCode;
  const {
    brandName,
    description,
    slogan,
    logoUrl,
    imageUrl,
    url,
    facebookLink,
    instagramLink,
    twitterLink,
    linkedin,
    pinterestLink,
    youtubeLink,
    tiktokLink,
    snapchatLink,
  } = req.body; //data

  try {
    const existingStorefrontBrand = await prisma.storefrontBranding.findUnique({
      where: {
        storefrontId: storefrontId,
      },
    });

    if (existingStorefrontBrand) {
      return res.status(409).json({ error: "Brand already exists" });
    }

    const storefrontBrand = await prisma.storefrontBranding.create({
      data: {
        id: generateId("SB"),
        accountId,
        storefrontId,
        brandName,
        description,
        slogan,
        logoUrl,
        imageUrl,
        url,
        facebookLink,
        instagramLink,
        twitterLink,
        linkedin,
        pinterestLink,
        youtubeLink,
        tiktokLink,
        snapchatLink,
      },
    });

    return res.status(201).json({ storefrontBrand });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});
router.put("/:id", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const localeCode = req.localeCode;
  const { id } = req.params;
  const {
    brandName,
    description,
    slogan,
    logoUrl,
    imageUrl,
    url,
    facebookLink,
    instagramLink,
    twitterLink,
    linkedin,
    pinterestLink,
    youtubeLink,
    tiktokLink,
    snapchatLink,
  } = req.body; //data

  try {
    const existingStorefrontBrand = await prisma.storefrontBranding.findUnique({
      where: {
        storefrontId: storefrontId,
      },
    });

    if (!existingStorefrontBrand) {
      return res.status(409).json({ error: "Brand already exists" });
    }

    const storefrontBrand = await prisma.storefrontBranding.update({
      where: {
        id: id,
      },
      data: {
        brandName,
        description,
        slogan,
        logoUrl,
        imageUrl,
        url,
        facebookLink,
        instagramLink,
        twitterLink,
        linkedin,
        pinterestLink,
        youtubeLink,
        tiktokLink,
        snapchatLink,
      },
    });
    return res.status(201).json({ storefrontBrand });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const { id } = req.params;

  try {
    return res.status(204).send();
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
