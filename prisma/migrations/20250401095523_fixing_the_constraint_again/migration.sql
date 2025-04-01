/*
  Warnings:

  - A unique constraint covering the columns `[productVariantId,countryId,currencyId,condition]` on the table `ListPrice` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ListPrice_productVariantId_countryId_condition_key";

-- CreateIndex
CREATE UNIQUE INDEX "ListPrice_productVariantId_countryId_currencyId_condition_key" ON "ListPrice"("productVariantId", "countryId", "currencyId", "condition");
