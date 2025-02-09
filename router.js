const express = require("express");
const router = express.Router();
const testRouter = require("./routes/test");
const feedRouter = require("./routes/product-feeds");
const offerRouter = require("./routes/offer");
const navigationRouter = require("./routes/navigation");
const itemsRouteer = require("./routes/items");
const inventoryRouter = require("./routes/inventory");

const authenticateSeller = require("./middleware/authenticateSeller");

router.use("/test", testRouter);
router.use("/feeds", feedRouter);
router.use("/offers", authenticateSeller, offerRouter);
router.use("/navigation", authenticateSeller, navigationRouter);
router.use("/items", authenticateSeller, itemsRouteer);
router.use("/inventory", authenticateSeller, inventoryRouter);

module.exports = router;
