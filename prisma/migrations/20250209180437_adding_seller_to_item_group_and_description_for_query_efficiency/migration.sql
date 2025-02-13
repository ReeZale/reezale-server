/*
  Warnings:

  - You are about to drop the `SellerItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_localeId_fkey";

-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_parentId_fkey";

-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryDiscountRule" DROP CONSTRAINT "CategoryDiscountRule_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryDiscountRule" DROP CONSTRAINT "CategoryDiscountRule_discountRuleId_fkey";

-- DropForeignKey
ALTER TABLE "DiscountRule" DROP CONSTRAINT "DiscountRule_localeId_fkey";

-- DropForeignKey
ALTER TABLE "DiscountRule" DROP CONSTRAINT "DiscountRule_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_itemGroupId_fkey";

-- DropForeignKey
ALTER TABLE "ItemDescription" DROP CONSTRAINT "ItemDescription_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ItemDescription" DROP CONSTRAINT "ItemDescription_itemGroupId_fkey";

-- DropForeignKey
ALTER TABLE "ItemDescription" DROP CONSTRAINT "ItemDescription_localeId_fkey";

-- DropForeignKey
ALTER TABLE "ItemGroup" DROP CONSTRAINT "ItemGroup_brandId_fkey";

-- DropForeignKey
ALTER TABLE "ItemSize" DROP CONSTRAINT "ItemSize_itemId_fkey";

-- DropForeignKey
ALTER TABLE "ItemSize" DROP CONSTRAINT "ItemSize_localeId_fkey";

-- DropForeignKey
ALTER TABLE "ItemSize" DROP CONSTRAINT "ItemSize_sizeOptionId_fkey";

-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_appliedDiscountId_fkey";

-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_itemId_fkey";

-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_localeId_fkey";

-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_offerId_fkey";

-- DropForeignKey
ALTER TABLE "OrderStatus" DROP CONSTRAINT "OrderStatus_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderStatus" DROP CONSTRAINT "OrderStatus_transportOrderId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_orderId_fkey";

-- DropForeignKey
ALTER TABLE "ProductFeed" DROP CONSTRAINT "ProductFeed_localeId_fkey";

-- DropForeignKey
ALTER TABLE "ProductFeed" DROP CONSTRAINT "ProductFeed_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "SellerCredentials" DROP CONSTRAINT "SellerCredentials_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "SellerItem" DROP CONSTRAINT "SellerItem_itemId_fkey";

-- DropForeignKey
ALTER TABLE "SellerItem" DROP CONSTRAINT "SellerItem_productFeedId_fkey";

-- DropForeignKey
ALTER TABLE "SellerItem" DROP CONSTRAINT "SellerItem_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "TransportOrder" DROP CONSTRAINT "TransportOrder_orderId_fkey";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "gtin" TEXT,
ADD COLUMN     "mpn" TEXT,
ADD COLUMN     "sellerId" BIGINT;

-- AlterTable
ALTER TABLE "ItemGroup" ADD COLUMN     "sellerId" BIGINT;

-- DropTable
DROP TABLE "SellerItem";

-- AddForeignKey
ALTER TABLE "SellerCredentials" ADD CONSTRAINT "SellerCredentials_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscountRule" ADD CONSTRAINT "DiscountRule_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscountRule" ADD CONSTRAINT "DiscountRule_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryDiscountRule" ADD CONSTRAINT "CategoryDiscountRule_discountRuleId_fkey" FOREIGN KEY ("discountRuleId") REFERENCES "DiscountRule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryDiscountRule" ADD CONSTRAINT "CategoryDiscountRule_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductFeed" ADD CONSTRAINT "ProductFeed_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductFeed" ADD CONSTRAINT "ProductFeed_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemGroup" ADD CONSTRAINT "ItemGroup_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemGroup" ADD CONSTRAINT "ItemGroup_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_itemGroupId_fkey" FOREIGN KEY ("itemGroupId") REFERENCES "ItemGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemSize" ADD CONSTRAINT "ItemSize_sizeOptionId_fkey" FOREIGN KEY ("sizeOptionId") REFERENCES "SizeOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemSize" ADD CONSTRAINT "ItemSize_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemSize" ADD CONSTRAINT "ItemSize_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemDescription" ADD CONSTRAINT "ItemDescription_itemGroupId_fkey" FOREIGN KEY ("itemGroupId") REFERENCES "ItemGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemDescription" ADD CONSTRAINT "ItemDescription_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemDescription" ADD CONSTRAINT "ItemDescription_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_appliedDiscountId_fkey" FOREIGN KEY ("appliedDiscountId") REFERENCES "CategoryDiscountRule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransportOrder" ADD CONSTRAINT "TransportOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderStatus" ADD CONSTRAINT "OrderStatus_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderStatus" ADD CONSTRAINT "OrderStatus_transportOrderId_fkey" FOREIGN KEY ("transportOrderId") REFERENCES "TransportOrder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
