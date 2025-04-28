const prismaDirectory = require("../../config/prismaDirectory");
const { generateId } = require("../../helpers/generateId");

// Define B2C resell platforms
const resellPlatforms = [
  {
    name: "ThredUp",
    url: "https://www.thredup.com",
    logo: "https://www.thredup.com/tup-assets/pwa/production/assets/logo-slogan-2d3cb7310537d35c9449.svg", // optional: add logo URL
    tagline: "Secondhand clothes. Firsthand fun.",
    description: "ThredUp is a leading online thrift and consignment store.",
    platformType: "B2C",
    countries: ["US"],
    categories: ["clothing", "shoes", "bags_backpacks"],
  },
  {
    name: "The RealReal",
    url: "https://www.therealreal.com",
    logo: "https://www.therealreal.com/_next-images/trr-logo.svg",
    tagline: "Authenticated Luxury Consignment",
    description:
      "Luxury resale marketplace for designer fashion, jewelry, and home goods.",
    platformType: "B2C",
    countries: ["US"],
    categories: ["clothing", "eyewear", "home_decor"],
  },

  {
    name: "Sellpy",
    url: "https://www.sellpy.com",
    logo: "https://cdn.sanity.io/images/ilmr7lwv/production_v2/bccea5b18bb5e6ddd0b16741c4cff697b5380a7c-803x247.png?dl", // optional: add logo URL
    tagline: "The easy way to sell and buy second hand",
    description:
      "Sellpy is a leading secondhand platform in Sweden offering a full-service resale solution for individuals and businesses, now expanding across Europe.",
    platformType: "B2C",
    countries: ["SE", "DE", "NL", "AT"], // Sweden, Germany, Netherlands, Austria
    categories: ["clothing", "shoes", "bags_backpacks", "home_decor"],
  },
  {
    name: "Vestiaire Collective",
    url: "https://www.vestiairecollective.com",
    logo: "https://assets.vestiairecollective.com/a/fenx/v4.31.0/assets/img/home/vestiairecollective_logo.svg?v=1",
    tagline: "Buy & sell designer second-hand fashion.",
    description:
      "Vestiaire Collective is a global platform for buying and selling pre-owned luxury and designer fashion. It emphasizes sustainability and offers authentication services for high-end items.",
    platformType: "B2C",
    countries: [
      "FR",
      "GB",
      "DE",
      "IT",
      "ES",
      "NL",
      "BE",
      "SE",
      "DK",
      "FI",
      "NO",
      "US",
    ],
    categories: [
      "clothing",
      "shoes",
      "bags_backpacks",
      "eyewear",
      "home_decor",
    ],
  },
  {
    name: "Thrift+",
    url: "https://thrift.plus",
    logo: "https://a.storyblok.com/f/177537/1200x628/69fc75f5da/social-share.png", // optional: add logo URL
    tagline: "The smarter way to shop and donate fashion.",
    description:
      "Thrift+ is a UK-based online shopping platform for second-hand clothes. It offers a full-service resale model where users send in clothes, and Thrift+ handles photography, listing, and shipping — with the option to donate proceeds to charity.",
    platformType: "B2C",
    countries: ["GB"],
    categories: ["clothing", "shoes", "bags_backpacks"],
  },
  {
    name: "Vinted",
    url: "https://www.vinted.com",
    logo: "https://marketplace-web-assets.vinted.com/assets/web-logo/default/logo.svg",
    tagline: "Sell clothes you don't wear, buy what you love.",
    description:
      "Vinted is a peer-to-peer platform for buying, selling, and swapping secondhand clothes, shoes, and accessories. It operates across most of Europe and North America.",
    platformType: "C2C",
    countries: [
      "FR",
      "DE",
      "NL",
      "PL",
      "ES",
      "IT",
      "BE",
      "CZ",
      "LT",
      "LV",
      "EE",
      "FI",
      "SK",
      "AT",
      "IE",
      "GB",
      "US",
    ],
    categories: [
      "clothing",
      "shoes",
      "bags_backpacks",
      "eyewear",
      "home_decor",
    ],
  },
  {
    name: "Depop",
    url: "https://www.depop.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Depop_logo.svg",
    tagline: "Fashion marketplace for the next generation.",
    description:
      "Depop is a fashion resale app popular with Gen Z for selling secondhand clothing and accessories. It enables peer-to-peer transactions and social selling.",
    platformType: "C2C",
    countries: ["US", "GB", "FR", "IT", "DE", "ES", "NL", "IE"],
    categories: ["clothing", "shoes", "bags_backpacks", "eyewear"],
  },
  {
    name: "Grailed",
    url: "https://www.grailed.com",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4pGiCe1XM-09qUzAX2HnwlKMLwZxZBab6g&s",
    tagline: "Buy and sell designer menswear.",
    description:
      "Grailed is a C2C marketplace focused on high-end and designer menswear. It caters to fashion-forward individuals looking for rare or luxury items at resale prices.",
    platformType: "C2C",
    countries: ["US", "GB", "DE"],
    categories: ["clothing", "shoes", "eyewear", "bags_backpacks"],
  },
  {
    name: "Wallapop",
    url: "https://www.wallapop.com",
    logo: "",
    tagline: "Buy and sell everything locally.",
    description:
      "Wallapop is a Spain-based local marketplace for peer-to-peer resale of clothes, electronics, furniture, and more. It emphasizes proximity and ease of use.",
    platformType: "C2C",
    countries: ["ES", "PT", "IT"],
    categories: [
      "clothing",
      "shoes",
      "home_decor",
      "electronics",
      "bags_backpacks",
    ],
  },
  {
    name: "Shpock",
    url: "https://www.shpock.com",
    logo: "https://www.wallapop.com/next-assets/images/pre-home/wallapop-logo.svg",
    tagline: "The marketplace for secondhand fashion and goods.",
    description:
      "Shpock is a mobile-first local marketplace app in the UK and German-speaking markets, allowing users to buy and sell items with ease.",
    platformType: "C2C",
    countries: ["GB", "DE", "AT"],
    categories: [
      "clothing",
      "shoes",
      "home_decor",
      "electronics",
      "bags_backpacks",
    ],
  },
  {
    name: "Tradera",
    url: "https://www.tradera.com",
    logo: "https://static.tradera.net/touchweb/static/output/images/open-graph-tradera-default.72cbcd71.png", // optional: add logo URL
    tagline: "Sweden’s largest circular marketplace.",
    description:
      "Tradera is a leading peer-to-peer marketplace based in Sweden, offering auctions and fixed-price listings for secondhand fashion, electronics, and home goods. While primarily focused on the Swedish market, Tradera supports international shipping within the EU, enabling cross-border transactions.",
    platformType: "C2C",
    countries: [
      "SE",
      "DK",
      "FI",
      "NO",
      "DE",
      "NL",
      "FR",
      "BE",
      "AT",
      "IT",
      "ES",
      "IE",
      "PT",
      "PL",
      "CZ",
      "SK",
      "HU",
      "SI",
      "EE",
      "LV",
      "LT",
      "LU",
      "MT",
      "RO",
      "BG",
      "HR",
      "CY",
      "GR",
    ],
    categories: [
      "clothing",
      "shoes",
      "bags_backpacks",
      "home_decor",
      "electronics",
    ],
  },
];

async function seedResellPlatforms() {
  for (const platform of resellPlatforms) {
    // Try to find the platform first by URL
    const existing = await prismaDirectory.resellPlatform.findUnique({
      where: { url: platform.url },
    });

    // Either use existing ID or generate a new one
    const platformId = existing?.id || generateId("RP");

    const created = await prismaDirectory.resellPlatform.upsert({
      where: { url: platform.url },
      update: {
        name: platform.name,
        logo: platform.logo,
        tagline: platform.tagline,
        description: platform.description,
        platformType: platform.platformType,
      },
      create: {
        id: platformId,
        name: platform.name,
        url: platform.url,
        logo: platform.logo,
        tagline: platform.tagline,
        description: platform.description,
        platformType: platform.platformType,
      },
    });

    const resellPlatformId = created.id;

    for (const code of platform.countries) {
      try {
        await prismaDirectory.resellPlatformCountry.upsert({
          where: {
            resellPlatformId_countryCode: {
              resellPlatformId,
              countryCode: code,
            },
          },
          update: {},
          create: {
            id: generateId("RPC"),
            resellPlatformId,
            countryCode: code,
          },
        });
      } catch (error) {
        console.warn(
          `⚠️ Skipped country ${code} for platform ${platform.name}:`,
          error.message
        );
        continue;
      }
    }

    for (const categoryKey of platform.categories) {
      const category = await prismaDirectory.productCategory.findUnique({
        where: { key: categoryKey },
      });

      if (category) {
        await prismaDirectory.resellPlatformCategory.upsert({
          where: {
            resellPlatformId_productCategoryId: {
              resellPlatformId,
              productCategoryId: category.id,
            },
          },
          update: {},
          create: {
            id: generateId("RPCAT"),
            resellPlatformId,
            productCategoryId: category.id,
          },
        });
      } else {
        console.warn(`⚠️ Category not found: ${categoryKey}`);
      }
    }
  }

  console.log("✅ Resell platforms seeded");
}

module.exports = { seedResellPlatforms };
