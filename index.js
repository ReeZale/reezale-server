const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const prisma = require("./config/prisma");
const prismaDirectory = require("./config/prismaDirectory");
const router = require("./router");

const app = express();

// ------------------------
// CORS Setup
// ------------------------

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter((origin) => origin.length > 0);

const allowedBaseDomain = process.env.ALLOWED_BASE_DOMAIN; // e.g., "reezale.com"

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Allow server-to-server or Postman

    try {
      const { hostname } = new URL(origin);

      // Allow if exact origin match
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Allow if hostname is *.reezale.com
      if (
        allowedBaseDomain &&
        (hostname === allowedBaseDomain ||
          hostname.endsWith(`.${allowedBaseDomain}`))
      ) {
        return callback(null, true);
      }

      console.error(`❌ Blocked CORS request from origin: ${origin}`);
      return callback(new Error("Not allowed by CORS"));
    } catch (err) {
      console.error(`❌ CORS origin parsing error: ${origin}`, err);
      return callback(new Error("Invalid origin"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

// Explicitly handle preflight requests for all routes
app.options("*", cors(corsOptions));

// ------------------------
// Middleware
// ------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ------------------------
// Routes
// ------------------------

app.use("/api/v1", router);

// ------------------------
// Global Helpers
// ------------------------

// Serialize BigInt in JSON responses
BigInt.prototype.toJSON = function () {
  return this.toString();
};

// ------------------------
// Graceful Shutdown
// ------------------------

async function gracefulShutdown(signal) {
  console.log(`Received ${signal}. Closing database connections...`);
  try {
    await prisma.$disconnect();
    await prismaDirectory.$disconnect();
  } catch (err) {
    console.error("Error during shutdown:", err);
  } finally {
    process.exit(0);
  }
}

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

// ------------------------
// Start Server
// ------------------------

const PORT = process.env.PORT || 4000;
const ENV = process.env.NODE_ENV || "development";
const HOST = ENV === "development" ? "localhost" : "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`🚀 Server is running at http://${HOST}:${PORT} in ${ENV} mode`);
});
