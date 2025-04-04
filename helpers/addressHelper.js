const prisma = require("../config/prisma");
const {
  getTimezone,
  getPostalCodeGeoData,
} = require("../services/locationServices");
const { generateId } = require("./generateId");

const retrieveLocationZone = async (address) => {
  const { locationZone } = address;

  const { countryCode, postalCode } = locationZone;

  if (!countryCode || !postalCode) {
    return { error: "Missing country code or postal code" };
  }

  try {
    const supportedCountry = await prisma.country.findFirst({
      where: {
        code: countryCode.toLowerCase(),
      },
    });

    if (!supportedCountry) {
      return { error: "Country is not supported" };
    }

    const existingLocationZone = await prisma.locationZone.findUnique({
      where: {
        countryId_postalCode: {
          countryId: supportedCountry.id,
          postalCode: postalCode.replace(/\s+/g, ""),
        },
      },
    });

    if (existingLocationZone) {
      return existingLocationZone;
    } else {
      const locationZone = await createLocationZone(
        supportedCountry,
        postalCode
      );

      return locationZone;
    }
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};

const createLocationZone = async (country, postalCode) => {
  try {
    const zoneData = await getPostalCodeGeoData(
      postalCode,
      country.code.toUpperCase()
    );
    const timeZoneData = await createTimeZone(
      zoneData.latitude,
      zoneData.longitude
    );

    const locationZone = await prisma.locationZone.create({
      data: {
        id: generateId("LZ"),
        key: `${country.code}-${postalCode}`,
        countryId: country.id,
        postalCode: postalCode,
        displayPostalCode: zoneData.displayPostalCode,
        placeName: zoneData.placeName,
        latitude: zoneData.latitude,
        longitude: zoneData.longitude,
        timeZoneId: timeZoneData.id,
      },
    });

    return locationZone;
  } catch (error) {
    return { error: "Country is not supported" };
  }
};

const createTimeZone = async (lat, lon) => {
  try {
    const timeZoneData = await getTimezone(lat, lon);

    if (!timeZone) {
      return { error: "Error creating a timezone" };
    }

    const timeZone = await prisma.timeZone.upsert({
      where: {
        id: timeZoneData.timeZoneId,
      },
      create: {
        id: timeZoneData.timeZoneId,
        label: timeZoneData.timeZoneName,
        offset: timeZoneData.rawOffset,
      },
      update: {},
    });

    return timeZone;
  } catch (error) {
    return { error: "Error creating a timezone" };
  }
};

module.exports = retrieveLocationZone;
