-- DropForeignKey
ALTER TABLE "StoreCategory" DROP CONSTRAINT "StoreCategory_storefrontId_fkey";

-- AddForeignKey
ALTER TABLE "StoreCategory" ADD CONSTRAINT "StoreCategory_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;
