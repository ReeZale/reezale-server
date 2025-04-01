const express = require("express");
const Fuse = require("fuse.js"); // ✅ Import fuzzy search library
const prisma = require("../../../config/prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  const localeCode = req.localeCode;
  try {
    const data = await prisma.collectionTranslation.findMany({
      where: {
        locale: {
          code: localeCode,
        },
      },
      include: {
        collection: true,
      },
      orderBy: {
        path: "asc",
      },
    });

    const collections = data.map((collection) => ({
      id: collection.collection.id,
      key: collection.collection.key,
      label: collection.label,
      path: collection.path,
    }));

    return res.status(200).json({ collections });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/primary", async (req, res) => {
  const localeCode = req.localeCode;
  try {
    const data = await prisma.collectionTranslation.findMany({
      where: {
        locale: {
          code: localeCode,
        },
        collection: {
          parentId: null,
        },
      },
      include: {
        collection: true,
      },
      orderBy: {
        path: "asc",
      },
    });

    const collections = data.map((collection) => ({
      id: collection.collection.id,
      key: collection.collection.key,
      label: collection.label,
      path: collection.path,
    }));

    return res.status(200).json({ collections });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/group/:type", async (req, res) => {
  const localeCode = req.localeCode;
  const { type } = req.params;
  try {
    const data = await prisma.collectionTranslation.findMany({
      where: {
        locale: {
          code: localeCode,
        },
        collection: {
          collectionType: type,
        },
      },
      include: {
        collection: true,
      },
      orderBy: {
        path: "asc",
      },
    });

    const collections = data.map((collection) => ({
      id: collection.collection.id,
      key: collection.collection.key,
      label: collection.label,
      path: collection.path,
    }));

    return res.status(200).json({ collections });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/related/:id", async (req, res) => {
  const localeCode = req.localeCode;
  const { id } = req.params;
  try {
    const data = await prisma.collectionTranslation.findMany({
      where: {
        locale: {
          code: localeCode,
        },
        collection: {
          parentId: id,
        },
      },
      include: {
        collection: true,
      },
      orderBy: {
        path: "asc",
      },
    });

    const collections = data.map((collection) => ({
      id: collection.collection.id,
      key: collection.collection.key,
      label: collection.label,
      path: collection.path,
    }));

    return res.status(200).json({ collections });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
