/*
  Warnings:

  - You are about to drop the `StorefrontBrandingLink` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PageType" AS ENUM ('STATIC', 'PRODUCT', 'COLLECTION', 'BLOG', 'BLOG_LIST', 'SEARCH', 'LANDING', 'CART', 'CHECKOUT', 'ACCOUNT', 'ORDER_HISTORY', 'CUSTOM');

-- CreateEnum
CREATE TYPE "PageFieldType" AS ENUM ('SHORT_TEXT', 'LONG_TEXT', 'RICH_TEXT', 'SLUG', 'NUMBER', 'BOOLEAN', 'DATE', 'DATETIME', 'URL', 'EMAIL', 'PHONE', 'PRICE', 'IMAGE', 'FILE', 'COLOR', 'VIDEO_URL', 'SELECT', 'MULTISELECT', 'LIST', 'OBJECT', 'REFERENCE');

-- DropForeignKey
ALTER TABLE "StorefrontBranding" DROP CONSTRAINT "StorefrontBranding_accountId_fkey";

-- DropForeignKey
ALTER TABLE "StorefrontBrandingLink" DROP CONSTRAINT "StorefrontBrandingLink_brandingId_fkey";

-- DropTable
DROP TABLE "StorefrontBrandingLink";

-- CreateTable
CREATE TABLE "StorefrontMetadata" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "twitterSite" TEXT,
    "ogType" TEXT,
    "gaTrackingId" TEXT,
    "gtmId" TEXT,
    "facebookPixelId" TEXT,
    "hotjarId" TEXT,

    CONSTRAINT "StorefrontMetadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontPage" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "pageId" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "publishStatus" "PublishStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StorefrontPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "pageType" "PageType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageTranslation" (
    "id" TEXT NOT NULL,
    "pageId" TEXT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "slug" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "index" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaticField" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "pageFieldType" "PageFieldType" NOT NULL,
    "dataSource" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StaticField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaticFieldTranslation" (
    "id" TEXT NOT NULL,
    "staticFieldId" TEXT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StaticFieldTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DynamicField" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "pageFieldType" "PageFieldType" NOT NULL,
    "databaseObjectFieldId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DynamicField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DynamicFieldTranslation" (
    "id" TEXT NOT NULL,
    "dynamicFieldId" TEXT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DynamicFieldTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaticPageField" (
    "id" TEXT NOT NULL,
    "pageId" TEXT NOT NULL,
    "staticFieldId" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StaticPageField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DynamicPageField" (
    "id" TEXT NOT NULL,
    "pageId" TEXT NOT NULL,
    "dynamicFieldId" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DynamicPageField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatabaseObject" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DatabaseObject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatabaseObjectTranslation" (
    "id" TEXT NOT NULL,
    "databaseObjectId" TEXT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DatabaseObjectTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatabaseField" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DatabaseField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatabseFieldTranslation" (
    "id" TEXT NOT NULL,
    "databaseFieldId" TEXT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DatabseFieldTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatabaseObjectField" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "databaseObjectId" TEXT NOT NULL,
    "databaseFieldId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DatabaseObjectField_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Page_key_key" ON "Page"("key");

-- CreateIndex
CREATE UNIQUE INDEX "PageTranslation_pageId_localeId_key" ON "PageTranslation"("pageId", "localeId");

-- CreateIndex
CREATE UNIQUE INDEX "StaticField_key_key" ON "StaticField"("key");

-- CreateIndex
CREATE UNIQUE INDEX "StaticFieldTranslation_staticFieldId_localeId_key" ON "StaticFieldTranslation"("staticFieldId", "localeId");

-- CreateIndex
CREATE UNIQUE INDEX "DynamicField_key_key" ON "DynamicField"("key");

-- CreateIndex
CREATE UNIQUE INDEX "DynamicFieldTranslation_dynamicFieldId_localeId_key" ON "DynamicFieldTranslation"("dynamicFieldId", "localeId");

-- CreateIndex
CREATE UNIQUE INDEX "StaticPageField_pageId_staticFieldId_key" ON "StaticPageField"("pageId", "staticFieldId");

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseObject_key_key" ON "DatabaseObject"("key");

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseObjectTranslation_databaseObjectId_localeId_key" ON "DatabaseObjectTranslation"("databaseObjectId", "localeId");

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseField_key_key" ON "DatabaseField"("key");

-- CreateIndex
CREATE UNIQUE INDEX "DatabseFieldTranslation_databaseFieldId_localeId_key" ON "DatabseFieldTranslation"("databaseFieldId", "localeId");

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseObjectField_key_key" ON "DatabaseObjectField"("key");

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseObjectField_databaseObjectId_databaseFieldId_key" ON "DatabaseObjectField"("databaseObjectId", "databaseFieldId");

-- AddForeignKey
ALTER TABLE "StorefrontMetadata" ADD CONSTRAINT "StorefrontMetadata_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontBranding" ADD CONSTRAINT "StorefrontBranding_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontPage" ADD CONSTRAINT "StorefrontPage_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontPage" ADD CONSTRAINT "StorefrontPage_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontPage" ADD CONSTRAINT "StorefrontPage_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageTranslation" ADD CONSTRAINT "PageTranslation_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageTranslation" ADD CONSTRAINT "PageTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaticFieldTranslation" ADD CONSTRAINT "StaticFieldTranslation_staticFieldId_fkey" FOREIGN KEY ("staticFieldId") REFERENCES "StaticField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaticFieldTranslation" ADD CONSTRAINT "StaticFieldTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DynamicField" ADD CONSTRAINT "DynamicField_databaseObjectFieldId_fkey" FOREIGN KEY ("databaseObjectFieldId") REFERENCES "DatabaseObjectField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DynamicFieldTranslation" ADD CONSTRAINT "DynamicFieldTranslation_dynamicFieldId_fkey" FOREIGN KEY ("dynamicFieldId") REFERENCES "DynamicField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DynamicFieldTranslation" ADD CONSTRAINT "DynamicFieldTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaticPageField" ADD CONSTRAINT "StaticPageField_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaticPageField" ADD CONSTRAINT "StaticPageField_staticFieldId_fkey" FOREIGN KEY ("staticFieldId") REFERENCES "StaticField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DynamicPageField" ADD CONSTRAINT "DynamicPageField_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DynamicPageField" ADD CONSTRAINT "DynamicPageField_dynamicFieldId_fkey" FOREIGN KEY ("dynamicFieldId") REFERENCES "DynamicField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatabaseObjectTranslation" ADD CONSTRAINT "DatabaseObjectTranslation_databaseObjectId_fkey" FOREIGN KEY ("databaseObjectId") REFERENCES "DatabaseObject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatabaseObjectTranslation" ADD CONSTRAINT "DatabaseObjectTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatabseFieldTranslation" ADD CONSTRAINT "DatabseFieldTranslation_databaseFieldId_fkey" FOREIGN KEY ("databaseFieldId") REFERENCES "DatabaseField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatabseFieldTranslation" ADD CONSTRAINT "DatabseFieldTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatabaseObjectField" ADD CONSTRAINT "DatabaseObjectField_databaseObjectId_fkey" FOREIGN KEY ("databaseObjectId") REFERENCES "DatabaseObject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatabaseObjectField" ADD CONSTRAINT "DatabaseObjectField_databaseFieldId_fkey" FOREIGN KEY ("databaseFieldId") REFERENCES "DatabaseField"("id") ON DELETE CASCADE ON UPDATE CASCADE;
