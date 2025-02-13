/*
  Warnings:

  - A unique constraint covering the columns `[formattedAddress]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `PurchaseProfile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `SellerProfile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `SellerProfile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `formattedAddress` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `PurchaseProfile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "formattedAddress" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PurchaseProfile" ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Address_formattedAddress_key" ON "Address"("formattedAddress");

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseProfile_phone_key" ON "PurchaseProfile"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "SellerProfile_email_key" ON "SellerProfile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SellerProfile_phone_key" ON "SellerProfile"("phone");
