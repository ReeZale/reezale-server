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
      orderBy: [{ type: "asc" }, { property: { key: "asc" } }],

      include: {
        property: true,
      },
    });

    const formattedResponse = productProperties.map((item) => ({
      id: item.id,
      type: item.type,
      propertyKey: item.property.key,
      propertyLabel: item.property.translations[localeCode],
      productValues:
        Array.isArray(item.values) && item.values.length > 0
          ? item.values.map((value) => ({
              key: value.key,
              label: value.translations[localeCode],
            }))
          : [],
      propertyOptions: item.property.options.map((option) => ({
        key: option.key,
        label: option.translations[localeCode],
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
  const { productId, propertyId, type, values } = req.body;

  if (!key || !name || !description) {
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

    const existingProductProperty = await prisma.productProperty.findUnique({
      where: {
        productId_propertyId: {
          productId: productId,
          propertyId: propertyId,
        },
        product: {
          storefrontId: storefront.id,
        },
      },
    });

    if (!existingProductProperty) {
      const productProperty = await prisma.productProperty.create({
        data: {
          productId: productId,
          propertyId: propertyId,
          values: values,
          type: type,
        },
      });
      return res.status(201).json({ productProperty });
    }
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
