/*
  Warnings:

  - Added the required column `alt` to the `ProductMedia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductMedia" ADD COLUMN     "alt" TEXT NOT NULL;
