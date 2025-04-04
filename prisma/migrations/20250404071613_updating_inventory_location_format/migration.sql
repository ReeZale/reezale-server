/*
  Warnings:

  - Added the required column `streetNumber` to the `InventoryLocation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InventoryLocation" ADD COLUMN     "streetNumber" TEXT NOT NULL;
