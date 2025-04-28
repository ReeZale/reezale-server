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
    const item = await prisma.storefrontIdentity.findUnique({
      where: {
        storefrontId: storefrontId,
      },
      include: {
        image: true,
        icon: true,
      },
    });

    const storefrontIdentity = item;
    return res.status(200).json({ storefrontIdentity });
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
    externalUrl,
    slug,
    canonicalLink,
    iconId,
    imageId,
    facebookLink,
    instagramLink,
    twitterLink,
    linkedin,
    youtubeLink,
    tiktokLink,
  } = req.body; //data

  try {
    const existingItem = await prisma.storefrontIdentity.findUnique({
      where: {
        storefrontId: storefrontId,
      },
      include: {
        image: true,
        icon: true,
      },
    });

    if (existingItem) {
      return res
        .status(409)
        .json({ error: "Storefront identity already exists" });
    }

    const item = await prisma.storefrontIdentity.create({
      data: {
        id: generateId("SFI"),
        storefrontId,
        externalUrl,
        slug,
        canonicalLink,
        iconId,
        imageId,
        facebookLink,
        instagramLink,
        twitterLink,
        linkedin,
        youtubeLink,
        tiktokLink,
      },
      include: {
        image: true,
        icon: true,
      },
    });

    const storefrontIdentity = item;
    return res.status(201).json({ storefrontIdentity });
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
    externalUrl,
    slug,
    canonicalLink,
    iconId,
    imageId,
    facebookLink,
    instagramLink,
    twitterLink,
    linkedin,
    youtubeLink,
    tiktokLink,
  } = req.body; //data

  try {
    const existingItem = await prisma.storefrontIdentity.findFirst({
      where: {
        id: id,
        storefrontId: storefrontId,
      },
    });

    if (!existingItem) {
      return res.status(404).json({ error: "Requested record does not exist" });
    }

    const item = await prisma.storefrontIdentity.update({
      where: {
        id: existingItem.id,
      },
      data: {
        externalUrl,
        slug,
        canonicalLink,
        iconId,
        imageId,
        facebookLink,
        instagramLink,
        twitterLink,
        linkedin,
        youtubeLink,
        tiktokLink,
      },
      include: {
        image: true,
        icon: true,
      },
    });

    const storefrontIdentity = item;
    return res.status(201).json({ storefrontIdentity });
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
    const existingItem = await prisma.storefrontIdentity.findFirst({
      where: {
        id,
        storefrontId,
      },
    });

    if (!existingItem) {
      return res.status(404).json({ error: "Requested record does not exist" });
    }

    await prisma.storefrontIdentity.delete({
      where: {
        id: id,
      },
    });

    return res.status(204).send();
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
