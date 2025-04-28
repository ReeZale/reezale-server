-- CreateEnum
CREATE TYPE "SocialPlatform" AS ENUM ('FACEBOOK', 'INSTAGRAM', 'TWITTER', 'LINKEDIN', 'PINTEREST', 'YOUTUBE', 'TIKTOK', 'SNAPCHAT', 'GITHUB', 'DISCORD', 'OTHER');

-- AlterTable
ALTER TABLE "StorefrontProductSegment" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "StorefrontProductSegment_id_seq";

-- CreateTable
CREATE TABLE "StorefrontBranding" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "brandName" TEXT,
    "description" TEXT,
    "slogan" TEXT,
    "logoUrl" TEXT,
    "imageUrl" TEXT,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StorefrontBranding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontBrandingLink" (
    "id" TEXT NOT NULL,
    "brandingId" TEXT NOT NULL,
    "platform" "SocialPlatform" NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StorefrontBrandingLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontBranding_storefrontId_key" ON "StorefrontBranding"("storefrontId");

-- AddForeignKey
ALTER TABLE "StorefrontBranding" ADD CONSTRAINT "StorefrontBranding_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontBranding" ADD CONSTRAINT "StorefrontBranding_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontBrandingLink" ADD CONSTRAINT "StorefrontBrandingLink_brandingId_fkey" FOREIGN KEY ("brandingId") REFERENCES "StorefrontBranding"("id") ON DELETE CASCADE ON UPDATE CASCADE;
