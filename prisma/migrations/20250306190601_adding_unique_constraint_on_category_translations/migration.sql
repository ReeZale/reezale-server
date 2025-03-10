/*
  Warnings:

  - You are about to drop the column `languageId` on the `ProductCategoryTranslations` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[localeId,slug]` on the table `ProductCategoryTranslations` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `localeId` to the `ProductCategoryTranslations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductCategoryTranslations" DROP CONSTRAINT "ProductCategoryTranslations_languageId_fkey";

-- DropIndex
DROP INDEX "ProductCategoryTranslations_languageId_slug_key";

-- AlterTable
ALTER TABLE "ProductCategoryTranslations" DROP COLUMN "languageId",
ADD COLUMN     "localeId" BIGINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProductCategoryTranslations_localeId_slug_key" ON "ProductCategoryTranslations"("localeId", "slug");

-- AddForeignKey
ALTER TABLE "ProductCategoryTranslations" ADD CONSTRAINT "ProductCategoryTranslations_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
