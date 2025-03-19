/*
  Warnings:

  - Added the required column `path` to the `StoreCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StoreCategory" ADD COLUMN     "path" TEXT NOT NULL;
