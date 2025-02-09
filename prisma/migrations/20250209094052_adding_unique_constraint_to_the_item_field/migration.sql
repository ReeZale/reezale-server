/*
  Warnings:

  - A unique constraint covering the columns `[itemGroupId,sku]` on the table `Item` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Item_itemGroupId_sku_key" ON "Item"("itemGroupId", "sku");
