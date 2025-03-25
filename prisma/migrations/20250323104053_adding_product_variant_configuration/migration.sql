/*
  Warnings:

  - You are about to drop the `CustomOptionGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CustomOptionValue` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CustomVariantOption` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StandardOptionGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StandardOptionValue` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StandardVariantOption` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[productId,sku]` on the table `ProductVariant` will be added. If there are existing duplicate values, this will fail.
  - Made the column `sku` on table `ProductVariant` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CustomOptionGroup" DROP CONSTRAINT "CustomOptionGroup_storefrontId_fkey";

-- DropForeignKey
ALTER TABLE "CustomOptionValue" DROP CONSTRAINT "CustomOptionValue_optionGroupId_fkey";

-- DropForeignKey
ALTER TABLE "CustomVariantOption" DROP CONSTRAINT "CustomVariantOption_optionValueId_fkey";

-- DropForeignKey
ALTER TABLE "CustomVariantOption" DROP CONSTRAINT "CustomVariantOption_variantId_fkey";

-- DropForeignKey
ALTER TABLE "StandardOptionValue" DROP CONSTRAINT "StandardOptionValue_optionGroupId_fkey";

-- DropForeignKey
ALTER TABLE "StandardVariantOption" DROP CONSTRAINT "StandardVariantOption_optionValueId_fkey";

-- DropForeignKey
ALTER TABLE "StandardVariantOption" DROP CONSTRAINT "StandardVariantOption_variantId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "url" TEXT,
ADD COLUMN     "variantConfigId" BIGINT;

-- AlterTable
ALTER TABLE "ProductVariant" ALTER COLUMN "sku" SET NOT NULL;

-- DropTable
DROP TABLE "CustomOptionGroup";

-- DropTable
DROP TABLE "CustomOptionValue";

-- DropTable
DROP TABLE "CustomVariantOption";

-- DropTable
DROP TABLE "StandardOptionGroup";

-- DropTable
DROP TABLE "StandardOptionValue";

-- DropTable
DROP TABLE "StandardVariantOption";

-- CreateTable
CREATE TABLE "VariantConfig" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "translations" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VariantConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VariantProperty" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "translations" JSONB NOT NULL,
    "options" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VariantProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VariantConfigField" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "variantConfigId" BIGINT NOT NULL,
    "variantPropertyId" BIGINT NOT NULL,
    "order" INTEGER NOT NULL,
    "isRequired" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VariantConfigField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariantProperty" (
    "id" BIGSERIAL NOT NULL,
    "productVariantId" BIGINT NOT NULL,
    "variantConfigFieldId" BIGINT NOT NULL,
    "value" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductVariantProperty_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VariantConfig_key_key" ON "VariantConfig"("key");

-- CreateIndex
CREATE UNIQUE INDEX "VariantProperty_key_key" ON "VariantProperty"("key");

-- CreateIndex
CREATE UNIQUE INDEX "VariantConfigField_variantConfigId_variantPropertyId_key" ON "VariantConfigField"("variantConfigId", "variantPropertyId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariantProperty_productVariantId_variantConfigFieldI_key" ON "ProductVariantProperty"("productVariantId", "variantConfigFieldId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_productId_sku_key" ON "ProductVariant"("productId", "sku");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_variantConfigId_fkey" FOREIGN KEY ("variantConfigId") REFERENCES "VariantConfig"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantConfigField" ADD CONSTRAINT "VariantConfigField_variantConfigId_fkey" FOREIGN KEY ("variantConfigId") REFERENCES "VariantConfig"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantConfigField" ADD CONSTRAINT "VariantConfigField_variantPropertyId_fkey" FOREIGN KEY ("variantPropertyId") REFERENCES "VariantProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantProperty" ADD CONSTRAINT "ProductVariantProperty_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantProperty" ADD CONSTRAINT "ProductVariantProperty_variantConfigFieldId_fkey" FOREIGN KEY ("variantConfigFieldId") REFERENCES "VariantConfigField"("id") ON DELETE CASCADE ON UPDATE CASCADE;
