const express = require("express");
const prisma = require("../../../config/prisma");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountId = req.accountId;
  const { productId } = req.query;

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const whereCondition = {
      productId: productId ? productId : undefined,
      product: {
        storefrontId: storefront.id,
      },
    };

    const productMediaData = await prisma.productMedia.findMany({
      where: whereCondition,
      include: {
        product: true,
        media: true,
      },
    });

    const productMedias = (productMediaData || []).map((productMedia) => ({
      id: productMedia.id,
      alt: productMedia.alt,
      productId: productMedia.productId,
      productName: productMedia.product.name,
      mediaId: productMedia.mediaId,
      mediaUrl: productMedia.url,
      mediaType: productMedia.mediaType,
      order: productMedia.order,
      createdAt: productMedia.createdAt,
      updatedAt: productMedia.updatedAt,
    }));

    return res.status(200).json({ productMedias });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      error: "Failed to fetch product variants",
      details: error.message,
    });
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

    const productMediaData = await prisma.productMedia.findFirst({
      where: {
        id: id,
        product: {
          storefrontId: storefront.id,
        },
      },
      include: {
        product: true,
        media: true,
      },
    });

    const productMedia = {
      id: productMediaData.id,
      alt: productMediaData.alt,
      productId: productMediaData.productId,
      productName: productMediaData.product.name,
      mediaId: productMediaData.mediaId,
      mediaUrl: productMediaData.url,
      mediaType: productMediaData.mediaType,
      order: productMediaData.order,
      createdAt: productMediaData.createdAt,
      updatedAt: productMediaData.updatedAt,
    };

    return res.status(200).json({ productMedia });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      error: "Failed to fetch product variants",
      details: error.message,
    });
  }
});

// 🚀 POST - Create a new product
router.post("/", async (req, res) => {
  const accountId = req.accountId;
  const { productId, mediaId, mediaType, order, alt } = req.body;

  if (!mediaId || !productId || !mediaType || order === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const product = await prisma.product.findFirst({
      where: {
        id: productId,
        storefrontId: storefront.id,
      },
    });

    if (!product) {
      return res.status(404).json({ error: "Product does not exist" });
    }

    const media = await prisma.media.findFirst({
      where: {
        id: mediaId,
        accountId,
      },
    });

    if (!media) {
      return res.status(404).json({ error: "Media does not exist" });
    }

    const existing = await prisma.productMedia.findUnique({
      where: {
        productId_mediaId: {
          productId,
          mediaId,
        },
      },
    });

    if (existing) {
      return res
        .status(409)
        .json({ error: "Media already assigned to product" });
    }

    // ✅ Only one PRIMARY or PRODUCT image allowed – convert any existing to GALLERY
    if (mediaType === "PRODUCT" || mediaType === "PRIMARY") {
      const exisitngPrimary = await prisma.productMedia.findFirst({
        where: {
          productId,
          mediaType,
        },
      });

      if (exisitngPrimary) {
        await prisma.productMedia.update({
          where: {
            id: exisitngPrimary.id,
          },
          data: {
            mediaType: "GALLERY",
          },
        });
      }
    }

    const productMedia = await prisma.productMedia.create({
      data: {
        productId,
        mediaId,
        mediaType,
        alt,
      },
    });

    return res.status(201).json({ productMedia });
  } catch (error) {
    console.error("❌ ProductMedia POST Error:", error);
    return res.status(500).json({
      error: "Failed to create product media",
      details: error.message,
    });
  }
});

// 🚀 PUT - Update an existing product
router.put("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;
  const { mediaType, order } = req.body;

  if (!id || order == null || !mediaType) {
    return res.status(400).json({ error: "Missing required fields to update" });
  }

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        account: {
          id: accountId,
        },
      },
    });

    const existingProductMedia = await prisma.productMedia.findFirst({
      where: {
        id: id,
        media: {
          accountId: accountId,
        },
        product: {
          storefrontId: storefront.id,
        },
      },
    });

    if (!existingProductMedia) {
      return res.status(404).json({ error: "Product media does not exist" });
    }

    if (existingProductMedia.order !== order) {
      await prisma.productMedia.updateMany({
        where: {
          productId: existingProductMedia.productId,
          id: { not: existingProductMedia.id },
          order: {
            gte: order,
          },
        },
        data: {
          order: {
            increment: 1,
          },
        },
      });
    }

    // ✅ Only one PRIMARY or PRODUCT image allowed – convert any existing to GALLERY
    if (mediaType === "PRIMARY" || mediaType === "PRODUCT") {
      await prisma.productMedia.update({
        where: {
          productId,
          mediaType,
        },
        data: {
          mediaType: "GALLERY",
        },
      });
    }

    const productMedia = await prisma.productMedia.update({
      where: {
        id: id,
      },
      data: {
        mediaType,
        order,
      },
    });

    return res.status(201).json({ productMedia });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update template", details: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const accountId = req.accountId;
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Missing media ID to delete" });
  }

  try {
    const storefront = await prisma.storefront.findFirst({
      where: {
        accountId,
      },
    });

    const existingProductMedia = await prisma.productMedia.findFirst({
      where: {
        id: BigInt(id),
        media: {
          accountId,
        },
        product: {
          storefrontId: storefront.id,
        },
      },
    });

    if (!existingProductMedia) {
      return res.status(404).json({ error: "Product media does not exist" });
    }

    if (
      existingProductMedia.mediaType === "PRIMARY" ||
      existingProductMedia.mediaType === "PRODUCT"
    ) {
      return res.status(400).json({
        error: `Cannot delete a media with type ${existingProductMedia.mediaType}`,
      });
    }

    // Adjust order of other media entries
    await prisma.productMedia.updateMany({
      where: {
        productId: existingProductMedia.productId,
        order: {
          gt: existingProductMedia.order,
        },
      },
      data: {
        order: {
          decrement: 1,
        },
      },
    });

    // Delete the media record
    await prisma.productMedia.delete({
      where: { id: BigInt(id) },
    });

    return res.status(204).end(); // No Content
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete product media",
      details: error.message,
    });
  }
});

module.exports = router;
