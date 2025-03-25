/*
  Warnings:

  - You are about to drop the column `normalized` on the `Brand` table. All the data in the column will be lost.
  - You are about to drop the `ProductProperties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductTranslation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SegmentSection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SegmentSectionField` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Brand` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductProperties" DROP CONSTRAINT "ProductProperties_fieldId_fkey";

-- DropForeignKey
ALTER TABLE "ProductProperties" DROP CONSTRAINT "ProductProperties_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductProperties" DROP CONSTRAINT "ProductProperties_templateId_fkey";

-- DropForeignKey
ALTER TABLE "ProductTranslation" DROP CONSTRAINT "ProductTranslation_localeId_fkey";

-- DropForeignKey
ALTER TABLE "ProductTranslation" DROP CONSTRAINT "ProductTranslation_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductTranslation" DROP CONSTRAINT "ProductTranslation_storefrontLocaleId_fkey";

-- DropForeignKey
ALTER TABLE "SegmentSection" DROP CONSTRAINT "SegmentSection_segmentId_fkey";

-- DropForeignKey
ALTER TABLE "SegmentSectionField" DROP CONSTRAINT "SegmentSectionField_fieldId_fkey";

-- DropForeignKey
ALTER TABLE "SegmentSectionField" DROP CONSTRAINT "SegmentSectionField_segmentSectionId_fkey";

-- DropIndex
DROP INDEX "Brand_name_normalized_key";

-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "normalized",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "logo" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "brandId" BIGINT;

-- DropTable
DROP TABLE "ProductProperties";

-- DropTable
DROP TABLE "ProductTranslation";

-- DropTable
DROP TABLE "SegmentSection";

-- DropTable
DROP TABLE "SegmentSectionField";

-- DropEnum
DROP TYPE "Section";

-- CreateTable
CREATE TABLE "Property" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "translations" JSONB NOT NULL,
    "options" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SegmentProperty" (
    "id" BIGSERIAL NOT NULL,
    "propertyId" BIGINT NOT NULL,
    "productSegmentId" BIGINT NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SegmentProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductProperty" (
    "id" BIGSERIAL NOT NULL,
    "productId" BIGINT NOT NULL,
    "segmentPropertyId" BIGINT NOT NULL,
    "values" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductProperty_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Property_key_key" ON "Property"("key");

-- CreateIndex
CREATE UNIQUE INDEX "SegmentProperty_propertyId_productSegmentId_key" ON "SegmentProperty"("propertyId", "productSegmentId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductProperty_productId_segmentPropertyId_key" ON "ProductProperty"("productId", "segmentPropertyId");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- AddForeignKey
ALTER TABLE "SegmentProperty" ADD CONSTRAINT "SegmentProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SegmentProperty" ADD CONSTRAINT "SegmentProperty_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductProperty" ADD CONSTRAINT "ProductProperty_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductProperty" ADD CONSTRAINT "ProductProperty_segmentPropertyId_fkey" FOREIGN KEY ("segmentPropertyId") REFERENCES "SegmentProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;
