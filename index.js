const express = require("express");
require("dotenv").config(); // Load environment variables
const prisma = require("./config/prisma");
const cors = require("cors"); // Import the CORS middleware
const cookieParser = require("cookie-parser"); // ✅ Import cookie-parser
const router = require("./router");
const { getTimezone, getPostalCode } = require("./services/locationServices");

const app = express();

// Enable CORS for all routes
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // Allow server-to-server / tools
      const hostname = new URL(origin).hostname;
      if (
        hostname === process.env.ALLOWED_HOST ||
        hostname.endsWith(`.${process.env.ALLOWED_HOST}`)
      ) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
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

(async () => {})();

// Use the centralized router
app.use("/api/v1", router);

const PORT = process.env.PORT || 4000;
const ENV = process.env.NODE_ENV;

const HOST = ENV === "development" ? "localhost" : "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
