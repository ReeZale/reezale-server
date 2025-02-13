const prisma = require("../../config/prisma");

const createAddress = async (street, unit, postCode, city, country) => {
  try {
    if (!street || !postCode || !city || !country) {
      throw new Error("❌ Missing required address fields");
    }

    const formattedAddress = [
      street.trim(),
      unit ? unit.trim() : "", // Optional field
      postCode.trim(),
      city.trim(),
      country.code, // Assuming countryId is a numeric reference
    ]
      .filter(Boolean) // Removes empty strings
      .join(", ");

    const existingAddress = await prisma.address.findUnique({
      where: {
        formattedAddress: formattedAddress,
      },
    });

    if (existingAddress) {
      return existingAddress;
    }

    const newAddress = await prisma.address.create({
      data: {
        street,
        unit: unit || null,
        postCode,
        city,
        countryId: country.id,
        formattedAddress,
      },
    });

    console.log(`✅ Address created: ${newAddress.id}`);
    return newAddress;
  } catch (error) {
    console.error("❌ Error creating address:", error.message);
    throw new Error("Failed to create address");
  }
};

module.exports = createAddress;
