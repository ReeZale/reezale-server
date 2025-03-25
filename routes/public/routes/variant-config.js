const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

// 🚀 GET all products (with optional filtering by storefront)
router.get("/", async (req, res) => {
  const localeCode = req.localeCode;
  try {
    const items = await prisma.variantConfig.findMany({
      include: {
        variantConfigFields: {
          include: {
            variantProperty: true,
          },
        },
      },
      orderBy: {
        key: "asc",
      },
    });

    const variantConfigs = items.map((item) => ({
      id: item.id,
      key: item.key,
      label: item.translations["en-gb"],
      fields: item.variantConfigFields.map((variantField) => ({
        id: variantField.id,
        key: variantField.key,
        variantPropertyId: variantField.variantPropertyId,
        variantPropertyKey: variantField.variantProperty.key,
        label: variantField.variantProperty.translations["en-gb"],
      })),
    }));
    return res.status(200).json({ variantConfigs });
  } catch (error) {
    console.log("Error", error);
    res
      .status(500)
      .json({ error: "Failed to fetch products", details: error.message });
  }
});

// 🚀 GET a single product by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const item = await prisma.variantConfig.findUnique({
      where: {
        id: BigInt(id),
      },
      include: {
        variantConfigFields: {
          include: {
            variantProperty: true,
          },
        },
      },
    });

    if (!item) {
      return res.status(404).json({ error: "template not found" });
    }

    const variantConfig = {
      id: item.id,
      key: item.key,
      label: item.translations["en-gb"],
      fields: item.variantConfigFields.map((variantField) => ({
        id: variantField.id,
        key: variantField.key,
        variantPropertyId: variantField.variantPropertyId,
        variantPropertyKey: variantField.variantProperty.key,
        label: variantField.variantProperty.translations["en-gb"],
        options: Array.isArray(variantField.variantProperty.options)
          ? variantField.variantProperty.options.map((optionObj) => {
              const [optionKey, optionValue] = Object.entries(optionObj)[0];
              return {
                key: optionKey,
                label: optionValue["en-gb"],
              };
            })
          : [],
      })),
    };

    return res.status(200).json({ variantConfig });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch variant config",
      details: error.message,
    });
  }
});

module.exports = router;
