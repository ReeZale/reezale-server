/*
  Warnings:

  - You are about to drop the column `storeCategoryId` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `StoreNavigation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `order` to the `StoreNavigation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentId` to the `StoreNavigation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeCollectionId` to the `StoreNavigation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "InventoryLocationFunctionHours" DROP CONSTRAINT "InventoryLocationFunctionHours_inventoryLocationFunctionId_fkey";

-- DropForeignKey
ALTER TABLE "LocationZone" DROP CONSTRAINT "LocationZone_timeZoneId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_storeCategoryId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "storeCategoryId";

-- AlterTable
ALTER TABLE "StoreNavigation" DROP CONSTRAINT "StoreNavigation_pkey",
ADD COLUMN     "isPrimary" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "order" INTEGER NOT NULL,
ADD COLUMN     "parentId" TEXT NOT NULL,
ADD COLUMN     "storeCollectionId" BIGINT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "StoreNavigation_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "StoreNavigation_id_seq";

-- CreateTable
CREATE TABLE "StoreProperty" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "propertyId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorePropertyOption" (
    "id" TEXT NOT NULL,
    "storePropertyId" TEXT NOT NULL,
    "propertyOptionId" BIGINT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,
    "display" BOOLEAN NOT NULL DEFAULT true,
    "labelOverride" TEXT,

    CONSTRAINT "StorePropertyOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreNavigationFilter" (
    "id" TEXT NOT NULL,
    "storeNavigationId" TEXT NOT NULL,
    "storePropertyId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StoreNavigationFilter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreProductProperty" (
    "id" TEXT NOT NULL,
    "productId" BIGINT NOT NULL,
    "storePropertyId" TEXT NOT NULL,
    "values" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreProductProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreProductPropertyOption" (
    "id" TEXT NOT NULL,
    "storeProductPropertyId" TEXT NOT NULL,
    "storePropertyOptionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreProductPropertyOption_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StoreProperty_storefrontId_propertyId_key" ON "StoreProperty"("storefrontId", "propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "StorePropertyOption_storePropertyId_propertyOptionId_key" ON "StorePropertyOption"("storePropertyId", "propertyOptionId");

-- CreateIndex
CREATE UNIQUE INDEX "StoreProductProperty_productId_storePropertyId_key" ON "StoreProductProperty"("productId", "storePropertyId");

-- AddForeignKey
ALTER TABLE "StoreProperty" ADD CONSTRAINT "StoreProperty_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreProperty" ADD CONSTRAINT "StoreProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorePropertyOption" ADD CONSTRAINT "StorePropertyOption_storePropertyId_fkey" FOREIGN KEY ("storePropertyId") REFERENCES "StoreProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorePropertyOption" ADD CONSTRAINT "StorePropertyOption_propertyOptionId_fkey" FOREIGN KEY ("propertyOptionId") REFERENCES "PropertyOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreNavigation" ADD CONSTRAINT "StoreNavigation_storeCollectionId_fkey" FOREIGN KEY ("storeCollectionId") REFERENCES "StoreCollection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreNavigation" ADD CONSTRAINT "StoreNavigation_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "StoreNavigation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreNavigationFilter" ADD CONSTRAINT "StoreNavigationFilter_storeNavigationId_fkey" FOREIGN KEY ("storeNavigationId") REFERENCES "StoreNavigation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreNavigationFilter" ADD CONSTRAINT "StoreNavigationFilter_storePropertyId_fkey" FOREIGN KEY ("storePropertyId") REFERENCES "StoreProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreProductProperty" ADD CONSTRAINT "StoreProductProperty_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreProductProperty" ADD CONSTRAINT "StoreProductProperty_storePropertyId_fkey" FOREIGN KEY ("storePropertyId") REFERENCES "StoreProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreProductPropertyOption" ADD CONSTRAINT "StoreProductPropertyOption_storeProductPropertyId_fkey" FOREIGN KEY ("storeProductPropertyId") REFERENCES "StoreProductProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreProductPropertyOption" ADD CONSTRAINT "StoreProductPropertyOption_storePropertyOptionId_fkey" FOREIGN KEY ("storePropertyOptionId") REFERENCES "StorePropertyOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationZone" ADD CONSTRAINT "LocationZone_timeZoneId_fkey" FOREIGN KEY ("timeZoneId") REFERENCES "TimeZone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryLocationFunctionHours" ADD CONSTRAINT "InventoryLocationFunctionHours_inventoryLocationFunctionId_fkey" FOREIGN KEY ("inventoryLocationFunctionId") REFERENCES "InventoryLocationFunction"("id") ON DELETE CASCADE ON UPDATE CASCADE;
