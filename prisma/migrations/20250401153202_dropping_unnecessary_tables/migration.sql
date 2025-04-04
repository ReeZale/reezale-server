/*
  Warnings:

  - You are about to drop the column `itemId` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `itemGroupId` on the `OfferNotification` table. All the data in the column will be lost.
  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemDescription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemSize` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SizeOption` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_itemId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_itemGroupId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "ItemDescription" DROP CONSTRAINT "ItemDescription_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ItemDescription" DROP CONSTRAINT "ItemDescription_itemGroupId_fkey";

-- DropForeignKey
ALTER TABLE "ItemDescription" DROP CONSTRAINT "ItemDescription_localeId_fkey";

-- DropForeignKey
ALTER TABLE "ItemGroup" DROP CONSTRAINT "ItemGroup_brandId_fkey";

-- DropForeignKey
ALTER TABLE "ItemGroup" DROP CONSTRAINT "ItemGroup_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "ItemSize" DROP CONSTRAINT "ItemSize_itemId_fkey";

-- DropForeignKey
ALTER TABLE "ItemSize" DROP CONSTRAINT "ItemSize_localeId_fkey";

-- DropForeignKey
ALTER TABLE "ItemSize" DROP CONSTRAINT "ItemSize_sizeOptionId_fkey";

-- DropForeignKey
ALTER TABLE "OfferNotification" DROP CONSTRAINT "OfferNotification_itemGroupId_fkey";

-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "itemId";

-- AlterTable
ALTER TABLE "OfferNotification" DROP COLUMN "itemGroupId";

-- DropTable
DROP TABLE "Item";

-- DropTable
DROP TABLE "ItemDescription";

-- DropTable
DROP TABLE "ItemGroup";

-- DropTable
DROP TABLE "ItemSize";

-- DropTable
DROP TABLE "SizeOption";
