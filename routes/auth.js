const express = require("express");
const prisma = require("../config/prisma");
const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const { createAccessToken, createRefreshToken } = require("../helpers/jwt");
const router = express.Router();

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing required information" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { account: true },
    });

    if (!user) {
      return res.status(404).json({ error: "User does not exist" });
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const payload = { userId: user.id, accountId: user.account.id };
    const accessToken = createAccessToken(payload);
    const refreshToken = createRefreshToken(payload);

    await prisma.authToken.create({
      data: {
        userId: user.id,
        token: refreshToken,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days expiry
      },
    });

    res.cookie("reezale_auth", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });

    res.cookie("reezale_refresh", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });

    return res.status(200).json({ user });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Register Route
router.post("/register", async (req, res) => {
  const { companyName, userName, email, password } = req.body;

  if (!companyName || !userName || !email || !password) {
    return res.status(400).json({ error: "Missing required information" });
  }

  try {
    const existingUser = await prisma.user.findFirst({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);
    const account = await prisma.account.create({
      data: { name: companyName },
    });
    const user = await prisma.user.create({
      data: {
        name: userName,
        email,
        password: hashedPassword,
        accountId: account.id,
      },
    });

    const payload = { userId: user.id, accountId: account.id };
    const accessToken = createAccessToken(payload);
    const refreshToken = createRefreshToken(payload);

    await prisma.authToken.create({
      data: {
        userId: user.id,
        token: refreshToken,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    res.cookie("reezale_auth", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });

    res.cookie("reezale_refresh", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });

    return res.status(201).json({ user });
  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Logout Route
router.post("/logout", async (req, res) => {
  const refreshToken = req.cookies.reezale_refresh;
  if (refreshToken) {
    await prisma.authToken.updateMany({
      where: { token: refreshToken },
      data: { isValid: false },
    });
  }

  res.clearCookie("reezale_auth", {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  });
  res.clearCookie("reezale_refresh", {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  });

  return res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;
