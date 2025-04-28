const prisma = require("../../config/prisma");

const seedPages = async () => {
  const defaultPages = [
    {
      key: "home",
      pageType: "STATIC",
      translations: {
        "en-gb": {
          label: "Home",
          description: "The landing page users see when they visit your site",
          slug: "home",
        },
        "sv-se": {
          label: "Hem",
          description:
            "Förstasidan som användare ser när de besöker din webbplats",
          slug: "hem",
        },
      },
    },
    {
      key: "about",
      pageType: "STATIC",
      translations: {
        "en-gb": {
          label: "About",
          description: "Share the story, mission, and values behind your brand",
          slug: "about",
        },
        "sv-se": {
          label: "Om Oss",
          description:
            "Berätta om varumärkets historia, uppdrag och värderingar",
          slug: "om-oss",
        },
      },
    },
    {
      key: "contact",
      pageType: "STATIC",
      translations: {
        "en-gb": {
          label: "Contact",
          description: "Provide ways for users to get in touch with your team",
          slug: "contact",
        },
        "sv-se": {
          label: "Kontakt",
          description: "Erbjud sätt för användare att kontakta ditt team",
          slug: "kontakt",
        },
      },
    },
    {
      key: "faq",
      pageType: "STATIC",
      translations: {
        "en-gb": {
          label: "FAQ",
          description: "Answer common customer questions to reduce support",
          slug: "faq",
        },
        "sv-se": {
          label: "Vanliga Frågor",
          description:
            "Besvara vanliga frågor för att minska behovet av support",
          slug: "fragor",
        },
      },
    },
    {
      key: "collections",
      pageType: "COLLECTION",
      translations: {
        "en-gb": {
          label: "Collections",
          description: "Organize your products into easy-to-browse groups",
          slug: "collections",
        },
        "sv-se": {
          label: "Kollektioner",
          description: "Organisera dina produkter i lättnavigerade grupper",
          slug: "kollektioner",
        },
      },
    },
    {
      key: "products",
      pageType: "PRODUCT",
      translations: {
        "en-gb": {
          label: "Products",
          description: "Showcase the details of each product in your catalog",
          slug: "products",
        },
        "sv-se": {
          label: "Produkter",
          description:
            "Visa detaljerad information om varje produkt i ditt sortiment",
          slug: "produkter",
        },
      },
    },
  ];

  const locales = await prisma.locale.findMany({
    where: { code: { in: ["en-gb", "sv-se"] } },
  });

  const localeMap = Object.fromEntries(locales.map((l) => [l.code, l.id]));

  for (const page of defaultPages) {
    const savedPage = await prisma.page.upsert({
      where: { key: page.key },
      update: {},
      create: {
        id: `page_${page.key}`,
        key: page.key,
        pageType: page.pageType,
      },
    });

    for (const [localeCode, translation] of Object.entries(page.translations)) {
      const localeId = localeMap[localeCode];
      const translationId = `page_${page.key}_${localeCode}`;

      await prisma.pageTranslation.upsert({
        where: {
          pageId_localeId: {
            pageId: savedPage.id,
            localeId,
          },
        },
        update: {},
        create: {
          id: translationId,
          pageId: savedPage.id,
          localeId,
          label: translation.label,
          description: translation.description,
          slug: translation.slug,
        },
      });
    }
  }

  console.log("✅ Pages and translations seeded.");
};

module.exports = seedPages;
