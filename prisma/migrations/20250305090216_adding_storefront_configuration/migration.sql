/*
  Warnings:

  - A unique constraint covering the columns `[storefrontId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "storefrontId" BIGINT;

-- CreateTable
CREATE TABLE "Storefront" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT,
    "bannerImage" TEXT,
    "domain" TEXT NOT NULL,
    "refundPolicy" TEXT,
    "termsOfService" TEXT,
    "privacyPolicy" TEXT,
    "facebook" TEXT,
    "twitter" TEXT,
    "instagram" TEXT,
    "linkedin" TEXT,
    "tiktok" TEXT,
    "primaryColor" TEXT NOT NULL DEFAULT '#5A643E',
    "secondaryColor" TEXT NOT NULL DEFAULT '#7F8D58',
    "backgroundColor" TEXT NOT NULL DEFAULT '#F4F4F4',
    "textColor" TEXT NOT NULL DEFAULT '#333333',
    "buttonColor" TEXT NOT NULL DEFAULT '#5A643E',
    "buttonTextColor" TEXT NOT NULL DEFAULT '#FFFFFF',
    "fontFamily" TEXT NOT NULL DEFAULT 'Inter, sans-serif',
    "borderRadius" INTEGER NOT NULL DEFAULT 8,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Storefront_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontLocale" (
    "id" BIGSERIAL NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "locale" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "description" TEXT,
    "contactEmail" TEXT,
    "contactPhone" TEXT,
    "address" TEXT,
    "domain" TEXT,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "metaKeywords" TEXT,
    "ogTitle" TEXT,
    "ogDescription" TEXT,
    "ogImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorefrontLocale_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Storefront_domain_key" ON "Storefront"("domain");

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontLocale_contactEmail_key" ON "StorefrontLocale"("contactEmail");

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontLocale_contactPhone_key" ON "StorefrontLocale"("contactPhone");

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontLocale_domain_key" ON "StorefrontLocale"("domain");

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontLocale_storefrontId_locale_key" ON "StorefrontLocale"("storefrontId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "Account_storefrontId_key" ON "Account"("storefrontId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontLocale" ADD CONSTRAINT "StorefrontLocale_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;
