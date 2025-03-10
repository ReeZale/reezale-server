const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

// 🚀 GET all products (with optional filtering by storefront)
router.get("/", async (req, res) => {
  const accountId = req.accountId;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });
    const products = await prisma.product.findMany({
      where: {
        storefrontId: storefront.id,
      },
      include: {
        variants: true,
        storeCategory: true,
        productSegment: true,
        standardProperties: true,
        customProperties: true,
        translations: true,
      },
    });
    return res.status(200).json({ products });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch products", details: error.message });
  }
});

// 🚀 GET a single product by ID
router.get("/:id", async (req, res) => {
  const accountId = req.accountId;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });
    const product = await prisma.product.findUnique({
      where: { id: req.params.id, storefrontId: storefront.id },
      include: {
        variants: true,
        standardProperties: true,
        customProperties: true,
        translations: true,
      },
    });
    if (!product) return res.status(404).json({ error: "Product not found" });
    return res.status(200).json({ product });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch product", details: error.message });
  }
});

// 🚀 POST - Create a new product
router.post("/", async (req, res) => {
  const accountId = req.accountId;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });
    const {
      reference,
      name,
      description,
      thumbnailImage,
      images,
      gender,
      ageGroup,
      productSegmentId,
      storeCategoryId,
      standardProperties,
      customProperties,
      translations,
    } = req.body;

    const storeCategory = await prisma.storeCategory.findFirst({
      where: {
        id: storeCategoryId,
      },
    });

    const newProduct = await prisma.product.create({
      data: {
        reference,
        name,
        description,
        thumbnailImage,
        images,
        gender,
        ageGroup,
        productSegmentId: storeCategory.productSegmentId,
        storeCategoryId,
        storefrontId: storefront.id,
        standardProperties: { create: standardProperties || [] },
        customProperties: { create: customProperties || [] },
        translations: { create: translations || [] },
      },
      include: {
        standardProperties: true,
        customProperties: true,
        translations: true,
      },
    });

    return res.status(201).json({ product: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create product", details: error.message });
  }
});

// 🚀 PUT - Update an existing product
router.put("/:id", async (req, res) => {
  const accountId = req.accountId;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });
    const { id } = req.params;
    const {
      reference,
      name,
      description,
      thumbnailImage,
      images,
      gender,
      ageGroup,
      productSegmentId,
      storeCategoryId,
      standardProperties,
      customProperties,
      translations,
    } = req.body;

    const storeCategory = await prisma.storeCategory.findFirst({
      where: {
        id: storeCategoryId,
      },
    });

    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: {
        reference,
        name,
        description,
        thumbnailImage,
        images,
        gender,
        ageGroup,
        productSegmentId: storeCategory.productSegmentId,
        storeCategoryId,
        storefrontId: storefront.id,
        standardProperties: {
          deleteMany: {},
          create: standardProperties || [],
        },
        customProperties: { deleteMany: {}, create: customProperties || [] },
        translations: { deleteMany: {}, create: translations || [] },
      },
      include: {
        standardProperties: true,
        customProperties: true,
        translations: true,
      },
    });

    return res.status(201).json({ product: updatedProduct });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update product", details: error.message });
  }
});

module.exports = router;
