const express = require("express");
const prisma = require("../../../config/prisma");
const { Decimal } = require("@prisma/client/runtime/library");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const { productVariantId } = req.query;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const whereCondition = {
      productVariant: {
        product: {
          storefrontId: storefront.id,
        },
      },
    };

    if (productVariantId) {
      whereCondition.productVariantId = productVariantId;
    }

    const data = await prisma.listPrice.findMany({
      where: whereCondition,
      include: {
        productVariant: true,
        country: true,
        currrency: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const listPrices = data.map((listPrice) => ({
      id: listPrice.id,
      productVariantId: listPrice.productVariantId,
      productVariantSku: listPrice.productVariant.sku,
      productVariantName: listPrice.productVariant.name,
      condition: listPrice.condition,
      amount: listPrice.amount,
      currencyId: listPrice.currencyId,
      currencyCode: listPrice.currrency.code.toUpperCase(),
      countryId: listPrice.countryId,
      countryName: listPrice.country.name,
      countryCode: listPrice.country.code,
      createdAt: listPrice.createdAt,
      updatedAt: listPrice.updatedAt,
    }));
    return res.status(200).json({ listPrices });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const accountId = req.accountId;
  const localeCode = req.localeCode;
  const { id } = req.params;
  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const data = await prisma.listPrice.findFirst({
      where: {
        id: id,
        productVariant: {
          product: {
            storefrontId: storefront.id,
          },
        },
      },
      include: {
        productVariant: true,
        country: true,
        currrency: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!data) {
      return res.status(404).json({ error: "Brand not found" });
    }

    const listPrice = {
      id: data.id,
      productVariantId: data.productVariantId,
      productVariantSku: data.productVariant.sku,
      productVariantName: data.productVariant.name,
      condition: data.condition,
      amount: data.amount,
      currencyId: data.currencyId,
      currencyCode: data.currrency.code.toUpperCase(),
      countryId: data.countryId,
      countryName: data.country.name,
      countryCode: data.country.code,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return res.status(200).json({ listPrice });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const { productVariantId, condition, currencyId, countryId, amount } =
    req.body;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const existingListPrice = await prisma.listPrice.findUnique({
      where: {
        productVariantId_countryId_currencyId_condition: {
          productVariantId: productVariantId,
          countryId: countryId,
          currencyId: currencyId,
          condition: condition,
        },
      },
    });

    if (existingListPrice) {
      return res.status(409).json({
        error: "Requested list price already exists for this requested variant",
      });
    }

    const newListPrice = await prisma.listPrice.create({
      data: {
        productVariantId: productVariantId,
        condition: condition,
        currencyId: currencyId,
        countryId: countryId,
        amount: new Decimal(amount),
      },
      include: {
        productVariant: true,
        country: true,
        currrency: true,
      },
    });

    const listPrice = {
      id: newListPrice.id,
      productVariantId: newListPrice.productVariantId,
      productVariantSku: newListPrice.productVariant.sku,
      productVariantName: newListPrice.productVariant.name,
      condition: newListPrice.condition,
      amount: newListPrice.amount,
      currencyId: newListPrice.currencyId,
      currencyCode: newListPrice.currrency.code.toUpperCase(),
      countryId: newListPrice.countryId,
      countryName: newListPrice.country.name,
      countryCode: newListPrice.country.code,
      createdAt: newListPrice.createdAt,
      updatedAt: newListPrice.updatedAt,
    };

    return res.status(201).json({ listPrice });
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

    const listPrice = await prisma.listPrice.findFirst({
      where: {
        id: id,
        productVariant: {
          product: {
            storefrontId: storefront.id,
          },
        },
      },
    });

    if (!listPrice) {
      return res.status(403).json({
        error: "You are not authorized to delete this brand",
      });
    }

    await prisma.listPrice.delete({ where: { id: listPrice.id } });
    return res.status(204).send();
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;