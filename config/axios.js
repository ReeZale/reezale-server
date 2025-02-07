const axios = require("axios");

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  timeout: 10000, // Timeout in milliseconds
  headers: {
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36", // Mimics a modern browser
    "Cache-Control": "no-cache",
  },
});

module.exports = axiosInstance;
