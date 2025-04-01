const prisma = require("../../config/prisma");

async function seedCollections() {
  const collections = [
    {
      key: "men",
      collectionType: "GENDER",
      locales: [
        { localeCode: "en-gb", label: "Men", slug: "men" },
        { localeCode: "sv-se", label: "Herr", slug: "herr" },
      ],
    },
    {
      key: "women",
      collectionType: "GENDER",
      locales: [
        { localeCode: "en-gb", label: "Women", slug: "women" },
        { localeCode: "sv-se", label: "Dam", slug: "dam" },
      ],
    },
    {
      key: "unisex",
      collectionType: "GENDER",
      locales: [
        { localeCode: "en-gb", label: "Unisex", slug: "unisex" },
        { localeCode: "sv-se", label: "Unisex", slug: "unisex" },
      ],
    },
    {
      key: "adult",
      collectionType: "AGEGROUP",
      locales: [
        { localeCode: "en-gb", label: "Adult", slug: "adult" },
        { localeCode: "sv-se", label: "Vuxen", slug: "vuxen" },
      ],
    },
    {
      key: "teens",
      collectionType: "AGEGROUP",
      locales: [
        { localeCode: "en-gb", label: "Teens", slug: "teens" },
        { localeCode: "sv-se", label: "Tonåringar", slug: "tonaringar" },
      ],
    },
    {
      key: "kids",
      collectionType: "AGEGROUP",
      locales: [
        { localeCode: "en-gb", label: "Kids", slug: "kids" },
        { localeCode: "sv-se", label: "Barn", slug: "barn" },
      ],
    },
    {
      key: "infant",
      collectionType: "AGEGROUP",
      locales: [
        { localeCode: "en-gb", label: "Infant", slug: "infant" },
        { localeCode: "sv-se", label: "Spädbarn", slug: "spadbarn" },
      ],
    },
    {
      key: "toddler",
      collectionType: "AGEGROUP",
      locales: [
        { localeCode: "en-gb", label: "Toddler", slug: "toddler" },
        { localeCode: "sv-se", label: "Småbarn", slug: "smabarn" },
      ],
    },
    {
      key: "apparel-accessories",
      collectionType: "CATEGORY",
      locales: [
        {
          localeCode: "en-gb",
          label: "Apparel & Accessories",
          slug: "apparel-accessories",
        },
        {
          localeCode: "sv-se",
          label: "Kläder & Accessoarer",
          slug: "klader-accessoarer",
        },
      ],
    },
    {
      key: "clothing",
      collectionType: "CATEGORY",
      parentKey: "apparel-accessories",
      locales: [
        {
          localeCode: "en-gb",
          label: "Clothing",
          slug: "clothing",
        },
        {
          localeCode: "sv-se",
          label: "Kläder",
          slug: "klader",
        },
      ],
    },
    {
      key: "tops",
      collectionType: "CATEGORY",
      parentKey: "clothing",
      locales: [
        {
          localeCode: "en-gb",
          label: "Tops",
          slug: "tops",
        },
        {
          localeCode: "sv-se",
          label: "Toppar",
          slug: "toppar",
        },
      ],
    },
    {
      key: "tank-tops",
      collectionType: "CATEGORY",
      parentKey: "tops",
      locales: [
        {
          localeCode: "en-gb",
          label: "Tank Tops",
          slug: "tank-tops",
        },
        {
          localeCode: "sv-se",
          label: "Linnen",
          slug: "linnen",
        },
      ],
    },
    {
      key: "crop-tops",
      collectionType: "CATEGORY",
      parentKey: "tops",
      locales: [
        {
          localeCode: "en-gb",
          label: "Crop Tops",
          slug: "crop-tops",
        },
        {
          localeCode: "sv-se",
          label: "Magtröjor",
          slug: "magtrojor",
        },
      ],
    },
    {
      key: "blouses",
      collectionType: "CATEGORY",
      parentKey: "tops",
      locales: [
        {
          localeCode: "en-gb",
          label: "Blouses",
          slug: "blouses",
        },
        {
          localeCode: "sv-se",
          label: "Blusar",
          slug: "blusar",
        },
      ],
    },
    {
      key: "long-sleeve-tops",
      collectionType: "CATEGORY",
      parentKey: "tops",
      locales: [
        {
          localeCode: "en-gb",
          label: "Long Sleeve Tops",
          slug: "long-sleeve-tops",
        },
        {
          localeCode: "sv-se",
          label: "Långärmade Toppar",
          slug: "langarmade-toppar",
        },
      ],
    },
    {
      key: "short-sleeve-tops",
      collectionType: "CATEGORY",
      parentKey: "tops",
      locales: [
        {
          localeCode: "en-gb",
          label: "Short Sleeve Tops",
          slug: "short-sleeve-tops",
        },
        {
          localeCode: "sv-se",
          label: "Kortärmade Toppar",
          slug: "kortarmade-toppar",
        },
      ],
    },
    {
      key: "halter-tops",
      collectionType: "CATEGORY",
      parentKey: "tops",
      locales: [
        {
          localeCode: "en-gb",
          label: "Halter Tops",
          slug: "halter-tops",
        },
        {
          localeCode: "sv-se",
          label: "Haltertoppar",
          slug: "haltertoppar",
        },
      ],
    },
    {
      key: "wrap-tops",
      collectionType: "CATEGORY",
      parentKey: "tops",
      locales: [
        {
          localeCode: "en-gb",
          label: "Wrap Tops",
          slug: "wrap-tops",
        },
        {
          localeCode: "sv-se",
          label: "Omlottoppar",
          slug: "omlottoppar",
        },
      ],
    },
    {
      key: "t-shirts",
      collectionType: "CATEGORY",
      parentKey: "clothing",
      locales: [
        {
          localeCode: "en-gb",
          label: "T-Shirts",
          slug: "t-shirts",
        },
        {
          localeCode: "sv-se",
          label: "T-shirts",
          slug: "t-shirts",
        },
      ],
    },
    {
      key: "graphic-tees",
      collectionType: "CATEGORY",
      parentKey: "t-shirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Graphic Tees",
          slug: "graphic-tees",
        },
        {
          localeCode: "sv-se",
          label: "T-shirts med tryck",
          slug: "t-shirts-med-tryck",
        },
      ],
    },
    {
      key: "plain-tees",
      collectionType: "CATEGORY",
      parentKey: "t-shirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Plain Tees",
          slug: "plain-tees",
        },
        {
          localeCode: "sv-se",
          label: "Enfärgade T-shirts",
          slug: "enfargade-t-shirts",
        },
      ],
    },
    {
      key: "logo-tees",
      collectionType: "CATEGORY",
      parentKey: "t-shirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Logo Tees",
          slug: "logo-tees",
        },
        {
          localeCode: "sv-se",
          label: "Logotryckta T-shirts",
          slug: "logotryckta-t-shirts",
        },
      ],
    },
    {
      key: "oversized-tees",
      collectionType: "CATEGORY",
      parentKey: "t-shirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Oversized T-Shirts",
          slug: "oversized-t-shirts",
        },
        {
          localeCode: "sv-se",
          label: "Oversized T-shirts",
          slug: "oversized-t-shirts",
        },
      ],
    },
    {
      key: "v-neck-tees",
      collectionType: "CATEGORY",
      parentKey: "t-shirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "V-Neck T-Shirts",
          slug: "v-neck-t-shirts",
        },
        {
          localeCode: "sv-se",
          label: "T-shirts med V-ringning",
          slug: "t-shirts-v-ringning",
        },
      ],
    },
    {
      key: "crew-neck-tees",
      collectionType: "CATEGORY",
      parentKey: "t-shirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Crew Neck T-Shirts",
          slug: "crew-neck-t-shirts",
        },
        {
          localeCode: "sv-se",
          label: "T-shirts med rund hals",
          slug: "t-shirts-rund-hals",
        },
      ],
    },
    {
      key: "shirts",
      collectionType: "CATEGORY",
      parentKey: "clothing",
      locales: [
        {
          localeCode: "en-gb",
          label: "Shirts",
          slug: "shirts",
        },
        {
          localeCode: "sv-se",
          label: "Skjortor",
          slug: "skjortor",
        },
      ],
    },
    {
      key: "dress-shirts",
      collectionType: "CATEGORY",
      parentKey: "shirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Dress Shirts",
          slug: "dress-shirts",
        },
        {
          localeCode: "sv-se",
          label: "Kostymskjortor",
          slug: "kostymskjortor",
        },
      ],
    },
    {
      key: "casual-shirts",
      collectionType: "CATEGORY",
      parentKey: "shirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Casual Shirts",
          slug: "casual-shirts",
        },
        {
          localeCode: "sv-se",
          label: "Fritidsskjortor",
          slug: "fritidsskjortor",
        },
      ],
    },
    {
      key: "flannel-shirts",
      collectionType: "CATEGORY",
      parentKey: "shirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Flannel Shirts",
          slug: "flannel-shirts",
        },
        {
          localeCode: "sv-se",
          label: "Flanellskjortor",
          slug: "flanellskjortor",
        },
      ],
    },
    {
      key: "linen-shirts",
      collectionType: "CATEGORY",
      parentKey: "shirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Linen Shirts",
          slug: "linen-shirts",
        },
        {
          localeCode: "sv-se",
          label: "Linneskjortor",
          slug: "linneskjortor",
        },
      ],
    },
    {
      key: "short-sleeve-shirts",
      collectionType: "CATEGORY",
      parentKey: "shirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Short Sleeve Shirts",
          slug: "short-sleeve-shirts",
        },
        {
          localeCode: "sv-se",
          label: "Kortärmade Skjortor",
          slug: "kortarmade-skjortor",
        },
      ],
    },
    {
      key: "long-sleeve-shirts",
      collectionType: "CATEGORY",
      parentKey: "shirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Long Sleeve Shirts",
          slug: "long-sleeve-shirts",
        },
        {
          localeCode: "sv-se",
          label: "Långärmade Skjortor",
          slug: "langarmade-skjortor",
        },
      ],
    },
    {
      key: "sweaters",
      collectionType: "CATEGORY",
      parentKey: "clothing",
      locales: [
        {
          localeCode: "en-gb",
          label: "Sweaters",
          slug: "sweaters",
        },
        {
          localeCode: "sv-se",
          label: "Tröjor",
          slug: "trojor",
        },
      ],
    },
    {
      key: "crewneck-sweaters",
      collectionType: "CATEGORY",
      parentKey: "sweaters",
      locales: [
        {
          localeCode: "en-gb",
          label: "Crewneck Sweaters",
          slug: "crewneck-sweaters",
        },
        {
          localeCode: "sv-se",
          label: "Rundhalsade Tröjor",
          slug: "rundhalsade-trojor",
        },
      ],
    },
    {
      key: "v-neck-sweaters",
      collectionType: "CATEGORY",
      parentKey: "sweaters",
      locales: [
        {
          localeCode: "en-gb",
          label: "V-Neck Sweaters",
          slug: "v-neck-sweaters",
        },
        {
          localeCode: "sv-se",
          label: "V-ringade Tröjor",
          slug: "v-ringade-trojor",
        },
      ],
    },
    {
      key: "cardigans",
      collectionType: "CATEGORY",
      parentKey: "sweaters",
      locales: [
        {
          localeCode: "en-gb",
          label: "Cardigans",
          slug: "cardigans",
        },
        {
          localeCode: "sv-se",
          label: "Koftor",
          slug: "koftor",
        },
      ],
    },
    {
      key: "turtlenecks",
      collectionType: "CATEGORY",
      parentKey: "sweaters",
      locales: [
        {
          localeCode: "en-gb",
          label: "Turtlenecks",
          slug: "turtlenecks",
        },
        {
          localeCode: "sv-se",
          label: "Polotröjor",
          slug: "polotrojor",
        },
      ],
    },
    {
      key: "zip-sweaters",
      collectionType: "CATEGORY",
      parentKey: "sweaters",
      locales: [
        {
          localeCode: "en-gb",
          label: "Zip Sweaters",
          slug: "zip-sweaters",
        },
        {
          localeCode: "sv-se",
          label: "Tröjor med Dragkedja",
          slug: "trojor-med-dragkedja",
        },
      ],
    },
    {
      key: "sweater-vests",
      collectionType: "CATEGORY",
      parentKey: "sweaters",
      locales: [
        {
          localeCode: "en-gb",
          label: "Sweater Vests",
          slug: "sweater-vests",
        },
        {
          localeCode: "sv-se",
          label: "Stickade Västar",
          slug: "stickade-vastar",
        },
      ],
    },
    {
      key: "hoodies",
      collectionType: "CATEGORY",
      parentKey: "clothing",
      locales: [
        {
          localeCode: "en-gb",
          label: "Hoodies",
          slug: "hoodies",
        },
        {
          localeCode: "sv-se",
          label: "Huvtröjor",
          slug: "huvtrojor",
        },
      ],
    },
    {
      key: "pullover-hoodies",
      collectionType: "CATEGORY",
      parentKey: "hoodies",
      locales: [
        {
          localeCode: "en-gb",
          label: "Pullover Hoodies",
          slug: "pullover-hoodies",
        },
        {
          localeCode: "sv-se",
          label: "Huvtröjor utan dragkedja",
          slug: "huvtrojor-utan-dragkedja",
        },
      ],
    },
    {
      key: "zip-hoodies",
      collectionType: "CATEGORY",
      parentKey: "hoodies",
      locales: [
        {
          localeCode: "en-gb",
          label: "Zip Hoodies",
          slug: "zip-hoodies",
        },
        {
          localeCode: "sv-se",
          label: "Huvtröjor med dragkedja",
          slug: "huvtrojor-med-dragkedja",
        },
      ],
    },
    {
      key: "graphic-hoodies",
      collectionType: "CATEGORY",
      parentKey: "hoodies",
      locales: [
        {
          localeCode: "en-gb",
          label: "Graphic Hoodies",
          slug: "graphic-hoodies",
        },
        {
          localeCode: "sv-se",
          label: "Huvtröjor med tryck",
          slug: "huvtrojor-med-tryck",
        },
      ],
    },
    {
      key: "oversized-hoodies",
      collectionType: "CATEGORY",
      parentKey: "hoodies",
      locales: [
        {
          localeCode: "en-gb",
          label: "Oversized Hoodies",
          slug: "oversized-hoodies",
        },
        {
          localeCode: "sv-se",
          label: "Oversize Huvtröjor",
          slug: "oversize-huvtrojor",
        },
      ],
    },
    {
      key: "cropped-hoodies",
      collectionType: "CATEGORY",
      parentKey: "hoodies",
      locales: [
        {
          localeCode: "en-gb",
          label: "Cropped Hoodies",
          slug: "cropped-hoodies",
        },
        {
          localeCode: "sv-se",
          label: "Kortare Huvtröjor",
          slug: "kortare-huvtrojor",
        },
      ],
    },
    {
      key: "jackets",
      collectionType: "CATEGORY",
      parentKey: "clothing",
      locales: [
        {
          localeCode: "en-gb",
          label: "Jackets & Coats",
          slug: "jackets-coats",
        },
        {
          localeCode: "sv-se",
          label: "Jackor & Rockar",
          slug: "jackor-rockar",
        },
      ],
    },
    {
      key: "denim-jackets",
      collectionType: "CATEGORY",
      parentKey: "jackets",
      locales: [
        {
          localeCode: "en-gb",
          label: "Denim Jackets",
          slug: "denim-jackets",
        },
        {
          localeCode: "sv-se",
          label: "Jeansjackor",
          slug: "jeansjackor",
        },
      ],
    },
    {
      key: "leather-jackets",
      collectionType: "CATEGORY",
      parentKey: "jackets",
      locales: [
        {
          localeCode: "en-gb",
          label: "Leather Jackets",
          slug: "leather-jackets",
        },
        {
          localeCode: "sv-se",
          label: "Skinnjackor",
          slug: "skinnjackor",
        },
      ],
    },
    {
      key: "bomber-jackets",
      collectionType: "CATEGORY",
      parentKey: "jackets",
      locales: [
        {
          localeCode: "en-gb",
          label: "Bomber Jackets",
          slug: "bomber-jackets",
        },
        {
          localeCode: "sv-se",
          label: "Bomberjackor",
          slug: "bomberjackor",
        },
      ],
    },
    {
      key: "puffer-jackets",
      collectionType: "CATEGORY",
      parentKey: "jackets",
      locales: [
        {
          localeCode: "en-gb",
          label: "Puffer Jackets",
          slug: "puffer-jackets",
        },
        {
          localeCode: "sv-se",
          label: "Dunjackor",
          slug: "dunjackor",
        },
      ],
    },
    {
      key: "blazers",
      collectionType: "CATEGORY",
      parentKey: "jackets",
      locales: [
        {
          localeCode: "en-gb",
          label: "Blazers",
          slug: "blazers",
        },
        {
          localeCode: "sv-se",
          label: "Kavajer",
          slug: "kavajer",
        },
      ],
    },
    {
      key: "trench-coats",
      collectionType: "CATEGORY",
      parentKey: "jackets",
      locales: [
        {
          localeCode: "en-gb",
          label: "Trench Coats",
          slug: "trench-coats",
        },
        {
          localeCode: "sv-se",
          label: "Trenchcoats",
          slug: "trenchcoats",
        },
      ],
    },
    {
      key: "parkas",
      collectionType: "CATEGORY",
      parentKey: "jackets",
      locales: [
        {
          localeCode: "en-gb",
          label: "Parkas",
          slug: "parkas",
        },
        {
          localeCode: "sv-se",
          label: "Parkas",
          slug: "parkas",
        },
      ],
    },
    {
      key: "raincoats",
      collectionType: "CATEGORY",
      parentKey: "jackets",
      locales: [
        {
          localeCode: "en-gb",
          label: "Raincoats",
          slug: "raincoats",
        },
        {
          localeCode: "sv-se",
          label: "Regnjackor",
          slug: "regnjackor",
        },
      ],
    },
    {
      key: "pants",
      collectionType: "CATEGORY",
      parentKey: "clothing",
      locales: [
        {
          localeCode: "en-gb",
          label: "Trousers & Pants",
          slug: "trousers-pants",
        },
        {
          localeCode: "sv-se",
          label: "Byxor",
          slug: "byxor",
        },
      ],
    },
    {
      key: "jeans",
      collectionType: "CATEGORY",
      parentKey: "pants",
      locales: [
        {
          localeCode: "en-gb",
          label: "Jeans",
          slug: "jeans",
        },
        {
          localeCode: "sv-se",
          label: "Jeans",
          slug: "jeans",
        },
      ],
    },
    {
      key: "chinos",
      collectionType: "CATEGORY",
      parentKey: "pants",
      locales: [
        {
          localeCode: "en-gb",
          label: "Chinos",
          slug: "chinos",
        },
        {
          localeCode: "sv-se",
          label: "Chinos",
          slug: "chinos",
        },
      ],
    },
    {
      key: "dress-pants",
      collectionType: "CATEGORY",
      parentKey: "pants",
      locales: [
        {
          localeCode: "en-gb",
          label: "Dress Pants",
          slug: "dress-pants",
        },
        {
          localeCode: "sv-se",
          label: "Kostymbyxor",
          slug: "kostymbyxor",
        },
      ],
    },
    {
      key: "cargo-pants",
      collectionType: "CATEGORY",
      parentKey: "pants",
      locales: [
        {
          localeCode: "en-gb",
          label: "Cargo Pants",
          slug: "cargo-pants",
        },
        {
          localeCode: "sv-se",
          label: "Cargobyxor",
          slug: "cargobyxor",
        },
      ],
    },
    {
      key: "leggings",
      collectionType: "CATEGORY",
      parentKey: "pants",
      locales: [
        {
          localeCode: "en-gb",
          label: "Leggings",
          slug: "leggings",
        },
        {
          localeCode: "sv-se",
          label: "Leggings",
          slug: "leggings",
        },
      ],
    },
    {
      key: "joggers",
      collectionType: "CATEGORY",
      parentKey: "pants",
      locales: [
        {
          localeCode: "en-gb",
          label: "Joggers",
          slug: "joggers",
        },
        {
          localeCode: "sv-se",
          label: "Mjukisbyxor",
          slug: "mjukisbyxor",
        },
      ],
    },
    {
      key: "sweatpants",
      collectionType: "CATEGORY",
      parentKey: "pants",
      locales: [
        {
          localeCode: "en-gb",
          label: "Sweatpants",
          slug: "sweatpants",
        },
        {
          localeCode: "sv-se",
          label: "Träningsbyxor",
          slug: "traningsbyxor",
        },
      ],
    },
    {
      key: "wide-leg-pants",
      collectionType: "CATEGORY",
      parentKey: "pants",
      locales: [
        {
          localeCode: "en-gb",
          label: "Wide-Leg Pants",
          slug: "wide-leg-pants",
        },
        {
          localeCode: "sv-se",
          label: "Vida Byxor",
          slug: "vida-byxor",
        },
      ],
    },
    {
      key: "capris",
      collectionType: "CATEGORY",
      parentKey: "pants",
      locales: [
        {
          localeCode: "en-gb",
          label: "Capris",
          slug: "capris",
        },
        {
          localeCode: "sv-se",
          label: "Capribyxor",
          slug: "capribyxor",
        },
      ],
    },
    {
      key: "shorts",
      collectionType: "CATEGORY",
      parentKey: "clothing",
      locales: [
        {
          localeCode: "en-gb",
          label: "Shorts",
          slug: "shorts",
        },
        {
          localeCode: "sv-se",
          label: "Shorts",
          slug: "shorts",
        },
      ],
    },
    {
      key: "denim-shorts",
      collectionType: "CATEGORY",
      parentKey: "shorts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Denim Shorts",
          slug: "denim-shorts",
        },
        {
          localeCode: "sv-se",
          label: "Jeansshorts",
          slug: "jeansshorts",
        },
      ],
    },
    {
      key: "bermuda-shorts",
      collectionType: "CATEGORY",
      parentKey: "shorts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Bermuda Shorts",
          slug: "bermuda-shorts",
        },
        {
          localeCode: "sv-se",
          label: "Bermudashorts",
          slug: "bermudashorts",
        },
      ],
    },
    {
      key: "cargo-shorts",
      collectionType: "CATEGORY",
      parentKey: "shorts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Cargo Shorts",
          slug: "cargo-shorts",
        },
        {
          localeCode: "sv-se",
          label: "Cargoshorts",
          slug: "cargoshorts",
        },
      ],
    },
    {
      key: "bike-shorts",
      collectionType: "CATEGORY",
      parentKey: "shorts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Bike Shorts",
          slug: "bike-shorts",
        },
        {
          localeCode: "sv-se",
          label: "Cykelshorts",
          slug: "cykelshorts",
        },
      ],
    },
    {
      key: "athletic-shorts",
      collectionType: "CATEGORY",
      parentKey: "shorts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Athletic Shorts",
          slug: "athletic-shorts",
        },
        {
          localeCode: "sv-se",
          label: "Träningsshorts",
          slug: "traningsshorts",
        },
      ],
    },
    {
      key: "tailored-shorts",
      collectionType: "CATEGORY",
      parentKey: "shorts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Tailored Shorts",
          slug: "tailored-shorts",
        },
        {
          localeCode: "sv-se",
          label: "Kostymshorts",
          slug: "kostymshorts",
        },
      ],
    },
    {
      key: "lounge-shorts",
      collectionType: "CATEGORY",
      parentKey: "shorts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Lounge Shorts",
          slug: "lounge-shorts",
        },
        {
          localeCode: "sv-se",
          label: "Myseshorts",
          slug: "myseshorts",
        },
      ],
    },
    {
      key: "skirts",
      collectionType: "CATEGORY",
      parentKey: "clothing",
      locales: [
        {
          localeCode: "en-gb",
          label: "Skirts",
          slug: "skirts",
        },
        {
          localeCode: "sv-se",
          label: "Kjolar",
          slug: "kjolar",
        },
      ],
    },
    {
      key: "mini-skirts",
      collectionType: "CATEGORY",
      parentKey: "skirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Mini Skirts",
          slug: "mini-skirts",
        },
        {
          localeCode: "sv-se",
          label: "Minikjolar",
          slug: "minikjolar",
        },
      ],
    },
    {
      key: "midi-skirts",
      collectionType: "CATEGORY",
      parentKey: "skirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Midi Skirts",
          slug: "midi-skirts",
        },
        {
          localeCode: "sv-se",
          label: "Midikjolar",
          slug: "midikjolar",
        },
      ],
    },
    {
      key: "maxi-skirts",
      collectionType: "CATEGORY",
      parentKey: "skirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Maxi Skirts",
          slug: "maxi-skirts",
        },
        {
          localeCode: "sv-se",
          label: "Maxikjolar",
          slug: "maxikjolar",
        },
      ],
    },
    {
      key: "pleated-skirts",
      collectionType: "CATEGORY",
      parentKey: "skirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Pleated Skirts",
          slug: "pleated-skirts",
        },
        {
          localeCode: "sv-se",
          label: "Plisserade Kjolar",
          slug: "plisserade-kjolar",
        },
      ],
    },
    {
      key: "denim-skirts",
      collectionType: "CATEGORY",
      parentKey: "skirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Denim Skirts",
          slug: "denim-skirts",
        },
        {
          localeCode: "sv-se",
          label: "Jeanskjolar",
          slug: "jeanskjolar",
        },
      ],
    },
    {
      key: "wrap-skirts",
      collectionType: "CATEGORY",
      parentKey: "skirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Wrap Skirts",
          slug: "wrap-skirts",
        },
        {
          localeCode: "sv-se",
          label: "Omlottkjolar",
          slug: "omlottkjolar",
        },
      ],
    },
    {
      key: "pencil-skirts",
      collectionType: "CATEGORY",
      parentKey: "skirts",
      locales: [
        {
          localeCode: "en-gb",
          label: "Pencil Skirts",
          slug: "pencil-skirts",
        },
        {
          localeCode: "sv-se",
          label: "Pennkjolar",
          slug: "pennkjolar",
        },
      ],
    },
    {
      key: "dresses",
      collectionType: "CATEGORY",
      parentKey: "clothing",
      locales: [
        {
          localeCode: "en-gb",
          label: "Dresses",
          slug: "dresses",
        },
        {
          localeCode: "sv-se",
          label: "Klänningar",
          slug: "klanningar",
        },
      ],
    },
    {
      key: "casual-dresses",
      collectionType: "CATEGORY",
      parentKey: "dresses",
      locales: [
        {
          localeCode: "en-gb",
          label: "Casual Dresses",
          slug: "casual-dresses",
        },
        {
          localeCode: "sv-se",
          label: "Vardagsklänningar",
          slug: "vardagsklanningar",
        },
      ],
    },
    {
      key: "evening-dresses",
      collectionType: "CATEGORY",
      parentKey: "dresses",
      locales: [
        {
          localeCode: "en-gb",
          label: "Evening Dresses",
          slug: "evening-dresses",
        },
        {
          localeCode: "sv-se",
          label: "Kvällsklänningar",
          slug: "kvallsklanningar",
        },
      ],
    },
    {
      key: "cocktail-dresses",
      collectionType: "CATEGORY",
      parentKey: "dresses",
      locales: [
        {
          localeCode: "en-gb",
          label: "Cocktail Dresses",
          slug: "cocktail-dresses",
        },
        {
          localeCode: "sv-se",
          label: "Cocktailklänningar",
          slug: "cocktailklanningar",
        },
      ],
    },
    {
      key: "maxi-dresses",
      collectionType: "CATEGORY",
      parentKey: "dresses",
      locales: [
        {
          localeCode: "en-gb",
          label: "Maxi Dresses",
          slug: "maxi-dresses",
        },
        {
          localeCode: "sv-se",
          label: "Maxiklänningar",
          slug: "maxiklanningar",
        },
      ],
    },
    {
      key: "midi-dresses",
      collectionType: "CATEGORY",
      parentKey: "dresses",
      locales: [
        {
          localeCode: "en-gb",
          label: "Midi Dresses",
          slug: "midi-dresses",
        },
        {
          localeCode: "sv-se",
          label: "Midiklänningar",
          slug: "midiklanningar",
        },
      ],
    },
    {
      key: "mini-dresses",
      collectionType: "CATEGORY",
      parentKey: "dresses",
      locales: [
        {
          localeCode: "en-gb",
          label: "Mini Dresses",
          slug: "mini-dresses",
        },
        {
          localeCode: "sv-se",
          label: "Miniklänningar",
          slug: "miniklanningar",
        },
      ],
    },
    {
      key: "wrap-dresses",
      collectionType: "CATEGORY",
      parentKey: "dresses",
      locales: [
        {
          localeCode: "en-gb",
          label: "Wrap Dresses",
          slug: "wrap-dresses",
        },
        {
          localeCode: "sv-se",
          label: "Omlottklänningar",
          slug: "omlottklanningar",
        },
      ],
    },
    {
      key: "suits",
      collectionType: "CATEGORY",
      parentKey: "clothing",
      locales: [
        {
          localeCode: "en-gb",
          label: "Suits & Blazers",
          slug: "suits-blazers",
        },
        {
          localeCode: "sv-se",
          label: "Kostymer & Kavajer",
          slug: "kostymer-kavajer",
        },
      ],
    },
    {
      key: "suit-sets",
      collectionType: "CATEGORY",
      parentKey: "suits",
      locales: [
        {
          localeCode: "en-gb",
          label: "Suit Sets",
          slug: "suit-sets",
        },
        {
          localeCode: "sv-se",
          label: "Kostymset",
          slug: "kostymset",
        },
      ],
    },
    {
      key: "blazers",
      collectionType: "CATEGORY",
      parentKey: "suits",
      locales: [
        {
          localeCode: "en-gb",
          label: "Blazers",
          slug: "blazers",
        },
        {
          localeCode: "sv-se",
          label: "Kavajer",
          slug: "kavajer",
        },
      ],
    },
    {
      key: "formal-trousers",
      collectionType: "CATEGORY",
      parentKey: "suits",
      locales: [
        {
          localeCode: "en-gb",
          label: "Formal Trousers",
          slug: "formal-trousers",
        },
        {
          localeCode: "sv-se",
          label: "Kostymbyxor",
          slug: "kostymbyxor",
        },
      ],
    },
    {
      key: "vests-waistcoats",
      collectionType: "CATEGORY",
      parentKey: "suits",
      locales: [
        {
          localeCode: "en-gb",
          label: "Vests & Waistcoats",
          slug: "vests-waistcoats",
        },
        {
          localeCode: "sv-se",
          label: "Västar",
          slug: "vastar",
        },
      ],
    },
    {
      key: "underwear",
      collectionType: "CATEGORY",
      parentKey: "clothing",
      locales: [
        {
          localeCode: "en-gb",
          label: "Underwear",
          slug: "underwear",
        },
        {
          localeCode: "sv-se",
          label: "Underkläder",
          slug: "underklader",
        },
      ],
    },
    {
      key: "briefs",
      collectionType: "CATEGORY",
      parentKey: "underwear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Briefs",
          slug: "briefs",
        },
        {
          localeCode: "sv-se",
          label: "Briefs",
          slug: "briefs",
        },
      ],
    },
    {
      key: "boxers",
      collectionType: "CATEGORY",
      parentKey: "underwear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Boxers",
          slug: "boxers",
        },
        {
          localeCode: "sv-se",
          label: "Boxershorts",
          slug: "boxershorts",
        },
      ],
    },
    {
      key: "panties",
      collectionType: "CATEGORY",
      parentKey: "underwear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Panties",
          slug: "panties",
        },
        {
          localeCode: "sv-se",
          label: "Trosor",
          slug: "trosor",
        },
      ],
    },
    {
      key: "bras",
      collectionType: "CATEGORY",
      parentKey: "underwear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Bras",
          slug: "bras",
        },
        {
          localeCode: "sv-se",
          label: "BHar",
          slug: "bhar",
        },
      ],
    },
    {
      key: "undershirts",
      collectionType: "CATEGORY",
      parentKey: "underwear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Undershirts",
          slug: "undershirts",
        },
        {
          localeCode: "sv-se",
          label: "Undertröjor",
          slug: "undertrojor",
        },
      ],
    },
    {
      key: "thermal-underwear",
      collectionType: "CATEGORY",
      parentKey: "underwear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Thermal Underwear",
          slug: "thermal-underwear",
        },
        {
          localeCode: "sv-se",
          label: "Långkalsonger",
          slug: "langkalsonger",
        },
      ],
    },
    {
      key: "shapewear",
      collectionType: "CATEGORY",
      parentKey: "underwear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Shapewear",
          slug: "shapewear",
        },
        {
          localeCode: "sv-se",
          label: "Shapewear",
          slug: "shapewear",
        },
      ],
    },
    {
      key: "sleepwear",
      collectionType: "CATEGORY",
      parentKey: "clothing",
      locales: [
        {
          localeCode: "en-gb",
          label: "Sleepwear",
          slug: "sleepwear",
        },
        {
          localeCode: "sv-se",
          label: "Nattkläder",
          slug: "nattklader",
        },
      ],
    },
    {
      key: "pyjamas",
      collectionType: "CATEGORY",
      parentKey: "sleepwear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Pyjamas",
          slug: "pyjamas",
        },
        {
          localeCode: "sv-se",
          label: "Pyjamas",
          slug: "pyjamas",
        },
      ],
    },
    {
      key: "nightgowns",
      collectionType: "CATEGORY",
      parentKey: "sleepwear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Nightgowns",
          slug: "nightgowns",
        },
        {
          localeCode: "sv-se",
          label: "Nattlinnen",
          slug: "nattlinnen",
        },
      ],
    },
    {
      key: "sleep-shirts",
      collectionType: "CATEGORY",
      parentKey: "sleepwear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Sleep Shirts",
          slug: "sleep-shirts",
        },
        {
          localeCode: "sv-se",
          label: "Sovtröjor",
          slug: "sovtrojor",
        },
      ],
    },
    {
      key: "loungewear",
      collectionType: "CATEGORY",
      parentKey: "sleepwear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Loungewear",
          slug: "loungewear",
        },
        {
          localeCode: "sv-se",
          label: "Myskläder",
          slug: "mysklader",
        },
      ],
    },
    {
      key: "robes",
      collectionType: "CATEGORY",
      parentKey: "sleepwear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Robes",
          slug: "robes",
        },
        {
          localeCode: "sv-se",
          label: "Morgonrockar",
          slug: "morgonrockar",
        },
      ],
    },
    {
      key: "activewear",
      collectionType: "CATEGORY",
      parentKey: "clothing",
      locales: [
        {
          localeCode: "en-gb",
          label: "Activewear",
          slug: "activewear",
        },
        {
          localeCode: "sv-se",
          label: "Träningskläder",
          slug: "traningsklader",
        },
      ],
    },
    {
      key: "leggings",
      collectionType: "CATEGORY",
      parentKey: "activewear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Leggings",
          slug: "leggings",
        },
        {
          localeCode: "sv-se",
          label: "Träningstights",
          slug: "traningstights",
        },
      ],
    },
    {
      key: "sports-bras",
      collectionType: "CATEGORY",
      parentKey: "activewear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Sports Bras",
          slug: "sports-bras",
        },
        {
          localeCode: "sv-se",
          label: "Sport-BH",
          slug: "sport-bh",
        },
      ],
    },
    {
      key: "workout-tops",
      collectionType: "CATEGORY",
      parentKey: "activewear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Workout Tops",
          slug: "workout-tops",
        },
        {
          localeCode: "sv-se",
          label: "Träningstoppar",
          slug: "traningstoppar",
        },
      ],
    },
    {
      key: "gym-shorts",
      collectionType: "CATEGORY",
      parentKey: "activewear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Gym Shorts",
          slug: "gym-shorts",
        },
        {
          localeCode: "sv-se",
          label: "Träningsshorts",
          slug: "traningsshorts",
        },
      ],
    },
    {
      key: "track-jackets",
      collectionType: "CATEGORY",
      parentKey: "activewear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Track Jackets",
          slug: "track-jackets",
        },
        {
          localeCode: "sv-se",
          label: "Träningsjackor",
          slug: "traningsjackor",
        },
      ],
    },
    {
      key: "training-pants",
      collectionType: "CATEGORY",
      parentKey: "activewear",
      locales: [
        {
          localeCode: "en-gb",
          label: "Training Pants",
          slug: "training-pants",
        },
        {
          localeCode: "sv-se",
          label: "Träningsbyxor",
          slug: "traningsbyxor",
        },
      ],
    },
    {
      key: "shoes",
      collectionType: "CATEGORY",
      parentKey: "apparel-accessories",
      locales: [
        {
          localeCode: "en-gb",
          label: "Shoes",
          slug: "shoes",
        },
        {
          localeCode: "sv-se",
          label: "Skor",
          slug: "skor",
        },
      ],
    },
    {
      key: "sneakers",
      collectionType: "CATEGORY",
      parentKey: "shoes",
      locales: [
        {
          localeCode: "en-gb",
          label: "Sneakers",
          slug: "sneakers",
        },
        {
          localeCode: "sv-se",
          label: "Sneakers",
          slug: "sneakers",
        },
      ],
    },
    {
      key: "boots",
      collectionType: "CATEGORY",
      parentKey: "shoes",
      locales: [
        {
          localeCode: "en-gb",
          label: "Boots",
          slug: "boots",
        },
        {
          localeCode: "sv-se",
          label: "Stövlar",
          slug: "stovlar",
        },
      ],
    },
    {
      key: "sandals",
      collectionType: "CATEGORY",
      parentKey: "shoes",
      locales: [
        {
          localeCode: "en-gb",
          label: "Sandals",
          slug: "sandals",
        },
        {
          localeCode: "sv-se",
          label: "Sandaler",
          slug: "sandaler",
        },
      ],
    },
    {
      key: "formal-shoes",
      collectionType: "CATEGORY",
      parentKey: "shoes",
      locales: [
        {
          localeCode: "en-gb",
          label: "Formal Shoes",
          slug: "formal-shoes",
        },
        {
          localeCode: "sv-se",
          label: "Finskor",
          slug: "finskor",
        },
      ],
    },
    {
      key: "slippers",
      collectionType: "CATEGORY",
      parentKey: "shoes",
      locales: [
        {
          localeCode: "en-gb",
          label: "Slippers",
          slug: "slippers",
        },
        {
          localeCode: "sv-se",
          label: "Tofflor",
          slug: "tofflor",
        },
      ],
    },
    {
      key: "sports-shoes",
      collectionType: "CATEGORY",
      parentKey: "shoes",
      locales: [
        {
          localeCode: "en-gb",
          label: "Sports Shoes",
          slug: "sports-shoes",
        },
        {
          localeCode: "sv-se",
          label: "Träningsskor",
          slug: "traningsskor",
        },
      ],
    },
    {
      key: "bags",
      collectionType: "CATEGORY",
      parentKey: "apparel-accessories",
      locales: [
        {
          localeCode: "en-gb",
          label: "Bags",
          slug: "bags",
        },
        {
          localeCode: "sv-se",
          label: "Väskor",
          slug: "vaskor",
        },
      ],
    },
    {
      key: "backpacks",
      collectionType: "CATEGORY",
      parentKey: "bags",
      locales: [
        {
          localeCode: "en-gb",
          label: "Backpacks",
          slug: "backpacks",
        },
        {
          localeCode: "sv-se",
          label: "Ryggsäckar",
          slug: "ryggsackar",
        },
      ],
    },
    {
      key: "handbags",
      collectionType: "CATEGORY",
      parentKey: "bags",
      locales: [
        {
          localeCode: "en-gb",
          label: "Handbags",
          slug: "handbags",
        },
        {
          localeCode: "sv-se",
          label: "Handväskor",
          slug: "handvaskor",
        },
      ],
    },
    {
      key: "shoulder-bags",
      collectionType: "CATEGORY",
      parentKey: "bags",
      locales: [
        {
          localeCode: "en-gb",
          label: "Shoulder Bags",
          slug: "shoulder-bags",
        },
        {
          localeCode: "sv-se",
          label: "Axelväskor",
          slug: "axelvaskor",
        },
      ],
    },
    {
      key: "crossbody-bags",
      collectionType: "CATEGORY",
      parentKey: "bags",
      locales: [
        {
          localeCode: "en-gb",
          label: "Crossbody Bags",
          slug: "crossbody-bags",
        },
        {
          localeCode: "sv-se",
          label: "Crossbody-väskor",
          slug: "crossbody-vaskor",
        },
      ],
    },
    {
      key: "tote-bags",
      collectionType: "CATEGORY",
      parentKey: "bags",
      locales: [
        {
          localeCode: "en-gb",
          label: "Tote Bags",
          slug: "tote-bags",
        },
        {
          localeCode: "sv-se",
          label: "Shoppingväskor",
          slug: "shoppingvaskor",
        },
      ],
    },
    {
      key: "laptop-bags",
      collectionType: "CATEGORY",
      parentKey: "bags",
      locales: [
        {
          localeCode: "en-gb",
          label: "Laptop Bags",
          slug: "laptop-bags",
        },
        {
          localeCode: "sv-se",
          label: "Datorväskor",
          slug: "datorvaskor",
        },
      ],
    },
    {
      key: "luggage",
      collectionType: "CATEGORY",
      parentKey: "bags",
      locales: [
        {
          localeCode: "en-gb",
          label: "Luggage",
          slug: "luggage",
        },
        {
          localeCode: "sv-se",
          label: "Resväskor",
          slug: "resvaskor",
        },
      ],
    },
    {
      key: "accessories",
      collectionType: "CATEGORY",
      parentKey: "apparel-accessories",
      locales: [
        {
          localeCode: "en-gb",
          label: "Accessories",
          slug: "accessories",
        },
        {
          localeCode: "sv-se",
          label: "Accessoarer",
          slug: "accessoarer",
        },
      ],
    },
    {
      key: "hats-caps",
      collectionType: "CATEGORY",
      parentKey: "accessories",
      locales: [
        {
          localeCode: "en-gb",
          label: "Hats & Caps",
          slug: "hats-caps",
        },
        {
          localeCode: "sv-se",
          label: "Hattar & Kepsar",
          slug: "hattar-kepsar",
        },
      ],
    },
    {
      key: "scarves-gloves",
      collectionType: "CATEGORY",
      parentKey: "accessories",
      locales: [
        {
          localeCode: "en-gb",
          label: "Scarves & Gloves",
          slug: "scarves-gloves",
        },
        {
          localeCode: "sv-se",
          label: "Halsdukar & Handskar",
          slug: "halsdukar-handskar",
        },
      ],
    },
    {
      key: "belts",
      collectionType: "CATEGORY",
      parentKey: "accessories",
      locales: [
        {
          localeCode: "en-gb",
          label: "Belts",
          slug: "belts",
        },
        {
          localeCode: "sv-se",
          label: "Skärp",
          slug: "skarp",
        },
      ],
    },
    {
      key: "sunglasses-eyewear",
      collectionType: "CATEGORY",
      parentKey: "accessories",
      locales: [
        {
          localeCode: "en-gb",
          label: "Sunglasses & Eyewear",
          slug: "sunglasses-eyewear",
        },
        {
          localeCode: "sv-se",
          label: "Solglasögon & Glasögon",
          slug: "solglasogon-glasogon",
        },
      ],
    },
    {
      key: "hair-accessories",
      collectionType: "CATEGORY",
      parentKey: "accessories",
      locales: [
        {
          localeCode: "en-gb",
          label: "Hair Accessories",
          slug: "hair-accessories",
        },
        {
          localeCode: "sv-se",
          label: "Håraccessoarer",
          slug: "haraccessoarer",
        },
      ],
    },
    {
      key: "jewellery",
      collectionType: "CATEGORY",
      parentKey: "apparel-accessories",
      locales: [
        {
          localeCode: "en-gb",
          label: "Jewellery",
          slug: "jewellery",
        },
        {
          localeCode: "sv-se",
          label: "Smycken",
          slug: "smycken",
        },
      ],
    },
    {
      key: "necklaces",
      collectionType: "CATEGORY",
      parentKey: "jewellery",
      locales: [
        {
          localeCode: "en-gb",
          label: "Necklaces",
          slug: "necklaces",
        },
        {
          localeCode: "sv-se",
          label: "Halsband",
          slug: "halsband",
        },
      ],
    },
    {
      key: "bracelets",
      collectionType: "CATEGORY",
      parentKey: "jewellery",
      locales: [
        {
          localeCode: "en-gb",
          label: "Bracelets",
          slug: "bracelets",
        },
        {
          localeCode: "sv-se",
          label: "Armband",
          slug: "armband",
        },
      ],
    },
    {
      key: "earrings",
      collectionType: "CATEGORY",
      parentKey: "jewellery",
      locales: [
        {
          localeCode: "en-gb",
          label: "Earrings",
          slug: "earrings",
        },
        {
          localeCode: "sv-se",
          label: "Örhängen",
          slug: "orhangen",
        },
      ],
    },
    {
      key: "rings",
      collectionType: "CATEGORY",
      parentKey: "jewellery",
      locales: [
        {
          localeCode: "en-gb",
          label: "Rings",
          slug: "rings",
        },
        {
          localeCode: "sv-se",
          label: "Ringar",
          slug: "ringar",
        },
      ],
    },
    {
      key: "anklets",
      collectionType: "CATEGORY",
      parentKey: "jewellery",
      locales: [
        {
          localeCode: "en-gb",
          label: "Anklets",
          slug: "anklets",
        },
        {
          localeCode: "sv-se",
          label: "Fotlänkar",
          slug: "fotlankar",
        },
      ],
    },
    {
      key: "brooches-pins",
      collectionType: "CATEGORY",
      parentKey: "jewellery",
      locales: [
        {
          localeCode: "en-gb",
          label: "Brooches & Pins",
          slug: "brooches-pins",
        },
        {
          localeCode: "sv-se",
          label: "Broscher & Nålar",
          slug: "broscher-nalar",
        },
      ],
    },
    {
      key: "watches",
      collectionType: "CATEGORY",
      parentKey: "apparel-accessories",
      locales: [
        {
          localeCode: "en-gb",
          label: "Watches",
          slug: "watches",
        },
        {
          localeCode: "sv-se",
          label: "Klockor",
          slug: "klockor",
        },
      ],
    },
    {
      key: "analog-watches",
      collectionType: "CATEGORY",
      parentKey: "watches",
      locales: [
        {
          localeCode: "en-gb",
          label: "Analog Watches",
          slug: "analog-watches",
        },
        {
          localeCode: "sv-se",
          label: "Analoga Klockor",
          slug: "analoga-klockor",
        },
      ],
    },
    {
      key: "digital-watches",
      collectionType: "CATEGORY",
      parentKey: "watches",
      locales: [
        {
          localeCode: "en-gb",
          label: "Digital Watches",
          slug: "digital-watches",
        },
        {
          localeCode: "sv-se",
          label: "Digitala Klockor",
          slug: "digitala-klockor",
        },
      ],
    },
    {
      key: "smartwatches",
      collectionType: "CATEGORY",
      parentKey: "watches",
      locales: [
        {
          localeCode: "en-gb",
          label: "Smartwatches",
          slug: "smartwatches",
        },
        {
          localeCode: "sv-se",
          label: "Smartklockor",
          slug: "smartklockor",
        },
      ],
    },
    {
      key: "watch-accessories",
      collectionType: "CATEGORY",
      parentKey: "watches",
      locales: [
        {
          localeCode: "en-gb",
          label: "Watch Accessories",
          slug: "watch-accessories",
        },
        {
          localeCode: "sv-se",
          label: "Klocktillbehör",
          slug: "klocktillbehor",
        },
      ],
    },
    {
      key: "home-living",
      collectionType: "CATEGORY",
      locales: [
        {
          localeCode: "en-gb",
          label: "Home & Living",
          slug: "home-living",
        },
        {
          localeCode: "sv-se",
          label: "Hem & Inredning",
          slug: "hem-inredning",
        },
      ],
    },
    {
      key: "electronics",
      collectionType: "CATEGORY",
      locales: [
        { localeCode: "en-gb", label: "Electronics", slug: "electronics" },
        { localeCode: "sv-se", label: "Elektronik", slug: "elektronik" },
      ],
    },
    {
      key: "tools-hardware",
      collectionType: "CATEGORY",
      locales: [
        {
          localeCode: "en-gb",
          label: "Tools & Hardware",
          slug: "tools-hardware",
        },
        {
          localeCode: "sv-se",
          label: "Verktyg & Utrustning",
          slug: "verktyg-utrustning",
        },
      ],
    },
    {
      key: "sports-outdoors",
      collectionType: "CATEGORY",
      locales: [
        {
          localeCode: "en-gb",
          label: "Sports & Outdoors",
          slug: "sports-outdoors",
        },
        {
          localeCode: "sv-se",
          label: "Sport & Fritid",
          slug: "sport-fritid",
        },
      ],
    },
    {
      key: "baby-kids",
      collectionType: "CATEGORY",
      locales: [
        { localeCode: "en-gb", label: "Baby & Kids", slug: "baby-kids" },
        { localeCode: "sv-se", label: "Baby & Barn", slug: "baby-barn" },
      ],
    },
    {
      key: "pets",
      collectionType: "CATEGORY",
      locales: [
        { localeCode: "en-gb", label: "Pets", slug: "pets" },
        { localeCode: "sv-se", label: "Husdjur", slug: "husdjur" },
      ],
    },
    {
      key: "beauty-personal-care",
      collectionType: "CATEGORY",
      locales: [
        {
          localeCode: "en-gb",
          label: "Beauty & Personal Care",
          slug: "beauty-personal-care",
        },
        {
          localeCode: "sv-se",
          label: "Skönhet & Hälsa",
          slug: "skonhet-halsa",
        },
      ],
    },
    {
      key: "groceries-pantry",
      collectionType: "CATEGORY",
      locales: [
        {
          localeCode: "en-gb",
          label: "Groceries & Pantry",
          slug: "groceries-pantry",
        },
        {
          localeCode: "sv-se",
          label: "Mat & Förbrukning",
          slug: "mat-forbrukning",
        },
      ],
    },
    {
      key: "automotive",
      collectionType: "CATEGORY",
      locales: [
        { localeCode: "en-gb", label: "Automotive", slug: "automotive" },
        {
          localeCode: "sv-se",
          label: "Bil & Tillbehör",
          slug: "bil-tillbehor",
        },
      ],
    },
  ];

  const now = new Date();

  // Map to track created collections and their data
  const collectionMap = {}; // key => { id, parentKey, locales }

  for (const item of collections) {
    const created = await prisma.collection.upsert({
      where: { key: item.key },
      update: {
        collectionType: item.collectionType,
        updatedAt: now,
      },
      create: {
        key: item.key,
        collectionType: item.collectionType,
        createdAt: now,
        updatedAt: now,
      },
    });

    collectionMap[item.key] = {
      id: created.id,
      parentKey: item.parentKey || null,
      locales: item.locales,
    };
  }

  // Step 2: Set parentId on collections
  for (const item of collections) {
    if (!item.parentKey) continue;

    const childId = collectionMap[item.key].id;
    const parentId = collectionMap[item.parentKey]?.id;
    if (!childId || !parentId) continue;

    await prisma.collection.update({
      where: { id: childId },
      data: { parentId },
    });
  }

  // Step 3: Seed translations with path
  for (const [key, data] of Object.entries(collectionMap)) {
    for (const locale of data.locales || []) {
      const localeRecord = await prisma.locale.findUnique({
        where: { code: locale.localeCode },
      });
      if (!localeRecord) continue;

      // Build path by walking up the tree
      let currentKey = key;
      const segments = [];

      while (currentKey) {
        const current = collectionMap[currentKey];
        const currentLocale = current.locales.find(
          (loc) => loc.localeCode === locale.localeCode
        );
        segments.unshift(currentLocale?.label || currentKey);
        currentKey = current.parentKey;
      }

      const path = segments.join(" > ");

      await prisma.collectionTranslation.upsert({
        where: {
          localeId_collectionId: {
            localeId: localeRecord.id,
            collectionId: data.id,
          },
        },
        update: {
          label: locale.label,
          slug: locale.slug,
          path,
          updatedAt: now,
        },
        create: {
          localeId: localeRecord.id,
          collectionId: data.id,
          label: locale.label,
          slug: locale.slug,
          path,
          createdAt: now,
          updatedAt: now,
        },
      });
    }
  }

  console.log("✅ Collections with paths seeded");
}

module.exports = seedCollections;
