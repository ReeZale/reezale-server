const express = require("express");
const prisma = require("../../../config/prisma");
const { Decimal } = require("@prisma/client/runtime/library");
const { off } = require("process");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const { listPriceId } = req.query;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const whereCondition = {
      listPrice: {
        productVariant: {
          product: {
            storefrontId: storefront.id,
          },
        },
      },
    };

    if (listPriceId) {
      whereCondition.listPriceId = listPriceId;
    }

    const data = await prisma.offer.findMany({
      where: whereCondition,
      include: {
        listPrice: {
          include: {
            productVariant: true,
            country: true,
            currrency: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const offers = data.map((offer) => ({
      id: offer.id,
      listPriceId: offer.listPriceId,
      listPriceAmount: offer.listPrice.amount,
      amount: offer.amount,
      available: offer.available,
      validUntil: offer.validUntil,
      productVariantId: offer.listPrice.productVariantId,
      productVariantSku: offer.listPrice.productVariant.sku,
      productVariantName: offer.listPrice.productVariant.name,
      condition: offer.listPrice.condition,
      listPriceAmount: offer.listPrice.amount,
      currencyId: offer.listPrice.currencyId,
      currencyCode: offer.listPrice.currrency.code.toUpperCase(),
      countryId: offer.listPrice.countryId,
      countryName: offer.listPrice.country.name,
      countryCode: offer.listPrice.country.code,
      createdAt: offer.createdAt,
      updatedAt: offer.updatedAt,
    }));
    return res.status(200).json({ offers });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;
  try {
    const data = await prisma.offer.findUnique({
      where: {
        id: id,
      },
      include: {
        listPrice: {
          include: {
            productVariant: true,
            country: true,
            currrency: true,
          },
        },
      },
    });
    if (!data) {
      return res.status(404).json({ error: "Brand not found" });
    }

    const offer = {
      id: data.id,
      listPriceId: data.listPriceId,
      listPriceAmount: data.listPrice.amount,
      amount: data.amount,
      available: data.available,
      validUntil: data.validUntil,
      productVariantId: data.listPrice.productVariantId,
      productVariantSku: data.listPrice.productVariant.sku,
      productVariantName: data.listPrice.productVariant.name,
      condition: data.listPrice.condition,
      currencyId: data.listPrice.currencyId,
      currencyCode: data.listPrice.currrency.code.toUpperCase(),
      countryId: data.listPrice.countryId,
      countryName: data.listPrice.country.name,
      countryCode: data.listPrice.country.code,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return res.status(200).json({ offer });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const { listPriceId, amount, validUntil, available } = req.body;

  try {
    const existingOffer = await prisma.offer.findFirst({
      where: {
        listPriceId: listPriceId,
        available: true,
        validUntil: {
          gte: new Date(),
        },
      },
    });

    if (existingOffer) {
      return res.status(409).json({
        error: "Requested list price already exists for this requested variant",
      });
    }

    const newOffer = await prisma.offer.create({
      data: {
        listPriceId,
        validUntil: new Date(validUntil),
        available,
        amount: new Decimal(amount),
      },
      include: {
        listPrice: {
          include: {
            productVariant: true,
            country: true,
            currrency: true,
          },
        },
      },
    });

    const offer = {
      id: newOffer.id,
      listPriceId: newOffer.listPriceId,
      listPriceAmount: newOffer.listPrice.amount,
      amount: newOffer.amount,
      available: newOffer.available,
      validUntil: newOffer.validUntil,
      productVariantId: newOffer.listPrice.productVariantId,
      productVariantSku: newOffer.listPrice.productVariant.sku,
      productVariantName: newOffer.listPrice.productVariant.name,
      condition: newOffer.listPrice.condition,
      currencyId: newOffer.listPrice.currencyId,
      currencyCode: newOffer.listPrice.currrency.code.toUpperCase(),
      countryId: newOffer.listPrice.countryId,
      countryName: newOffer.listPrice.country.name,
      countryCode: newOffer.listPrice.country.code,
      createdAt: newOffer.createdAt,
      updatedAt: newOffer.updatedAt,
    };

    return res.status(201).json({ offer });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const accountId = req.accountId;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const offer = await prisma.offer.findFirst({
      where: {
        id: id,
        listPrice: {
          productVariant: {
            product: {
              storefrontId: storefront.id,
            },
          },
        },
      },
    });

    if (!offer) {
      return res.status(403).json({
        error: "You are not authorized to delete this brand",
      });
    }

    await prisma.offer.delete({ where: { id: offer.id } });
    return res.status(204).send();
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
