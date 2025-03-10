const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, userId } = req.body;

  if (!name || !userId) {
    return res.status(400).json({ error: "Account name or user is missing" });
  }
  try {
    const account = await prisma.account.create({
      data: {
        name: name,
        users: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return res.status(201).json({ data: account });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ error: "Missing accountId" });
  }

  try {
    const user = await prisma.account.findUnique({
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
