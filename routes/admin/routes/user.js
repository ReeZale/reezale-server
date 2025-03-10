const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, accountId } = req.body;

  if (!name || email) {
    return res.status(400).json({ error: "Missing name or email" });
  }

  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        accountId: accountId ? accountId : null,
      },
    });

    return res.status(201).json({ data: user });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ error: "Missing userId" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ data: user });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
