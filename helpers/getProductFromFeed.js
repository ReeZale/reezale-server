const axios = require("../config/axios");
const { parseStringPromise } = require("xml2js");

/**
 * Fetches and parses the product feed, returning a cleaned JSON object.
 * @param {string} feedUrl - The URL of the XML product feed.
 * @param {string} productId - The ID of the product to find.
 * @returns {Promise<Object|null>} - The cleaned product JSON or null if not found.
 */
async function getProductFromFeed(feedUrl, productId) {
  try {
    console.log(`🔍 Fetching product feed from: ${feedUrl}`);

    // Fetch XML using Axios
    const response = await axios.get(feedUrl, { responseType: "text" });

    // Parse XML to JSON
    const jsonData = await parseStringPromise(response.data, {
      explicitArray: false,
      mergeAttrs: true,
    });

    // Extract the list of products
    const items = jsonData?.rss?.channel?.item;
    if (!items) throw new Error("Invalid XML format: Missing <item> elements");

    // Ensure we have an array
    const itemList = Array.isArray(items) ? items : [items];

    // Search for the product by ID
    const foundProduct = itemList.find((item) => item["g:id"] === productId);
    if (!foundProduct) {
      console.warn(`⚠️ Product with ID ${productId} not found.`);
      return null;
    }

    // Clean the product data
    const cleanedProduct = cleanProductData(foundProduct);
    console.log(`✅ Product found: ${cleanedProduct.title}`);
    return cleanedProduct;
  } catch (error) {
    console.error(
      "❌ Error fetching or parsing product feed:",
      error.response ? error.response.statusText : error.message
    );
    return null;
  }
}

/**
 * Cleans the product data by:
 * - Removing "g:" prefixes
 * - Converting price strings into structured objects
 * @param {Object} product
 * @returns {Object} - Cleaned product object
 */
function cleanProductData(product) {
  const cleaned = {};

  for (const key in product) {
    const newKey = key.replace(/^g:/, ""); // Remove "g:" prefix
    let value = product[key];

    // Ensure additional images are always an array
    if (newKey === "additional_image_link") {
      value = Array.isArray(value) ? value : [value];
    }

    // Convert price fields (if applicable)
    if (newKey === "price" || newKey === "sale_price") {
      const [price, currency] = value.split(" ");
      value = {
        amount: parseFloat(price), // Convert to number
        currency: currency || "SEK", // Default to SEK if missing
      };
    }

    cleaned[newKey] = value;
  }

  return cleaned;
}

module.exports = getProductFromFeed;
