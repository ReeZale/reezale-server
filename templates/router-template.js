const express = require("express");
const router = express.Router();
const routerName = {};

router.use("/route", routerName);

module.exports = router;