const fs = require("fs");
const path = require("path");
const { Builder } = require("xml2js");

// Ensure product-feeds folder exists
const outputDir = path.join(__dirname, "product-feeds");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to build XML from flatList
const buildXML = (flatList, fileData) => {
  const builder = new Builder({ headless: true, cdata: false }); // Enable CDATA handling
  const feed = {
    rss: {
      $: { version: "2.0", "xmlns:g": "http://base.google.com/ns/1.0" },
      channel: {
        title: fileData.title,
        link: fileData.link,
        description: fileData.description,
        item: flatList.map((product) => ({
          "g:id": product.id,
          "g:item_group_id": product.item_group,
          "g:title": product.title,
          "g:description": product.description,
          "g:link": product.product_link,
          "g:image_link": product.image_link,
          "g:additional_image_link": product.additional_image_link.map(
            (img) => ({ _: img })
          ), // Separate multiple image links
          "g:brand": product.brand,
          "g:product_type": product.product_type,
          "g:google_product_category": product.google_product_category,
          "g:condition": product.condition,
          "g:availability": product.availability,
          "g:price": `${product.price} ${product.currency}`,
          "g:sale_price": `${product.sale_price} ${product.currency}`,
          "g:gtin": product.gtin,
          "g:mpn": product.mpn,
          "g:gender": product.gender,
          "g:age_group": product.age_group,
          "g:color": product.color,
          "g:material": product.material,
          "g:pattern": product.pattern,
          "g:size": product.size,
          "g:size_system": product.sizeSystem,
          "g:size_type": product.sizeCategory,
        })),
      },
    },
  };

  return builder.buildObject(feed);
};

const generateProductFeedXML = (
  flatList,
  masterData,
  filename = "product-feed.xml"
) => {
  if (!flatList || !flatList.length) {
    console.error("No products found to generate feed.");
    return;
  }

  const xmlContent = buildXML(flatList, masterData);

  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, xmlContent, "utf8");

  console.log(`✅ XML file has been saved: ${filePath}`);
  return filePath;
};

// Export the function
module.exports = { generateProductFeedXML };
