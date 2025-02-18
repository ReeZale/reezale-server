const prisma = require("../config/prisma"); // Make sure Prisma is configured properly

/**
 * Creates category hierarchy from a category path string.
 * @param {string} categoryPath - Example: "Women > Clothing > Sweater > Cardigan"
 * @param {number} sellerId - Seller ID
 * @param {number} localeId - Locale ID
 * @returns {Promise<Object>} - The final category object
 */
async function createCategoryHierarchy(categoryPath, sellerId, localeId) {
  try {
    // Split category string into an array
    const categories = categoryPath.split(" > ").map((name) => name.trim());
    let parentId = null;
    let fullPath = "";
    let breadCrumbs = [];

    let lastCategory = null;

    for (const categoryName of categories) {
      // Construct full path
      fullPath = fullPath ? `${fullPath} > ${categoryName}` : categoryName;
      breadCrumbs.push(categoryName);

      const normalizePath = fullPath
        .toLowerCase() // Convert to lowercase
        .replace(/>/g, "/") // Replace ">" with "/"
        .replace(/\s+/g, "-") // Replace spaces with "-"
        .replace(/[åä]/g, "a") // Normalize "å", "ä" to "a"
        .replace(/ö/g, "o") // Normalize "ö" to "o"
        .replace(/[^a-z0-9/-]/g, ""); // Remove any other special characters

      // Example Usage

      // Check if the category already exists
      let category = await prisma.category.findFirst({
        where: {
          name: categoryName,
          path: fullPath,
          relativePath: normalizePath,
          sellerId,
          localeId,
          parentId,
        },
      });

      // Create the category if it does not exist
      if (!category) {
        category = await prisma.category.create({
          data: {
            name: categoryName,
            path: fullPath,
            breadCrumbs,
            parentId,
            sellerId,
            localeId,
          },
        });
      }

      // Set parentId for the next iteration
      parentId = category.id;
      lastCategory = category;
    }

    console.log(`✅ Final Category Created: ${lastCategory.name}`);
    return lastCategory;
  } catch (error) {
    console.error("❌ Error creating category hierarchy:", error);
    throw error;
  }
}

module.exports = createCategoryHierarchy;
