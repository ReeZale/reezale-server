const express = require("express");
const Fuse = require("fuse.js"); // ✅ Import fuzzy search library
const prisma = require("../../../config/prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const groupProperties = await prisma.propertyGroupProperty.findMany({
      where: {
        propertyGroupId: id,
      },
      include: {
        property: true,
      },
      orderBy: {
        property: {
          key: "asc",
        },
      },
    });

    return res.status(200).json({ groupProperties });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
