-- DropForeignKey
ALTER TABLE "ProductCategory" DROP CONSTRAINT "ProductCategory_parentId_fkey";

-- DropForeignKey
ALTER TABLE "ProductCategoryTranslations" DROP CONSTRAINT "ProductCategoryTranslations_localeId_fkey";

-- DropForeignKey
ALTER TABLE "ProductCategoryTranslations" DROP CONSTRAINT "ProductCategoryTranslations_productCategoryId_fkey";

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "ProductCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategoryTranslations" ADD CONSTRAINT "ProductCategoryTranslations_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategoryTranslations" ADD CONSTRAINT "ProductCategoryTranslations_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
