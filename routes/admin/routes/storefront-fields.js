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
    const fields = await prisma.field.findMany({
      where: {
        storefrontId: storefront.id,
      },
      orderBy: {
        name: "asc",
      },
    });
    return res.status(200).json({ fields });
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
    const field = await prisma.field.findUnique({
      where: { id: req.params.id, storefrontId: storefront.id },
    });
    if (!field) return res.status(404).json({ error: "template not found" });
    return res.status(200).json({ field });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch product", details: error.message });
  }
});

// 🚀 POST - Create a new product
router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const { key, name, description, index, type, format, standardFieldId } =
    req.body;

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

    const field = await prisma.field.create({
      data: {
        key,
        name,
        description,
        index,
        type,
        format,
        storefrontId: storefront.id,
        standardFieldId,
      },
    });

    return res.status(201).json({ field });
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
  const {
    key,
    name,
    description,
    options,
    translations,
    index,
    type,
    format,
    fieldType,
  } = req.body;

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

    const field = await prisma.field.update({
      where: { id: id },
      data: {
        key,
        name,
        description,
        options,
        translations,
        index,
        type,
        format,
        fieldType,
        storefrontId: storefront.id,
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
