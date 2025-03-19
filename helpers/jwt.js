const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";
const REFRESH_SECRET_KEY =
  process.env.JWT_REFRESH_SECRET || "your-refresh-secret-key";

/**
 * Generates an access token
 * @param {Object} payload - The data to encode in the token
 * @param {string} [expiresIn='1h'] - Token expiration time (default: 1 hour)
 * @returns {string} - The generated access token
 */
const createAccessToken = (payload, expiresIn = "1h") => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

/**
 * Generates a refresh token
 * @param {Object} payload - The data to encode in the token
 * @param {string} [expiresIn='30d'] - Refresh token expiration time (default: 30 days)
 * @returns {string} - The generated refresh token
 */
const createRefreshToken = (payload, expiresIn = "30d") => {
  return jwt.sign(payload, REFRESH_SECRET_KEY, { expiresIn });
};

/**
 * Verifies and decodes an access token
 * @param {string} token - The token to verify
 * @returns {Object|null} - The decoded payload if valid, otherwise null
 */
const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.error("Invalid or expired access token:", error.message);
    return null;
  }
};

/**
 * Verifies and decodes a refresh token
 * @param {string} token - The token to verify
 * @returns {Object|null} - The decoded payload if valid, otherwise null
 */
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
