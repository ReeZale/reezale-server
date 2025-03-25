/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Storefront" DROP CONSTRAINT "Storefront_countryId_fkey";

-- CreateTable
CREATE TABLE "StoreBrand" (
    "id" BIGSERIAL NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "brandId" BIGINT NOT NULL,
    "isOwner" BOOLEAN NOT NULL DEFAULT true,
    "isDefault" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreBrand_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StoreBrand_storefrontId_brandId_key" ON "StoreBrand"("storefrontId", "brandId");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_url_key" ON "Brand"("url");

-- CreateIndex
CREATE INDEX "Product_brandId_storefrontId_idx" ON "Product"("brandId", "storefrontId");

-- AddForeignKey
ALTER TABLE "Storefront" ADD CONSTRAINT "Storefront_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreBrand" ADD CONSTRAINT "StoreBrand_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreBrand" ADD CONSTRAINT "StoreBrand_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;
