const express = require("express");
const prisma = require("../../../config/prisma");
const { addStoreCategories } = require("../../../helpers/storefront");
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
    const storefrontProductSegments =
      await prisma.storefrontProductSegment.findMany({
        where: {
          storefrontId: storefront.id,
        },
        include: {
          productSegment: true,
        },
      });
    return res.status(200).json({ storefrontProductSegments });
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
  const { id } = req.params;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });
    const storefrontProductSegment =
      await prisma.storefrontProductSegment.findMany({
        where: {
          id: id,
          storefrontId: storefront.id,
        },
        include: {
          productSegment: true,
        },
      });
    if (!template) return res.status(404).json({ error: "template not found" });
    return res.status(200).json({ storefrontProductSegment });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch product", details: error.message });
  }
});

// 🚀 POST - Create a new product
router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const { productSegments } = req.body; // Expecting an array of { productSegmentId, primary }

  if (!Array.isArray(productSegments) || productSegments.length === 0) {
    return res.status(400).json({ error: "Invalid productSegments array" });
  }

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    if (!storefront) {
      return res.status(404).json({ error: "Storefront not found" });
    }

    // Process each productSegment using upsert
    const storefrontProductSegments =
      await prisma.storefrontProductSegment.createManyAndReturn({
        data: productSegments.map((productSegmentId) => ({
          productSegmentId,
          primary: false,
          storefrontId: storefront.id,
        })),
        include: {
          productSegment: true,
        },
        skipDuplicates: true, // Prevents errors if duplicates exist
      });

    await addStoreCategories(storefront.id, storefrontProductSegments);

    return res.status(201).json({ storefrontProductSegments });
  } catch (error) {
    res.status(500).json({
      error: "Failed to upsert product segments",
      details: error.message,
    });
  }
});

// 🚀 PUT - Update an existing product
router.put("/:id", async (req, res) => {
  const accountId = req.accountId;

  const { id } = req.params;
  const { productSegmentId, primary } = req.body;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const storefrontProductSegment =
      await prisma.storefrontProductSegment.update({
        where: { id: id, storefrontId: storefront.id },
        data: {
          productSegmentId,
          primary,
          storefrontId: storefront.id,
        },
      });

    return res.status(201).json({ storefrontProductSegment });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update template", details: error.message });
  }
});

module.exports = router;
