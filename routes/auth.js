const express = require("express");
const prisma = require("../config/prisma");
const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing required information" });
  }

  try {
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
      include: { account: true },
    });

    if (!user) {
      return res.status(404).json({ error: "User does not exist" });
    }

    // Compare password with hashed password from DB
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = createToken({ userId: user.id, accountId: user.account.id });

    // Set token in HTTP-Only cookie
    res.cookie("reezale_auth", token, {
      httpOnly: true, // Prevents access via JavaScript (XSS protection)
      secure: process.env.NODE_ENV === "production", // Set to true in production (HTTPS only)
      sameSite: "Strict", // CSRF protection
      maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
    });

    // Successful login response
    return res.status(200).json({ user });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/register", async (req, res) => {
  const { companyName, userName, email, password } = req.body;

  if (!companyName || !userName || !email || !password) {
    return res.status(400).json({ error: "Missing required information" });
  }

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);

    const account = await prisma.account.create({
      data: {
        name: companyName,
      },
    });

    const user = await prisma.user.create({
      data: {
        name: userName,
        email: email,
        password: hashedPassword,
        accountId: account.id,
        archive: false,
      },
    });

    const token = createToken({ userId: user.id, accountId: account.id });

    // Set token in HTTP-Only cookie
    res.cookie("reezale_auth", token, {
      httpOnly: true, // Prevents access via JavaScript (XSS protection)
      secure: process.env.NODE_ENV === "production", // Set to true in production (HTTPS only)
      sameSite: "Strict", // CSRF protection
      maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
    });

    return res.status(201).json({ user });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("reezale_auth", {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  });
  return res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;
