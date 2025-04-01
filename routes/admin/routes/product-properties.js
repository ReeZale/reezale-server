const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const localeCode = req.localeCode;
  const { productId } = req.query;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const whereCondition = {
      productId: productId ? productId : undefined,
      product: {
        storefrontId: storefront.id,
      },
    };

    const productProperties = await prisma.productProperty.findMany({
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
        productPropertyOptions: {
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
        },
      },
    });


    const formattedResponse = productProperties.map((item) => ({
      id: item.id,
      propertyId: item.property.id,
      propertyKey: item.property.key,
      propertyLabel: item.property.propertyTranslations[0].label,
      propertyOptions: item.productPropertyOptions.map((option) => ({
        id: option.id,
        key: option.propertyOption.key,
        label: option.propertyOption.propertyOptionTranslation[0].label,
      })),
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));


    return res.status(200).json({ productProperties: formattedResponse });
  } catch (error) {
    console.log("Error", error);
    res
      .status(500)
      .json({ error: "Failed to fetch products", details: error.message });
  }
});

// 🚀 POST - Create a new product
router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const { productId, propertyId } = req.body;

  if (!productId || !propertyId) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const productProperty = await prisma.productProperty.upsert({
      where: {
        productId_propertyId: {
          productId: productId,
          propertyId: propertyId,
        },
        product: {
          storefrontId: storefront.id,
        },
      },
      create: {
        productId: productId,
        propertyId: propertyId,
        type: "SEGMENT",
      },
      update: {},
    });

    return res.status(201).json({ productProperty });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create product", details: error.message });
  }
});

// 🚀 PUT - Update an existing product
router.put("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;
  const { productId, propertyId, type, values } = req.body;

  if (!key || !name || !description || !translations || !fieldType) {
    return res
      .status(400)
      .json({ error: "Missing required fields to updated" });
  }

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const field = await prisma.productProperty.update({
      where: {
        id: id,
        product: {
          storefrontId: storefront.id,
        },
      },
      data: {
        productId,
        propertyId,
        type,
        values,
      },
    });

    return res.status(201).json({ field });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update template", details: error.message });
  }
});

module.exports = router;
