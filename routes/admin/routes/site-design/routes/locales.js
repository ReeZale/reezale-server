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
    const items = await prisma.storefrontLocale.findMany({
      where: {
        accountId: accountId,
        storefrontId: storefrontId,
      },
      include: {
        locale: true,
      },
    });

    const storefrontLocales = items.map((item) => ({
      id: item.id,
      metaTitle: item.metaTitle,
      metaDescription: item.metaDescription,
      ogTitle: item.ogTitle,
      ogDescription: item.ogDescription,
      localeId: item.localeId,
      localeLabel: item.locale.label,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));
    return res.status(200).json({ storefrontLocales });
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
    const item = await prisma.storefrontLocale.findUnique({
      where: {
        id: id,
      },
      include: {
        locale: true,
      },
    });

    const storefrontLocale = {
      id: item.id,
      metaTitle: item.metaTitle,
      metaDescription: item.metaDescription,
      ogTitle: item.ogTitle,
      ogDescription: item.ogDescription,
      localeId: item.localeId,
      localeLabel: item.locale.label,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
    return res.status(200).json({ storefrontLocale });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const localeCode = req.localeCode;
  const {
    localeId,
    metaTitle,
    metaDescription,
    ogTitle,
    ogDescription,
    isDefault,
  } = req.body;

  try {
    if (isDefault) {
      await prisma.storefrontLocale.updateMany({
        where: {
          accountId: accountId,
          storefrontId: storefrontId,
        },
        data: {
          isDefault: false,
        },
      });
    }

    const item = await prisma.storefrontLocale.create({
      data: {
        id: generateId("SLO"),
        localeId,
        metaTitle,
        metaDescription,
        ogTitle,
        ogDescription,
        storefrontId,
        accountId,
        isDefault,
      },
      include: {
        locale: true,
      },
    });

    const storefrontLocale = {
      id: item.id,
      metaTitle: item.metaTitle,
      metaDescription: item.metaDescription,
      ogTitle: item.ogTitle,
      ogDescription: item.ogDescription,
      localeId: item.localeId,
      localeLabel: item.locale.label,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
    return res.status(201).json({ storefrontLocale });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});
router.put("/:id", async (req, res) => {
  const accountId = req.accountId;
  const storefrontId = req.storefrontId;
  const localeCode = req.localeCode;
  const { id } = req.params;
  const {
    localeId,
    metaTitle,
    metaDescription,
    ogTitle,
    ogDescription,
    isDefault,
  } = req.body; //data

  try {
    const existingItem = await prisma.storefrontLocale.findFirst({
      where: {
        id: id,
        storefrontId: storefrontId,
        accountId: accountId,
      },
    });

    if (!existingItem) {
      return res
        .status(404)
        .json({ error: "Requested storefront locale does not exist" });
    }

    if (isDefault) {
      await prisma.storefrontLocale.updateMany({
        where: {
          accountId: accountId,
          storefrontId: storefrontId,
        },
        data: {
          isDefault: false,
        },
      });
    }

    const item = await prisma.storefrontLocale.update({
      where: {
        id: existingItem.id,
      },
      data: {
        localeId,
        metaTitle,
        metaDescription,
        ogTitle,
        ogDescription,
        storefrontId,
        accountId,
      },
      include: {
        locale: true,
      },
    });

    const storefrontLocale = {
      id: item.id,
      metaTitle: item.metaTitle,
      metaDescription: item.metaDescription,
      ogTitle: item.ogTitle,
      ogDescription: item.ogDescription,
      localeId: item.localeId,
      localeLabel: item.locale.label,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
    return res.status(201).json({ storefrontLocale });
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
    const existingItem = await prisma.storefrontLocale.findFirst({
      where: {
        id: id,
        storefrontId: storefrontId,
        accountId: accountId,
      },
    });

    if (!existingItem) {
      return res
        .status(404)
        .json({ error: "Requested storefront locale does not exist" });
    }

    await prisma.storefrontLocale.delete({
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
