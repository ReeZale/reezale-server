const prisma = require("../config/prisma");
const { verifyToken } = require("../helpers/jwt");

const adminAuthMiddleware = async (req, res, next) => {
  try {
    // Extract the token from cookies
    const token = req.cookies.reezale_auth;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    // Verify and decode the token
    const decoded = verifyToken(token);
    if (!decoded || !decoded.userId) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Invalid or expired token" });
    }

    // Attach decoded values to request
    req.userId = decoded.userId;
    req.accountId = decoded.accountId;

    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res
      .status(401)
      .json({ error: "Unauthorized: Invalid or expired token" });
  }
};

module.exports = adminAuthMiddleware;
