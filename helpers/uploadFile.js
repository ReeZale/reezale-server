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
async function uploadFile(
  fileBuffer,
  originalName,
  mimeType,
  bucket,
  accountId
) {
  try {
    if (!fileBuffer || !originalName || !bucket || !accountId) {
      throw new Error("❌ Missing required parameters");
    }

    // ✅ Dynamically generate container name
    const containerName = `account-${accountId}`;

    // ✅ Get container client
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // ✅ Create container if it doesn't exist
    await containerClient.createIfNotExists({
      access: "blob", // optional: make files publicly accessible
    });

    // ✅ Optionally structure files inside virtual directories
    const virtualPath = `${bucket}/${Date.now()}-${path.basename(
      originalName
    )}`;
    const blockBlobClient = containerClient.getBlockBlobClient(virtualPath);

    console.log(`🔵 Uploading to: ${containerName}/${virtualPath}`);

    await blockBlobClient.uploadData(fileBuffer, {
      blobHTTPHeaders: {
        blobContentType: mimeType || "application/octet-stream",
      },
    });

    return blockBlobClient.url;
  } catch (error) {
    console.error("❌ Upload Error:", error);
    throw new Error("Upload failed");
  }
}

module.exports = uploadFile;
