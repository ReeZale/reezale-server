const express = require("express");
const router = express.Router();
const prisma = require("../config/prisma");

router.post("/reservation", async (req, res) => {
  const {
    reference,
    memberId,
    country,
    currency,
    subtotal,
    tax,
    shipping,
    total,
    orderItems,
    shipToAddress,
  } = req.body;

  try {
    const order = await prisma.order.create({
      data: {
        reference: reference,
        memberId: memberId || null,
        currency: currency,
        country: {
          connect: {
            code: country,
          },
        },
        subTotal: subtotal,
        tax: tax,
        shipping: shipping,
        total: total,
        shipToAddress: shipToAddress,
      },
    });

    for (const item of orderItems) {
      // 🔹 Find the correct inventory entry
      const inventoryItem = await prisma.inventory.findFirst({
        where: {
          itemId: item.itemId,
          country: { code: country },
          condition: item.condition,
        },
      });

      if (!inventoryItem) {
        throw new Error(`No inventory found for itemId: ${item.itemId}`);
      }

      if (inventoryItem.available < item.quantity) {
        throw new Error(`Not enough stock for itemId: ${item.itemId}`);
      }

      // 🔹 Reserve inventory before allocating specific offers
      await prisma.inventory.update({
        where: { id: inventoryItem.id },
        data: {
          available: { decrement: item.quantity },
          reserved: { increment: item.quantity },
        },
      });

      await prisma.orderItem.create({
        data: {
          orderId: order.id,
          inventoryId: inventoryItem.id,
          quantity: item.quantity,
        },
      });
    }

    res.json({ message: "Order reserved successfully", orderId: order.id });
  } catch (error) {
    console.error("Order Reservation Error:", error);
    return res.status(500).json({ error: "Order reservation failed" });
  }
});

router.post("/allocate", async (req, res) => {
  const { orderId, paymentReference } = req.body;

  try {
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: { orderItems: true },
    });

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    for (const orderItem of order.orderItems) {
      let remainingQuantity = orderItem.quantity;
      let allocatedOffers = [];

      const availableOffers = await prisma.offer.findMany({
        where: {
          inventoryId: orderItem.inventoryId,
          status: "available",
          archived: false,
        },
        orderBy: { expirationDate: "asc" },
      });

      for (const offer of availableOffers) {
        if (remainingQuantity <= 0) break;

        const quantityToAllocate = Math.min(offer.quantity, remainingQuantity);
        allocatedOffers.push({
          offerId: offer.id,
          quantity: quantityToAllocate,
        });
        remainingQuantity -= quantityToAllocate;
      }

      if (remainingQuantity > 0) {
        throw new Error(
          `Not enough offers available for itemId: ${orderItem.itemId}`
        );
      }

      for (const allocation of allocatedOffers) {
        await prisma.inventoryAllocation.create({
          data: {
            orderItemId: orderItem.id,
            offerId: allocation.offerId,
            quantity: allocation.quantity,
          },
        });

        await prisma.offer.update({
          where: { id: allocation.offerId },
          data: {
            quantity: { decrement: allocation.quantity },
            status: allocation.quantity === 0 ? "allocated" : "available",
            archived: allocation.quantity === 0 ? true : false,
          },
        });
      }

      await prisma.inventory.update({
        where: { id: orderItem.inventoryId },
        data: {
          reserved: { decrement: orderItem.quantity },
          allocated: { increment: orderItem.quantity },
        },
      });
    }

    res.json({ message: "Stock allocated successfully" });
  } catch (error) {
    console.error("Stock Allocation Error:", error);
    return res.status(500).json({ error: "Stock allocation failed" });
  }
});

module.exports = router;
