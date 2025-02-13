/*
  Warnings:

  - The `condition` column on the `Offer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `email` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `shipAddress` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `shipName` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `deliverDate` on the `TransportOrder` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `TransportOrder` table. All the data in the column will be lost.
  - You are about to drop the column `partner` on the `TransportOrder` table. All the data in the column will be lost.
  - You are about to drop the column `pickDate` on the `TransportOrder` table. All the data in the column will be lost.
  - You are about to drop the column `reference` on the `TransportOrder` table. All the data in the column will be lost.
  - You are about to drop the `OrderStatus` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[trasnportRequestId]` on the table `TransportOrder` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `currency` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchaseProfileId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trackingCode` to the `TransportOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trasnportRequestId` to the `TransportOrder` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OfferType" AS ENUM ('private', 'business');

-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('new', 'used', 'refurbished');

-- DropForeignKey
ALTER TABLE "OrderStatus" DROP CONSTRAINT "OrderStatus_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderStatus" DROP CONSTRAINT "OrderStatus_transportOrderId_fkey";

-- DropForeignKey
ALTER TABLE "TransportOrder" DROP CONSTRAINT "TransportOrder_orderId_fkey";

-- DropIndex
DROP INDEX "TransportOrder_orderId_key";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "volume" INTEGER,
ADD COLUMN     "weight" INTEGER;

-- AlterTable
ALTER TABLE "Offer" ADD COLUMN     "currency" TEXT,
ADD COLUMN     "offerType" "OfferType" NOT NULL DEFAULT 'business',
ADD COLUMN     "sellerProfileId" BIGINT,
DROP COLUMN "condition",
ADD COLUMN     "condition" "Condition",
ALTER COLUMN "shipAddress" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "email",
DROP COLUMN "shipAddress",
DROP COLUMN "shipName",
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "purchaseProfileId" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "TransportOrder" DROP COLUMN "deliverDate",
DROP COLUMN "orderId",
DROP COLUMN "partner",
DROP COLUMN "pickDate",
DROP COLUMN "reference",
ADD COLUMN     "trackingCode" TEXT NOT NULL,
ADD COLUMN     "trasnportRequestId" BIGINT NOT NULL;

-- DropTable
DROP TABLE "OrderStatus";

-- CreateTable
CREATE TABLE "SellerProfile" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "addressId" BIGINT,
    "memberId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SellerProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseProfile" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "addressId" BIGINT,
    "memberId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchaseProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Member" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" BIGSERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "unit" TEXT,
    "postCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "countryId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransportRequest" (
    "id" BIGSERIAL NOT NULL,
    "orderId" BIGINT NOT NULL,
    "type" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "sender" JSONB NOT NULL,
    "receiver" JSONB NOT NULL,
    "parcels" JSONB[],
    "attributes" JSONB,
    "deliveryDay" TIMESTAMP(3) NOT NULL,
    "release" BOOLEAN DEFAULT true,
    "deliveryRequirements" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransportRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Delivery" (
    "id" BIGSERIAL NOT NULL,
    "transportOrderId" BIGINT NOT NULL,
    "deliveryId" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "trackingId" TEXT NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "returnCode" TEXT NOT NULL,
    "attributes" JSONB NOT NULL,
    "latestDeliveryDate" TIMESTAMP(3) NOT NULL,
    "earliestDeliveryDate" TIMESTAMP(3) NOT NULL,
    "label" TEXT NOT NULL,
    "senderTrackingUrl" TEXT NOT NULL,
    "receiverTrackingUrl" TEXT NOT NULL,
    "status" JSONB NOT NULL,
    "statusHistory" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseProfile_email_key" ON "PurchaseProfile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TransportOrder_trasnportRequestId_key" ON "TransportOrder"("trasnportRequestId");

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_sellerProfileId_fkey" FOREIGN KEY ("sellerProfileId") REFERENCES "SellerProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellerProfile" ADD CONSTRAINT "SellerProfile_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellerProfile" ADD CONSTRAINT "SellerProfile_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_purchaseProfileId_fkey" FOREIGN KEY ("purchaseProfileId") REFERENCES "PurchaseProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseProfile" ADD CONSTRAINT "PurchaseProfile_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseProfile" ADD CONSTRAINT "PurchaseProfile_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransportRequest" ADD CONSTRAINT "TransportRequest_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransportOrder" ADD CONSTRAINT "TransportOrder_trasnportRequestId_fkey" FOREIGN KEY ("trasnportRequestId") REFERENCES "TransportRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_transportOrderId_fkey" FOREIGN KEY ("transportOrderId") REFERENCES "TransportOrder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
