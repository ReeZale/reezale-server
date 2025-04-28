const express = require("express");
require("dotenv").config(); // Load environment variables
const prisma = require("./config/prisma");
const cors = require("cors"); // Import the CORS middleware
const cookieParser = require("cookie-parser"); // ✅ Import cookie-parser
const router = require("./router");
const prismaDirectory = require("./config/prismaDirectory");

const app = express();

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter((origin) => origin.length > 0);

const allowedBaseDomain = process.env.ALLOWED_BASE_DOMAIN; // e.g., "reezale.com"

app.use(cors());

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin) return callback(null, true);

//       try {
//         const { hostname } = new URL(origin);

//         // Allow if exact origin match
//         if (allowedOrigins.includes(origin)) {
//           return callback(null, true);
//         }

//         // Allow if hostname is *.reezale.com
//         if (
//           allowedBaseDomain &&
//           (hostname === allowedBaseDomain ||
//             hostname.endsWith(`.${allowedBaseDomain}`))
//         ) {
//           return callback(null, true);
//         }

//         console.error(`❌ Blocked CORS request from origin: ${origin}`);
//         return callback(new Error("Not allowed by CORS"));
//       } catch (err) {
//         console.error(`❌ CORS origin parsing error: ${origin}`);
//         return callback(new Error("Invalid origin"));
//       }
//     },
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

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

// ✅ Gracefully disconnect Prisma on shutdown
process.on("SIGINT", async () => {
  await prismaDirectory.$disconnect();
  console.log("🔌 Prisma disconnected.");
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await prismaDirectory.$disconnect();
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
