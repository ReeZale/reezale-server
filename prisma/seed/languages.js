const prisma = require("../../config/prisma");

const createLanguages = async () => {
  const languages = [
    {
      code: "en",
      name: "English",
    },
    {
      code: "sv",
      name: "Svensk",
    },
  ];

  const now = new Date();

  try {
    for (const language of languages) {
      await prisma.language.upsert({
        where: { code: language.code },
        update: {
          name: language.name,
          updatedAt: now,
        },
        create: {
          code: language.code,
          name: language.name,
          createdAt: now,
          updatedAt: now,
        },
      });
    }

    console.log("Languges completed without error");
  } catch (error) {
    console.error("❌ Language seed error:", error);
  }
};

module.exports = createLanguages;
