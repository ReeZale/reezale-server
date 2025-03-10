const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const uploadFile = require("../helpers/uploadFile");
const multer = require("multer");

const XML_FEED_DIR = path.resolve(process.env.FEED_DIRECTORY);

// ✅ Configure Multer to handle file uploads in memory
const upload = multer({
  storage: multer.memoryStorage(), // Store file in memory before sending to Azure
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "application/xml" && file.mimetype !== "text/xml") {
      return cb(new Error("Only XML files are allowed"), false);
    }
    cb(null, true);
  },
});

// ✅ Dynamic route (fallback if static serving fails)
router.get("/:filename", (req, res) => {
  const filePath = path.join(XML_FEED_DIR, req.params.filename);

  console.log(`🔍 Looking for file: ${filePath}`);

  if (fs.existsSync(filePath)) {
    res.setHeader("Content-Type", "application/xml");
    res.sendFile(filePath);
  } else {
    console.error("❌ XML file not found:", filePath);
    res.status(404).send("XML file not found.");
  }
});

router.post("/upload", upload.single("xmlFeed"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No XML file uploaded." });
    }

    console.log(`🔵 Uploading XML feed: ${req.file.originalname}`);

    // ✅ Upload file to Azure Storage
    const fileUrl = await uploadFile(
      req.file.buffer,
      req.file.originalname,
      req.file.mimetype,
      "product-feeds" // Upload to the correct Azure container
    );

    res.status(201).json({
      message: "XML feed uploaded successfully.",
      fileUrl: fileUrl, // ✅ Return the uploaded file URL
    });
  } catch (error) {
    console.error("❌ Upload Error:", error);
    res.status(500).json({ error: "File upload failed" });
  }
});

module.exports = router;
