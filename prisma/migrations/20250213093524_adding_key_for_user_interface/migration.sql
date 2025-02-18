/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `Seller` will be added. If there are existing duplicate values, this will fail.
  - Made the column `sizeType` on table `ItemGroup` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gender` on table `ItemGroup` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ageGroup` on table `ItemGroup` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ItemGroup" ALTER COLUMN "sizeType" SET NOT NULL,
ALTER COLUMN "sizeType" DROP DEFAULT,
ALTER COLUMN "gender" SET NOT NULL,
ALTER COLUMN "gender" DROP DEFAULT,
ALTER COLUMN "ageGroup" SET NOT NULL,
ALTER COLUMN "ageGroup" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Seller" ADD COLUMN     "key" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Seller_key_key" ON "Seller"("key");
