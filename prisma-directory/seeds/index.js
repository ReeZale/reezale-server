const { seedCountries } = require("./countrySeed");
const { seedProductCategories } = require("./productCategorySeed");
const { seedResellPlatforms } = require("./resellPlatformSeed");

async function seedDirectoryDb() {
  await seedCountries();
  await seedProductCategories();
  await seedResellPlatforms();
  console.log("✅ Directory DB seed completed");
}

module.exports = seedDirectoryDb;
