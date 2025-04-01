const express = require("express");
const Fuse = require("fuse.js"); // ✅ Import fuzzy search library
const prisma = require("../../../config/prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  const localeCode = req.localeCode;
  try {
    const data = await prisma.propertyTranslation.findMany({
      where: {
        locale: {
          code: localeCode,
        },
      },
      include: {
        property: true,
      },
      orderBy: {
        label: "asc",
      },
    });

    const properties = data.map((item) => ({
      id: item.property.id,
      label: item.label,
    }));

    return res.status(200).json({ properties });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/options/:propertyId", async (req, res) => {
  const localeCode = req.localeCode;
  const { propertyId } = req.params;

  try {
    const datá = await prisma.propertyOption.findMany({
      where: {
        propertyId: propertyId,
      },
      include: {
        propertyOptionTranslation: {
          where: {
            locale: {
              code: localeCode,
            },
          },
        },
      },
      orderBy: {
        key: "asc",
      },
    });

    const propertyOptions = datá.map((option) => ({
      id: option.id,
      label: option.propertyOptionTranslation[0].label,
    }));

    return res.status(200).json({ propertyOptions });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
