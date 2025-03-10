/*
  Warnings:

  - You are about to drop the column `maxPrice` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `minPrice` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `tax` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `confirmed` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `confirmedDate` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `tax` on the `OrderItem` table. All the data in the column will be lost.
  - Added the required column `taxAmount` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taxAmount` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taxRate` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Country" DROP CONSTRAINT "Country_currencyId_fkey";

-- DropForeignKey
ALTER TABLE "Locale" DROP CONSTRAINT "Locale_languageId_fkey";

-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "maxPrice",
DROP COLUMN "minPrice",
DROP COLUMN "quantity",
ADD COLUMN     "available" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "InventoryAllocation" ALTER COLUMN "transportRequestId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Offer" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "tax",
ADD COLUMN     "taxAmount" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "confirmed",
DROP COLUMN "confirmedDate",
DROP COLUMN "tax",
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "taxAmount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "taxRate" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "Seller" ADD COLUMN     "accountId" BIGINT;

-- CreateTable
CREATE TABLE "Account" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locale" ADD CONSTRAINT "Locale_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;
