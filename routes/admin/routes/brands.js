const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const brands = await prisma.brand.findMany({
      orderBy: { name: "asc" },
    });
    return res.status(200).json({ brands });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const brand = await prisma.brand.findUnique({ where: { id } });
    if (!brand) {
      return res.status(404).json({ error: "Brand not found" });
    }
    return res.status(200).json({ brand });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;
  let { name, logo, url, description, isOwner, isDefault } = req.body;

  try {
    // Normalize the URL
    url = url.trim();
    if (!/^https?:\/\//i.test(url)) {
      url = `https://${url}`;
    }

    const existingBrand = await prisma.brand.findFirst({
      where: { OR: [{ url }, { name }] },
    });

    if (existingBrand) {
      return res.status(409).json({ error: "Brand is already registered" });
    }

    const brand = await prisma.brand.create({
      data: { name, logo, url, description },
    });

    const storefront = await prisma.storefront.findFirst({
      where: { account: { id: accountId } },
    });

    await prisma.storeBrand.create({
      data: {
        brandId: brand.id,
        storefrontId: storefront.id,
        isOwner,
        isDefault,
      },
    });

    return res.status(201).json({ brand });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;
  const { name, logo, url, description } = req.body;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const storeBrand = await prisma.storeBrand.findUnique({
      where: {
        storefrontId_brandId: {
          storefrontId: storefront.id,
          brandId: id,
        },
      },
    });

    if (!storeBrand || !storeBrand.isOwner) {
      return res.status(403).json({
        error: "You are not authorized to modify this brand",
      });
    }

    const brand = await prisma.brand.update({
      where: { id },
      data: { name, logo, url, description },
    });

    return res.status(200).json({ brand });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const accountId = req.accountId;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const storeBrand = await prisma.storeBrand.findUnique({
      where: {
        storefrontId_brandId: {
          storefrontId: storefront.id,
          brandId: id,
        },
      },
    });

    if (!storeBrand || !storeBrand.isOwner) {
      return res.status(403).json({
        error: "You are not authorized to delete this brand",
      });
    }

    await prisma.brand.delete({ where: { id } });
    return res.status(204).send(); // no content
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
