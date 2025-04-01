const express = require("express");
require("dotenv").config(); // Load environment variables
const prisma = require("./config/prisma");
const cors = require("cors"); // Import the CORS middleware
const cookieParser = require("cookie-parser"); // ✅ Import cookie-parser
const router = require("./router");
const {
  normalizePropertyTranslations,
  generateNormalizedOptions,
  resetNormalization,
  processCategories,
  processCategoryTranslations,
} = require("./data/temp");
const {
  uploadColors,
  uploadMaterials,
  uploadFits,
  uploadSleeveLengths,
  uploadNecklines,
  uploadWaistRise,
  uploadInseam,
  uploadStretch,
  uploadPattern,
  uploadKnitTypes,
  uploadClosureTypes,
  uploadCollarTypes,
  uploadHemStyles,
  uploadWeights,
  uploadSeasons,
  uploadOccasions,
  uploadDressLength,
  uploadSilhouette,
  uploadSleeveTypes,
  uploadPockets,
  uploadCuffType,
  uploadInsulationType,
  uploadHoodType,
  updateShoeProperties,
} = require("./data/properties");

const app = express();

// Enable CORS for all routes
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN, // ✅ Use a specific origin
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Gracefully disconnect Prisma on shutdown
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  console.log("🔌 Prisma disconnected.");
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  console.log("🔌 Prisma disconnected.");
  process.exit(0);
});

// Globally handle BigInt serialization
BigInt.prototype.toJSON = function () {
  return this.toString();
};

(async () => {
  //await processCategoryTranslations("./data/gc-en-gb.txt", 2);
  //await processCategoryTranslations("./data/gc-se-sv.txt", 1);
  //await resetNormalization();
})();

// Use the centralized router
app.use("/api/v1", router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
