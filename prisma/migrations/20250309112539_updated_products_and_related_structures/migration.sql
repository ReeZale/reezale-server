/*
  Warnings:

  - You are about to drop the `StoreCategoryTranslation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StoreCategoryTranslation" DROP CONSTRAINT "StoreCategoryTranslation_storeCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "StoreCategoryTranslation" DROP CONSTRAINT "StoreCategoryTranslation_storefrontLocaleId_fkey";

-- AlterTable
ALTER TABLE "StoreCategory" ADD COLUMN     "translations" JSONB;

-- DropTable
DROP TABLE "StoreCategoryTranslation";

-- CreateTable
CREATE TABLE "ProductSegmentProperty" (
    "id" BIGSERIAL NOT NULL,
    "propertyId" BIGINT NOT NULL,
    "productSegmentId" BIGINT NOT NULL,
    "require" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ProductSegmentProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StandardProperty" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "translations" JSONB,

    CONSTRAINT "StandardProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StandardPropertyOption" (
    "id" BIGSERIAL NOT NULL,
    "propertyId" BIGINT NOT NULL,
    "value" TEXT NOT NULL,
    "translations" JSONB,

    CONSTRAINT "StandardPropertyOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StandardProductProperty" (
    "id" BIGSERIAL NOT NULL,
    "productId" BIGINT NOT NULL,
    "standardPropertyId" BIGINT NOT NULL,
    "standardPropertyOptionId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StandardProductProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomProperty" (
    "id" BIGSERIAL NOT NULL,
    "externalId" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "require" BOOLEAN NOT NULL DEFAULT false,
    "storeCategoryId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "translations" JSONB,

    CONSTRAINT "CustomProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomPropertyOption" (
    "id" BIGSERIAL NOT NULL,
    "externalId" TEXT,
    "customPropertyId" BIGINT NOT NULL,
    "value" TEXT NOT NULL,
    "translations" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomPropertyOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomProductProperty" (
    "id" BIGSERIAL NOT NULL,
    "productId" BIGINT NOT NULL,
    "customPropertyId" BIGINT NOT NULL,
    "customPropertyOptionId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomProductProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" BIGSERIAL NOT NULL,
    "reference" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "thumbnailImage" TEXT NOT NULL,
    "images" TEXT[],
    "gender" "Gender",
    "ageGroup" "AgeGroup",
    "productSegmentId" BIGINT NOT NULL,
    "storeCategoryId" BIGINT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductTranslation" (
    "id" BIGSERIAL NOT NULL,
    "productId" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "descripiton" TEXT NOT NULL,
    "customAttributes" JSONB,
    "thumbnailImage" TEXT,
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "storefrontLocaleId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariant" (
    "id" BIGSERIAL NOT NULL,
    "productId" BIGINT NOT NULL,
    "sku" TEXT,
    "gtin" TEXT,
    "mpn" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StandardOptionGroup" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "translations" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StandardOptionGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StandardOptionValue" (
    "id" BIGSERIAL NOT NULL,
    "optionGroupId" BIGINT NOT NULL,
    "value" TEXT NOT NULL,
    "translations" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StandardOptionValue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StandardVariantOption" (
    "id" BIGSERIAL NOT NULL,
    "variantId" BIGINT NOT NULL,
    "optionValueId" BIGINT NOT NULL,

    CONSTRAINT "StandardVariantOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomOptionGroup" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "translations" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomOptionGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomOptionValue" (
    "id" BIGSERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "optionGroupId" BIGINT NOT NULL,
    "translations" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomOptionValue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomVariantOption" (
    "id" BIGSERIAL NOT NULL,
    "variantId" BIGINT NOT NULL,
    "optionValueId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomVariantOption_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductSegmentProperty_propertyId_productSegmentId_key" ON "ProductSegmentProperty"("propertyId", "productSegmentId");

-- CreateIndex
CREATE UNIQUE INDEX "StandardProperty_name_key" ON "StandardProperty"("name");

-- CreateIndex
CREATE UNIQUE INDEX "StandardPropertyOption_propertyId_value_key" ON "StandardPropertyOption"("propertyId", "value");

-- CreateIndex
CREATE UNIQUE INDEX "StandardProductProperty_productId_standardPropertyId_standa_key" ON "StandardProductProperty"("productId", "standardPropertyId", "standardPropertyOptionId");

-- CreateIndex
CREATE UNIQUE INDEX "CustomPropertyOption_customPropertyId_value_key" ON "CustomPropertyOption"("customPropertyId", "value");

-- CreateIndex
CREATE UNIQUE INDEX "CustomProductProperty_productId_customPropertyId_customProp_key" ON "CustomProductProperty"("productId", "customPropertyId", "customPropertyOptionId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_reference_storefrontId_key" ON "Product"("reference", "storefrontId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductTranslation_productId_localeId_storefrontLocaleId_key" ON "ProductTranslation"("productId", "localeId", "storefrontLocaleId");

-- AddForeignKey
ALTER TABLE "ProductSegmentProperty" ADD CONSTRAINT "ProductSegmentProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "StandardProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSegmentProperty" ADD CONSTRAINT "ProductSegmentProperty_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardPropertyOption" ADD CONSTRAINT "StandardPropertyOption_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "StandardProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardProductProperty" ADD CONSTRAINT "StandardProductProperty_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardProductProperty" ADD CONSTRAINT "StandardProductProperty_standardPropertyId_fkey" FOREIGN KEY ("standardPropertyId") REFERENCES "StandardProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardProductProperty" ADD CONSTRAINT "StandardProductProperty_standardPropertyOptionId_fkey" FOREIGN KEY ("standardPropertyOptionId") REFERENCES "StandardPropertyOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomProperty" ADD CONSTRAINT "CustomProperty_storeCategoryId_fkey" FOREIGN KEY ("storeCategoryId") REFERENCES "StoreCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomPropertyOption" ADD CONSTRAINT "CustomPropertyOption_customPropertyId_fkey" FOREIGN KEY ("customPropertyId") REFERENCES "CustomProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomProductProperty" ADD CONSTRAINT "CustomProductProperty_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomProductProperty" ADD CONSTRAINT "CustomProductProperty_customPropertyId_fkey" FOREIGN KEY ("customPropertyId") REFERENCES "CustomProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomProductProperty" ADD CONSTRAINT "CustomProductProperty_customPropertyOptionId_fkey" FOREIGN KEY ("customPropertyOptionId") REFERENCES "CustomPropertyOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_storeCategoryId_fkey" FOREIGN KEY ("storeCategoryId") REFERENCES "StoreCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTranslation" ADD CONSTRAINT "ProductTranslation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTranslation" ADD CONSTRAINT "ProductTranslation_storefrontLocaleId_fkey" FOREIGN KEY ("storefrontLocaleId") REFERENCES "StorefrontLocale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTranslation" ADD CONSTRAINT "ProductTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardOptionValue" ADD CONSTRAINT "StandardOptionValue_optionGroupId_fkey" FOREIGN KEY ("optionGroupId") REFERENCES "StandardOptionGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardVariantOption" ADD CONSTRAINT "StandardVariantOption_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "ProductVariant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardVariantOption" ADD CONSTRAINT "StandardVariantOption_optionValueId_fkey" FOREIGN KEY ("optionValueId") REFERENCES "StandardOptionValue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomOptionGroup" ADD CONSTRAINT "CustomOptionGroup_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomOptionValue" ADD CONSTRAINT "CustomOptionValue_optionGroupId_fkey" FOREIGN KEY ("optionGroupId") REFERENCES "CustomOptionGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomVariantOption" ADD CONSTRAINT "CustomVariantOption_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "ProductVariant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomVariantOption" ADD CONSTRAINT "CustomVariantOption_optionValueId_fkey" FOREIGN KEY ("optionValueId") REFERENCES "CustomOptionValue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
