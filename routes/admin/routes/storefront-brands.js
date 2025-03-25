const express = require("express");
const prisma = require("../../../config/prisma");
const { error } = require("console");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;
  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });
    const storefrontBrands = await prisma.storeBrand.findMany({
      where: {
        storefrontId: storefront.id,
      },
      include: {
        brand: true,
      },
      orderBy: {
        brand: {
          name: "asc",
        },
      },
    });
    return res.status(200).json({ storefrontBrands });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;
  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const storefrontBrand = await prisma.storeBrand.findUnique({
      where: {
        storefrontId_brandId: {
          storefrontId: storefront.id,
          brandId: id,
        },
      },
    });
    if (!storefrontBrand) {
      return res.status(404).json({ error: "Brand not found" });
    }
    return res.status(200).json({ storefrontBrand });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const { brandId, isDefault } = req.body;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const brand = await prisma.brand.findUnique({
      where: {
        id: brandId,
      },
    });

    if (!brand) {
      return res.status(400).json({
        error: "Requested brand does not exist",
      });
    }

    const existngStorebrand = await prisma.storeBrand.findFirst({
      where: {
        storefrontId: storefront.id,
        brandId: brandId,
      },
    });

    if (existngStorebrand) {
      return res.status(409).json({
        error: "Requested brand is already registered to your storefront",
      });
    }

    const storefrontBrand = await prisma.storeBrand.create({
      data: {
        storefrontId: storefront.id,
        brandId: brand.id,
        isDefault: isDefault,
      },
    });

    return res.status(201).json({ storefrontBrand });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;
  const { isDefault } = req.body;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const existingStoreBrand = await prisma.storeBrand.findFirst({
      where: {
        id: id,
        storefrontId: storefront.id,
      },
      include: {
        brand: true,
      },
    });

    if (!existingStoreBrand) {
      return res.status(403).json({
        error: "You are not authorized to modify this brand",
      });
    }

    if (isDefault) {
      await prisma.storeBrand.updateMany({
        where: {
          storefrontId: storefront.id,
        },
        data: {
          isDefault: false,
        },
      });
    }

    const storefrontBrand = await prisma.storeBrand.update({
      where: {
        id: id,
      },
      data: {
        isDefault: isDefault,
      },
    });

    return res.status(200).json({ storefrontBrand });
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

    const storeBrand = await prisma.storeBrand.findFirst({
      where: {
        id: id,
        storefrontId: storefront.id,
      },
    });

    if (!storeBrand) {
      return res.status(403).json({
        error: "You are not authorized to delete this brand",
      });
    }

    await prisma.storeBrand.delete({ where: { id: storeBrand.id } });
    return res.status(204).send(); // no content
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
