const prisma = require("../config/prisma");

const uploadColors = async () => {
  const translations = {
    "en-gb": "Color",
    "sv-se": "Färg",
  };

  const options = [
    {
      key: "black",
      translations: {
        "en-gb": "Black",
        "sv-se": "Svart",
      },
    },
    {
      key: "white",
      translations: {
        "en-gb": "White",
        "sv-se": "Vit",
      },
    },
    {
      key: "gray",
      translations: {
        "en-gb": "Gray",
        "sv-se": "Grå",
      },
    },
    {
      key: "red",
      translations: {
        "en-gb": "Red",
        "sv-se": "Röd",
      },
    },
    {
      key: "blue",
      translations: {
        "en-gb": "Blue",
        "sv-se": "Blå",
      },
    },
    {
      key: "green",
      translations: {
        "en-gb": "Green",
        "sv-se": "Grön",
      },
    },
    {
      key: "yellow",
      translations: {
        "en-gb": "Yellow",
        "sv-se": "Gul",
      },
    },
    {
      key: "orange",
      translations: {
        "en-gb": "Orange",
        "sv-se": "Orange",
      },
    },
    {
      key: "purple",
      translations: {
        "en-gb": "Purple",
        "sv-se": "Lila",
      },
    },
    {
      key: "pink",
      translations: {
        "en-gb": "Pink",
        "sv-se": "Rosa",
      },
    },
    {
      key: "brown",
      translations: {
        "en-gb": "Brown",
        "sv-se": "Brun",
      },
    },
    {
      key: "beige",
      translations: {
        "en-gb": "Beige",
        "sv-se": "Beige",
      },
    },
    {
      key: "cyan",
      translations: {
        "en-gb": "Cyan",
        "sv-se": "Cyan",
      },
    },
    {
      key: "magenta",
      translations: {
        "en-gb": "Magenta",
        "sv-se": "Magenta",
      },
    },
    {
      key: "navy",
      translations: {
        "en-gb": "Navy",
        "sv-se": "Marinblå",
      },
    },
    {
      key: "olive",
      translations: {
        "en-gb": "Olive",
        "sv-se": "Olivgrön",
      },
    },
    {
      key: "teal",
      translations: {
        "en-gb": "Teal",
        "sv-se": "Petrol",
      },
    },
    {
      key: "gold",
      translations: {
        "en-gb": "Gold",
        "sv-se": "Guld",
      },
    },
    {
      key: "silver",
      translations: {
        "en-gb": "Silver",
        "sv-se": "Silver",
      },
    },
  ];

  const newColors = await prisma.property.create({
    data: {
      key: "color",
      label: "Color",
      translations: translations,
      options: options,
    },
  });

  console.log("Colors", newColors);
};

const uploadMaterials = async () => {
  const translations = {
    "en-gb": "Material",
    "sv-se": "Material",
  };

  const options = [
    {
      key: "cotton",
      translations: {
        "en-gb": "Cotton",
        "sv-se": "Bomull",
      },
    },
    {
      key: "polyester",
      translations: {
        "en-gb": "Polyester",
        "sv-se": "Polyester",
      },
    },
    {
      key: "wool",
      translations: {
        "en-gb": "Wool",
        "sv-se": "Ull",
      },
    },
    {
      key: "leather",
      translations: {
        "en-gb": "Leather",
        "sv-se": "Läder",
      },
    },
    {
      key: "linen",
      translations: {
        "en-gb": "Linen",
        "sv-se": "Linne",
      },
    },
    {
      key: "silk",
      translations: {
        "en-gb": "Silk",
        "sv-se": "Siden",
      },
    },
    {
      key: "nylon",
      translations: {
        "en-gb": "Nylon",
        "sv-se": "Nylon",
      },
    },
    {
      key: "denim",
      translations: {
        "en-gb": "Denim",
        "sv-se": "Denim",
      },
    },
    {
      key: "spandex",
      translations: {
        "en-gb": "Spandex",
        "sv-se": "Spandex",
      },
    },
    {
      key: "viscose",
      translations: {
        "en-gb": "Viscose",
        "sv-se": "Viskos",
      },
    },
    {
      key: "acrylic",
      translations: {
        "en-gb": "Acrylic",
        "sv-se": "Akryl",
      },
    },
    {
      key: "rubber",
      translations: {
        "en-gb": "Rubber",
        "sv-se": "Gummi",
      },
    },
    {
      key: "metal",
      translations: {
        "en-gb": "Metal",
        "sv-se": "Metall",
      },
    },
    {
      key: "plastic",
      translations: {
        "en-gb": "Plastic",
        "sv-se": "Plast",
      },
    },
    {
      key: "wood",
      translations: {
        "en-gb": "Wood",
        "sv-se": "Trä",
      },
    },
    {
      key: "bamboo",
      translations: {
        "en-gb": "Bamboo",
        "sv-se": "Bambu",
      },
    },
    {
      key: "ceramic",
      translations: {
        "en-gb": "Ceramic",
        "sv-se": "Keramik",
      },
    },
    {
      key: "glass",
      translations: {
        "en-gb": "Glass",
        "sv-se": "Glas",
      },
    },
  ];

  const newMaterials = await prisma.property.create({
    data: {
      key: "material",
      label: "Material",
      translations: translations,
      options: options,
    },
  });

  console.log("Materials", newMaterials);
};

const uploadFits = async () => {
  const translations = {
    "en-gb": "Fit",
    "sv-se": "Passform",
  };

  const options = [
    {
      key: "slim",
      translations: {
        "en-gb": "Slim Fit",
        "sv-se": "Smal passform",
      },
    },
    {
      key: "regular",
      translations: {
        "en-gb": "Regular Fit",
        "sv-se": "Normal passform",
      },
    },
    {
      key: "relaxed",
      translations: {
        "en-gb": "Relaxed Fit",
        "sv-se": "Ledig passform",
      },
    },
    {
      key: "oversized",
      translations: {
        "en-gb": "Oversized Fit",
        "sv-se": "Oversized passform",
      },
    },
    {
      key: "tapered",
      translations: {
        "en-gb": "Tapered Fit",
        "sv-se": "Avsmalnande passform",
      },
    },
    {
      key: "skinny",
      translations: {
        "en-gb": "Skinny Fit",
        "sv-se": "Tight passform",
      },
    },
    {
      key: "loose",
      translations: {
        "en-gb": "Loose Fit",
        "sv-se": "Lös passform",
      },
    },
    {
      key: "cropped",
      translations: {
        "en-gb": "Cropped Fit",
        "sv-se": "Kort passform",
      },
    },
  ];

  const newFits = await prisma.property.create({
    data: {
      key: "fit",
      label: "Fit",
      translations: translations,
      options: options,
    },
  });

  console.log("Fits", newFits);
};

const uploadSleeveLengths = async () => {
  const translations = {
    "en-gb": "Sleeve Length",
    "sv-se": "Ärmlängd",
  };

  const options = [
    {
      key: "sleeveless",
      translations: {
        "en-gb": "Sleeveless",
        "sv-se": "Ärmlös",
      },
    },
    {
      key: "short",
      translations: {
        "en-gb": "Short Sleeve",
        "sv-se": "Kort ärm",
      },
    },
    {
      key: "half",
      translations: {
        "en-gb": "Half Sleeve",
        "sv-se": "Halv ärm",
      },
    },
    {
      key: "three_quarter",
      translations: {
        "en-gb": "Three-Quarter Sleeve",
        "sv-se": "Trekvartsärm",
      },
    },
    {
      key: "long",
      translations: {
        "en-gb": "Long Sleeve",
        "sv-se": "Lång ärm",
      },
    },
    {
      key: "extra_long",
      translations: {
        "en-gb": "Extra Long Sleeve",
        "sv-se": "Extra lång ärm",
      },
    },
  ];

  const newSleeveLengths = await prisma.property.create({
    data: {
      key: "sleeve_length",
      label: "Sleeve Length",
      translations: translations,
      options: options,
    },
  });

  console.log("Sleeve Lengths", newSleeveLengths);
};

const uploadNecklines = async () => {
  const translations = {
    "en-gb": "Neckline",
    "sv-se": "Ringning",
  };

  const options = [
    {
      key: "crew",
      translations: {
        "en-gb": "Crew Neck",
        "sv-se": "Rundhals",
      },
    },
    {
      key: "v_neck",
      translations: {
        "en-gb": "V-Neck",
        "sv-se": "V-ringning",
      },
    },
    {
      key: "scoop",
      translations: {
        "en-gb": "Scoop Neck",
        "sv-se": "Djup rundhals",
      },
    },
    {
      key: "square",
      translations: {
        "en-gb": "Square Neck",
        "sv-se": "Fyrkantig ringning",
      },
    },
    {
      key: "halter",
      translations: {
        "en-gb": "Halter Neck",
        "sv-se": "Halter-ringning",
      },
    },
    {
      key: "boat",
      translations: {
        "en-gb": "Boat Neck",
        "sv-se": "Båtringning",
      },
    },
    {
      key: "turtleneck",
      translations: {
        "en-gb": "Turtleneck",
        "sv-se": "Polo",
      },
    },
    {
      key: "off_shoulder",
      translations: {
        "en-gb": "Off Shoulder",
        "sv-se": "Axelbandslös",
      },
    },
    {
      key: "sweetheart",
      translations: {
        "en-gb": "Sweetheart Neck",
        "sv-se": "Sweetheart-ringning",
      },
    },
  ];

  const newNecklines = await prisma.property.create({
    data: {
      key: "neckline",
      label: "Neckline",
      translations: translations,
      options: options,
    },
  });

  console.log("Necklines", newNecklines);
};

const uploadWaistRise = async () => {
  const translations = {
    "en-gb": "Waist Rise",
    "sv-se": "Midjehöjd",
  };

  const options = [
    {
      key: "high",
      translations: { "en-gb": "High Rise", "sv-se": "Hög midja" },
    },
    {
      key: "mid",
      translations: { "en-gb": "Mid Rise", "sv-se": "Normal midja" },
    },
    {
      key: "low",
      translations: { "en-gb": "Low Rise", "sv-se": "Låg midja" },
    },
  ];

  await prisma.property.create({
    data: { key: "waist_rise", label: "Waist Rise", translations, options },
  });
};

const uploadInseam = async () => {
  const translations = {
    "en-gb": "Inseam Length",
    "sv-se": "Benlängd",
  };

  const options = [
    { key: "short", translations: { "en-gb": "Short", "sv-se": "Kort" } },
    { key: "regular", translations: { "en-gb": "Regular", "sv-se": "Normal" } },
    { key: "long", translations: { "en-gb": "Long", "sv-se": "Lång" } },
  ];

  await prisma.property.create({
    data: {
      key: "inseam_length",
      label: "Inseam Length",
      translations,
      options,
    },
  });
};

const uploadStretch = async () => {
  const translations = {
    "en-gb": "Stretch",
    "sv-se": "Stretch",
  };

  const options = [
    {
      key: "no_stretch",
      translations: { "en-gb": "No Stretch", "sv-se": "Ingen stretch" },
    },
    {
      key: "slight",
      translations: { "en-gb": "Slight Stretch", "sv-se": "Lätt stretch" },
    },
    {
      key: "stretch",
      translations: { "en-gb": "Stretch", "sv-se": "Stretch" },
    },
    {
      key: "super_stretch",
      translations: { "en-gb": "Super Stretch", "sv-se": "Mycket stretch" },
    },
  ];

  await prisma.property.create({
    data: { key: "stretch", label: "Stretch", translations, options },
  });
};

const uploadPattern = async () => {
  const translations = {
    "en-gb": "Pattern",
    "sv-se": "Mönster",
  };

  const options = [
    { key: "solid", translations: { "en-gb": "Solid", "sv-se": "Enfärgad" } },
    { key: "striped", translations: { "en-gb": "Striped", "sv-se": "Randig" } },
    { key: "plaid", translations: { "en-gb": "Plaid", "sv-se": "Rutig" } },
    {
      key: "checkered",
      translations: { "en-gb": "Checkered", "sv-se": "Schackrutig" },
    },
    { key: "floral", translations: { "en-gb": "Floral", "sv-se": "Blommig" } },
    {
      key: "polka_dot",
      translations: { "en-gb": "Polka Dot", "sv-se": "Prickig" },
    },
    {
      key: "herringbone",
      translations: { "en-gb": "Herringbone", "sv-se": "Fiskbensmönster" },
    },
    {
      key: "houndstooth",
      translations: { "en-gb": "Houndstooth", "sv-se": "Hundtandsmönster" },
    },
    {
      key: "camouflage",
      translations: { "en-gb": "Camouflage", "sv-se": "Kamouflage" },
    },
    {
      key: "paisley",
      translations: { "en-gb": "Paisley", "sv-se": "Paisley" },
    },
    {
      key: "animal_print",
      translations: { "en-gb": "Animal Print", "sv-se": "Djurmotiv" },
    },
    {
      key: "geometric",
      translations: { "en-gb": "Geometric", "sv-se": "Geometrisk" },
    },
    {
      key: "abstract",
      translations: { "en-gb": "Abstract", "sv-se": "Abstrakt" },
    },
    { key: "tie_dye", translations: { "en-gb": "Tie Dye", "sv-se": "Batikk" } },
    {
      key: "color_block",
      translations: { "en-gb": "Color Block", "sv-se": "Färgblock" },
    },
    {
      key: "leopard",
      translations: { "en-gb": "Leopard", "sv-se": "Leopardmönster" },
    },
    {
      key: "snake_skin",
      translations: { "en-gb": "Snake Skin", "sv-se": "Ormskinn" },
    },
    { key: "marble", translations: { "en-gb": "Marble", "sv-se": "Marmor" } },
    { key: "ombre", translations: { "en-gb": "Ombre", "sv-se": "Ombre" } },
    {
      key: "graphic",
      translations: { "en-gb": "Graphic", "sv-se": "Grafisk" },
    },
  ];

  await prisma.property.create({
    data: { key: "pattern", label: "Pattern", translations, options },
  });
};

const uploadKnitTypes = async () => {
  const translations = {
    "en-gb": "Knit Type",
    "sv-se": "Sticktyp",
  };

  const options = [
    {
      key: "cable_knit",
      translations: {
        "en-gb": "Cable Knit",
        "sv-se": "Flätstickad",
      },
    },
    {
      key: "ribbed_knit",
      translations: {
        "en-gb": "Ribbed Knit",
        "sv-se": "Ribbstickad",
      },
    },
    {
      key: "chunky_knit",
      translations: {
        "en-gb": "Chunky Knit",
        "sv-se": "Grovstickad",
      },
    },
    {
      key: "fine_knit",
      translations: {
        "en-gb": "Fine Knit",
        "sv-se": "Finstickad",
      },
    },
    {
      key: "waffle_knit",
      translations: {
        "en-gb": "Waffle Knit",
        "sv-se": "Våffelstickad",
      },
    },
    {
      key: "fisherman_knit",
      translations: {
        "en-gb": "Fisherman Knit",
        "sv-se": "Fiskarstickad",
      },
    },
  ];

  const newKnitType = await prisma.property.create({
    data: {
      key: "knit_type",
      label: "Knit Type",
      translations,
      options,
    },
  });

  console.log("Knit Types Created:", newKnitType);
};

const uploadClosureTypes = async () => {
  const translations = {
    "en-gb": "Closure Type",
    "sv-se": "Stängningstyp",
  };

  const options = [
    {
      key: "zipper",
      translations: {
        "en-gb": "Zipper",
        "sv-se": "Dragkedja",
      },
    },
    {
      key: "buttons",
      translations: {
        "en-gb": "Buttons",
        "sv-se": "Knappar",
      },
    },
    {
      key: "hook_and_eye",
      translations: {
        "en-gb": "Hook and Eye",
        "sv-se": "Hake och ögla",
      },
    },
    {
      key: "snap",
      translations: {
        "en-gb": "Snap",
        "sv-se": "Tryckknapp",
      },
    },
    {
      key: "belt",
      translations: {
        "en-gb": "Belt",
        "sv-se": "Bälte",
      },
    },
    {
      key: "lace_up",
      translations: {
        "en-gb": "Lace-up",
        "sv-se": "Snörning",
      },
    },
    {
      key: "toggle",
      translations: {
        "en-gb": "Toggle",
        "sv-se": "Toggla",
      },
    },
    {
      key: "no_closure",
      translations: {
        "en-gb": "No Closure",
        "sv-se": "Utan stängning",
      },
    },
  ];

  const newClosureType = await prisma.property.create({
    data: {
      key: "closure_type",
      label: "Closure Type",
      translations,
      options,
    },
  });

  console.log("Closure Types Created:", newClosureType);
};

const uploadCollarTypes = async () => {
  const translations = {
    "en-gb": "Collar Type",
    "sv-se": "Krage",
  };

  const options = [
    {
      key: "crew_neck",
      translations: {
        "en-gb": "Crew Neck",
        "sv-se": "Rund hals",
      },
    },
    {
      key: "v_neck",
      translations: {
        "en-gb": "V-Neck",
        "sv-se": "V-ringning",
      },
    },
    {
      key: "polo",
      translations: {
        "en-gb": "Polo",
        "sv-se": "Piké",
      },
    },
    {
      key: "mock_neck",
      translations: {
        "en-gb": "Mock Neck",
        "sv-se": "Hög krage",
      },
    },
    {
      key: "turtleneck",
      translations: {
        "en-gb": "Turtleneck",
        "sv-se": "Polokrage",
      },
    },
    {
      key: "spread_collar",
      translations: {
        "en-gb": "Spread Collar",
        "sv-se": "Spridd krage",
      },
    },
    {
      key: "mandarin_collar",
      translations: {
        "en-gb": "Mandarin Collar",
        "sv-se": "Mandarin krage",
      },
    },
    {
      key: "shawl_collar",
      translations: {
        "en-gb": "Shawl Collar",
        "sv-se": "Sjal krage",
      },
    },
    {
      key: "button_down",
      translations: {
        "en-gb": "Button-Down Collar",
        "sv-se": "Knappkrage",
      },
    },
    {
      key: "no_collar",
      translations: {
        "en-gb": "No Collar",
        "sv-se": "Utan krage",
      },
    },
  ];

  const newCollarTypes = await prisma.property.create({
    data: {
      key: "collar_type",
      label: "Collar Type",
      translations,
      options,
    },
  });

  console.log("Collar Types Created:", newCollarTypes);
};

const uploadHemStyles = async () => {
  const translations = {
    "en-gb": "Hem Style",
    "sv-se": "Fållstil",
  };

  const options = [
    {
      key: "straight",
      translations: {
        "en-gb": "Straight Hem",
        "sv-se": "Rak fåll",
      },
    },
    {
      key: "ribbed",
      translations: {
        "en-gb": "Ribbed Hem",
        "sv-se": "Ribbade fåll",
      },
    },
    {
      key: "high_low",
      translations: {
        "en-gb": "High-Low Hem",
        "sv-se": "Hög-låg fåll",
      },
    },
    {
      key: "curved",
      translations: {
        "en-gb": "Curved Hem",
        "sv-se": "Rundad fåll",
      },
    },
    {
      key: "split",
      translations: {
        "en-gb": "Split Hem",
        "sv-se": "Delad fåll",
      },
    },
  ];

  const newHemStyles = await prisma.property.create({
    data: {
      key: "hem_style",
      label: "Hem Style",
      translations,
      options,
    },
  });

  console.log("Hem Styles Created:", newHemStyles);
};

const uploadWeights = async () => {
  const translations = {
    "en-gb": "Thickness / Weight",
    "sv-se": "Tjocklek / Vikt",
  };

  const options = [
    {
      key: "lightweight",
      translations: {
        "en-gb": "Lightweight",
        "sv-se": "Lätt",
      },
    },
    {
      key: "medium_weight",
      translations: {
        "en-gb": "Medium Weight",
        "sv-se": "Mellanvikt",
      },
    },
    {
      key: "heavyweight",
      translations: {
        "en-gb": "Heavyweight",
        "sv-se": "Tung",
      },
    },
  ];

  const newWeights = await prisma.property.create({
    data: {
      key: "thickness_weight",
      label: "Thickness / Weight",
      translations,
      options,
    },
  });

  console.log("Thickness / Weight Created:", newWeights);
};

const uploadSeasons = async () => {
  const translations = {
    "en-gb": "Season",
    "sv-se": "Säsong",
  };

  const options = [
    {
      key: "spring",
      translations: {
        "en-gb": "Spring",
        "sv-se": "Vår",
      },
    },
    {
      key: "summer",
      translations: {
        "en-gb": "Summer",
        "sv-se": "Sommar",
      },
    },
    {
      key: "autumn",
      translations: {
        "en-gb": "Autumn",
        "sv-se": "Höst",
      },
    },
    {
      key: "winter",
      translations: {
        "en-gb": "Winter",
        "sv-se": "Vinter",
      },
    },
    {
      key: "all_season",
      translations: {
        "en-gb": "All Season",
        "sv-se": "Året runt",
      },
    },
  ];

  const newSeasons = await prisma.property.create({
    data: {
      key: "season",
      label: "Season",
      translations,
      options,
    },
  });

  console.log("Seasons Created:", newSeasons);
};

const uploadOccasions = async () => {
  const translations = {
    "en-gb": "Occasion",
    "sv-se": "Tillfälle",
  };

  const options = [
    {
      key: "casual",
      translations: {
        "en-gb": "Casual",
        "sv-se": "Vardag",
      },
    },
    {
      key: "formal",
      translations: {
        "en-gb": "Formal",
        "sv-se": "Formell",
      },
    },
    {
      key: "business",
      translations: {
        "en-gb": "Business",
        "sv-se": "Affär",
      },
    },
    {
      key: "party",
      translations: {
        "en-gb": "Party",
        "sv-se": "Fest",
      },
    },
    {
      key: "sports",
      translations: {
        "en-gb": "Sports",
        "sv-se": "Sport",
      },
    },
    {
      key: "holiday",
      translations: {
        "en-gb": "Holiday",
        "sv-se": "Semester",
      },
    },
  ];

  const newOccasions = await prisma.property.create({
    data: {
      key: "occasion",
      label: "Occasion",
      translations,
      options,
    },
  });

  console.log("Occasions Created:", newOccasions);
};

const uploadDressLength = async () => {
  const translations = {
    "en-gb": "Dress Length",
    "sv-se": "Klänningens längd",
  };

  const options = [
    { key: "mini", translations: { "en-gb": "Mini", "sv-se": "Mini" } },
    {
      key: "knee_length",
      translations: { "en-gb": "Knee Length", "sv-se": "Knälång" },
    },
    { key: "midi", translations: { "en-gb": "Midi", "sv-se": "Midi" } },
    {
      key: "ankle_length",
      translations: { "en-gb": "Ankle Length", "sv-se": "Ankellång" },
    },
    { key: "maxi", translations: { "en-gb": "Maxi", "sv-se": "Maxi" } },
  ];

  const newProperty = await prisma.property.create({
    data: {
      key: "dress_length",
      label: "Dress Length",
      translations,
      options,
    },
  });

  console.log("Dress Length Created:", newProperty);
};

const uploadSilhouette = async () => {
  const translations = {
    "en-gb": "Silhouette",
    "sv-se": "Silhuett",
  };

  const options = [
    { key: "a_line", translations: { "en-gb": "A-Line", "sv-se": "A-linje" } },
    {
      key: "bodycon",
      translations: { "en-gb": "Bodycon", "sv-se": "Bodycon" },
    },
    { key: "shift", translations: { "en-gb": "Shift", "sv-se": "Rak" } },
    { key: "wrap", translations: { "en-gb": "Wrap", "sv-se": "Omlott" } },
    { key: "empire", translations: { "en-gb": "Empire", "sv-se": "Empire" } },
    {
      key: "ball_gown",
      translations: { "en-gb": "Ball Gown", "sv-se": "Balklänning" },
    },
    {
      key: "sheath",
      translations: { "en-gb": "Sheath", "sv-se": "Skräddarsydd" },
    },
    {
      key: "fit_and_flare",
      translations: {
        "en-gb": "Fit and Flare",
        "sv-se": "Figurformad & Utsvängd",
      },
    },
  ];

  const newProperty = await prisma.property.create({
    data: {
      key: "silhouette",
      label: "Silhouette",
      translations,
      options,
    },
  });

  console.log("Silhouette Created:", newProperty);
};

const uploadSleeveTypes = async () => {
  const translations = {
    "en-gb": "Sleeve Type",
    "sv-se": "Ärmtyp",
  };

  const options = [
    {
      key: "regular",
      translations: {
        "en-gb": "Regular",
        "sv-se": "Rak",
      },
    },
    {
      key: "puff",
      translations: {
        "en-gb": "Puff Sleeve",
        "sv-se": "Puffärm",
      },
    },
    {
      key: "bell",
      translations: {
        "en-gb": "Bell Sleeve",
        "sv-se": "Klockärm",
      },
    },
    {
      key: "batwing",
      translations: {
        "en-gb": "Batwing Sleeve",
        "sv-se": "Fladdermusärm",
      },
    },
    {
      key: "raglan",
      translations: {
        "en-gb": "Raglan Sleeve",
        "sv-se": "Raglanärm",
      },
    },
    {
      key: "kimono",
      translations: {
        "en-gb": "Kimono Sleeve",
        "sv-se": "Kimonoärm",
      },
    },
    {
      key: "bishop",
      translations: {
        "en-gb": "Bishop Sleeve",
        "sv-se": "Biskopsärm",
      },
    },
  ];

  const newSleeveTypes = await prisma.property.create({
    data: {
      key: "sleeve_type",
      label: "Sleeve Type",
      translations: translations,
      options: options,
    },
  });

  console.log("Sleeve Type Created:", newSleeveTypes);
};

const uploadPockets = async () => {
  const translations = {
    "en-gb": "Pockets",
    "sv-se": "Fickor",
  };

  const options = [
    {
      key: "no_pockets",
      translations: {
        "en-gb": "No Pockets",
        "sv-se": "Inga fickor",
      },
    },
    {
      key: "side_pockets",
      translations: {
        "en-gb": "Side Pockets",
        "sv-se": "Sidofickor",
      },
    },
    {
      key: "chest_pocket",
      translations: {
        "en-gb": "Chest Pocket",
        "sv-se": "Bröstficka",
      },
    },
    {
      key: "cargo_pockets",
      translations: {
        "en-gb": "Cargo Pockets",
        "sv-se": "Cargo-fickor",
      },
    },
    {
      key: "back_pockets",
      translations: {
        "en-gb": "Back Pockets",
        "sv-se": "Bakfickor",
      },
    },
    {
      key: "zip_pockets",
      translations: {
        "en-gb": "Zippered Pockets",
        "sv-se": "Dragkedjefickor",
      },
    },
    {
      key: "hidden_pockets",
      translations: {
        "en-gb": "Hidden Pockets",
        "sv-se": "Dolda fickor",
      },
    },
  ];

  const newPockets = await prisma.property.create({
    data: {
      key: "pockets",
      label: "Pockets",
      translations: translations,
      options: options,
    },
  });

  console.log("Pockets Created:", newPockets);
};

const uploadHoodType = async () => {
  const translations = {
    "en-gb": "Hood Type",
    "sv-se": "Huvas typ",
  };

  const options = [
    {
      key: "no_hood",
      translations: {
        "en-gb": "No Hood",
        "sv-se": "Ingen huva",
      },
    },
    {
      key: "fixed",
      translations: {
        "en-gb": "Fixed Hood",
        "sv-se": "Fast huva",
      },
    },
    {
      key: "detachable",
      translations: {
        "en-gb": "Detachable Hood",
        "sv-se": "Avtagbar huva",
      },
    },
    {
      key: "stowaway",
      translations: {
        "en-gb": "Stowaway Hood",
        "sv-se": "Infällbar huva",
      },
    },
  ];

  await prisma.property.create({
    data: {
      key: "hood_type",
      label: "Hood Type",
      translations: translations,
      options: options,
    },
  });
};

const uploadCuffType = async () => {
  const translations = {
    "en-gb": "Cuff Type",
    "sv-se": "Muddtyp",
  };

  const options = [
    {
      key: "open",
      translations: {
        "en-gb": "Open Cuff",
        "sv-se": "Öppen mudd",
      },
    },
    {
      key: "elastic",
      translations: {
        "en-gb": "Elastic Cuff",
        "sv-se": "Elastisk mudd",
      },
    },
    {
      key: "button",
      translations: {
        "en-gb": "Button Cuff",
        "sv-se": "Knappmudd",
      },
    },
    {
      key: "velcro",
      translations: {
        "en-gb": "Velcro Cuff",
        "sv-se": "Kardborremudd",
      },
    },
  ];

  await prisma.property.create({
    data: {
      key: "cuff_type",
      label: "Cuff Type",
      translations: translations,
      options: options,
    },
  });
};

const uploadInsulationType = async () => {
  const translations = {
    "en-gb": "Insulation Type",
    "sv-se": "Isoleringstyp",
  };

  const options = [
    {
      key: "none",
      translations: {
        "en-gb": "No Insulation",
        "sv-se": "Ingen isolering",
      },
    },
    {
      key: "down",
      translations: {
        "en-gb": "Down Insulation",
        "sv-se": "Dunisolering",
      },
    },
    {
      key: "synthetic",
      translations: {
        "en-gb": "Synthetic Insulation",
        "sv-se": "Syntetisk isolering",
      },
    },
    {
      key: "fleece",
      translations: {
        "en-gb": "Fleece Lined",
        "sv-se": "Fleecefodrad",
      },
    },
  ];

  await prisma.property.create({
    data: {
      key: "insulation_type",
      label: "Insulation Type",
      translations: translations,
      options: options,
    },
  });
};

const updateShoeProperties = async () => {
  const updates = [
    {
      key: "shoe_type",
      label: "Shoe Type",
      translations: {
        "en-gb": "Shoe Type",
        "sv-se": "Skotyp",
      },
      options: [
        {
          key: "sneakers",
          translations: { "en-gb": "Sneakers", "sv-se": "Sneakers" },
        },
        {
          key: "boots",
          translations: { "en-gb": "Boots", "sv-se": "Stövlar" },
        },
        {
          key: "loafers",
          translations: { "en-gb": "Loafers", "sv-se": "Loafers" },
        },
        {
          key: "heels",
          translations: { "en-gb": "Heels", "sv-se": "Klackar" },
        },
        {
          key: "sandals",
          translations: { "en-gb": "Sandals", "sv-se": "Sandaler" },
        },
        {
          key: "flats",
          translations: { "en-gb": "Flats", "sv-se": "Platta skor" },
        },
        {
          key: "slippers",
          translations: { "en-gb": "Slippers", "sv-se": "Tofflor" },
        },
        {
          key: "oxfords",
          translations: { "en-gb": "Oxfords", "sv-se": "Oxfords" },
        },
        {
          key: "brogues",
          translations: { "en-gb": "Brogues", "sv-se": "Brogues" },
        },
        { key: "mules", translations: { "en-gb": "Mules", "sv-se": "Mules" } },
        {
          key: "espadrilles",
          translations: { "en-gb": "Espadrilles", "sv-se": "Espadrilles" },
        },
      ],
    },
    {
      key: "toe_shape",
      label: "Toe Shape",
      translations: {
        "en-gb": "Toe Shape",
        "sv-se": "Tåform",
      },
      options: [
        { key: "round", translations: { "en-gb": "Round", "sv-se": "Rund" } },
        {
          key: "square",
          translations: { "en-gb": "Square", "sv-se": "Fyrkantig" },
        },
        {
          key: "pointed",
          translations: { "en-gb": "Pointed", "sv-se": "Spetsig" },
        },
        {
          key: "almond",
          translations: { "en-gb": "Almond", "sv-se": "Mandel" },
        },
        {
          key: "peep",
          translations: { "en-gb": "Peep Toe", "sv-se": "Öppen tå" },
        },
      ],
    },
    {
      key: "heel_height",
      label: "Heel Height",
      translations: {
        "en-gb": "Heel Height",
        "sv-se": "Klackhöjd",
      },
      options: [
        { key: "flat", translations: { "en-gb": "Flat", "sv-se": "Platt" } },
        {
          key: "low",
          translations: { "en-gb": "Low Heel", "sv-se": "Låg klack" },
        },
        {
          key: "mid",
          translations: { "en-gb": "Mid Heel", "sv-se": "Mellan klack" },
        },
        {
          key: "high",
          translations: { "en-gb": "High Heel", "sv-se": "Hög klack" },
        },
      ],
    },
  ];

  for (const update of updates) {
    await prisma.property.upsert({
      where: { key: update.key },
      update: { translations: update.translations, options: update.options },
      create: update,
    });
  }

  console.log("Shoe properties updated");
};

const getProperties = async () => {
  const properties = await prisma.property.findMany({
    select: {
      key: true,
    },
    orderBy: {
      key: "asc",
    },
  });

  console.log("Properties", properties);
};

module.exports = {
  uploadColors,
  uploadMaterials,
  uploadFits,
  uploadSleeveLengths,
  uploadNecklines,
  uploadWaistRise,
  uploadInseam,
  uploadStretch,
  uploadPattern,
  uploadKnitTypes,
  uploadClosureTypes,
  uploadCollarTypes,
  uploadHemStyles,
  uploadWeights,
  uploadSeasons,
  uploadOccasions,
  uploadDressLength,
  uploadSilhouette,
  uploadSleeveTypes,
  uploadPockets,
  uploadCuffType,
  uploadInsulationType,
  uploadHoodType,
  updateShoeProperties,
  getProperties,
};
