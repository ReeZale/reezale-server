const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;
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

    const rawData = await prisma.productVariant.findMany({
      where: whereCondition,
      include: {
        product: true,
      },
    });

    const productVariants = (rawData || []).map((data) => ({
      id: data.id,
      sku: data.sku,
      mpn: data.mpn,
      gtin: data.gtin,
      name: data.name,
      productId: data.productId,
      productName: data.product.name,
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

router.get("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const data = await prisma.productVariant.findFirst({
      where: {
        id: id,
        product: {
          storefrontId: storefront.id,
        },
      },
      include: {
        product: true,
      },
    });

    const productVariant = {
      id: data.id,
      sku: data.sku,
      mpn: data.mpn,
      gtin: data.gtin,
      name: data.name,
      productId: data.productId,
      productName: data.product.name,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return res.status(200).json({ productVariant });
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
  const { sku, mpn, gtin, productId, name } = req.body;

  if (!sku || !productId || !name) {
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

    const existingProductVariant = await prisma.productVariant.findUnique({
      where: {
        productId_sku: {
          productId: productId,
          sku: sku,
        },
        product: {
          storefrontId: storefront.id,
        },
      },
    });

    if (existingProductVariant) {
      return res.status(404).json({ error: "Product variant already exists" });
    }

    const productVariant = await prisma.productVariant.create({
      data: {
        sku,
        mpn: mpn ?? undefined,
        gtin: gtin ?? undefined,
        name,
        productId,
      },
    });
    return res.status(201).json({ productVariant });
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
  const { sku, mpn, gtin, productId, name } = req.body;

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
        name,
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
