/*
  Warnings:

  - A unique constraint covering the columns `[email,itemId,sellerId,localeId]` on the table `OfferNotification` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sellerId` to the `OfferNotification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OfferNotification" DROP CONSTRAINT "OfferNotification_itemId_fkey";

-- DropForeignKey
ALTER TABLE "OfferNotification" DROP CONSTRAINT "OfferNotification_localeId_fkey";

-- DropForeignKey
ALTER TABLE "OfferNotification" DROP CONSTRAINT "OfferNotification_offerId_fkey";

-- DropIndex
DROP INDEX "OfferNotification_email_itemId_localeId_key";

-- AlterTable
ALTER TABLE "OfferNotification" ADD COLUMN     "sellerId" BIGINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "OfferNotification_email_itemId_sellerId_localeId_key" ON "OfferNotification"("email", "itemId", "sellerId", "localeId");

-- AddForeignKey
ALTER TABLE "OfferNotification" ADD CONSTRAINT "OfferNotification_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferNotification" ADD CONSTRAINT "OfferNotification_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferNotification" ADD CONSTRAINT "OfferNotification_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferNotification" ADD CONSTRAINT "OfferNotification_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
