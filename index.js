const express = require("express");
const dotenv = require("dotenv"); // Load environment variables
const cors = require("cors"); // Import the CORS middleware
const cookieParser = require("cookie-parser"); // ✅ Import cookie-parser
const router = require("./router");
const ginaTricot = require("./data/store/gina-tricot");

dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://localhost:3000", // ✅ Use a specific origin
    credentials: true,
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

(async () => {
  try {
    await ginaTricot();
  } catch (error) {
    console.error("Error during initialization:", error);
    process.exit(1); // Exit the process on failure
  }
})();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
