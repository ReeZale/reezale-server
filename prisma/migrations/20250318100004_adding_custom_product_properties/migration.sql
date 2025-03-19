/*
  Warnings:

  - You are about to drop the column `categoryTags` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `storeTags` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `templateId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `options` on the `TemplateField` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `TemplateField` table. All the data in the column will be lost.
  - You are about to drop the `CategoryTags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StoreTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CategoryTags" DROP CONSTRAINT "CategoryTags_storefrontCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_templateId_fkey";

-- DropForeignKey
ALTER TABLE "StoreTags" DROP CONSTRAINT "StoreTags_storefrontId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categoryTags",
DROP COLUMN "storeTags",
DROP COLUMN "templateId";

-- AlterTable
ALTER TABLE "TemplateField" DROP COLUMN "options",
DROP COLUMN "order";

-- DropTable
DROP TABLE "CategoryTags";

-- DropTable
DROP TABLE "StoreTags";

-- CreateTable
CREATE TABLE "ProductProperties" (
    "id" BIGSERIAL NOT NULL,
    "productId" BIGINT NOT NULL,
    "templateFieldId" BIGINT NOT NULL,
    "value" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductProperties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateStandardField" (
    "id" BIGSERIAL NOT NULL,
    "templateId" BIGINT NOT NULL,
    "standardFieldId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TemplateStandardField_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductProperties" ADD CONSTRAINT "ProductProperties_templateFieldId_fkey" FOREIGN KEY ("templateFieldId") REFERENCES "TemplateField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductProperties" ADD CONSTRAINT "ProductProperties_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateStandardField" ADD CONSTRAINT "TemplateStandardField_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateStandardField" ADD CONSTRAINT "TemplateStandardField_standardFieldId_fkey" FOREIGN KEY ("standardFieldId") REFERENCES "StandardField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
