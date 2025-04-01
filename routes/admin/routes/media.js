const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();
const axios = require("axios");
const { fileTypeFromBuffer } = require("file-type");
const multer = require("multer");
const uploadFile = require("../../../helpers/uploadFile");
const getImageDimensions = require("../../../helpers/getImageDimensions");

const upload = multer({ storage: multer.memoryStorage() });

const allowedBuckets = new Set([
  "products",
  "campaigns",
  "banner",
  "logo",
  "categories", // optional
  "collections", // optional
  "profile", // optional
  "documents", // optional
]);

router.post("/upload/:bucket", upload.single("file"), async (req, res) => {
  const accountId = req.accountId;
  const { bucket } = req.params;

  if (!allowedBuckets.has(bucket)) {
    return res.status(400).json({
      error: `Unsupported bucket '${bucket}'. Allowed: ${[
        ...allowedBuckets,
      ].join(", ")}`,
    });
  }

  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const file = req.file;
    const mimeType = file.mimetype;
    const fileSize = file.size;

    const customFileName = req.body.fileName?.trim();
    const alt = req.body.alt?.trim() || null;

    const fileName = customFileName || file.originalname;

    // Upload file
    const fileUrl = await uploadFile(
      file.buffer,
      fileName,
      mimeType,
      bucket,
      accountId
    );

    // Determine mediaType from MIME
    let mediaType = "OTHER";
    if (mimeType.startsWith("image/")) mediaType = "IMAGE";
    else if (mimeType.startsWith("video/")) mediaType = "VIDEO";
    else if (mimeType.startsWith("audio/")) mediaType = "AUDIO";
    else if (mimeType === "application/pdf") mediaType = "DOCUMENT";

    // Extract image dimensions if image
    let width = null;
    let height = null;
    if (mediaType === "IMAGE") {
      const dimensions = await getImageDimensions(file.buffer);
      width = dimensions.width;
      height = dimensions.height;
    }

    // Save to DB
    const media = await prisma.media.create({
      data: {
        url: fileUrl,
        fileName,
        fileSize,
        width,
        height,
        mimeType,
        bucket: bucket.toUpperCase(),
        alt,
        mediaType,
        source: "UPLOADED",
        accountId,
      },
    });

    return res.status(201).json({ media });
  } catch (error) {
    console.error("❌ Error uploading file:", error);
    return res.status(500).json({ error: "Upload failed" });
  }
});

router.post("/external/:bucket", async (req, res) => {
  const accountId = req.accountId;
  const { bucket } = req.params;
  const { url, fileName, alt } = req.body;

  if (!allowedBuckets.has(bucket)) {
    return res.status(400).json({
      error: `Unsupported bucket '${bucket}'. Allowed: ${[
        ...allowedBuckets,
      ].join(", ")}`,
    });
  }

  if (!url) {
    return res.status(400).json({ error: "Image URL is required." });
  }

  try {
    // Download the image
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data);

    const fileType = await fileTypeFromBuffer(buffer);
    if (!fileType || !fileType.mime) {
      return res.status(400).json({ error: "Unable to determine MIME type." });
    }

    const mimeType = fileType.mime;
    const fileSize = buffer.length;

    let mediaType = "OTHER";
    if (mimeType.startsWith("image/")) mediaType = "IMAGE";
    else if (mimeType.startsWith("video/")) mediaType = "VIDEO";
    else if (mimeType.startsWith("audio/")) mediaType = "AUDIO";
    else if (mimeType === "application/pdf") mediaType = "DOCUMENT";

    let width = null;
    let height = null;
    if (mediaType === "IMAGE") {
      const dimensions = await getImageDimensions(buffer);
      width = dimensions.width;
      height = dimensions.height;
    }

    // Upload to Azure
    const fileUrl = await uploadFile(
      buffer,
      fileName,
      mimeType,
      bucket,
      accountId
    );

    // Save to DB
    const media = await prisma.media.create({
      data: {
        url: fileUrl,
        fileName,
        fileSize,
        width,
        height,
        bucket: bucket.toUpperCase(),
        alt,
        mimeType,
        mediaType,
        source: "EXTERNAL",
        accountId,
      },
    });

    return res.status(201).json({ media });
  } catch (error) {
    console.error("❌ External upload error:", error);
    return res.status(500).json({ error: "Failed to process external media." });
  }
});

// GET - Fetch media
router.get("/", async (req, res) => {
  const accountId = req.accountId;

  try {
    const media = await prisma.media.findMany({
      where: {
        accountId: accountId,
      },
    });

    return res.status(200).json({ media });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      error: "Failed to fetch media",
      details: error.message,
    });
  }
});

// GET - Fetch media
router.get("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;

  try {
    const media = await prisma.media.findFirst({
      where: {
        id: id,
        accountId: accountId,
      },
    });

    return res.status(200).json({ media });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      error: "Failed to fetch media",
      details: error.message,
    });
  }
});

// PUT - Update media
router.put("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;

  try {
    const { url, alt, mediaType } = req.body;

    if (!url || !mediaType || !accountId) {
      return res
        .status(400)
        .json({ error: "url, mediaType, and accountId are required." });
    }

    const media = await prisma.media.update({
      where: {
        id: id,
        accountId: accountId,
      },
      data: {
        alt,
      },
    });

    return res.status(200).json({ media });
  } catch (error) {
    console.error("Error updating media:", error);
    return res
      .status(500)
      .json({ error: "Failed to update media", details: error.message });
  }
});

// DELETE - Remove media
router.delete("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Missing media ID" });
  }

  try {
    await prisma.media.delete({
      where: {
        id: id,
        accountId: accountId,
      },
    });

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting media:", error);
    res
      .status(500)
      .json({ error: "Failed to delete media", details: error.message });
  }
});

module.exports = router;
