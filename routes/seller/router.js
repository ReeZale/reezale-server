const express = require("express");
const router = express.Router();
const layoutRouter = require("./routes/layout");
const itemsRouter = require("./routes/items");
const notificationsRouter = require("./routes/notification");

router.use("/layout", layoutRouter);
router.use("/items", itemsRouter);
router.use("/notifications", notificationsRouter);

module.exports = router;
