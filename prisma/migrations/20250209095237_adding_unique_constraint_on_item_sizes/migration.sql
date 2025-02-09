/*
  Warnings:

  - A unique constraint covering the columns `[itemId,sizeOptionId,localeId]` on the table `ItemSize` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ItemSize_itemId_sizeOptionId_localeId_key" ON "ItemSize"("itemId", "sizeOptionId", "localeId");
