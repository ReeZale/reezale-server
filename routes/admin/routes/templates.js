const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

// 🚀 GET all products with optional filtering
router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const { parentId, categoryId, status } = req.query; // Extract query parameters

  try {
    const storefront = await prisma.storefront.findFirst({
      where: { account: { id: accountId } },
    });

    if (!storefront) {
      return res.status(404).json({ error: "Storefront not found" });
    }

    let storefrontCategories = await prisma.storeCategory.findMany({
      where: { storefrontId: storefront.id },
      include: { productSegment: true },
    });

    let templateIds = storefrontCategories
      .map((item) => item.productSegment?.standardTemplateId)
      .filter((id) => id !== undefined && id !== null);

    // Build query conditions dynamically
    let queryConditions = { id: { in: templateIds } };

    if (parentId) {
      queryConditions.parentId = parentId;
    }
    if (categoryId) {
      queryConditions.categoryId = categoryId;
    }
    if (status) {
      queryConditions.status = status;
    }

    const templates = await prisma.standardTemplate.findMany({
      where: queryConditions,
    });

    return res.status(200).json({ templates });
  } catch (error) {
    console.error("Error fetching templates:", error);
    return res
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
    const template = await prisma.standardTemplate.findUnique({
      where: { id: req.params.id },
    });

    const standardFields = await prisma.standardTemplateField.findMany({
      where: {
        standardTemplateId: template.id,
      },
      select: {
        standardField: true,
      },
    });

    const fields = standardFields.map((item) => item.standardField);

    if (!template) return res.status(404).json({ error: "template not found" });
    return res.status(200).json({
      template,
      fields,
    });
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
    const { key, name, description } = req.body;

    const template = await prisma.template.create({
      data: {
        key,
        name,
        description,
        storefrontId: storefront.id,
      },
    });

    return res.status(201).json({ template });
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
  const { key, name, description } = req.body;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const template = await prisma.template.update({
      where: { id: parseInt(id) },
      data: {
        key,
        name,
        description,
        storefrontId: storefront.id,
      },
    });

    return res.status(201).json({ template });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update template", details: error.message });
  }
});

module.exports = router;
