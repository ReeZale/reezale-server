/*
  Warnings:

  - You are about to drop the `StoreFrontTheme` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StoreFrontTheme" DROP CONSTRAINT "StoreFrontTheme_accountId_fkey";

-- DropForeignKey
ALTER TABLE "StoreFrontTheme" DROP CONSTRAINT "StoreFrontTheme_storefrontId_fkey";

-- DropTable
DROP TABLE "StoreFrontTheme";

-- CreateTable
CREATE TABLE "StorefrontTheme" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "publishStatus" "PublishStatus" NOT NULL DEFAULT 'DRAFT',
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "effectiveAt" TIMESTAMP(3),
    "colorPrimary" TEXT NOT NULL DEFAULT '#5A643E',
    "colorSecondary" TEXT NOT NULL DEFAULT '#7F8D58',
    "colorBackground" TEXT NOT NULL DEFAULT '#F4F4F4',
    "colorSurface" TEXT NOT NULL DEFAULT '#FFFFFF',
    "colorTextPrimary" TEXT NOT NULL DEFAULT '#333333',
    "colorTextSecondary" TEXT NOT NULL DEFAULT '#666666',
    "colorLink" TEXT NOT NULL DEFAULT '#5A643E',
    "colorError" TEXT NOT NULL DEFAULT '#D32F2F',
    "fontFamily" TEXT NOT NULL DEFAULT 'Inter, sans-serif',
    "fontSizeBase" INTEGER NOT NULL DEFAULT 16,
    "fontSizeScale" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "borderRadius" INTEGER NOT NULL DEFAULT 8,
    "spacingUnit" INTEGER NOT NULL DEFAULT 8,
    "accountId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorefrontTheme_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "StorefrontTheme_storefrontId_isActive_idx" ON "StorefrontTheme"("storefrontId", "isActive");

-- CreateIndex
CREATE INDEX "StorefrontTheme_accountId_idx" ON "StorefrontTheme"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontTheme_storefrontId_name_key" ON "StorefrontTheme"("storefrontId", "name");

-- AddForeignKey
ALTER TABLE "StorefrontTheme" ADD CONSTRAINT "StorefrontTheme_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontTheme" ADD CONSTRAINT "StorefrontTheme_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
