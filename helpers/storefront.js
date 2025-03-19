const prisma = require("../config/prisma");

const addStoreCategories = async (storefrontId, storefrontProductSegments) => {
  try {
    // Loop through each provided storefront product segment
    for (const item of storefrontProductSegments) {
      try {
        const primaryCategory = await prisma.storeCategory.create({
          data: {
            externalId: `${storefrontId.toString()}-${item.id.toString()}`,
            name: item.productSegment.name,
            path: item.productSegment.path,
            productSegmentId: item.productSegment.id,
            storefrontId: storefrontId,
            storefrontProductSegmentId: item.id,
          },
        });

        // Fetch all product segments where the path starts with the given product segment path
        const productSegments = await prisma.productSegment.findMany({
          where: {
            parentId: primaryCategory.productSegmentId,
          },
        });

        // Map the results into the format required for bulk insert
        const newStorefrontProductSegments = productSegments.map((segment) => ({
          externalId: `${storefrontId.toString()}${primaryCategory.id.toString()}-${primaryCategory.productSegmentId.toString()}${segment.id.toString()}`,
          name: segment.name,
          path: segment.path,
          parentId: primaryCategory.id,
          productSegmentId: segment.id,
          storefrontId: storefrontId,
          storefrontProductSegmentId: item.id,
        }));

        // Perform bulk insert while skipping duplicates
        if (newStorefrontProductSegments.length > 0) {
          await prisma.storeCategory.createMany({
            data: newStorefrontProductSegments,
            skipDuplicates: true, // Prevent unique constraint errors
          });
        }
      } catch (error) {
        console.error("Error processing product segment:", error);
      }
    }
  } catch (error) {
    console.error("Error fetching product segments:", error);
  }
};

const getStorProductSegment = async (storefrontId, productSegmentId) => {
  try {
    const existingStorefrontProductSegment =
      await prisma.storefrontProductSegment.findFirst({
        where: {
          storefrontId: storefrontId,
          productSegmentId: productSegmentId,
        },
      });

    if (!existingStorefrontProductSegment) {
      const newStoreProductSegment =
        await prisma.storefrontProductSegment.create({
          data: {
            storefrontId: storefrontId,
            productSegmentId: productSegmentId,
            primary: false,
          },
        });

      return newStoreProductSegment;
    }

    return existingStorefrontProductSegment;
  } catch (error) {
    throw error;
  }
};

module.exports = { addStoreCategories, getStorProductSegment };
