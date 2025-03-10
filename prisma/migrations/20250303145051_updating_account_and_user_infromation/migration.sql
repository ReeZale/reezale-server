/*
  Warnings:

  - A unique constraint covering the columns `[domain]` on the table `Seller` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Seller_domain_key" ON "Seller"("domain");
