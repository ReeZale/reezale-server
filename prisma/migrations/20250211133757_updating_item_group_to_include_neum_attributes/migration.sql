/*
  Warnings:

  - You are about to drop the column `volume` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `Item` table. All the data in the column will be lost.
  - The `gender` column on the `ItemGroup` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ageGroup` column on the `ItemGroup` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `sizeType` column on the `SizeOption` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'unisex');

-- CreateEnum
CREATE TYPE "AgeGroup" AS ENUM ('adult', 'teen', 'kids', 'infant', 'toddler');

-- CreateEnum
CREATE TYPE "SizeType" AS ENUM ('regular', 'petite', 'plus', 'tall');

-- DropIndex
DROP INDEX "ItemGroup_brandId_sku_gender_ageGroup_idx";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "volume",
DROP COLUMN "weight",
ADD COLUMN     "shipHeight" TEXT,
ADD COLUMN     "shipLength" TEXT,
ADD COLUMN     "shipWeight" TEXT,
ADD COLUMN     "shipWidth" TEXT;

-- AlterTable
ALTER TABLE "ItemGroup" ADD COLUMN     "sizeType" "SizeType" DEFAULT 'regular',
DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender" DEFAULT 'female',
DROP COLUMN "ageGroup",
ADD COLUMN     "ageGroup" "AgeGroup" DEFAULT 'adult';

-- AlterTable
ALTER TABLE "SizeOption" DROP COLUMN "sizeType",
ADD COLUMN     "sizeType" "SizeType" NOT NULL DEFAULT 'regular';

-- CreateIndex
CREATE INDEX "ItemGroup_brandId_sku_gender_ageGroup_sizeType_idx" ON "ItemGroup"("brandId", "sku", "gender", "ageGroup", "sizeType");

-- CreateIndex
CREATE UNIQUE INDEX "SizeOption_sizeSystem_sizeType_size_key" ON "SizeOption"("sizeSystem", "sizeType", "size");
