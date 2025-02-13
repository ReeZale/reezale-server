const express = require("express");
const {
  checkDeliveryOption,
  checkPickupOption,
  createShipmentRequest,
  getDeliveryLabel,
  cancelShipment,
  getLastStatusUpdate,
  getAllStatusUpdates,
} = require("../services/transport/earybird");
const router = express.Router();

router.get("/delivery-options/:productId", async (req, res) => {
  try {
    // Validate required fields

    const productId = req.params.productId;

    if (!productId) {
      return res.status(400).json({ error: "Missing productId or request" });
    }

    const { desiredDeliveryDate, country, zip, city, address, volume, weight } =
      req.body;

    if (
      !desiredDeliveryDate ||
      !country ||
      !zip ||
      !city ||
      !address ||
      !volume ||
      !weight
    ) {
      return res
        .status(400)
        .json({ error: "Missing required request parameters" });
    }

    // Call external service

    const response = await checkDeliveryOption(productId, req.body);

    if (!response) {
      return res.status(404).json({ error: "No delivery options available" });
    }

    return res.status(200).json({ data: response });
  } catch (error) {
    console.error("Error fetching delivery options:", error);
    return res.status(500).json({ error: "Uncaught server error" });
  }
});

//does not work. Waiting for early bird to fix
router.get("/pickup-options/:productId", async (req, res) => {
  try {
    // Validate required fields
    const productId = req.params.productId;

    if (!productId) {
      return res.status(400).json({ error: "Missing productId or request" });
    }

    const { desiredDeliveryDate, country, zip, city, address, volume, weight } =
      req.body;

    if (
      !desiredDeliveryDate ||
      !country ||
      !zip ||
      !city ||
      !address ||
      !volume ||
      !weight
    ) {
      return res
        .status(400)
        .json({ error: "Missing required request parameters" });
    }

    // Call external service
    const response = await checkPickupOption(productId, req.body);

    if (!response) {
      return res.status(404).json({ error: "No delivery options available" });
    }

    return res.status(200).json({ data: response });
  } catch (error) {
    console.error("Error fetching delivery options:", error);
    return res.status(500).json({ error: "Uncaught server error" });
  }
});

router.post("/create-order", async (req, res) => {
  try {
    const { orderId, productId, sender, receiver, parcels, deliveryDay } =
      req.body;

    // ✅ Validate Top-Level Fields
    if (
      !orderId ||
      !productId ||
      !sender ||
      !receiver ||
      !parcels ||
      !deliveryDay
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // ✅ Destructure and Validate Sender & Receiver
    const requiredFields = ["name", "address", "city", "zip"];

    const validatePerson = (person, type) => {
      if (!person || typeof person !== "object") {
        throw new Error(`❌ ${type} details are missing`);
      }

      requiredFields.forEach((field) => {
        if (!person[field]) {
          throw new Error(`❌ ${type} is missing '${field}'`);
        }
      });
    };

    try {
      validatePerson(sender, "Sender");
      validatePerson(receiver, "Receiver");
    } catch (validationError) {
      return res.status(400).json({ error: validationError.message });
    }

    // ✅ Validate Parcels (Ensure it's an array with valid objects)
    if (!Array.isArray(parcels) || parcels.length === 0) {
      return res.status(400).json({ error: "At least one parcel is required" });
    }

    for (let index = 0; index < parcels.length; index++) {
      const parcel = parcels[index];
      if (!parcel.weight || !parcel.height || !parcel.width || !parcel.length) {
        return res.status(400).json({
          error: `Parcel at index ${index} is missing required dimensions`,
        });
      }
    }

    const orderPayload = {
      orderId,
      productId,
      sender,
      receiver,
      parcels,
      deliveryDay,
    };

    console.log("📦 Creating Order:", JSON.stringify(orderPayload, null, 2));

    // ✅ Call External Service to Create Order
    const response = await createShipmentRequest(orderPayload);

    if (!response) {
      return res.status(500).json({ error: "Failed to create order" });
    }

    return res.status(200).json({ data: response });
  } catch (error) {
    console.error("Error creating order:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/get-label/:deliveryId", async (req, res) => {
  try {
    const { deliveryId } = req.params;
    const { format, size } = req.query;

    // Fetch the file from the API
    const labelResponse = await getDeliveryLabel(deliveryId, format, size);

    if (!labelResponse) {
      return res.status(500).json({ error: "Failed to fetch label" });
    }

    // Set the correct content type
    res.setHeader("Content-Type", labelResponse.contentType);
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=label.${format}`
    );

    // Send the file buffer as response
    return res.send(labelResponse.buffer);
  } catch (error) {
    console.error("Error retrieving delivery label:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/cancel-order/:identifier", async (req, res) => {
  const identifier = req.params.identifier;
  if (!identifier) {
    return res.status(400).json({ error: "Missing order identifier" });
  }

  try {
    await cancelShipment(identifier);

    return res.status(204).json({ data: "Shipment canceled" });
  } catch (error) {
    console.error("Error creating order:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/last-update/:trackingId", async (req, res) => {
  const trackingId = req.params.trackingId;
  const { language = "en" } = req.query;
  if (!trackingId) {
    return res.status(400).json({ error: "Missing trackingId" });
  }

  try {
    const response = await getLastStatusUpdate(trackingId, language);

    return res.status(200).json({ data: response });
  } catch (error) {
    console.error("Error creating order:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/all-updates/:trackingId", async (req, res) => {
  const trackingId = req.params.trackingId;
  const { language = "en" } = req.query;

  if (!trackingId) {
    return res.status(400).json({ error: "Missing trackingId" });
  }

  try {
    const response = await getAllStatusUpdates(trackingId, language);

    return res.status(200).json({ data: response });
  } catch (error) {
    console.error("Error creating order:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
