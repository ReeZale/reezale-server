const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

/**
 * Hashes a password using bcrypt
 * @param {string} password - The plain text password to hash
 * @returns {Promise<string>} - The hashed password
 */
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return bcrypt.hash(password, salt);
};

/**
 * Compares a plain password with a hashed password
 * @param {string} password - The plain text password
 * @param {string} hashedPassword - The hashed password stored in DB
 * @returns {Promise<boolean>} - Whether the password matches
 */
const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePassword,
};
