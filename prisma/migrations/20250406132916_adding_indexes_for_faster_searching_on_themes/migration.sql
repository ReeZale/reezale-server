/*
  Warnings:

  - Added the required column `accountId` to the `StoreFrontTheme` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StoreFrontTheme" ADD COLUMN     "accountId" BIGINT NOT NULL;

-- CreateIndex
CREATE INDEX "StoreFrontTheme_storefrontId_isActive_idx" ON "StoreFrontTheme"("storefrontId", "isActive");

-- CreateIndex
CREATE INDEX "StoreFrontTheme_accountId_idx" ON "StoreFrontTheme"("accountId");

-- AddForeignKey
ALTER TABLE "StoreFrontTheme" ADD CONSTRAINT "StoreFrontTheme_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
