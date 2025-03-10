const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

/**
 * Generates a JWT token
 * @param {Object} payload - The data to encode in the token
 * @param {string} [expiresIn='1h'] - Token expiration time (default: 1 hour)
 * @returns {string} - The generated token
 */
const createToken = (payload, expiresIn = "1h") => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

/**
 * Verifies and decodes a JWT token
 * @param {string} token - The token to verify
 * @returns {Object|null} - The decoded payload if valid, otherwise null
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.error("Invalid or expired token:", error.message);
    return null;
  }
};

module.exports = { createToken, verifyToken };
