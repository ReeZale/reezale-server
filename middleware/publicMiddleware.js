const prisma = require("../config/prisma");
const {
  verifyAccessToken,
  verifyRefreshToken,
  createAccessToken,
  createRefreshToken,
} = require("../helpers/jwt");

const publicMiddleware = async (req, res, next) => {
  req.localeCode = req.cookies.i18next.toLowerCase();
  next();
};

module.exports = publicMiddleware;
