const express = require("express");
const router = express.Router();
const themeRouter = require("./routes/theme");

router.use("/themes", themeRouter);

module.exports = router;
