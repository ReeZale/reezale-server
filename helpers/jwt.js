const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";
const REFRESH_SECRET_KEY =
  process.env.JWT_REFRESH_SECRET || "your-refresh-secret-key";

/**
 * Generates an access token (15 minutes)
 */
const createAccessToken = (payload, expiresIn = "1h") => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

/**
 * Generates a refresh token (7 days)
 */
const createRefreshToken = (payload, expiresIn = "7d") => {
  return jwt.sign(payload, REFRESH_SECRET_KEY, { expiresIn });
};

const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.error("Invalid or expired access token:", error.message);
    return null;
  }
};

const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, REFRESH_SECRET_KEY);
  } catch (error) {
    console.error("Invalid or expired refresh token:", error.message);
    return null;
  }
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
