const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router");

const app = express();

// ------------------------
// CORS Setup
// ------------------------

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const allowedBaseDomain = process.env.ALLOWED_BASE_DOMAIN;

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Allow non-browser tools like Postman

    try {
      const { hostname } = new URL(origin);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      if (
        allowedBaseDomain &&
        (hostname === allowedBaseDomain ||
          hostname.endsWith(`.${allowedBaseDomain}`))
      )
        return callback(null, true);
    } catch (err) {
      console.error("Invalid origin:", origin);
    }

    return callback(new Error("Blocked by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
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
// BigInt Serializer
// ------------------------

BigInt.prototype.toJSON = function () {
  return this.toString();
};

// ------------------------
// Start Server
// ------------------------

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
