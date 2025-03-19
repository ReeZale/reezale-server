/*
  Warnings:

  - You are about to drop the `CustomProductProperty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CustomProperty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CustomPropertyOption` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductSegmentProperty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StandardProductProperty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StandardProperty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StandardPropertyOption` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "FieldType" AS ENUM ('text', 'longText', 'list', 'link', 'date', 'image', 'color');

-- DropForeignKey
ALTER TABLE "CustomOptionGroup" DROP CONSTRAINT "CustomOptionGroup_storefrontId_fkey";

-- DropForeignKey
ALTER TABLE "CustomOptionValue" DROP CONSTRAINT "CustomOptionValue_optionGroupId_fkey";

-- DropForeignKey
ALTER TABLE "CustomProductProperty" DROP CONSTRAINT "CustomProductProperty_customPropertyId_fkey";

-- DropForeignKey
ALTER TABLE "CustomProductProperty" DROP CONSTRAINT "CustomProductProperty_customPropertyOptionId_fkey";

-- DropForeignKey
ALTER TABLE "CustomProductProperty" DROP CONSTRAINT "CustomProductProperty_productId_fkey";

-- DropForeignKey
ALTER TABLE "CustomProperty" DROP CONSTRAINT "CustomProperty_storeCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "CustomPropertyOption" DROP CONSTRAINT "CustomPropertyOption_customPropertyId_fkey";

-- DropForeignKey
ALTER TABLE "CustomVariantOption" DROP CONSTRAINT "CustomVariantOption_optionValueId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_productSegmentId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSegmentProperty" DROP CONSTRAINT "ProductSegmentProperty_productSegmentId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSegmentProperty" DROP CONSTRAINT "ProductSegmentProperty_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "ProductTranslation" DROP CONSTRAINT "ProductTranslation_localeId_fkey";

-- DropForeignKey
ALTER TABLE "ProductTranslation" DROP CONSTRAINT "ProductTranslation_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductTranslation" DROP CONSTRAINT "ProductTranslation_storefrontLocaleId_fkey";

-- DropForeignKey
ALTER TABLE "StandardOptionValue" DROP CONSTRAINT "StandardOptionValue_optionGroupId_fkey";

-- DropForeignKey
ALTER TABLE "StandardProductProperty" DROP CONSTRAINT "StandardProductProperty_productId_fkey";

-- DropForeignKey
ALTER TABLE "StandardProductProperty" DROP CONSTRAINT "StandardProductProperty_standardPropertyId_fkey";

-- DropForeignKey
ALTER TABLE "StandardProductProperty" DROP CONSTRAINT "StandardProductProperty_standardPropertyOptionId_fkey";

-- DropForeignKey
ALTER TABLE "StandardPropertyOption" DROP CONSTRAINT "StandardPropertyOption_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "StandardVariantOption" DROP CONSTRAINT "StandardVariantOption_optionValueId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "categoryTags" TEXT[],
ADD COLUMN     "productTemplateData" JSONB,
ADD COLUMN     "storeTags" TEXT[];

-- DropTable
DROP TABLE "CustomProductProperty";

-- DropTable
DROP TABLE "CustomProperty";

-- DropTable
DROP TABLE "CustomPropertyOption";

-- DropTable
DROP TABLE "ProductSegmentProperty";

-- DropTable
DROP TABLE "StandardProductProperty";

-- DropTable
DROP TABLE "StandardProperty";

-- DropTable
DROP TABLE "StandardPropertyOption";

-- CreateTable
CREATE TABLE "Template" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'STANDARD',
    "storefrontId" BIGINT NOT NULL,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateField" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "translations" JSONB,
    "index" BOOLEAN NOT NULL DEFAULT false,
    "fieldType" "FieldType" NOT NULL DEFAULT 'text',
    "storefrontId" BIGINT NOT NULL,

    CONSTRAINT "TemplateField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductTemplate" (
    "id" BIGSERIAL NOT NULL,
    "templateId" BIGINT NOT NULL,
    "templateFieldId" BIGINT NOT NULL,
    "order" INTEGER NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ProductTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VariantTemplate" (
    "id" BIGSERIAL NOT NULL,
    "templateId" BIGINT NOT NULL,
    "templateFieldId" BIGINT NOT NULL,
    "order" INTEGER NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "VariantTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreTags" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "labelTranslations" JSONB,
    "description" TEXT NOT NULL,
    "values" JSONB,
    "storefrontId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreTags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryTags" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "labelTranslations" JSONB,
    "description" TEXT NOT NULL,
    "values" JSONB,
    "storefrontCategoryId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoryTags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "StoreTags_key_idx" ON "StoreTags"("key");

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateField" ADD CONSTRAINT "TemplateField_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTemplate" ADD CONSTRAINT "ProductTemplate_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTemplate" ADD CONSTRAINT "ProductTemplate_templateFieldId_fkey" FOREIGN KEY ("templateFieldId") REFERENCES "TemplateField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantTemplate" ADD CONSTRAINT "VariantTemplate_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantTemplate" ADD CONSTRAINT "VariantTemplate_templateFieldId_fkey" FOREIGN KEY ("templateFieldId") REFERENCES "TemplateField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreTags" ADD CONSTRAINT "StoreTags_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryTags" ADD CONSTRAINT "CategoryTags_storefrontCategoryId_fkey" FOREIGN KEY ("storefrontCategoryId") REFERENCES "StoreCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTranslation" ADD CONSTRAINT "ProductTranslation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTranslation" ADD CONSTRAINT "ProductTranslation_storefrontLocaleId_fkey" FOREIGN KEY ("storefrontLocaleId") REFERENCES "StorefrontLocale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTranslation" ADD CONSTRAINT "ProductTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardOptionValue" ADD CONSTRAINT "StandardOptionValue_optionGroupId_fkey" FOREIGN KEY ("optionGroupId") REFERENCES "StandardOptionGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardVariantOption" ADD CONSTRAINT "StandardVariantOption_optionValueId_fkey" FOREIGN KEY ("optionValueId") REFERENCES "StandardOptionValue"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomOptionGroup" ADD CONSTRAINT "CustomOptionGroup_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomOptionValue" ADD CONSTRAINT "CustomOptionValue_optionGroupId_fkey" FOREIGN KEY ("optionGroupId") REFERENCES "CustomOptionGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomVariantOption" ADD CONSTRAINT "CustomVariantOption_optionValueId_fkey" FOREIGN KEY ("optionValueId") REFERENCES "CustomOptionValue"("id") ON DELETE CASCADE ON UPDATE CASCADE;
