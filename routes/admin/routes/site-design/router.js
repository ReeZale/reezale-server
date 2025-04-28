const express = require("express");
const router = express.Router();
const themeRouter = require("./routes/theme");
const brandRouter = require("./routes/brand");
const localesRouter = require("./routes/locales");
const identityRouter = require("./routes/identity");
const countryRouter = require("./routes/countries");
const currencyRouter = require("./routes/currencies");
const contactRouter = require("./routes/contact");
const configurationRouter = require("./routes/configuration");

router.use("/themes", themeRouter);
router.use("/brand", brandRouter);
router.use("/locales", localesRouter);
router.use("/countries", countryRouter);
router.use("/currencies", currencyRouter);
router.use("/identity", identityRouter);
router.use("/contacts", contactRouter);
router.use("/configuration", configurationRouter);

module.exports = router;
