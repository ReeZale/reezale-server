const express = require("express");
const prisma = require("../../../../../config/prisma");
const { generateId } = require("../../../../../helpers/generateId");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const localeCode = req.localeCode;
  const {} = req.query;

  try {
    const items = await prisma.storefrontCurrency.findMany({
      where: {
        storefrontId: storefrontId,
        accountId: accountId,
      },
      include: {
        currency: true,
      },
    });

    const storefrontCurrencies = items.map((item) => ({
      id: item.id,
      currencyId: item.currencyId,
      currencyLabel: item.currency.name,
      currencyCode: item.currency.code,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));
    return res.status(200).json({ storefrontCurrencies });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const localeCode = req.localeCode;
  const { id } = req.params;

  try {
    const item = await prisma.storefrontCurrency.findFirst({
      where: {
        storefrontId: storefrontId,
        accountId: accountId,
        id: id,
      },
      include: {
        currency: true,
      },
    });

    const storefrontCurrency = {
      id: item.id,
      currencyId: item.currencyId,
      currencyLabel: item.currency.name,
      currencyCode: item.currency.code,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
    return res.status(200).json({ storefrontCurrency });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const localeCode = req.localeCode;
  const { currencyId } = req.body; //data

  try {
    const existingItem = await prisma.storefrontCurrency.findUnique({
      where: {
        storefrontId_currencyId: {
          storefrontId: storefrontId,
          currencyId: currencyId,
        },
      },
    });

    if (existingItem) {
      return res
        .status(409)
        .json({ error: "The requested item already exsists" });
    }

    const item = await prisma.storefrontCurrency.create({
      data: {
        id: generateId("SFM"),
        storefrontId,
        accountId,
        currencyId,
      },
      include: {
        currency: true,
      },
    });

    const storefrontCurrency = {
      id: item.id,
      currencyId: item.currencyId,
      currencyLabel: item.currency.name,
      currencyCode: item.currency.code,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
    return res.status(201).json({ storefrontCurrency });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});
router.put("/:id", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const localeCode = req.localeCode;
  const { currencyId } = req.body; //data

  try {
    const existingItem = await prisma.storefrontCurrency.findUnique({
      where: {
        storefrontId_currencyId: {
          storefrontId: storefrontId,
          currencyId: currencyId,
        },
      },
    });

    if (!existingItem) {
      return res
        .status(404)
        .json({ error: "The requested record could not be found" });
    }
    const storefrontCurrency = {
      id: item.id,
      currencyId: item.currencyId,
      currencyLabel: item.currency.name,
      currencyCode: item.currency.code,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };

    return res.status(201).json({ storefrontCurrency });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const { id } = req.params;

  try {
    const existingItem = await prisma.storefrontCurrency.findFirst({
      where: {
        storefrontId: storefrontId,
        accountId: accountId,
        id: id,
      },
    });

    if (!existingItem) {
      return res
        .status(404)
        .json({ error: "The requested record could not be found" });
    }

    await prisma.storefrontCurrency.delete({
      where: {
        id: existingItem.id,
      },
    });

    return res.status(204).send();
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
