const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const XML_FEED_DIR = path.resolve(process.env.FEED_DIRECTORY);

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

module.exports = router;
