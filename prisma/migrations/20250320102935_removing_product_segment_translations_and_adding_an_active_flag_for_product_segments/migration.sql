/*
  Warnings:

  - You are about to drop the `ProductSegmentTranslations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_brandId_fkey";

-- DropForeignKey
ALTER TABLE "ProductProperty" DROP CONSTRAINT "ProductProperty_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSegment" DROP CONSTRAINT "ProductSegment_propertyGroupId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSegmentTranslations" DROP CONSTRAINT "ProductSegmentTranslations_localeId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSegmentTranslations" DROP CONSTRAINT "ProductSegmentTranslations_productSegmentId_fkey";

-- DropForeignKey
ALTER TABLE "PropertyGroupProperty" DROP CONSTRAINT "PropertyGroupProperty_propertyGroupId_fkey";

-- DropForeignKey
ALTER TABLE "PropertyGroupProperty" DROP CONSTRAINT "PropertyGroupProperty_propertyId_fkey";

-- AlterTable
ALTER TABLE "ProductSegment" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "ProductSegmentTranslations";

-- AddForeignKey
ALTER TABLE "ProductSegment" ADD CONSTRAINT "ProductSegment_propertyGroupId_fkey" FOREIGN KEY ("propertyGroupId") REFERENCES "PropertyGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyGroupProperty" ADD CONSTRAINT "PropertyGroupProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyGroupProperty" ADD CONSTRAINT "PropertyGroupProperty_propertyGroupId_fkey" FOREIGN KEY ("propertyGroupId") REFERENCES "PropertyGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductProperty" ADD CONSTRAINT "ProductProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;
