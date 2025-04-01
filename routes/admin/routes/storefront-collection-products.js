const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const localeCode = req.localeCode;
  const { storefrontCollectionId, productId } = req.query;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const whereCondition = {
      storeCollection: {
        storefrontId: storefront.id,
        ...(storefrontCollectionId && { id: storefrontCollectionId }),
      },
      ...(productId && { productId }),
    };

    if (storefrontCollectionId) {
      whereCondition.storeCollection = {
        id: storefrontCollectionId,
      };
    }

    const data = await prisma.storeCollectionProducts.findMany({
      where: whereCondition,
      include: {
        product: true,
        storeCollection: {
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
      orderBy: {
        product: {
          name: "asc",
        },
      },
    });

    const storefrontCollectionProducts = data.map((storeCollectionProduct) => ({
      id: storeCollectionProduct.id,
      productId: storeCollectionProduct.productId,
      productReference: storeCollectionProduct.product.reference,
      productName: storeCollectionProduct.product.name,
      storeCollectionId: storeCollectionProduct.storeCollectionId,
      collectionId: storeCollectionProduct.storeCollection.collectionId,
      collectionLabel:
        storeCollectionProduct.storeCollection.collection.translations[0].label,
      collectionPath:
        storeCollectionProduct.storeCollection.collection.translations[0].path,
      createdAt: storeCollectionProduct.createdAt,
      updatedAt: storeCollectionProduct.updatedAt,
    }));
    return res.status(200).json({ storefrontCollectionProducts });
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

    const data = await prisma.storeCollectionProducts.findUnique({
      where: {
        id: id,
        storeCollection: {
          storefrontId: storefront.id,
        },
      },
      include: {
        product: true,
        storeCollection: {
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
      orderBy: {
        product: {
          name: "asc",
        },
      },
    });

    const storefrontCollectionProduct = {
      id: data.id,
      productId: data.productId,
      productReference: data.product.reference,
      productName: data.product.name,
      storeCollectionId: data.storeCollectionId,
      collectionId: data.storeCollection.collectionId,
      collectionLabel: data.storeCollection.collection.translations[0].label,
      collectionPath: data.storeCollection.collection.translations[0].path,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return res.status(200).json({ storefrontCollectionProduct });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const localeCode = req.localeCode;
  const { productId, storefrontCollectionId } = req.body;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const existingStorefrontCollectionProduct =
      await prisma.storeCollectionProducts.findUnique({
        where: {
          productId_storeCollectionId: {
            productId: productId,
            storeCollectionId: storefrontCollectionId,
          },
          storeCollection: {
            storefrontId: storefront.id,
          },
          product: {
            storefrontId: storefront.id,
          },
        },
      });

    if (existingStorefrontCollectionProduct) {
      return res.status(409).json({
        error: "Requested collection already exists in your storefront",
      });
    }

    const newStorefrontCollectionProduct =
      await prisma.storeCollectionProducts.create({
        data: {
          storeCollectionId: storefrontCollectionId,
          productId: productId,
        },
        include: {
          product: true,
          storeCollection: {
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

    const storefrontCollectionProduct = {
      id: newStorefrontCollectionProduct.id,
      storefrontCollectionId: newStorefrontCollectionProduct.storeCollectionId,
      productId: newStorefrontCollectionProduct.productId,
      productReference: newStorefrontCollectionProduct.product.reference,
      productName: newStorefrontCollectionProduct.product.name,
      storeCollectionId: newStorefrontCollectionProduct.storeCollectionId,
      collectionId: newStorefrontCollectionProduct.storeCollection.collectionId,
      collectionLabel:
        newStorefrontCollectionProduct.storeCollection.collection
          .translations[0].label,
      collectionPath:
        newStorefrontCollectionProduct.storeCollection.collection
          .translations[0].path,
      createdAt: newStorefrontCollectionProduct.createdAt,
      updatedAt: newStorefrontCollectionProduct.updatedAt,
    };

    return res.status(201).json({ storefrontCollectionProduct });
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

    const storeCollection = await prisma.storeCollectionProducts.findFirst({
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
