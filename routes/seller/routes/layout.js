const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  const seller = req.seller;
  try {
    const sellerDetails = {
      id: seller.id,
      key: seller.key,
      name: seller.name,
      domain: seller.domain,
      logo: seller.logo,
      tagline: seller.tagline,
    };

    return res.status(200).json({ data: sellerDetails });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/navigation", async (req, res) => {
  const seller = req.seller;
  const locale = req.locale;
  const { parent } = req.query;
  try {
    const navigation = await prisma.category.findMany({
      where: {
        localeId: locale.id,
        relativePath: {
          startsWith: parent,
        },
        sellerId: seller.id,
      },
      select: {
        id: true,
        name: true,
        path: true,
        relativePath: true,
        parent: {
          select: {
            relativePath: true,
          },
        },
        children: {
          select: {
            id: true,
            name: true,
            path: true,
            relativePath: true,
          },
          orderBy: {
            name: "asc",
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return res.status(200).json({ data: navigation });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/main", async (req, res) => {
  const seller = req.seller;
  const locale = req.locale;
  try {
    const mainConfig = await prisma.pageConfig.findFirst({
      where: {
        sellerId: seller.id,
        localeId: locale.id,
      },
      include: {
        image: true,
      },
    });

    const primaryCategories = await prisma.category.findMany({
      where: {
        localeId: locale.id,
        parentId: null,
        sellerId: seller.id,
      },
      select: {
        id: true,
        name: true,
        path: true,
        relativePath: true,
        children: {
          select: {
            id: true,
            name: true,
            path: true,
          },
          orderBy: {
            name: "asc",
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return res.status(200).json({ data: { mainConfig, primaryCategories } });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
