const express = require("express");
const prisma = require("../../../config/prisma");
const { generateId } = require("../../../helpers/generateId");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const localeCode = req.localeCode;
  const { storefrontPropertyId } = req.query;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const whereCondition = {
      storeProperty: {
        storefrontId: storefront.id,
      },
    };

    if (storefrontPropertyId) {
      whereCondition.storePropertyId = storefrontPropertyId;
    }

    const data = await prisma.storePropertyOption.findMany({
      where: whereCondition,
      include: {
        propertyOption: {
          include: {
            propertyOptionTranslation: {
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
        propertyOption: {
          key: "asc",
        },
      },
    });

    const storefrontPropertyOptions = data.map((item) => ({
      id: item.id,
      propertyOptionId: item.propertyOption.id,
      propertyOptionLabel:
        item.propertyOption.propertyOptionTranslation[0].label,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));
    return res.status(200).json({ storefrontPropertyOptions });
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

    const data = await prisma.storePropertyOption.findUnique({
      where: {
        storeProperty: {
          storefrontId: storefront.id,
        },
        id: id,
      },
      include: {
        propertyOption: {
          include: {
            propertyOptionTranslation: {
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

    const storefrontPropertyOption = {
      id: data.id,
      propertyOptionId: data.propertyOption.id,
      propertyOptionLabel:
        data.propertyOption.propertyOptionTranslation[0].label,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return res.status(200).json({ storefrontPropertyOption });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const localeCode = req.localeCode;
  const { storefrontPropertyId, propertyOptionId } = req.body;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const existingStorefrontProperty = await prisma.storeProperty.findFirst({
      where: {
        id: storefrontPropertyId,
        storefrontId: storefront.id,
      },
    });

    if (!existingStorefrontProperty) {
      return res.status(409).json({
        error: "Requested property does not exist",
      });
    }

    const existingPropertyOption = await prisma.propertyOption.findFirst({
      where: {
        propertyId: existingStorefrontProperty.propertyId,
        id: propertyOptionId,
      },
    });

    if (!existingPropertyOption) {
      return res.status(409).json({
        error: "Requested property option does not exist",
      });
    }

    const item = await prisma.storePropertyOption.create({
      data: {
        id: generateId("SPO"),
        storePropertyId: existingStorefrontProperty.id,
        propertyOptionId: existingPropertyOption.id,
      },
      include: {
        propertyOption: {
          include: {
            propertyOptionTranslation: {
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

    const storefrontPropertyOption = {
      id: item.id,
      propertyOptionId: item.propertyOptionId,
      propertyLabel: item.propertyOption.propertyOptionTranslation[0].label,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };

    return res.status(201).json({ storefrontPropertyOption });
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

    const storefrontPropertyOption = await prisma.storePropertyOption.findFirst(
      {
        where: {
          id: id,
          storeProperty: {
            storefrontId: storefront.id,
          },
        },
      }
    );

    if (!storefrontPropertyOption) {
      return res.status(403).json({
        error: "You are not authorized to delete this brand",
      });
    }

    await prisma.storePropertyOption.delete({
      where: { id: storefrontPropertyOption.id },
    });
    return res.status(204).send();
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
