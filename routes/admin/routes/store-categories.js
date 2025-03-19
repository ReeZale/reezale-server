const express = require("express");
const prisma = require("../../../config/prisma");
const { getStorProductSegment } = require("../../../helpers/storefront");
const { error } = require("console");
const router = express.Router();

/**
 * @route GET /api/store-categories
 * @desc Fetch all store categories
 */
router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const { parentId, categoryId, status } = req.query; // Extract query parameters

  // Build query conditions dynamically
  let queryConditions = { storefront: { account: { id: accountId } } };

  if (parentId) {
    queryConditions.parentId = parentId;
  }
  if (categoryId) {
    queryConditions.categoryId = categoryId;
  }
  if (status) {
    queryConditions.status = status;
  }

  try {
    const storeCategories = await prisma.storeCategory.findMany({
      where: queryConditions,
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

router.get("/:id", async (req, res) => {
  const accountId = req.accountId;

  try {
    const storeCategory = await prisma.storeCategory.findFirst({
      where: {
        storefront: {
          account: {
            id: accountId,
          },
        },
        id: req.params.id,
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

    return res.status(200).json({ storeCategory });
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

  let { storeCategories } = req.body; // Expecting an array of { productSegmentId, primary }

  if (!Array.isArray(storeCategories)) {
    storeCategories = [storeCategories]; // Wrap single object in an array
  }

  if (storeCategories.length === 0) {
    return res.status(400).json({ error: "Invalid storeCategories input" });
  }

  try {
    let newCategories = [];
    for (const storeCategory of storeCategories) {
      const {
        name,
        productSegmentId,
        parentId,
        externalId,
        description,
        path,
        custom,
      } = storeCategory;

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

      const storefrontProductSegment = await getStorProductSegment(
        storefront.id,
        productSegmentId
      );

      const key = name
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9\s]/g, "") // Remove special characters except spaces
        .replace(/\s+/g, "_"); // Replace spaces with underscores

      const existingCategory = await prisma.storeCategory.findFirst({
        where: {
          key: key,
          storefrontId: storefront.id,
          productSegmentId: productSegmentId.id,
          storefrontProductSegmentId: storefrontProductSegment.id,
        },
      });

      if (existingCategory) {
        newCategories.push(existingCategory);
      } else {
        const newCategory = await prisma.storeCategory.create({
          data: {
            key: key,
            name,
            description: description || null,
            path: path,
            productSegmentId,
            storefrontId: storefront.id,
            storefrontProductSegmentId: storefrontProductSegment.id,
            parentId: parentId || null, // Allow parent to be optional
            externalId: externalId || null, // External ID is optional
            archive: false,
            custom: custom,
          },
        });
        newCategories.push(newCategory);
      }
    }

    return res.status(200).json({ storeCategories: newCategories });
  } catch (error) {
    console.error("Error fetching store categories:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;
  const {
    name,
    productSegmentId,
    description,
    externalId,
    archive,
    path,
    custom,
  } = req.body;

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
      where: { id: id },
    });

    if (!existingCategory) {
      return res.status(404).json({ error: "Store category not found" });
    }

    // ✅ Update the store category
    const updatedCategory = await prisma.storeCategory.update({
      where: { id: id },
      data: {
        name,
        description: description,
        path: path,
        externalId: externalId,
        archive: archive,
        custom: custom,
      },
    });

    return res.status(200).json({ updatedCategory });
  } catch (error) {
    console.error("Error updating store category:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
