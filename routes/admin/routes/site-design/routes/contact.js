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
    const items = await prisma.storefrontContact.findMany({
      where: {
        accountId: accountId,
        storefrontId: storefrontId,
      },
      include: {
        country: true,
      },
    });

    const storefrontContacts = items.map((item) => ({
      id: item.id,
      name: item.name,
      email: item.email,
      telephone: item.telephone,
      formattedAddress: item.formattedAddress,
      lat: item.lat,
      lon: item.lon,
      weekdays: item.weekdays,
      startTime: item.startTime,
      endTime: item.endTime,
      placeId: item.placeId,
      isDefault: item.isDefault,
      countryId: item.countryId,
      countryLabel: item.country.label,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));
    return res.status(200).json({ storefrontContacts });
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
    const item = await prisma.storefrontContact.findFirst({
      where: {
        id: id,
        storefrontId: storefrontId,
        accountId: accountId,
      },
      include: {
        country: true,
      },
    });

    const storefrontContact = {
      id: item.id,
      name: item.name,
      email: item.email,
      telephone: item.telephone,
      formattedAddress: item.formattedAddress,
      lat: item.lat,
      lon: item.lon,
      weekdays: item.weekdays,
      startTime: item.startTime,
      endTime: item.endTime,
      placeId: item.placeId,
      isDefault: item.isDefault,
      countryId: item.countryId,
      countryLabel: item.country.label,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
    return res.status(200).json({ storefrontContact });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const localeCode = req.localeCode;
  const {
    name,
    email,
    telephone,
    formattedAddress,
    lat,
    lon,
    weekdays,
    startTime,
    endTime,
    placeId,
    isDefault,
    countryId,
  } = req.body; //data

  try {
    if (isDefault) {
      await prisma.storefrontContact.updateMany({
        where: {
          storefrontId,
          accountId,
        },
        data: {
          isDefault: false,
        },
      });
    }

    const item = await prisma.storefrontContact.create({
      data: {
        id: generateId("SFC"),
        name,
        email,
        telephone,
        formattedAddress,
        lat,
        lon,
        weekdays,
        startTime,
        endTime,
        placeId,
        isDefault,
        countryId,
        accountId,
        storefrontId,
      },
      include: {
        country: true,
      },
    });

    const storefrontContact = {
      id: item.id,
      name: item.name,
      email: item.email,
      telephone: item.telephone,
      formattedAddress: item.formattedAddress,
      lat: item.lat,
      lon: item.lon,
      weekdays: item.weekdays,
      startTime: item.startTime,
      endTime: item.endTime,
      placeId: item.placeId,
      isDefault: item.isDefault,
      countryId: item.countryId,
      countryLabel: item.country.label,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
    return res.status(201).json({ storefrontContact });
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
  const {
    name,
    email,
    telephone,
    formattedAddress,
    lat,
    lon,
    weekdays,
    startTime,
    endTime,
    placeId,
    isDefault,
    countryId,
  } = req.body; //data

  try {
    const existingItem = await prisma.storefrontContact.findFirst({
      where: {
        id: id,
        storefrontId: storefrontId,
        accountId: accountId,
      },
    });
    if (existingItem) {
      return res.status(404).json({ error: "Record does not exists" });
    }

    if (isDefault) {
      await prisma.storefrontContact.updateMany({
        where: {
          storefrontId,
          accountId,
        },
        data: {
          isDefault: false,
        },
      });
    }

    const item = await prisma.storefrontContact.update({
      where: {
        id: existingItem.id,
      },
      data: {
        name,
        email,
        telephone,
        formattedAddress,
        lat,
        lon,
        weekdays,
        startTime,
        endTime,
        placeId,
        isDefault,
        countryId,
        accountId,
        storefrontId,
      },
      include: {
        country: true,
      },
    });
    const storefrontContact = {
      id: item.id,
      name: item.name,
      email: item.email,
      telephone: item.telephone,
      formattedAddress: item.formattedAddress,
      lat: item.lat,
      lon: item.lon,
      weekdays: item.weekdays,
      startTime: item.startTime,
      endTime: item.endTime,
      placeId: item.placeId,
      isDefault: item.isDefault,
      countryId: item.countryId,
      countryLabel: item.country.label,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };

    return res.status(201).json({ storefrontContact });
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
    const item = await prisma.storefrontContact.findFirst({
      where: {
        id: id,
        storefrontId: storefrontId,
        accountId: accountId,
      },
    });

    if (!item) {
      return res.status(404).json({ error: "Record not found" });
    }

    await prisma.storefrontContact.delete({
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
