const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;

  try {
    const paymentAccounts = await prisma.paymentAccount.findMany({
      where: { accountId: accountId },
      include: {
        currency: true,
        storefront: true,
        storefrontLocales: true, // Include locales if needed
      },
    });

    if (!paymentAccounts) {
      return res.status(404).json({ error: "Payment account not found" });
    }

    return res.status(200).json({ paymentAccounts });
  } catch (error) {
    console.error("Error fetching payment account:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;

  try {
    const account = await prisma.account.findUnique({
      where: {
        id: accountId,
      },
    });

    const {
      type,
      paymentProvider,
      paymentProviderAccountId,
      currencyCode,
      paymentFrequency,
      primary,
    } = req.body;

    const currency = await prisma.currency.findFirst({
      where: {
        code: {
          equals: currencyCode.toLowerCase(), // Ensure case-insensitivity
          mode: "insensitive", // Case-insensitive search (PostgreSQL, MySQL)
        },
      },
    });

    if (!currency) {
      return res
        .status(400)
        .json({ error: "Storefront ID and Currency ID are required" });
    }

    const existingPrimary = await prisma.paymentAccount.findFirst({
      where: {
        accountId: account.id,
        storefrontId: account.storefrontId,
        primary: true,
      },
    });

    // If a new primary account is being set, update the existing one first
    if (primary && existingPrimary) {
      await prisma.paymentAccount.update({
        where: { id: existingPrimary.id },
        data: { primary: false },
      });
    }

    const paymentAccount = await prisma.paymentAccount.upsert({
      where: {
        storefrontId_accountId_paymentProvider_paymentProviderAccountId: {
          storefrontId: account.storefrontId,
          accountId: account.id,
          paymentProvider: paymentProvider,
          paymentProviderAccountId: paymentProviderAccountId,
        },
      },
      update: {
        type,
        paymentProvider,
        paymentProviderAccountId,
        currencyId: currency.id,
        paymentFrequency,
        primary,
      },
      create: {
        storefrontId: account.storefrontId,
        type,
        paymentProvider,
        paymentProviderAccountId,
        currencyId: currency.id,
        paymentFrequency,
        accountId: account.id,
        primary,
      },
    });

    return res.status(201).json({ paymentAccount });
  } catch (error) {
    console.error("Error creating/updating payment account:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
