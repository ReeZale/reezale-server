const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

router.post("/", async (req, res) => {
  const seller = req.seller;
  const locale = req.locale;
  const { email, sku, itemGroupId } = req.body;
  try {
    if (!sku) {
      return res
        .status(400)
        .json({ error: "No item identifer has been provided" });
    }

    const notification = await prisma.offerNotification.upsert({
      where: {
        email_sku_sellerId_localeId: {
          email: email,
          sku: sku,
          sellerId: seller.id,
          localeId: locale.id,
        },
      },
      create: {
        sku: sku,
        sellerId: seller.id,
        localeId: locale.id,
        itemGroupId: itemGroupId,
        email: email,
      },
      update: {
        notified: false,
        notificationDate: null,
      },
    });

    return res.status(201).json({ data: notification });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
