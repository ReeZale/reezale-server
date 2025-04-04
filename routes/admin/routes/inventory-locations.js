const express = require("express");
const prisma = require("../../../config/prisma");
const retrieveLocationZone = require("../../../helpers/addressHelper");
const { generateId } = require("../../../helpers/generateId");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;

  try {
    const data = await prisma.inventoryLocation.findMany({
      where: {
        accountId: accountId,
      },
      orderBy: {
        name: "asc",
      },
    });

    const inventoryLocations = data.map((inventoryLocation) => ({
      id: inventoryLocation.id,
      name: inventoryLocation.name,
      displayAddress: inventoryLocation.displayAddress,
      locationType: inventoryLocation.locationType,
      createdAt: inventoryLocation.createdAt,
      updatedAt: inventoryLocation.updatedAt,
    }));
    return res.status(200).json({ inventoryLocations });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;
  try {
    const data = await prisma.inventoryLocation.findFirst({
      where: {
        id: id,
        accountId: accountId,
      },
      include: {
        locationZone: {
          include: {
            timeZone: true,
            country: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!data) {
      return res.status(404).json({ error: "Inventory location not found" });
    }

    const inventoryLocation = {
      id: data.id,
      name: data.name,
      displayAddress: data.displayAddress,
      street: data.street,
      unit: data.unit,
      city: data.city,
      countryId: data.locationZone.countryId,
      countryCode: data.locationZone.country.code,
      countryName: data.locationZone.country.name,
      timeZoneId: data.locationZone.timeZoneId,
      timeZoneLabel: data.locationZone.timeZone.label,
      locationType: data.locationType,
      latitude: data.latitude,
      longitude: data.longitude,
      contactEmail: data.contactEmail,
      contactPhone: data.contactPhone,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return res.status(200).json({ inventoryLocation });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const {
    name,
    address,
    locationType,
    priority,
    capacity,
    contactEmail,
    contactPhone,
  } = req.body;

  try {
    const locationZone = await retrieveLocationZone(address);
    const inventoryLocation = await prisma.inventoryLocation.create({
      data: {
        id: generateId("INL"),
        name: name,
        street: address.street,
        streetNumber: address.streetNumber,
        city: address.city,
        displayAddress: address.displayAddress,
        locationZoneId: locationZone.id,
        latitude: address.latitude,
        longitude: address.longitude,
        locationType: locationType,
        priority: priority,
        capacity: capacity,
        contactEmail: contactEmail,
        contactPhone: contactPhone,
        accountId: accountId,
      },
    });

    return res.status(201).json({ inventoryLocation });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const accountId = req.accountId;

  try {
    const inventoryLocation = await prisma.inventoryLocation.findFirst({
      where: {
        id: id,
        accountId: accountId,
      },
    });

    if (!inventoryLocation) {
      return res.status(403).json({
        error: "You are not authorized to delete this inventory location",
      });
    }

    await prisma.inventoryLocation.delete({
      where: { id: inventoryLocation.id },
    });
    return res.status(204).send();
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
