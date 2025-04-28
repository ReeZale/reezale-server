const express = require("express");
const router = express.Router();
const resellPlatformRouter = require("./routes/resell-platform");

router.use("/resell-platforms", resellPlatformRouter);

module.exports = router;
