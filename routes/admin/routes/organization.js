const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;

  try {
    const organization = await prisma.organization.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    return res.status(200).json({ organization });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const userId = req.userId;
  const accountId = req.accountId;
  const {
    name,
    description,
    url,
    logo,
    email,
    phone,
    address,
    vatID,
    taxID,
    legalName,
    duns,
    linkedin,
    twitter,
    facebook,
    instagram,
    tiktok,
  } = req.body;

  try {
    const account = await prisma.account.findUnique({
      where: {
        id: accountId,
      },
    });

    const organization = account.organizationId
      ? await prisma.organization.upsert({
          where: { id: account.organizationId }, // ✅ If ID exists, upsert normally
          update: {
            name,
            description,
            url,
            logo,
            email,
            phone,
            address,
            vatID,
            taxID,
            legalName,
            duns,
            linkedin,
            twitter,
            facebook,
            instagram,
            tiktok,
          },
          create: {
            name,
            description,
            url,
            logo,
            email,
            phone,
            address,
            vatID,
            taxID,
            legalName,
            duns,
            linkedin,
            twitter,
            facebook,
            instagram,
            tiktok,
            account: {
              connect: { id: account.id },
            },
          },
        })
      : await prisma.organization.create({
          data: {
            name,
            description,
            url,
            logo,
            email,
            phone,
            address,
            vatID,
            taxID,
            legalName,
            duns,
            linkedin,
            twitter,
            facebook,
            instagram,
            tiktok,
            account: {
              connect: { id: account.id },
            },
          },
        });

    // ✅ If we created a new organization, update the account with the new ID
    if (!account.organizationId) {
      await prisma.account.update({
        where: { id: account.id },
        data: { organizationId: organization.id },
      });
    }

    return res.status(200).json({ organization });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
