const express = require("express");
const router = express.Router();
const regionsRouter = require("./routes/regions");
const productSegmentRouter = require("./routes/product-segments");
const fieldRouter = require("./routes/fields");
const templateRouter = require("./routes/templates");
const groupPropertiesRouter = require("./routes/group-properties");
const variantConfigsRouter = require("./routes/variant-config");
const propertiesRouter = require("./routes/properties");
const collectionsRouter = require("./routes/collections");

router.use("/regions", regionsRouter);
router.use("/fields", fieldRouter);
router.use("/variant-configs", variantConfigsRouter);
router.use("/group-properties", groupPropertiesRouter);
router.use("/templates", templateRouter);
router.use("/product-segments", productSegmentRouter);
router.use("/properties", propertiesRouter);
router.use("/collections", collectionsRouter);

module.exports = router;
