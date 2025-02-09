/*
  Warnings:

  - A unique constraint covering the columns `[reference,sellerId,itemId]` on the table `Offer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[itemId,sellerId]` on the table `SellerItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Offer_reference_sellerId_itemId_key" ON "Offer"("reference", "sellerId", "itemId");

-- CreateIndex
CREATE UNIQUE INDEX "SellerItem_itemId_sellerId_key" ON "SellerItem"("itemId", "sellerId");
