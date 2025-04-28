// db/directory.js
const { PrismaClient } = require("../generated/directory");

const prismaDirectory = new PrismaClient();

module.exports = prismaDirectory;