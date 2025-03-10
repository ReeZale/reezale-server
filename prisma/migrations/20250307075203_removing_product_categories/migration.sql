/*
  Warnings:

  - You are about to drop the `ProductCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductCategoryTranslations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductCategory" DROP CONSTRAINT "ProductCategory_parentId_fkey";

-- DropForeignKey
ALTER TABLE "ProductCategoryTranslations" DROP CONSTRAINT "ProductCategoryTranslations_localeId_fkey";

-- DropForeignKey
ALTER TABLE "ProductCategoryTranslations" DROP CONSTRAINT "ProductCategoryTranslations_productCategoryId_fkey";

-- DropTable
DROP TABLE "ProductCategory";

-- DropTable
DROP TABLE "ProductCategoryTranslations";
