const express = require("express");
const prisma = require("../../../config/prisma");
const { error } = require("console");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const localeCode = req.localeCode;
  const { parentCollectionId } = req.query;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const whereCondition = {
      storefrontId: storefront.id,
    };

    if (parentCollectionId) {
      whereCondition.collection = {
        parentId: parentCollectionId,
      };
    }

    const data = await prisma.storeCollection.findMany({
      where: whereCondition,
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
      orderBy: {
        collection: {
          key: "asc",
        },
      },
    });

    const storefrontCollections = data.map((collection) => ({
      id: collection.id,
      collectionId: collection.collectionId,
      key: collection.collection.key,
      label: collection.collection.translations[0].label,
      path: collection.collection.translations[0].path,
      type: collection.collection.collectionType,
      createdAt: collection.createdAt,
      updatedAt: collection.updatedAt,
    }));
    return res.status(200).json({ storefrontCollections });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const accountId = req.accountId;
  const localeCode = req.localeCode;
  const { id } = req.params;
  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const data = await prisma.storeCollection.findUnique({
      where: {
        storefrontId: storefront.id,
        id: id,
      },
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
    });
    if (!data) {
      return res.status(404).json({ error: "Brand not found" });
    }

    const storefrontCollection = {
      id: data.id,
      collectionId: data.collectionId,
      key: data.collection.key,
      label: data.collection.translations[0].label,
      path: data.collection.translations[0].path,
      type: data.collection.collectionType,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return res.status(200).json({ storefrontCollection });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const localeCode = req.localeCode;
  const { collectionId } = req.body;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const existingCollection = await prisma.storeCollection.findUnique({
      where: {
        storefrontId_collectionId: {
          storefrontId: storefront.id,
          collectionId: collectionId,
        },
      },
    });

    if (existingCollection) {
      return res.status(409).json({
        error: "Requested collection already exists in your storefront",
      });
    }

    const newStoreCollection = await prisma.storeCollection.create({
      data: {
        storefrontId: storefront.id,
        collectionId: collectionId,
      },
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
    });

    const storefrontCollection = {
      id: newStoreCollection.id,
      collectionId: newStoreCollection.collectionId,
      key: newStoreCollection.collection.key,
      label: newStoreCollection.collection.translations[0].label,
      path: newStoreCollection.collection.translations[0].path,
      type: newStoreCollection.collection.collectionType,
      createdAt: newStoreCollection.createdAt,
      updatedAt: newStoreCollection.updatedAt,
    };

    return res.status(201).json({ storefrontCollection });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const accountId = req.accountId;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const storeCollection = await prisma.storeCollection.findFirst({
      where: {
        id: id,
        storefrontId: storefront.id,
      },
    });

    if (!storeCollection) {
      return res.status(403).json({
        error: "You are not authorized to delete this brand",
      });
    }

    await prisma.storeBrand.delete({ where: { id: storeCollection.id } });
    return res.status(204).send();
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
