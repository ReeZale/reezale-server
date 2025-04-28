const express = require("express");
const router = express.Router();
const prisma = require("../../../../../config/prisma");
const { generateId } = require("../../../../../helpers/generateId");

router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const localeCode = req.localeCode;
  const {} = req.query;

  try {
    const items = await prisma.storefrontConfiguration.findMany({
      where: {
        storefrontId: storefrontId,
        accountId: accountId,
      },
    });

    const storefrontConfigurations = items.map((item) => ({
      id: item.id,
      name: item.name,
      isPublished: item.isPublished,
      isActive: item.isActive,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));
    return res.status(200).json({ storefrontConfigurations });
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
    const item = await prisma.storefrontConfiguration.findFirst({
      where: {
        id: id,
        accountId: accountId,
        storefrontId: storefrontId,
      },
      include: {
        mainImage: true,
        promotedStoreCollection: {
          include: {
            collection: {
              include: {
                translations: {
                  where: {
                    locale: {
                      code: localeCode,
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!item) {
      return res.status(404).json({ error: "Requested resource not found" });
    }

    const storefrontConfiguration = {
      id: item.id,
      name: item.name,
      mainImageId: item.mainImage.id,
      mainImageUrl: item.mainImage.url,
      mainImageBrightness: item.mainImageBrightness,
      collectionPreviewBrightness: item.collectionPreviewBrightness,
      hasPromotedCollection: item.hasPromotedCollection,
      promotedStoreCollectionTitle: item.promotedStoreCollectionTitle || "",
      promotedStoreCollectionId: item.promotedStoreCollection?.id || "",
      promotedCollectionId: item.promotedStoreCollection?.collection.id || "",
      promotedStoreCollectionLabel:
        item.promotedStoreCollection?.collection.translations[0].label || "",
      about: item.about,
      isPublished: item.isPublished,
      isActive: item.isActive,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
    return res.status(200).json({ storefrontConfiguration });
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
    name,
    mainImageId,
    mainImageBrightness,
    collectionPreviewBrightness,
    hasPromotedCollection,
    promotedStoreCollectionTitle,
    storeCollectionId,
    about,
    isPublished,
    isActive,
  } = req.body; //data

  try {
    const item = await prisma.storefrontConfiguration.create({
      data: {
        id: generateId("SFS"),
        name,
        mainImageId,
        mainImageBrightness,
        collectionPreviewBrightness,
        hasPromotedCollection,
        promotedStoreCollectionTitle,
        storeCollectionId: storeCollectionId || null,
        about,
        isPublished,
        isActive,
        accountId,
        storefrontId,
      },
      include: {
        mainImage: true,
        promotedStoreCollection: {
          include: {
            collection: {
              include: {
                translations: {
                  where: {
                    locale: {
                      code: localeCode,
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    if (isActive) {
      await prisma.storefrontConfiguration.updateMany({
        where: {
          id: {
            not: item.id,
          },
        },
        data: {
          isActive: false,
        },
      });
    }

    const storefrontConfiguration = {
      id: item.id,
      name: item.name,
      mainImageId: item.mainImage.id,
      mainImageUrl: item.mainImage.url,
      mainImageBrightness: item.mainImageBrightness,
      collectionPreviewBrightness: item.collectionPreviewBrightness,
      hasPromotedCollection: item.hasPromotedCollection,
      promotedStoreCollectionTitle: item.promotedStoreCollectionTitle,
      promotedStoreCollectionId: item.promotedStoreCollection.id,
      promotedCollectionId: item.promotedStoreCollection.collection.id,
      promotedStoreCollectionLabel:
        item.promotedStoreCollection.collection.translations[0].label,
      about: item.about,
      isPublished: item.isPublished,
      isActive: item.isActive,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
    return res.status(201).json({ storefrontConfiguration });
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
    name,
    mainImageId,
    mainImageBrightness,
    collectionPreviewBrightness,
    hasPromotedCollection,
    promotedStoreCollectionTitle,
    storeCollectionId,
    about,
    isPublished,
    isActive,
  } = req.body; //data

  try {
    const existingItem = await prisma.storefrontConfiguration.findFirst({
      where: {
        id: id,
        storefrontId: storefrontId,
        accountId: accountId,
      },
    });

    if (!existingItem) {
      return res.status(404).json({
        error:
          "The requested resource does not exist or you are not authorized to update it",
      });
    }

    const item = await prisma.storefrontConfiguration.update({
      where: {
        id: existingItem.id,
      },
      data: {
        name,
        mainImageId,
        mainImageBrightness,
        collectionPreviewBrightness,
        hasPromotedCollection,
        promotedStoreCollectionTitle,
        storeCollectionId,
        about,
        isPublished,
        isActive,
      },
    });

    if (isActive) {
      await prisma.storefrontConfiguration.updateMany({
        where: {
          id: {
            not: item.id,
          },
        },
        data: {
          isActive: false,
        },
      });
    }

    const storefrontConfiguration = {
      id: item.id,
      name: item.name,
      mainImageId: item.mainImage.id,
      mainImageUrl: item.mainImage.url,
      mainImageBrightness: item.mainImageBrightness,
      collectionPreviewBrightness: item.collectionPreviewBrightness,
      hasPromotedCollection: item.hasPromotedCollection,
      promotedStoreCollectionTitle: item.promotedStoreCollectionTitle,
      promotedStoreCollectionId: item.promotedStoreCollection.id,
      promotedCollectionId: item.promotedStoreCollection.collection.id,
      promotedStoreCollectionLabel:
        item.promotedStoreCollection.collection.translations[0].label,
      about: item.about,
      isPublished: item.isPublished,
      isActive: item.isActive,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
    return res.status(201).json({ storefrontConfiguration });
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
    const existingItem = await prisma.storefrontConfiguration.findFirst({
      where: {
        id: id,
        storefrontId: storefrontId,
        accountId: accountId,
      },
    });

    if (existingItem.isActive) {
      return res.status(409).json({
        error:
          "The requested resources is currently active. Please deactivate the resource before proceeding",
      });
    }

    if (!existingItem) {
      return res.status(404).json({
        error:
          "The requested resource does not exist or you are not authorized to update it",
      });
    }

    await prisma.storefrontConfiguration.delete({
      where: {
        id: existingItem.id,
      },
    });
    return res.status(204).send();
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
