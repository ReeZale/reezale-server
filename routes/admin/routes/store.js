const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

//A store is a seller account. We will need to rename this relatively soon

router.post("/", async (req, res) => {
  const { name, domain, logo, accountId, key } = req.body;

  if ((!name, domain, logo, accountId, key)) {
    return res.status(400).json({ error: "Missing required information" });
  }
  try {
    const store = await prisma.seller.create({
      data: {
        name: name,
        domain: domain,
        logo: logo,
        accountId: accountId,
        key: key
          ? key
          : name
              .toLowerCase()
              .replace(/[^a-z0-9\s]/g, "")
              .replace(/\s+/g, "_"),
      },
    });

    return res.status(201).json({ data: store });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
