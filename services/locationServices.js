const axios = require("axios");

const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Replace with your Google Maps API key

const getTimeZoneData = async (lat, lng) => {
  const timestamp = Math.floor(Date.now() / 1000); // Current time in UNIX format

  const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${timestamp}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const { timeZoneId, timeZoneName, rawOffset, dstOffset } = response.data;

    console.log("Response data", response.data);

    return {
      timeZoneId, // e.g. "Europe/Stockholm"
      timeZoneName, // e.g. "Central European Summer Time"
      rawOffset, // Seconds offset from UTC (without DST)
      dstOffset, // Seconds offset due to DST
    };
  } catch (error) {
    console.error("Timezone API error:", error.response?.data || error.message);
    return null;
  }
};

const getPostalCodeGeoData = async (postalCode, countryCode) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${postalCode}&components=country:${countryCode}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const result = response.data.results[0];
    if (!result) return null;

    const { location } = result.geometry;
    const components = result.address_components;
    const formattedAddress = result.formatted_address;

    const getComponent = (type) =>
      components.find((c) => c.types.includes(type))?.long_name || null;

    const zone = {
      id: uuidv4(),
      key: `${countryCode}-${postalCode}`,
      postalCode: postalCode,
      displayPostalCode: getComponent("postal_code") || postalCode,
      placeName: formattedAddress,
      latitude: parseFloat(location.lat),
      longitude: parseFloat(location.lng),
    };

    return zone;
  } catch (error) {
    console.error("Timezone API error:", error.response?.data || error.message);
    return null;
  }
};

module.exports = { getTimeZoneData, getPostalCodeGeoData };
