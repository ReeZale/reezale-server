/*
  Warnings:

  - You are about to drop the column `currencyId` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `discount` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `productVariantId` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `salePrice` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Offer` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listPriceId` to the `Offer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_currencyId_fkey";

-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_productVariantId_fkey";

-- DropIndex
DROP INDEX "Offer_productVariantId_currencyId_idx";

-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "currencyId",
DROP COLUMN "discount",
DROP COLUMN "endDate",
DROP COLUMN "isActive",
DROP COLUMN "price",
DROP COLUMN "productVariantId",
DROP COLUMN "salePrice",
DROP COLUMN "startDate",
ADD COLUMN     "amount" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "listPriceId" BIGINT NOT NULL,
ADD COLUMN     "validUntil" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_listPriceId_fkey" FOREIGN KEY ("listPriceId") REFERENCES "ListPrice"("id") ON DELETE CASCADE ON UPDATE CASCADE;
