const express = require("express");
const createAddress = require("../helpers/database/createAddress");
const prisma = require("../config/prisma");
const router = express.Router();

router.post("/seller", async (req, res) => {
  const { name, email, phone, street, unit, postCode, city, countryCode } =
    req.body;

  if (!name || !street || unit || !postCode || !city || !countryCode) {
    return res.status(400).json({ error: "Name is required" });
  }

  if (!email && !phone) {
    return res
      .status(400)
      .json({ error: "Either email or phone number is required" });
  }

  try {
    const country = await prisma.country.findUnique({
      where: {
        code: countryCode,
      },
    });

    if (!country) {
      return res
        .status(404)
        .json({ error: "Unsupported country code provided" });
    }

    const address = await createAddress(street, unit, postCode, city, country);

    const existingProfile = await prisma.sellerProfile.findFirst({
      where: {
        OR: [
          email ? { email } : {}, // Only search by email if provided
          phone ? { phone } : {}, // Only search by phone if provided
        ],
      },
    });

    if (existingProfile) {
      const profile = await prisma.sellerProfile.update({
        where: { id: existingProfile.id }, // Use ID since Prisma requires a unique field
        data: {
          name,
          email,
          phone,
          addressId: address.id,
        },
        include: {
          address: true,
        },
      });
      return res.status(200).json({ data: profile });
    }

    const profile = await prisma.sellerProfile.create({
      data: {
        name,
        email,
        phone,
        addressId: address.id,
      },
      include: {
        address: true,
      },
    });
    return res.status(201).json({ data: profile });
  } catch (error) {
    console.error("Error creating order:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/purchase", async (req, res) => {
  const { name, email, phone, street, unit, postCode, city, countryCode } =
    req.body;

  if (!name || !street || unit || !postCode || !city || !countryCode) {
    return res.status(400).json({ error: "Name is required" });
  }

  if (!email && !phone) {
    return res
      .status(400)
      .json({ error: "Either email or phone number is required" });
  }

  try {
    const country = await prisma.country.findUnique({
      where: {
        code: countryCode,
      },
    });

    if (!country) {
      return res
        .status(404)
        .json({ error: "Unsupported country code provided" });
    }

    const address = await createAddress(street, unit, postCode, city, country);

    const existingProfile = await prisma.purchaseProfile.findFirst({
      where: {
        OR: [
          email ? { email } : {}, // Only search by email if provided
          phone ? { phone } : {}, // Only search by phone if provided
        ],
      },
    });

    if (existingProfile) {
      const profile = await prisma.purchaseProfile.update({
        where: { id: existingProfile.id }, // Use ID since Prisma requires a unique field
        data: {
          name,
          email,
          phone,
          addressId: address.id,
        },
        include: {
          address: true,
        },
      });
      return res.status(200).json({ data: profile });
    }

    const profile = await prisma.purchaseProfile.create({
      data: {
        name,
        email,
        phone,
        addressId: address.id,
      },
      include: {
        address: true,
      },
    });
    return res.status(201).json({ data: profile });
  } catch (error) {
    console.error("Error creating order:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
