const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

/**
 * @route GET /api/store-categories
 * @desc Fetch all store categories
 */
router.get("/", async (req, res) => {
  const accountId = req.accountId;

  try {
    const storeCategories = await prisma.storeCategory.findMany({
      where: {
        storefront: {
          account: {
            id: accountId,
          },
        },
      },
      include: {
        productSegment: true, // Include linked ProductSegment
        storefront: true, // Include linked Storefront
        parent: true, // Include parent category (if any)
        children: true, // Include child categories (if any)
      },
      orderBy: {
        name: "asc",
      },
    });

    return res.status(200).json({ storeCategories });
  } catch (error) {
    console.error("Error fetching store categories:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route POST /api/store-categories
 * @desc Create a new store category
 */
router.post("/", async (req, res) => {
  const accountId = req.accountId;

  try {
    const { name, productSegmentId, parentId, externalId } = req.body;

    if (!name || !productSegmentId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const newCategory = await prisma.storeCategory.create({
      data: {
        name,
        productSegmentId,
        storefrontId: storefront.id,
        parentId: parentId || null, // Allow parent to be optional
        externalId: externalId || null, // External ID is optional
      },
    });

    return res.status(200).json({ newCategory });
  } catch (error) {
    console.error("Error fetching store categories:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;
  const { name, productSegmentId, parentId, externalId } = req.body;

  try {
    if (!name || !productSegmentId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Ensure the storefront exists for the account
    const storefront = await prisma.storefront.findFirst({
      where: { account: { id: accountId } },
    });

    if (!storefront) {
      return res.status(404).json({ error: "Storefront not found" });
    }

    // Ensure the category exists
    const existingCategory = await prisma.storeCategory.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingCategory) {
      return res.status(404).json({ error: "Store category not found" });
    }

    // ✅ Update the store category
    const updatedCategory = await prisma.storeCategory.update({
      where: { id: parseInt(id) },
      data: {
        name,
        productSegmentId,
        parentId: parentId || null,
        externalId: externalId || null,
      },
    });

    return res.status(200).json({ updatedCategory });
  } catch (error) {
    console.error("Error updating store category:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
