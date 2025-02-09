const express = require("express");
require("dotenv").config(); // Load environment variables
const prisma = require("./config/prisma");
const cors = require("cors"); // Import the CORS middleware
const cookieParser = require("cookie-parser"); // ✅ Import cookie-parser
const router = require("./router");

const app = express();

async function initializePrisma() {
  try {
    await prisma.$connect();
    console.log("✅ Prisma connected to the database.");
  } catch (error) {
    console.error("❌ Prisma connection failed:", error);
    process.exit(1); // Stop app if Prisma can't connect
  }
}

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

// Enable CORS for all routes
app.use(
  cors({
    origin: "*", // ✅ Use a specific origin
    credentials: false,
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Globally handle BigInt serialization
BigInt.prototype.toJSON = function () {
  return this.toString();
};

// Use the centralized router
app.use("/api/v1", router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
