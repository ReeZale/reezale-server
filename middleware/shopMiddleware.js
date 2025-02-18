const prisma = require("../config/prisma");

const shopMiddleware = async (req, res, next) => {
  const key = req.params.sellerKey;
  const { locale } = req.query;
  try {
    const seller = await prisma.seller.findUnique({
      where: {
        key: key,
      },
    });

    if (!seller) {
      return res.status(404).json({ error: "Resource not found" });
    }

    const requestedLocale = await prisma.locale.findFirst({
      where: {
        code: { equals: locale, mode: "insensitive" },
      },
    });

    if (!requestedLocale) {
      return res.status(404).json({ error: "Resource not found" });
    }

    req.locale = requestedLocale;
    req.seller = seller;
    next();
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = shopMiddleware;
