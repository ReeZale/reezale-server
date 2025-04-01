const prisma = require("../../config/prisma");

const createLocales = async () => {
  const locales = [
    {
      code: "en-gb",
      label: "English (United Kingdom)",
      currencyCode: "gbp",
      countryCode: "gb",
      languageCode: "en",
    },
    {
      code: "sv-se",
      label: "Svenska (Sverige)",
      currencyCode: "sek",
      countryCode: "se",
      languageCode: "sv",
    },
  ];

  const now = new Date();

  try {
    for (const locale of locales) {
      await prisma.locale.upsert({
        where: { code: locale.code },
        update: {
          label: locale.label,
          country: {
            connect: {
              code: locale.countryCode,
            },
          },
          currency: {
            connect: {
              code: locale.currencyCode,
            },
          },
          language: {
            connect: {
              code: locale.languageCode,
            },
          },
          updatedAt: now,
        },
        create: {
          code: locale.code,
          label: locale.label,
          country: {
            connect: {
              code: locale.countryCode,
            },
          },
          language: {
            connect: {
              code: locale.languageCode,
            },
          },
          currency: {
            connect: {
              code: locale.currencyCode,
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

module.exports = createLocales;
