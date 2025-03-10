/*
  Warnings:

  - You are about to drop the column `currency` on the `StorefrontLocale` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `StorefrontLocale` table. All the data in the column will be lost.
  - You are about to drop the column `locale` on the `StorefrontLocale` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[storefrontId,localeId]` on the table `StorefrontLocale` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `localeId` to the `StorefrontLocale` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "StorefrontLocale_storefrontId_locale_key";

-- AlterTable
ALTER TABLE "StorefrontLocale" DROP COLUMN "currency",
DROP COLUMN "description",
DROP COLUMN "locale",
ADD COLUMN     "localeId" BIGINT NOT NULL,
ADD COLUMN     "useStorefrontContact" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontLocale_storefrontId_localeId_key" ON "StorefrontLocale"("storefrontId", "localeId");

-- AddForeignKey
ALTER TABLE "StorefrontLocale" ADD CONSTRAINT "StorefrontLocale_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
