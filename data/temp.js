const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite"); // ✅ Fixes encoding issues
const prisma = require("../config/prisma");

/**
 * ✅ Read file with proper encoding and normalize text
 * @param {string} filePath - Path to the category file
 */
function readFileWithEncoding(filePath) {
  const absolutePath = path.resolve(__dirname, "..", filePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`File not found: ${absolutePath}`);
  }

  // 🔥 Read as binary and decode as UTF-8
  const buffer = fs.readFileSync(absolutePath);
  const fileContent = iconv.decode(buffer, "utf8"); // 🔥 Fixes incorrect encoding (ISO-8859-1)

  return fileContent
    .split("\n")
    .map((line) => line.trim().normalize("NFC")) // ✅ Normalize characters properly
    .filter((line) => line !== "");
}

/**
 * ✅ Processes Google Categories and inserts them into `ProductCategory`
 * @param {string} filePath - Path to the category file
 */
async function processCategories(filePath) {
  try {
    const lines = readFileWithEncoding(filePath);
    console.log(`✅ Processing ${lines.length} categories from ${filePath}`);

    const categoryMap = new Map();

    for (const line of lines) {
      const match = line.match(/^(\d+)\s-\s(.+)$/);
      if (!match) continue;

      const gcc = match[1].trim();
      const pathText = match[2].trim();
      const parts = pathText.split(" > ");
      const name = parts[parts.length - 1]; // Get the last category
      const parentPath = parts.slice(0, -1).join(" > ");

      const parent = categoryMap.get(parentPath);

      const existingCategory = await prisma.productSegment.findFirst({
        where: { path: pathText },
      });

      let dbCategory;
      if (existingCategory) {
        dbCategory = await prisma.productSegment.update({
          where: { id: existingCategory.id },
          data: { name },
        });
      } else {
        dbCategory = await prisma.productSegment.create({
          data: {
            gcc,
            name,
            path: pathText,
            parentId: parent ? parent.id : null,
          },
        });
      }

      categoryMap.set(pathText, dbCategory);
    }

    console.log("✅ Categories imported successfully!");
  } catch (error) {
    console.error("❌ Error processing categories:", error);
  }
}

/**
 * ✅ Processes translations and inserts them into `ProductCategoryTranslations`
 * @param {string} filePath - Path to the translations file
 * @param {BigInt} localeId - Locale ID for the translations
 */
async function processCategoryTranslations(filePath, localeId) {
  try {
    const lines = readFileWithEncoding(filePath);
    console.log(`✅ Processing ${lines.length} translations from ${filePath}`);

    for (const line of lines) {
      const match = line.match(/^(\d+)\s-\s(.+)$/);
      if (!match) continue;

      const gcc = match[1].trim();
      const pathText = match[2].trim();
      const parts = pathText.split(" > ");
      const translatedName = parts[parts.length - 1];

      // 🔥 Find the matching category using GCC
      const category = await prisma.productSegment.findFirst({
        where: { gcc },
      });

      if (!category) {
        console.warn(`⚠️ No matching category found for GCC: ${gcc}`);
        continue;
      }

      // 🔥 Generate slug for translation
      const slug = translatedName
        .toLowerCase()
        .normalize("NFC")
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");

      const existingTranslation =
        await prisma.productSegmentTranslations.findFirst({
          where: { localeId, slug },
        });

      if (existingTranslation) {
        await prisma.productSegmentTranslations.update({
          where: { id: existingTranslation.id },
          data: {
            name: translatedName,
            slug,
            path: pathText,
            localeId,
            productSegmentId: category.id,
          },
        });
      } else {
        await prisma.productSegmentTranslations.create({
          data: {
            name: translatedName,
            slug,
            path: pathText,
            localeId,
            productSegmentId: category.id,
          },
        });
      }
    }

    console.log("✅ Translations imported successfully!");
  } catch (error) {
    console.error("❌ Error processing translations:", error);
  }
}

module.exports = { processCategories, processCategoryTranslations };
