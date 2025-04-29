const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router");

const app = express();

console.log("Passed initialization of required");

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

console.log("Passed allowed origins", allowedOrigins);

const allowedBaseDomain = process.env.ALLOWED_BASE_DOMAIN;

console.log("Passed allowed base domain", allowedBaseDomain);

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

console.log("Passed cors options");

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

console.log("Passed coors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

console.log("Passed middleware");

app.use("/api/v1", router);

console.log("Passed route");

BigInt.prototype.toJSON = function () {
  return this.toString();
};

console.log("Passed big int");

const PORT = process.env.PORT || 4000;

console.log("Port being used", process);

try {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
} catch (error) {
  console.log("Error", error);
}
