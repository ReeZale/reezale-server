const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const { productVariantId } = req.query;
  const localeCode = req.localeCode;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const whereCondition = {
      productVariantId: productVariantId ? productVariantId : undefined,
      productVariant: {
        product: {
          storefrontId: storefront.id,
        },
      },
    };

    const rawData = await prisma.productVariantProperty.findMany({
      where: whereCondition,
      include: {
        productVariant: true,
        variantConfigField: {
          include: {
            variantProperty: true,
          },
        },
      },
    });

    const productVariants = (rawData || []).map((data) => ({
      id: data.id,
      variantConfigFieldId: data.variantConfigFieldId,
      variantConfigFieldKey: data.variantConfigField.key,
      variantConfigFieldLabel: data.variantConfigField.translations[localeCode],
      productVariantId: data.productVariantId,
      productVariantKey: data.productVariant.key,
      productVariantLabel: data.productVariant.translations[localeCode],
      value: data.value,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    }));

    return res.status(200).json({ productVariants });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      error: "Failed to fetch product variants",
      details: error.message,
    });
  }
});

// 🚀 POST - Create a new product
router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const { productVariantId, variantConfigFieldId, value } = req.body;

  if (!productVariantId || !variantConfigFieldId || !value) {
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

    const existingProductVariant =
      await prisma.productVariantProperty.findUnique({
        where: {
          productVariantId_variantConfigFieldId: {
            productVariantId: productVariantId,
            variantConfigFieldId: variantConfigFieldId,
          },

          productVariant: {
            product: {
              storefrontId: storefront.id,
            },
          },
        },
      });

    if (existingProductVariant) {
      return res.status(404).json({ error: "Product variant already exists" });
    }

    const productProperty = await prisma.productVariant.create({
      data: {
        productVariantId,
        variantConfigFieldId,
        value,
      },
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
  const { sku, mpn, gtin, productId } = req.body;

  if (!id || !sku || !productId) {
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

    const existingProductVariant = await prisma.productVariant.findUnique({
      where: {
        id: id,
        product: {
          storefrontId: storefront.id,
        },
      },
    });

    if (existingProductVariant) {
      return res.status(404).json({ error: "Product variant does not exist" });
    }

    const productVariant = await prisma.productVariant.update({
      where: {
        id: id,
        product: {
          storefrontId: storefront.id,
        },
      },
      data: {
        sku,
        mpn: mpn ?? undefined,
        gtin: gtin ?? undefined,
        productId,
      },
    });

    return res.status(201).json({ productVariant });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update template", details: error.message });
  }
});

// 🚀 PUT - Update an existing product
router.delete("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;

  if (!id) {
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

    const existingProductVariant = await prisma.productVariant.findUnique({
      where: {
        id: id,
        product: {
          storefrontId: storefront.id,
        },
      },
    });

    if (!existingProductVariant) {
      return res.status(404).json({ error: "Product variant does not exist" });
    }

    await prisma.productVariant.delete({
      where: {
        id: id,
        product: {
          storefrontId: storefront.id,
        },
      },
    });

    return res.status(204).json({ productVariant });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update template", details: error.message });
  }
});

module.exports = router;
