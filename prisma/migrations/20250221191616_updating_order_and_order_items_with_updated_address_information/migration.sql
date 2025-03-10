/*
  Warnings:

  - You are about to drop the column `sellerProfileId` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `offerId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `purchaseProfileId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `TransportRequest` table. All the data in the column will be lost.
  - You are about to drop the `PurchaseProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SellerProfile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buyer` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentStatus` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OfferStatus" AS ENUM ('available', 'reserved', 'allocated', 'pending_shipment', 'shipped', 'delivered', 'accepted', 'archived');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('pending', 'failed', 'complete');

-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_sellerProfileId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_offerId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_purchaseProfileId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_orderId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseProfile" DROP CONSTRAINT "PurchaseProfile_addressId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseProfile" DROP CONSTRAINT "PurchaseProfile_memberId_fkey";

-- DropForeignKey
ALTER TABLE "SellerProfile" DROP CONSTRAINT "SellerProfile_addressId_fkey";

-- DropForeignKey
ALTER TABLE "SellerProfile" DROP CONSTRAINT "SellerProfile_memberId_fkey";

-- DropForeignKey
ALTER TABLE "TransportRequest" DROP CONSTRAINT "TransportRequest_orderId_fkey";

-- DropIndex
DROP INDEX "Order_offerId_idx";

-- DropIndex
DROP INDEX "Payment_orderId_key";

-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "memberId" BIGINT;

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "sellerProfileId",
ADD COLUMN     "memberId" BIGINT,
ADD COLUMN     "sender" JSONB,
ADD COLUMN     "status" "OfferStatus" NOT NULL DEFAULT 'available';

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "offerId",
DROP COLUMN "purchaseProfileId",
ADD COLUMN     "buyer" JSONB NOT NULL,
ADD COLUMN     "memberId" BIGINT,
ADD COLUMN     "paymentId" BIGINT,
ADD COLUMN     "paymentStatus" "PaymentStatus" NOT NULL;

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "orderId";

-- AlterTable
ALTER TABLE "TransportRequest" DROP COLUMN "orderId";

-- DropTable
DROP TABLE "PurchaseProfile";

-- DropTable
DROP TABLE "SellerProfile";

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" BIGSERIAL NOT NULL,
    "orderId" BIGINT NOT NULL,
    "itemId" BIGINT NOT NULL,
    "offerId" BIGINT NOT NULL,
    "currency" TEXT NOT NULL,
    "subTotal" DECIMAL(65,30) NOT NULL,
    "tax" DECIMAL(65,30) NOT NULL,
    "shipping" DECIMAL(65,30) NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "confirmed" BOOLEAN NOT NULL DEFAULT false,
    "confirmedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transportRequestId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_transportRequestId_fkey" FOREIGN KEY ("transportRequestId") REFERENCES "TransportRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
