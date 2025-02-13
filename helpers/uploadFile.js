const { BlobServiceClient } = require("@azure/storage-blob");
const path = require("path");
require("dotenv").config();

const AZURE_FILE_STORAGE = process.env.AZURE_FILE_STORAGE;

if (!AZURE_FILE_STORAGE) {
  throw new Error("❌ Missing Azure File Store Connection String in .env");
}

// ✅ Initialize BlobServiceClient using the Connection String
const blobServiceClient =
  BlobServiceClient.fromConnectionString(AZURE_FILE_STORAGE);

/**
 * Uploads a file to Azure Blob Storage.
 * @param {Buffer} fileBuffer - File data (from Multer).
 * @param {string} originalName - Original file name.
 * @param {string} mimeType - File MIME type.
 * @param {string} bucket - The container to upload to.
 * @returns {Promise<string>} - The uploaded file URL.
 */
async function uploadFile(fileBuffer, originalName, mimeType, bucket) {
  try {
    if (!fileBuffer || !originalName || !bucket) {
      throw new Error("❌ Missing required parameters");
    }

    // ✅ Define allowed containers
    let containerName;
    switch (bucket) {
      case "images":
        containerName = "images";
        break;
      case "product-feeds":
        containerName = "product-feeds";
        break;
      default:
        throw new Error(`❌ Invalid container: ${bucket}`);
    }

    // ✅ Get the container client
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // ✅ Ensure the container exists
    if (!(await containerClient.exists())) {
      console.warn(`⚠️ Container '${containerName}' not found. Creating...`);
      await containerClient.create();
    }

    // ✅ Generate a unique file name
    const fileName = `${Date.now()}-${path.basename(originalName)}`;
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);

    console.log(`🔵 Uploading file to '${containerName}': ${fileName}`);

    // ✅ Upload file
    await blockBlobClient.uploadData(fileBuffer, {
      blobHTTPHeaders: {
        blobContentType: mimeType || "application/octet-stream",
      },
    });

    // ✅ Generate the file URL
    const fileUrl = blockBlobClient.url; // ✅ Corrected file URL

    console.log(`✅ File uploaded successfully: ${fileUrl}`);
    return fileUrl;
  } catch (error) {
    console.error("❌ Upload Error:", error);
    throw new Error("Upload failed");
  }
}

module.exports = uploadFile;
