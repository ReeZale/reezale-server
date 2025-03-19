const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

// 🚀 GET all products (with optional filtering by storefront)
router.get("/", async (req, res) => {
  const accountId = req.accountId;

  try {
    const templates = await prisma.standardTemplate.findMany({
      orderBy: {
        name: "asc",
      },
    });
    return res.status(200).json({ templates });
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
    const template = await prisma.standardTemplate.findUnique({
      where: { id: req.params.id },
    });
    if (!template) return res.status(404).json({ error: "template not found" });
    return res.status(200).json({ template });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch product", details: error.message });
  }
});

module.exports = router;
