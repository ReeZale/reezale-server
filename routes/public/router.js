const express = require("express");
const router = express.Router();
const regionsRouter = require("./routes/regions");
const productSegmentRouter = require("./routes/product-segments");

router.use("/regions", regionsRouter);
router.use("/product-segments", productSegmentRouter);

module.exports = router;
