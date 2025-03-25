-- AlterTable
ALTER TABLE "Storefront" ADD COLUMN     "countryId" BIGINT;

-- AddForeignKey
ALTER TABLE "Storefront" ADD CONSTRAINT "Storefront_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;
