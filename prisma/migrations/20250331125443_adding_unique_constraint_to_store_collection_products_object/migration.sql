/*
  Warnings:

  - A unique constraint covering the columns `[productId,storeCollectionId]` on the table `StoreCollectionProducts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "StoreCollectionProducts_productId_key";

-- CreateIndex
CREATE UNIQUE INDEX "StoreCollectionProducts_productId_storeCollectionId_key" ON "StoreCollectionProducts"("productId", "storeCollectionId");
