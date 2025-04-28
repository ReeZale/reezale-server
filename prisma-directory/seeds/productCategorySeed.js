const prismaDirectory = require("../../config/prismaDirectory");

const productCategories = [
  { key: "clothing", label: "Clothing" },
  { key: "shoes", label: "Shoes" },
  { key: "books", label: "Books" },
  { key: "toys", label: "Toys" },
  { key: "furniture", label: "Furniture" },
  { key: "electronics", label: "Electronics" },
  { key: "phones", label: "Phones" },
  { key: "baby_items", label: "Baby Items" },
  { key: "non_perishable_food", label: "Non-Perishable Food" },
  { key: "winter_gear", label: "Winter Gear" },
  { key: "bedding_linens", label: "Bedding & Linens" },
  { key: "bags_backpacks", label: "Bags & Backpacks" },
  { key: "games_consoles", label: "Games & Consoles" },
  { key: "tvs_monitors", label: "TVs & Monitors" },
  { key: "home_decor", label: "Home Decor" },
  { key: "musical_instruments", label: "Musical Instruments" },
  { key: "sports_equipment", label: "Sports Equipment" },
  { key: "eyewear", label: "Eyewear" },
  { key: "miscellaneous", label: "Miscellaneous" },
];

async function seedProductCategories() {
  for (const category of productCategories) {
    await prismaDirectory.productCategory.upsert({
      where: { key: category.key },
      update: {},
      create: {
        id: `PC-${category.key.toUpperCase()}`, // using key as ID (assumes ID = key)
        key: category.key,
        label: category.label,
      },
    });
  }
  console.log("✅ Seeded product categories");
}

module.exports = { seedProductCategories };
