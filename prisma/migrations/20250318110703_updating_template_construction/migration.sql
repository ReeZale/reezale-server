/*
  Warnings:

  - You are about to drop the column `productTemplateData` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `ProductProperties` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductProperties" DROP CONSTRAINT "ProductProperties_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductProperties" DROP CONSTRAINT "ProductProperties_templateFieldId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateStandardField" DROP CONSTRAINT "TemplateStandardField_standardFieldId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "productTemplateData";

-- DropTable
DROP TABLE "ProductProperties";

-- CreateTable
CREATE TABLE "StandardProperties" (
    "id" BIGSERIAL NOT NULL,
    "productId" BIGINT NOT NULL,
    "standardFieldId" BIGINT NOT NULL,
    "value" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StandardProperties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomProperties" (
    "id" BIGSERIAL NOT NULL,
    "productId" BIGINT NOT NULL,
    "templateFieldId" BIGINT NOT NULL,
    "value" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomProperties_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StandardProperties" ADD CONSTRAINT "StandardProperties_standardFieldId_fkey" FOREIGN KEY ("standardFieldId") REFERENCES "TemplateStandardField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardProperties" ADD CONSTRAINT "StandardProperties_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomProperties" ADD CONSTRAINT "CustomProperties_templateFieldId_fkey" FOREIGN KEY ("templateFieldId") REFERENCES "TemplateField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomProperties" ADD CONSTRAINT "CustomProperties_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateStandardField" ADD CONSTRAINT "TemplateStandardField_standardFieldId_fkey" FOREIGN KEY ("standardFieldId") REFERENCES "StandardField"("id") ON DELETE CASCADE ON UPDATE CASCADE;
