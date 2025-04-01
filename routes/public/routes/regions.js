const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

router.get("/locales", async (req, res) => {
  try {
    const locales = await prisma.locale.findMany({
      include: {
        country: {
          include: {
            currency: true,
          },
        },
        language: true,
      },
    });

    return res.status(200).json({ locales });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/countries", async (req, res) => {
  try {
    const countries = await prisma.country.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return res.status(200).json({ countries });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/currencies", async (req, res) => {
  try {
    const currencies = await prisma.currency.findMany({
      orderBy: {
        code: "asc",
      },
    });

    return res.status(200).json({ currencies });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
