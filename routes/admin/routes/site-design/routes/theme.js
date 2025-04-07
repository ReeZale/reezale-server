const express = require("express");
const prisma = require("../../../../../config/prisma");
const { generateId } = require("../../../../../helpers/generateId");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const { storefrontId, isActive, name } = req.query;

  if (!accountId) {
    return res
      .status(400)
      .json({ error: "Missing accountId from request context." });
  }

  try {
    const themes = await prisma.storefrontTheme.findMany({
      where: {
        accountId: accountId,
        ...(storefrontId && { storefrontId: storefrontId }),
        ...(typeof isActive !== "undefined" && {
          isActive: isActive === "true",
        }),
        ...(name && { name }),
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({ themes });
  } catch (error) {
    console.error("GET /themes error:", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;

  if (!accountId) {
    return res
      .status(400)
      .json({ error: "Missing accountId from request context." });
  }

  try {
    const theme = await prisma.storefrontTheme.findFirst({
      where: {
        id,
        accountId: BigInt(accountId),
      },
    });

    if (!theme) {
      return res.status(404).json({ error: "Theme not found." });
    }

    return res.status(200).json({ theme });
  } catch (error) {
    console.error("GET /themes/:id error:", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const {
    name,
    description,
    publishStatus,
    isActive,
    effectiveAt,
    colorPrimary,
    colorSecondary,
    colorBackground,
    colorSurface,
    colorTextPrimary,
    colorTextSecondary,
    colorLink,
    colorError,
    fontFamily,
    fontSizeBase,
    fontSizeScale,
    borderRadius,
    spacingUnit,
  } = req.body;

  if (!accountId || !storefrontId || !name) {
    return res.status(400).json({
      error: "Missing required fields: accountId, storefrontId, or name.",
    });
  }

  try {
    const theme = await prisma.storefrontTheme.create({
      data: {
        id: generateId("ST"),
        accountId: accountId,
        storefrontId: storefrontId,
        name,
        description: description || "",
        publishStatus: publishStatus || "DRAFT",
        isActive: Boolean(isActive),
        effectiveAt: effectiveAt ? new Date(effectiveAt) : null,
        colorPrimary: colorPrimary || "#5A643E",
        colorSecondary: colorSecondary || "#7F8D58",
        colorBackground: colorBackground || "#F4F4F4",
        colorSurface: colorSurface || "#FFFFFF",
        colorTextPrimary: colorTextPrimary || "#333333",
        colorTextSecondary: colorTextSecondary || "#666666",
        colorLink: colorLink || "#5A643E",
        colorError: colorError || "#D32F2F",
        fontFamily: fontFamily || "Inter, sans-serif",
        fontSizeBase: fontSizeBase || 16,
        fontSizeScale: fontSizeScale || 1.0,
        borderRadius: borderRadius || 8,
        spacingUnit: spacingUnit || 8,
      },
    });

    return res.status(201).json({ theme });
  } catch (error) {
    console.error("POST /themes error:", error);
    return res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const { id } = req.params;
  const {
    name,
    description,
    publishStatus,
    isActive,
    effectiveAt,
    colorPrimary,
    colorSecondary,
    colorBackground,
    colorSurface,
    colorTextPrimary,
    colorTextSecondary,
    colorLink,
    colorError,
    fontFamily,
    fontSizeBase,
    fontSizeScale,
    borderRadius,
    spacingUnit,
  } = req.body;

  if (!accountId || !storefrontId || !name) {
    return res.status(400).json({
      error: "Missing required fields: accountId, storefrontId, or name.",
    });
  }

  try {
    if (isActive === true) {
      await prisma.storefrontTheme.updateMany({
        where: {
          storefrontId,
          id: { not: id },
        },
        data: { isActive: false },
      });
    }

    const theme = await prisma.storefrontTheme.update({
      where: { id },
      data: {
        name,
        description: description || "",
        publishStatus: publishStatus || "DRAFT",
        isActive: Boolean(isActive),
        effectiveAt: effectiveAt ? new Date(effectiveAt) : null,
        colorPrimary: colorPrimary || "#5A643E",
        colorSecondary: colorSecondary || "#7F8D58",
        colorBackground: colorBackground || "#F4F4F4",
        colorSurface: colorSurface || "#FFFFFF",
        colorTextPrimary: colorTextPrimary || "#333333",
        colorTextSecondary: colorTextSecondary || "#666666",
        colorLink: colorLink || "#5A643E",
        colorError: colorError || "#D32F2F",
        fontFamily: fontFamily || "Inter, sans-serif",
        fontSizeBase: fontSizeBase || 16,
        fontSizeScale: fontSizeScale || 1.0,
        borderRadius: borderRadius || 8,
        spacingUnit: spacingUnit || 8,
      },
    });

    return res.status(200).json({ theme });
  } catch (error) {
    console.error("PUT /themes/:id error:", error);
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;

  try {
    return res.status(204).send();
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
