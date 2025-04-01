const prisma = require("../../config/prisma");

const createCurrencies = async () => {
  const currencies = [
    {
      code: "sek",
      name: "Svenska Kronor",
    },
    {
      code: "gbp",
      name: "British Pound",
    },
  ];
  const now = new Date();

  try {
    for (const currency of currencies) {
      await prisma.currency.upsert({
        where: { code: currency.code },
        update: {
          name: currency.name,
          updatedAt: now,
        },
        create: {
          code: currency.code,
          name: currency.name,
          createdAt: now,
          updatedAt: now,
        },
      });
    }
  } catch (error) {
    console.error("❌ Language seed error:", error);
  }
};

module.exports = createCurrencies;
