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
    const templateFields = await prisma.templateField.findMany({
      where: {
        storefrontId: storefront.id,
      },
      orderBy: {
        name: "asc",
      },
    });
    return res.status(200).json({ templateFields });
  } catch (error) {
    console.log("Error", error);
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
    const templateField = await prisma.templateField.findUnique({
      where: { id: req.params.id, storefrontId: storefront.id },
    });
    if (!template) return res.status(404).json({ error: "template not found" });
    return res.status(200).json({ templateField });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch product", details: error.message });
  }
});

// 🚀 POST - Create a new product
router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const { templateId, fieldId, required = true } = req.body;

  if (!templateId || !fieldId) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const template = await prisma.template.findFirst({
      where: {
        id: templateId,
        storefront: {
          account: {
            id: accountId,
          },
        },
      },
    });
    const templateField = await prisma.templateField.create({
      data: {
        templateId: template.id,
        fieldId,
        required,
      },
    });

    return res.status(201).json({ templateField });
  } catch (error) {
    console.log("Error", error);
    res
      .status(500)
      .json({ error: "Failed to create product", details: error.message });
  }
});

// 🚀 PUT - Update an existing product
router.put("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;
  const { templateId, fieldId, required } = req.body;

  if (!templateId || !fieldId) {
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

    const templateField = await prisma.templateField.update({
      where: { id: id, template: { storefrontId: storefront.id } },
      data: {
        templateId,
        fieldId,
        required,
      },
    });

    return res.status(201).json({ templateField });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update template", details: error.message });
  }
});

module.exports = router;
