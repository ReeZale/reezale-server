const axios = require("../config/axios");
const { parseStringPromise } = require("xml2js");

/**
 * Fetches all items related to an item_group_id from the product feed.
 * @param {string} feedUrl - The URL of the XML product feed.
 * @param {string} itemGroupId - The item_group_id to find.
 * @returns {Promise<Object[]>} - A list of cleaned product JSON objects.
 */
async function getItemGroupFromFeed(feedUrl, itemGroupId) {
  try {
    // Fetch XML using Axios
    const response = await axios.get(feedUrl, { responseType: "text" });

    // Parse XML to JSON
    const jsonData = await parseStringPromise(response.data, {
      explicitArray: false,
      mergeAttrs: true,
    });

    // Extract items from feed
    const items = jsonData?.rss?.channel?.item;
    if (!items) throw new Error("Invalid XML format: Missing <item> elements");

    // Ensure we have an array
    const itemList = Array.isArray(items) ? items : [items];

    // Filter items by `item_group_id`
    const filteredItems = itemList.filter(
      (item) => item["g:item_group_id"] === itemGroupId
    );

    if (!filteredItems.length) {
      console.warn(`⚠️ No products found for item_group_id: ${itemGroupId}`);
      return [];
    }

    // Clean and return only required fields
    return filteredItems.map((item) => ({
      id: item["g:id"],
      size: item["g:size"],
      shipping_weight: item["g:shipping_weight"],
      price: parseFloat(item["g:price"].split(" ")[0]),
      sale_price: parseFloat(item["g:sale_price"].split(" ")[0]),
      availability: item["g:availability"],
    }));
  } catch (error) {
    console.error(
      "❌ Error fetching or parsing product feed:",
      error.response ? error.response.statusText : error.message
    );
    return [];
  }
}

module.exports = getItemGroupFromFeed;
