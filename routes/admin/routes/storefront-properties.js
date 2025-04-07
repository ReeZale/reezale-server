const express = require("express");
const prisma = require("../../../config/prisma");
const { generateId } = require("../../../helpers/generateId");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const localeCode = req.localeCode;
  const {} = req.query;

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

    /* if (parentCollectionId) {
      whereCondition.collection = {
        parentId: parentCollectionId,
      };
    } */

    const data = await prisma.storeProperty.findMany({
      where: whereCondition,
      include: {
        property: {
          include: {
            propertyTranslations: {
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
        property: {
          key: "asc",
        },
      },
    });

    const storefrontProperties = data.map((item) => ({
      id: item.id,
      propertyId: item.propertyId,
      propertyKey: item.property.key,
      propertyLabel: item.property.propertyTranslations[0].label,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));
    return res.status(200).json({ storefrontProperties });
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

    const data = await prisma.storeProperty.findUnique({
      where: {
        storefrontId: storefront.id,
        id: id,
      },
      include: {
        property: {
          include: {
            propertyTranslations: {
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

    const storefrontProperty = {
      id: data.id,
      propertyId: data.propertyId,
      propertyKey: data.property.key,
      propertyLabel: data.property.propertyTranslations[0].label,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return res.status(200).json({ storefrontProperty });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const localeCode = req.localeCode;
  const { propertyId } = req.body;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const existingProperty = await prisma.storeProperty.findUnique({
      where: {
        storefrontId_propertyId: {
          storefrontId: storefront.id,
          propertyId: propertyId,
        },
      },
    });

    if (existingProperty) {
      return res.status(409).json({
        error: "Requested collection already exists in your storefront",
      });
    }

    const item = await prisma.storeProperty.create({
      data: {
        id: generateId("SP"),
        storefrontId: storefront.id,
        propertyId: propertyId,
      },
      include: {
        property: {
          include: {
            propertyTranslations: {
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

    const storefrontProperty = {
      id: item.id,
      propertyId: item.propertyId,
      propertyKey: item.property.key,
      propertyLabel: item.property.propertyTranslations[0].label,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };

    return res.status(201).json({ storefrontProperty });
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

    const storeProperty = await prisma.storeProperty.findFirst({
      where: {
        id: id,
        storefrontId: storefront.id,
      },
    });

    if (!storeProperty) {
      return res.status(403).json({
        error: "You are not authorized to delete this brand",
      });
    }

    await prisma.storeProperty.delete({ where: { id: storeProperty.id } });
    return res.status(204).send();
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
