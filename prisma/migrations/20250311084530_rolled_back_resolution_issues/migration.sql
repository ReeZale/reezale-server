/*
  Warnings:

  - You are about to drop the `ProductTemplate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Template` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TemplateField` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VariantTemplate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductTemplate" DROP CONSTRAINT "ProductTemplate_templateFieldId_fkey";

-- DropForeignKey
ALTER TABLE "ProductTemplate" DROP CONSTRAINT "ProductTemplate_templateId_fkey";

-- DropForeignKey
ALTER TABLE "Template" DROP CONSTRAINT "Template_storefrontId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateField" DROP CONSTRAINT "TemplateField_storefrontId_fkey";

-- DropForeignKey
ALTER TABLE "VariantTemplate" DROP CONSTRAINT "VariantTemplate_templateFieldId_fkey";

-- DropForeignKey
ALTER TABLE "VariantTemplate" DROP CONSTRAINT "VariantTemplate_templateId_fkey";

-- DropTable
DROP TABLE "ProductTemplate";

-- DropTable
DROP TABLE "Template";

-- DropTable
DROP TABLE "TemplateField";

-- DropTable
DROP TABLE "VariantTemplate";

-- DropEnum
DROP TYPE "FieldType";
