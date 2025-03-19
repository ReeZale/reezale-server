const prisma = require("../../config/prisma");

const uploadStandardFields = async () => {
  const standardFields = [
    {
      key: "color",
      name: "Color",
      description: "The primary color of the product.",
      index: true,
      type: "property",
      format: "color",
    },
    {
      key: "material",
      name: "Material",
      description: "The material composition of the product.",
      index: true,
      type: "property",
      format: "list",
    },
    {
      key: "size",
      name: "Size",
      description: "The size of the product, such as S, M, L, XL.",
      index: true,
      type: "variant",
      format: "list",
    },
    {
      key: "fit",
      name: "Fit",
      description:
        "Describes how the product fits the body, e.g., slim fit, regular fit, loose fit.",
      index: true,
      type: "property",
      format: "list",
    },
    {
      key: "sleeve_length",
      name: "Sleeve Length",
      description:
        "Indicates the length of the sleeves, such as short, long, sleeveless.",
      index: true,
      type: "property",
      format: "list",
    },
    {
      key: "neckline",
      name: "Neckline",
      description:
        "The shape of the neckline, such as V-neck, crewneck, turtleneck.",
      index: true,
      type: "property",
      format: "list",
    },
    {
      key: "pattern",
      name: "Pattern",
      description:
        "The design pattern on the product, such as solid, striped, floral.",
      index: true,
      type: "property",
      format: "list",
    },
    {
      key: "season",
      name: "Season",
      description:
        "The intended season for the product, such as summer, winter, all-season.",
      index: true,
      type: "property",
      format: "list",
    },
    {
      key: "occasion",
      name: "Occasion",
      description:
        "The type of occasion the product is suitable for, e.g., casual, formal, athletic.",
      index: true,
      type: "property",
      format: "list",
    },
    {
      key: "care_instructions",
      name: "Care Instructions",
      description: "Washing and maintenance guidelines for the product.",
      index: false,
      type: "property",
      format: "longText",
    },
    {
      key: "closure",
      name: "Closure Type",
      description: "The type of closure used, such as zipper, button, slip-on.",
      index: true,
      type: "property",
      format: "list",
    },
    {
      key: "waist_rise",
      name: "Waist Rise",
      description:
        "The height of the waistband, such as high-rise, mid-rise, low-rise.",
      index: true,
      type: "property",
      format: "list",
    },
    {
      key: "pockets",
      name: "Pockets",
      description: "Indicates if the product has pockets and their type.",
      index: false,
      type: "property",
      format: "text",
    },
    {
      key: "length",
      name: "Length",
      description:
        "The length of the product, such as short, knee-length, full-length.",
      index: true,
      type: "property",
      format: "list",
    },
    {
      key: "fabric_weight",
      name: "Fabric Weight",
      description: "The weight of the fabric, such as light, medium, heavy.",
      index: true,
      type: "property",
      format: "list",
    },
    {
      key: "sustainability",
      name: "Sustainability",
      description: "Indicates if the product is eco-friendly or sustainable.",
      index: false,
      type: "property",
      format: "text",
    },
    {
      key: "country_of_origin",
      name: "Country of Origin",
      description: "The country where the product was manufactured.",
      index: true,
      type: "property",
      format: "text",
    },
  ];
  try {
    console.log("Uploading standard fields...");

    await prisma.standardField.createMany({
      data: standardFields,
      skipDuplicates: true, // Avoids inserting duplicates if records exist
    });

    console.log("Standard fields uploaded successfully.");
  } catch (error) {
    console.error("Error uploading standard fields:", error);
  } finally {
    await prisma.$disconnect(); // Ensure the connection is closed
  }
};

module.exports = { uploadStandardFields };
