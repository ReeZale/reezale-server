/*
  Warnings:

  - A unique constraint covering the columns `[storefrontId,externalId]` on the table `StoreCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "StoreCategory_externalId_key";

-- CreateIndex
CREATE UNIQUE INDEX "StoreCategory_storefrontId_externalId_key" ON "StoreCategory"("storefrontId", "externalId");
