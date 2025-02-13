const axios = require("axios");
const prisma = require("../../config/prisma");

const TRANSPORT_EB_USERNAME = process.env.TRANSPORT_EB_USERNAME;
const TRANSPORT_EB_PASSWORD = process.env.TRANSPORT_EB_PASSWORD;
const TRANSPORT_EB_BASEURL = process.env.TRANSPORT_EB_BASEURL;

// Create an Axios instance for authenticated API requests
const apiClient = axios.create({
  baseURL: TRANSPORT_EB_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

// Create a separate Axios instance **without interceptors** for auth requests
const authClient = axios.create({
  baseURL: TRANSPORT_EB_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

// Function to get the stored token from Prisma
const getToken = async () => {
  try {
    const tokenRecord = await prisma.service.findFirst({
      where: { id: BigInt(1) },
      select: { token: true },
    });

    return tokenRecord?.token || null;
  } catch (error) {
    console.error("Error fetching auth token:", error.message);
    return null;
  }
};

// Function to request a new token and store it **using authClient**
const refreshToken = async () => {
  try {
    const response = await authClient.post(`/auth/token`, {
      username: TRANSPORT_EB_USERNAME,
      password: TRANSPORT_EB_PASSWORD,
    });

    const token = response.data?.token;
    if (!token) {
      throw new Error("No token received from API");
    }

    // Store the new token in Prisma
    await prisma.service.update({
      where: { id: BigInt(1) },
      data: { token },
    });

    return token;
  } catch (error) {
    console.error("Error refreshing auth token:", error.message);
    return null;
  }
};

// Axios interceptor to attach the token before each request
apiClient.interceptors.request.use(
  async (config) => {
    let token = await getToken();

    // If no token is found, fetch a new one **without triggering the interceptor**
    if (!token) {
      token = await refreshToken();
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

const checkDeliveryOption = async (productId = "home", request) => {
  //request format {desiredDeliveryDate: string:date, country: 2letter country code, zip: string, city: string, address: string, volume: int, weight: int}

  try {
    const response = await apiClient.post(`/v1/check/${productId}`, request);

    const data = response.data;

    return data;
  } catch (error) {
    console.error("Error refreshing check delivery option", error.message);
    return null;
  }
};

//error on supplier side
const checkPickupOption = async (productId = "home", request) => {
  //request format {desiredDeliveryDate: string:date, country: 2letter country code, zip: string, city: string, address: string, volume: int, weight: int}

  try {
    const response = await apiClient.post(
      `/v1/orders/check/pickup/${productId}`,
      request
    );

    const data = response.data;

    return data;
  } catch (error) {
    console.error("Error refreshing auth token:", error.message);
    return null;
  }
};

const createShipmentRequest = async (request) => {
  try {
    const response = await apiClient.post(`/v1/orders`, request);
    return response.data;
  } catch (error) {
    console.error("Error creating shipment:", error.message);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error details:", error);
    }
    return null;
  }
};

const getDeliveryLabel = async (deliveryId, format, size) => {
  try {
    const response = await apiClient.get(`/v1/deliveries/${deliveryId}/label`, {
      params: { format, size },
      responseType: "arraybuffer", // ✅ Ensures binary data is properly handled
    });

    return {
      buffer: response.data, // ✅ The raw file data
      contentType: response.headers["content-type"], // ✅ Get the content type from response headers
    };
  } catch (error) {
    console.error("Error fetching delivery label:", error.message);
    return null;
  }
};

const cancelShipment = async (identifier) => {
  try {
    const response = await apiClient.delete(
      `/v1/parcels/${identifier}/cancel`,
      {
        headers: {
          "Content-Type": undefined, // ✅ This removes "Content-Type"
        },
        responseType: "text", // ✅ Prevents Axios from expecting JSON in response
      }
    );

    console.log("✅ Shipment canceled successfully", response.status);
    return true;
  } catch (error) {
    if (error.response) {
      console.error(
        "🚨 API Error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error("❌ No response from server:", error.request);
    } else {
      console.error("❗ Request setup error:", error.message);
    }
    return false;
  }
};

const getLastStatusUpdate = async (trackingId, language) => {
  try {
    const response = await apiClient.get(`/v1/status/${trackingId}/latest`, {
      params: {
        language: language,
      },
    });

    const data = response.data;

    return data;
  } catch (error) {
    console.error("Error refreshing auth token:", error.message);
    return null;
  }
};

const getAllStatusUpdates = async (trackingId, language) => {
  try {
    const response = await apiClient.get(`/v1/status/${trackingId}/all`, {
      params: {
        language: language,
      },
    });

    const data = response.data;

    return data;
  } catch (error) {
    console.error("Error refreshing auth token:", error.message);
    return null;
  }
};

module.exports = {
  refreshToken,
  checkDeliveryOption,
  checkPickupOption,
  createShipmentRequest,
  getDeliveryLabel,
  cancelShipment,
  getLastStatusUpdate,
  getAllStatusUpdates,
};
