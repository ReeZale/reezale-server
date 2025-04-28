/*
  Warnings:

  - You are about to drop the column `address` on the `StorefrontLocale` table. All the data in the column will be lost.
  - You are about to drop the column `contactEmail` on the `StorefrontLocale` table. All the data in the column will be lost.
  - You are about to drop the column `contactPhone` on the `StorefrontLocale` table. All the data in the column will be lost.
  - You are about to drop the column `domain` on the `StorefrontLocale` table. All the data in the column will be lost.
  - You are about to drop the column `metaKeywords` on the `StorefrontLocale` table. All the data in the column will be lost.
  - You are about to drop the column `ogImage` on the `StorefrontLocale` table. All the data in the column will be lost.
  - You are about to drop the column `timezone` on the `StorefrontLocale` table. All the data in the column will be lost.
  - You are about to drop the column `useStorefrontContact` on the `StorefrontLocale` table. All the data in the column will be lost.
  - You are about to drop the `StorefrontMetadata` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StorefrontMetadata" DROP CONSTRAINT "StorefrontMetadata_storefrontId_fkey";

-- DropForeignKey
ALTER TABLE "StorefrontPage" DROP CONSTRAINT "StorefrontPage_accountId_fkey";

-- DropForeignKey
ALTER TABLE "StorefrontPage" DROP CONSTRAINT "StorefrontPage_pageId_fkey";

-- DropForeignKey
ALTER TABLE "StorefrontPage" DROP CONSTRAINT "StorefrontPage_storefrontId_fkey";

-- DropIndex
DROP INDEX "StorefrontLocale_domain_key";

-- AlterTable
ALTER TABLE "StorefrontLocale" DROP COLUMN "address",
DROP COLUMN "contactEmail",
DROP COLUMN "contactPhone",
DROP COLUMN "domain",
DROP COLUMN "metaKeywords",
DROP COLUMN "ogImage",
DROP COLUMN "timezone",
DROP COLUMN "useStorefrontContact",
ADD COLUMN     "accountId" BIGINT,
ADD COLUMN     "isDefault" BOOLEAN NOT NULL DEFAULT true;

-- DropTable
DROP TABLE "StorefrontMetadata";

-- CreateTable
CREATE TABLE "StorefrontIdentity" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "externalUrl" TEXT,
    "slug" TEXT NOT NULL,
    "canonicalLink" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "iamge" TEXT NOT NULL,
    "facebookLink" TEXT,
    "instagramLink" TEXT,
    "twitterLink" TEXT,
    "linkedin" TEXT,
    "youtubeLink" TEXT,
    "tiktokLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorefrontIdentity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontContact" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "formattedAddress" TEXT,
    "placeId" TEXT,
    "isDefault" BOOLEAN NOT NULL DEFAULT true,
    "accountId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorefrontContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontCountry" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "countryId" BIGINT NOT NULL,
    "storefrontContactId" TEXT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorefrontCountry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontCurrency" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "currencyId" BIGINT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorefrontCurrency_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontIdentity_storefrontId_key" ON "StorefrontIdentity"("storefrontId");

-- CreateIndex
CREATE INDEX "StorefrontContact_accountId_idx" ON "StorefrontContact"("accountId");

-- CreateIndex
CREATE INDEX "StorefrontCountry_accountId_idx" ON "StorefrontCountry"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontCountry_storefrontId_countryId_key" ON "StorefrontCountry"("storefrontId", "countryId");

-- CreateIndex
CREATE INDEX "StorefrontCurrency_accountId_idx" ON "StorefrontCurrency"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontCurrency_storefrontId_currencyId_key" ON "StorefrontCurrency"("storefrontId", "currencyId");

-- CreateIndex
CREATE INDEX "StorefrontLocale_accountId_idx" ON "StorefrontLocale"("accountId");

-- AddForeignKey
ALTER TABLE "StorefrontIdentity" ADD CONSTRAINT "StorefrontIdentity_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontContact" ADD CONSTRAINT "StorefrontContact_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontContact" ADD CONSTRAINT "StorefrontContact_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontLocale" ADD CONSTRAINT "StorefrontLocale_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontCountry" ADD CONSTRAINT "StorefrontCountry_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontCountry" ADD CONSTRAINT "StorefrontCountry_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontCountry" ADD CONSTRAINT "StorefrontCountry_storefrontContactId_fkey" FOREIGN KEY ("storefrontContactId") REFERENCES "StorefrontContact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontCountry" ADD CONSTRAINT "StorefrontCountry_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontCurrency" ADD CONSTRAINT "StorefrontCurrency_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontCurrency" ADD CONSTRAINT "StorefrontCurrency_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontCurrency" ADD CONSTRAINT "StorefrontCurrency_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontPage" ADD CONSTRAINT "StorefrontPage_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontPage" ADD CONSTRAINT "StorefrontPage_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontPage" ADD CONSTRAINT "StorefrontPage_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;
