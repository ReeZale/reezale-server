const express = require("express");
const Fuse = require("fuse.js"); // ✅ Import fuzzy search library
const prisma = require("../../../config/prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await prisma.productSegment.findMany({
      where: {
        active: true,
      },
      orderBy: {
        path: "asc",
      },
    });

    const productSegments = data.map((item) => ({
      id: item.id,
      name: item.translation[req.localeCode].name,
      path: item.translation[req.localeCode].path,
    }));

    return res.status(200).json({
      productSegments,
    });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/search", async (req, res) => {
  try {
    const { page = 1, limit = 25, search = "", parentPath = null } = req.query;

    // Convert query parameters to integers
    const pageNumber = parseInt(page);
    const pageSize = parseInt(limit);
    const skip = (pageNumber - 1) * pageSize;

    // ✅ Step 1: Fetch all product segments (only those with no children)
    const allSegments = await prisma.productSegment.findMany({
      where: {
        path: {
          startsWith: parentPath,
          mode: "insensitive",
        },
        children: {
          none: {}, // ✅ Only return segments with no children
        },
      },
      orderBy: {
        path: "asc",
      },
    });

    // ✅ Step 2: Configure Fuse.js for better fuzzy search
    const fuse = new Fuse(allSegments, {
      keys: ["path"], // ✅ Search in the 'path' field
      threshold: 0.5, // ✅ Lower threshold for more accurate matches
      includeScore: true, // ✅ Include similarity score for ranking
      shouldSort: true, // ✅ Sort results by relevance automatically
    });

    // ✅ Step 3: Perform fuzzy search & sort by relevance
    const fuzzyResults = search
      ? fuse.search(search)
      : allSegments.map((item) => ({ item }));

    // ✅ Step 4: Extract only the matched items (remove metadata)
    const filteredSegments = fuzzyResults.map((result) => result.item);

    // ✅ Step 5: Implement pagination manually
    const paginatedResults = filteredSegments.slice(skip, skip + pageSize);
    const totalCount = filteredSegments.length;

    return res.status(200).json({
      productSegments: paginatedResults,
      pagination: {
        currentPage: pageNumber,
        pageSize,
        totalPages: Math.ceil(totalCount / pageSize),
        totalItems: totalCount,
      },
    });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/sub-categories", async (req, res) => {
  const { categoryId = null } = req.query;
  try {
    const productSegments = await prisma.productSegment.findMany({
      where: {
        parentId: categoryId,
      },
      orderBy: {
        path: "asc",
      },
    });

    return res.status(200).json({ productSegments });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/properties/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const segment = await prisma.productSegment.findUnique({
      where: { id: id },
    });

    if (!segment) {
      return res.status(404).json({ error: "Product segment not found" });
    }

    const segmentProperties = await prisma.segmentProperty.findMany({
      where: {
        productSegmentId: id,
      },
      include: {
        property: true,
      },
    });

    let groupProperties = [];
    if (segment.propertyGroupId) {
      groupProperties = await prisma.propertyGroupProperty.findMany({
        where: {
          propertyGroupId: segment.propertyGroupId,
        },
        include: {
          property: true,
        },
      });
    }
    console.log("Segment Properties", segmentProperties);
    console.log("Group Properties", groupProperties);

    const merged = [...segmentProperties, ...groupProperties];

    // Extract just the property objects
    const propertiesOnly = merged.map((item) => item.property);

    // Sort the extracted properties by key
    propertiesOnly.sort((a, b) => (a.key > b.key ? 1 : -1));

    console.log("Properties only", propertiesOnly);

    // Return only the properties
    return res.status(200).json({ properties: propertiesOnly });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
