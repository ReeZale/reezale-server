/*
  Warnings:

  - You are about to drop the column `currency` on the `Locale` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Locale" DROP COLUMN "currency",
ADD COLUMN     "currencyId" BIGINT;

-- AddForeignKey
ALTER TABLE "Locale" ADD CONSTRAINT "Locale_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE SET NULL ON UPDATE CASCADE;
