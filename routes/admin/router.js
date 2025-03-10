const express = require("express");
const router = express.Router();
const accountRouter = require("./routes/account");
const userRouter = require("./routes/user");
const organizationRouter = require("./routes/organization");
const storefrontRouter = require("./routes/storefront");
const storefrontRegionsRouter = require("./routes/storefront-locale");
const storeCategoryRouter = require("./routes/store-categories");
const paymentAccountRouter = require("./routes/payment-accounts");
const productsRouter = require("./routes/product");

router.use("/accounts", accountRouter);
router.use("/users", userRouter);
router.use("/organizations", organizationRouter);
router.use("/storefront", storefrontRouter);
router.use("/storefront-regions", storefrontRegionsRouter);
router.use("/store-categories", storeCategoryRouter);
router.use("/payment-accounts", paymentAccountRouter);
router.use("/products", productsRouter);

module.exports = router;
