const sharp = require("sharp");

/**
 * Extracts dimensions from an image buffer using sharp
 * @param {Buffer} buffer - The image buffer
 * @returns {Promise<{ width: number, height: number }>}
 */
async function getImageDimensions(buffer) {
  try {
    const metadata = await sharp(buffer).metadata();
    return {
      width: metadata.width,
      height: metadata.height,
    };
  } catch (error) {
    console.error("Failed to extract image dimensions:", error);
    return { width: null, height: null };
  }
}

module.exports = getImageDimensions;
