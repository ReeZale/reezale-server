const express = require("express");
const router = express.Router();
const feedRouter = require("./routes/product-feeds");
const offerRouter = require("./routes/offer");
const navigationRouter = require("./routes/navigation");
const itemsRouteer = require("./routes/items");
const inventoryRouter = require("./routes/inventory");
const fileRouter = require("./routes/file");
const profileRouter = require("./routes/profile");
const shipmentRouter = require("./routes/shipments");
const paymentRouter = require("./routes/payment");

const authenticateSeller = require("./middleware/authenticateSeller");

router.use("/feeds", feedRouter);
router.use("/offers", authenticateSeller, offerRouter);
router.use("/navigation", authenticateSeller, navigationRouter);
router.use("/items", authenticateSeller, itemsRouteer);
router.use("/inventory", authenticateSeller, inventoryRouter);
router.use("/files", authenticateSeller, fileRouter);
router.use("/profiles", profileRouter);
router.use("/shipments", shipmentRouter);
router.use("/payments", paymentRouter);

module.exports = router;
