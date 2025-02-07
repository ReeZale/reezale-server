/*
  Warnings:

  - You are about to drop the column `availability` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `itemGroup` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `productFeedId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `brand` on the `ItemGroup` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `ItemGroup` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `ItemGroup` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `ItemGroup` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ItemGroup` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `ItemGroup` table. All the data in the column will be lost.
  - You are about to drop the column `material` on the `ItemGroup` table. All the data in the column will be lost.
  - You are about to drop the column `pattern` on the `ItemGroup` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `ItemGroup` table. All the data in the column will be lost.
  - You are about to drop the column `salePrice` on the `ItemGroup` table. All the data in the column will be lost.
  - You are about to drop the column `sizeSystem` on the `ItemGroup` table. All the data in the column will be lost.
  - You are about to drop the column `sizeType` on the `ItemGroup` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `ItemGroup` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sellerId,localeId]` on the table `DiscountRule` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `itemGroupId` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brandId` to the `ItemGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ItemGroup` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_productFeedId_fkey";

-- DropForeignKey
ALTER TABLE "ItemGroup" DROP CONSTRAINT "ItemGroup_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_appliedDiscountId_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "parentId" BIGINT;

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "availability",
DROP COLUMN "itemGroup",
DROP COLUMN "productFeedId",
DROP COLUMN "size",
ADD COLUMN     "itemGroupId" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "ItemGroup" DROP COLUMN "brand",
DROP COLUMN "categoryId",
DROP COLUMN "color",
DROP COLUMN "currency",
DROP COLUMN "description",
DROP COLUMN "link",
DROP COLUMN "material",
DROP COLUMN "pattern",
DROP COLUMN "price",
DROP COLUMN "salePrice",
DROP COLUMN "sizeSystem",
DROP COLUMN "sizeType",
DROP COLUMN "title",
ADD COLUMN     "brandId" BIGINT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Offer" ADD COLUMN     "archived" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "appliedDiscountId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "SellerCredentials" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "secret" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "sellerId" BIGINT NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "isValid" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "SellerCredentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "normalized" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemSize" (
    "id" BIGSERIAL NOT NULL,
    "sizeOptionId" BIGINT NOT NULL,
    "itemId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItemSize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SellerItem" (
    "id" BIGSERIAL NOT NULL,
    "itemId" BIGINT NOT NULL,
    "sellerId" BIGINT NOT NULL,
    "productFeedId" BIGINT NOT NULL,
    "availability" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SellerItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SizeOption" (
    "id" BIGSERIAL NOT NULL,
    "sizeSystem" TEXT NOT NULL,
    "sizeType" TEXT NOT NULL,
    "size" TEXT NOT NULL,

    CONSTRAINT "SizeOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemDescription" (
    "id" BIGSERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categoryId" BIGINT NOT NULL,
    "color" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "pattern" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "salePrice" DECIMAL(65,30) NOT NULL,
    "currency" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "itemGroupId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,

    CONSTRAINT "ItemDescription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" BIGSERIAL NOT NULL,
    "offerId" BIGINT NOT NULL,
    "reference" TEXT,
    "email" TEXT NOT NULL,
    "shipName" TEXT NOT NULL,
    "shipAddress" TEXT NOT NULL,
    "subTotal" DECIMAL(65,30) NOT NULL,
    "tax" DECIMAL(65,30) NOT NULL,
    "shipping" DECIMAL(65,30) NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransportOrder" (
    "id" BIGSERIAL NOT NULL,
    "orderId" BIGINT NOT NULL,
    "partner" TEXT NOT NULL,
    "pickDate" TIMESTAMP(3) NOT NULL,
    "deliverDate" TIMESTAMP(3) NOT NULL,
    "reference" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransportOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderStatus" (
    "id" BIGSERIAL NOT NULL,
    "orderId" BIGINT NOT NULL,
    "transportOrderId" BIGINT NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" BIGSERIAL NOT NULL,
    "reference" TEXT NOT NULL,
    "orderId" BIGINT NOT NULL,
    "method" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "currency" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_normalized_key" ON "Brand"("name", "normalized");

-- CreateIndex
CREATE UNIQUE INDEX "ItemDescription_itemGroupId_localeId_key" ON "ItemDescription"("itemGroupId", "localeId");

-- CreateIndex
CREATE INDEX "Order_offerId_idx" ON "Order"("offerId");

-- CreateIndex
CREATE UNIQUE INDEX "TransportOrder_orderId_key" ON "TransportOrder"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_orderId_key" ON "Payment"("orderId");

-- CreateIndex
CREATE INDEX "Category_sellerId_localeId_idx" ON "Category"("sellerId", "localeId");

-- CreateIndex
CREATE INDEX "CategoryDiscountRule_discountRuleId_categoryId_idx" ON "CategoryDiscountRule"("discountRuleId", "categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "DiscountRule_sellerId_localeId_key" ON "DiscountRule"("sellerId", "localeId");

-- CreateIndex
CREATE INDEX "ItemGroup_brandId_sku_gender_ageGroup_idx" ON "ItemGroup"("brandId", "sku", "gender", "ageGroup");

-- CreateIndex
CREATE INDEX "Offer_sellerId_localeId_itemId_idx" ON "Offer"("sellerId", "localeId", "itemId");

-- CreateIndex
CREATE INDEX "ProductFeed_sellerId_localeId_idx" ON "ProductFeed"("sellerId", "localeId");

-- AddForeignKey
ALTER TABLE "SellerCredentials" ADD CONSTRAINT "SellerCredentials_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemGroup" ADD CONSTRAINT "ItemGroup_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_itemGroupId_fkey" FOREIGN KEY ("itemGroupId") REFERENCES "ItemGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemSize" ADD CONSTRAINT "ItemSize_sizeOptionId_fkey" FOREIGN KEY ("sizeOptionId") REFERENCES "SizeOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemSize" ADD CONSTRAINT "ItemSize_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemSize" ADD CONSTRAINT "ItemSize_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellerItem" ADD CONSTRAINT "SellerItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellerItem" ADD CONSTRAINT "SellerItem_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellerItem" ADD CONSTRAINT "SellerItem_productFeedId_fkey" FOREIGN KEY ("productFeedId") REFERENCES "ProductFeed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemDescription" ADD CONSTRAINT "ItemDescription_itemGroupId_fkey" FOREIGN KEY ("itemGroupId") REFERENCES "ItemGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemDescription" ADD CONSTRAINT "ItemDescription_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemDescription" ADD CONSTRAINT "ItemDescription_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_appliedDiscountId_fkey" FOREIGN KEY ("appliedDiscountId") REFERENCES "CategoryDiscountRule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransportOrder" ADD CONSTRAINT "TransportOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderStatus" ADD CONSTRAINT "OrderStatus_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderStatus" ADD CONSTRAINT "OrderStatus_transportOrderId_fkey" FOREIGN KEY ("transportOrderId") REFERENCES "TransportOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
