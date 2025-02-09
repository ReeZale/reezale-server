/*
  Warnings:

  - A unique constraint covering the columns `[brandId,sku]` on the table `ItemGroup` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ItemGroup_brandId_sku_key" ON "ItemGroup"("brandId", "sku");
