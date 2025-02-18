/*
  Warnings:

  - You are about to drop the column `itemId` on the `OfferNotification` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email,sku,sellerId,localeId]` on the table `OfferNotification` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `itemGroupId` to the `OfferNotification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sku` to the `OfferNotification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OfferNotification" DROP CONSTRAINT "OfferNotification_itemId_fkey";

-- DropIndex
DROP INDEX "OfferNotification_email_itemId_sellerId_localeId_key";

-- AlterTable
ALTER TABLE "OfferNotification" DROP COLUMN "itemId",
ADD COLUMN     "itemGroupId" BIGINT NOT NULL,
ADD COLUMN     "sku" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "OfferNotification_email_sku_sellerId_localeId_key" ON "OfferNotification"("email", "sku", "sellerId", "localeId");

-- AddForeignKey
ALTER TABLE "OfferNotification" ADD CONSTRAINT "OfferNotification_itemGroupId_fkey" FOREIGN KEY ("itemGroupId") REFERENCES "ItemGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
