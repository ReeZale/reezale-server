/*
  Warnings:

  - The `sizeSystem` column on the `ProductData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `availableDate` column on the `ProductData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[link]` on the table `ProductData` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `link` to the `ProductData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellerId` to the `ProductData` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SizeSystem" AS ENUM ('US', 'UK', 'EU', 'DE', 'FR', 'JP', 'CN', 'IT', 'BR', 'MEX', 'AU', 'ALPHA');

-- CreateEnum
CREATE TYPE "SizeCategory" AS ENUM ('REGULAR', 'PETITE', 'MATERNITY', 'BIG', 'TALL', 'PLUS');

-- AlterTable
ALTER TABLE "ProductData" ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "sellerId" BIGINT NOT NULL,
ADD COLUMN     "sizeCategory" "SizeCategory" NOT NULL DEFAULT 'REGULAR',
DROP COLUMN "sizeSystem",
ADD COLUMN     "sizeSystem" "SizeSystem" NOT NULL DEFAULT 'EU',
ALTER COLUMN "condition" SET DEFAULT 'new',
ALTER COLUMN "availability" SET DEFAULT 'in-stock',
DROP COLUMN "availableDate",
ADD COLUMN     "availableDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Seller" (
    "id" BIGSERIAL NOT NULL,
    "domain" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "robotsTxt" TEXT NOT NULL,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sitemap" (
    "id" BIGSERIAL NOT NULL,
    "sellerId" BIGINT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Sitemap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SellerLocale" (
    "id" BIGSERIAL NOT NULL,
    "locale" TEXT NOT NULL,
    "baseUrl" TEXT NOT NULL,
    "sizeSystem" "SizeSystem" NOT NULL,
    "currency" TEXT NOT NULL,

    CONSTRAINT "SellerLocale_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductData_link_key" ON "ProductData"("link");

-- AddForeignKey
ALTER TABLE "ProductData" ADD CONSTRAINT "ProductData_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sitemap" ADD CONSTRAINT "Sitemap_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
