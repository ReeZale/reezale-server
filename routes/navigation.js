const express = require("express");
const prisma = require("../config/prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  const seller = req.seller;
  const { parentId, locale } = req.query;

  try {
    const requestLocale = await prisma.locale.findFirst({
      where: { code: locale },
    });

    if (!requestLocale) {
      return res.status(400).json({ error: "Invalid locale" });
    }

    const categories = await prisma.category.findMany({
      where: {
        localeId: requestLocale.id,
        parentId: parentId ? parentId : null,
        sellerId: seller.id,
      },
      select: {
        id: true,
        name: true,
        path: true,
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

    return res.status(200).json({ data: categories });
  } catch (error) {
    console.log("❌ Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
