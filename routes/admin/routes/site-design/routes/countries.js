const express = require("express");
const prisma = require("../../../../../config/prisma");
const { generateId } = require("../../../../../helpers/generateId");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const localeCode = req.localeCode;
  const {} = req.query;

  try {
    const items = await prisma.storefrontCountry.findMany({
      where: {
        accountId: accountId,
        storefrontId: storefrontId,
      },
      include: {
        country: true,
        storefrontContact: true,
      },
    });

    const storefrontCountries = items.map((item) => ({
      id: item.id,
      countryId: item.countryId,
      countryLabel: item.country.name,
      contactId: item.storefrontContact.id,
      contactName: item.storefrontContact.name,
      contactAddress: item.storefrontContact.formattedAddress,
      contactEmail: item.storefrontContact.email,
      contactTelephone: item.storefrontContact.telephone,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));
    return res.status(200).json({ storefrontCountries });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const localeCode = req.localeCode;
  const { id } = req.params;

  try {
    const item = await prisma.storefrontCountry.findFirst({
      where: {
        id: id,
        storefrontId: storefrontId,
        accountId: accountId,
      },
      include: {
        country: true,
        storefrontContact: true,
      },
    });

    const storefrontCountry = {
      id: item.id,
      countryId: item.countryId,
      countryLabel: item.country.name,
      contactId: item.storefrontContact.id,
      contactName: item.storefrontContact.name,
      contactAddress: item.storefrontContact.formattedAddress,
      contactEmail: item.storefrontContact.email,
      contactTelephone: item.storefrontContact.telephone,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
    return res.status(200).json({ storefrontCountry });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const localeCode = req.localeCode;
  const { countryId, storefrontContactId } = req.body; //data

  try {
    const existingItem = await prisma.storefrontCountry.findUnique({
      where: {
        storefrontId_countryId: {
          storefrontId: storefrontId,
          countryId: countryId,
        },
      },
    });

    if (existingItem) {
      return res.status(409).json({ error: "Record already exists" });
    }

    const item = await prisma.storefrontCountry.create({
      data: {
        id: generateId("SFR"),
        countryId: countryId,
        storefrontContactId: storefrontContactId,
        storefrontId,
        accountId,
      },
      include: {
        country: true,
        storefrontContact: true,
      },
    });
    const storefrontCountry = {
      id: item.id,
      countryId: item.countryId,
      countryLabel: item.country.name,
      contactId: item.storefrontContact.id,
      contactName: item.storefrontContact.name,
      contactAddress: item.storefrontContact.formattedAddress,
      contactEmail: item.storefrontContact.email,
      contactTelephone: item.storefrontContact.telephone,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
    return res.status(201).json({ storefrontCountry });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});
router.put("/:id", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const localeCode = req.localeCode;
  const { id } = req.params;
  const { countryId, storefrontContactId } = req.body; //data

  try {
    const existingItem = await prisma.storefrontCountry.findFirst({
      where: {
        id: id,
        storefrontId: storefrontId,
        accountId: accountId,
      },
    });
    if (existingItem) {
      return res.status(404).json({ error: "Record does not exists" });
    }

    const item = await prisma.storefrontCountry.update({
      where: {
        id: existingItem.id,
      },
      data: {
        countryId: countryId,
        storefrontContactId: storefrontContactId,
      },
      include: {
        country: true,
        storefrontContact: true,
      },
    });
    const storefrontCountry = {
      id: item.id,
      countryId: item.countryId,
      countryLabel: item.country.name,
      contactId: item.storefrontContact.id,
      contactName: item.storefrontContact.name,
      contactAddress: item.storefrontContact.formattedAddress,
      contactEmail: item.storefrontContact.email,
      contactTelephone: item.storefrontContact.telephone,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };

    return res.status(201).json({ storefrontCountry });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const { id } = req.params;

  try {
    const item = await prisma.storefrontCountry.findFirst({
      where: {
        id: id,
        storefrontId: storefrontId,
        accountId: accountId,
      },
    });

    if (!item) {
      return res.status(404).json({ error: "Record not found" });
    }

    await prisma.storefrontCountry.delete({
      where: {
        id: id,
      },
    });
    return res.status(204).send();
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
