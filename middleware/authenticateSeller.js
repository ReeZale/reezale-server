const prisma = require("../config/prisma");

const authenticateSeller = async (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  const apiSecret = req.headers["x-api-secret"];

  if (!apiKey || !apiSecret) {
    return res
      .status(401)
      .json({ error: "Unauthorized: Missing API credentials" });
  }

  try {
    const sellerCredentials = await prisma.sellerCredentials.findFirst({
      where: {
        key: apiKey,
        secret: apiSecret,
        isValid: true,
      },
      include: {
        seller: true,
      },
    });

    if (!sellerCredentials) {
      return res
        .status(403)
        .json({ error: "Forbidden: Invalid API credentials" });
    }

    req.seller = sellerCredentials.seller;
    next();
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = authenticateSeller;
