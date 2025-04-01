const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

// 🚀 POST - Create a new product
router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const { productPropertyId, propertyOptionId } = req.body;

  if (!productPropertyId || !propertyOptionId) {
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

    const productProperty = await prisma.productProperty.findUnique({
      where: {
        id: productPropertyId,
        product: {
          storefrontId: storefront.id,
        },
      },
    });

    if (!productProperty) {
      return res.status(404).json({ error: "Product Property does not exist" });
    }

    const productPropertyOption = await prisma.productPropertyOption.upsert({
      where: {
        productPropertyId_propertyOptionId: {
          productPropertyId: productProperty.id,
          propertyOptionId: propertyOptionId,
        },
      },
      create: {
        productPropertyId: productProperty.id,
        propertyOptionId: propertyOptionId,
      },
      update: {},
    });

    return res.status(201).json({ productPropertyOption });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create product", details: error.message });
  }
});

module.exports = router;
