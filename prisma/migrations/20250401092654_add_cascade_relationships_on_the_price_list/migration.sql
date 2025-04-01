-- DropForeignKey
ALTER TABLE "ListPrice" DROP CONSTRAINT "ListPrice_countryId_fkey";

-- DropForeignKey
ALTER TABLE "ListPrice" DROP CONSTRAINT "ListPrice_currencyId_fkey";

-- DropForeignKey
ALTER TABLE "ListPrice" DROP CONSTRAINT "ListPrice_productVariantId_fkey";

-- DropForeignKey
ALTER TABLE "Locale" DROP CONSTRAINT "Locale_currencyId_fkey";

-- DropForeignKey
ALTER TABLE "StoreNavigation" DROP CONSTRAINT "StoreNavigation_storefrontId_fkey";

-- AddForeignKey
ALTER TABLE "StoreNavigation" ADD CONSTRAINT "StoreNavigation_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListPrice" ADD CONSTRAINT "ListPrice_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListPrice" ADD CONSTRAINT "ListPrice_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListPrice" ADD CONSTRAINT "ListPrice_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locale" ADD CONSTRAINT "Locale_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;
