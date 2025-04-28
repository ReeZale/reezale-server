const seedDirectoryDb = require("../../prisma-directory/seeds");
const seedCollections = require("./collections");
const createCountries = require("./countries");
const createCurrencies = require("./currencies");
const createLanguages = require("./languages");
const createLocales = require("./locales");
const seedPages = require("./pages");

async function seed() {
  await createLanguages();
  await createCurrencies();
  await createCountries();
  await createLocales();
  await seedCollections();
  await seedPages();
  await seedDirectoryDb();
}

seed()
  .then(() => {
    console.log("✅ Seed completed");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Seed failed", err);
    process.exit(1);
  });
