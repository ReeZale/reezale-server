const express = require("express");
const multer = require("multer");
const uploadFile = require("../helpers/uploadFile");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/:bucket", upload.single("file"), async (req, res) => {
  try {
    const { bucket } = req.params; // ✅ Get container name from URL
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // ✅ Upload to Azure with the correct container
    const fileUrl = await uploadFile(
      req.file.buffer,
      req.file.originalname,
      req.file.mimetype,
      bucket
    );

    return res.status(200).json({ data: fileUrl });
  } catch (error) {
    console.error("❌ Error uploading file:", error);
    return res.status(500).json({ error: "Upload failed" });
  }
});

module.exports = router;
