/*
  Warnings:

  - You are about to drop the column `perferredLocale` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_perferredLocale_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "perferredLocale",
ADD COLUMN     "preferredLocalId" BIGINT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_preferredLocalId_fkey" FOREIGN KEY ("preferredLocalId") REFERENCES "Locale"("id") ON DELETE SET NULL ON UPDATE CASCADE;
