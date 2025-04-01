const prisma = require("../../config/prisma");

const createCountries = async () => {
  const countries = [
    {
      code: "gb",
      name: "United Kingdom",
      currencyCode: "gbp",
    },
    {
      code: "se",
      name: "Sverige",
      currencyCode: "sek",
    },
  ];

  const now = new Date();

  try {
    for (const country of countries) {
      await prisma.country.upsert({
        where: { code: country.code },
        update: {
          name: country.name,
          currency: {
            connect: {
              code: country.currencyCode,
            },
          },
          updatedAt: now,
        },
        create: {
          code: country.code,
          name: country.name,
          currency: {
            connect: {
              code: country.currencyCode,
            },
          },
          createdAt: now,
          updatedAt: now,
        },
      });
    }
  } catch (error) {
    console.error("❌ Country seed error:", error);
  }
};

module.exports = createCountries;
