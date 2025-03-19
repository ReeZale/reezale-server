/*
  Warnings:

  - Added the required column `storefrontProductSegmentId` to the `StoreCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CategoryTags" DROP CONSTRAINT "CategoryTags_storefrontCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Field" DROP CONSTRAINT "Field_storefrontId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_templateId_fkey";

-- DropForeignKey
ALTER TABLE "StoreCategory" DROP CONSTRAINT "StoreCategory_storefrontId_fkey";

-- DropForeignKey
ALTER TABLE "StoreTags" DROP CONSTRAINT "StoreTags_storefrontId_fkey";

-- DropForeignKey
ALTER TABLE "StorefrontMarketSegment" DROP CONSTRAINT "StorefrontMarketSegment_storefrontId_fkey";

-- DropForeignKey
ALTER TABLE "StorefrontProductSegment" DROP CONSTRAINT "StorefrontProductSegment_productSegmentId_fkey";

-- DropForeignKey
ALTER TABLE "StorefrontProductSegment" DROP CONSTRAINT "StorefrontProductSegment_storefrontId_fkey";

-- DropForeignKey
ALTER TABLE "StorefrontRegion" DROP CONSTRAINT "StorefrontRegion_localeId_fkey";

-- DropForeignKey
ALTER TABLE "StorefrontRegion" DROP CONSTRAINT "StorefrontRegion_storefrontId_fkey";

-- DropForeignKey
ALTER TABLE "Template" DROP CONSTRAINT "Template_storefrontId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateField" DROP CONSTRAINT "TemplateField_fieldId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateField" DROP CONSTRAINT "TemplateField_templateId_fkey";

-- AlterTable
ALTER TABLE "StoreCategory" ADD COLUMN     "storefrontProductSegmentId" BIGINT NOT NULL,
ALTER COLUMN "productSegmentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "StorefrontProductSegment" ADD CONSTRAINT "StorefrontProductSegment_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontProductSegment" ADD CONSTRAINT "StorefrontProductSegment_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontMarketSegment" ADD CONSTRAINT "StorefrontMarketSegment_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontRegion" ADD CONSTRAINT "StorefrontRegion_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontRegion" ADD CONSTRAINT "StorefrontRegion_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCategory" ADD CONSTRAINT "StoreCategory_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCategory" ADD CONSTRAINT "StoreCategory_storefrontProductSegmentId_fkey" FOREIGN KEY ("storefrontProductSegmentId") REFERENCES "StorefrontProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreTags" ADD CONSTRAINT "StoreTags_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryTags" ADD CONSTRAINT "CategoryTags_storefrontCategoryId_fkey" FOREIGN KEY ("storefrontCategoryId") REFERENCES "StoreCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateField" ADD CONSTRAINT "TemplateField_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateField" ADD CONSTRAINT "TemplateField_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;
