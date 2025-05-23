-- CreateEnum
CREATE TYPE "ChannelType" AS ENUM ('ECOMMERCE', 'APP', 'KIOSK', 'OTHER');

-- CreateEnum
CREATE TYPE "ResellPlatformType" AS ENUM ('B2C', 'C2C', 'B2B');

-- CreateTable
CREATE TABLE "Partner" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartnerRole" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PartnerRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartnerRoleAssignment" (
    "id" TEXT NOT NULL,
    "partnerId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PartnerRoleAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartnerChannel" (
    "id" TEXT NOT NULL,
    "partnerId" TEXT NOT NULL,
    "type" "ChannelType" NOT NULL,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PartnerChannel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartnerLocation" (
    "id" TEXT NOT NULL,
    "partnerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "formattedAddress" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "countryCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PartnerLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartnerServiceProfile" (
    "id" TEXT NOT NULL,
    "channelId" TEXT,
    "locationId" TEXT,
    "serviceTypeId" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PartnerServiceProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceType" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "icon" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCategory" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartnerProductCategory" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "partnerId" TEXT NOT NULL,
    "productCategoryId" TEXT NOT NULL,

    CONSTRAINT "PartnerProductCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResellPlatform" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "logo" TEXT,
    "tagline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "platformType" "ResellPlatformType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "altTagline" TEXT,
    "canSell" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ResellPlatform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResellPlatformCategory" (
    "id" TEXT NOT NULL,
    "resellPlatformId" TEXT NOT NULL,
    "productCategoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResellPlatformCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResellPlatformCountry" (
    "id" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "resellPlatformId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResellPlatformCountry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("code")
);

-- CreateIndex
CREATE UNIQUE INDEX "PartnerRole_key_key" ON "PartnerRole"("key");

-- CreateIndex
CREATE UNIQUE INDEX "PartnerRoleAssignment_partnerId_roleId_key" ON "PartnerRoleAssignment"("partnerId", "roleId");

-- CreateIndex
CREATE INDEX "PartnerLocation_countryCode_idx" ON "PartnerLocation"("countryCode");

-- CreateIndex
CREATE INDEX "PartnerLocation_lat_lng_idx" ON "PartnerLocation"("lat", "lng");

-- CreateIndex
CREATE UNIQUE INDEX "PartnerServiceProfile_channelId_locationId_serviceTypeId_key" ON "PartnerServiceProfile"("channelId", "locationId", "serviceTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceType_key_key" ON "ServiceType"("key");

-- CreateIndex
CREATE UNIQUE INDEX "ProductCategory_key_key" ON "ProductCategory"("key");

-- CreateIndex
CREATE UNIQUE INDEX "PartnerProductCategory_partnerId_productCategoryId_key" ON "PartnerProductCategory"("partnerId", "productCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "ResellPlatform_url_key" ON "ResellPlatform"("url");

-- CreateIndex
CREATE UNIQUE INDEX "ResellPlatformCategory_resellPlatformId_productCategoryId_key" ON "ResellPlatformCategory"("resellPlatformId", "productCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "ResellPlatformCountry_resellPlatformId_countryCode_key" ON "ResellPlatformCountry"("resellPlatformId", "countryCode");

-- AddForeignKey
ALTER TABLE "PartnerRoleAssignment" ADD CONSTRAINT "PartnerRoleAssignment_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnerRoleAssignment" ADD CONSTRAINT "PartnerRoleAssignment_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "PartnerRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnerChannel" ADD CONSTRAINT "PartnerChannel_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnerLocation" ADD CONSTRAINT "PartnerLocation_countryCode_fkey" FOREIGN KEY ("countryCode") REFERENCES "Country"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnerLocation" ADD CONSTRAINT "PartnerLocation_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnerServiceProfile" ADD CONSTRAINT "PartnerServiceProfile_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "PartnerChannel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnerServiceProfile" ADD CONSTRAINT "PartnerServiceProfile_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "PartnerLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnerServiceProfile" ADD CONSTRAINT "PartnerServiceProfile_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES "ServiceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnerProductCategory" ADD CONSTRAINT "PartnerProductCategory_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnerProductCategory" ADD CONSTRAINT "PartnerProductCategory_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResellPlatformCategory" ADD CONSTRAINT "ResellPlatformCategory_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResellPlatformCategory" ADD CONSTRAINT "ResellPlatformCategory_resellPlatformId_fkey" FOREIGN KEY ("resellPlatformId") REFERENCES "ResellPlatform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResellPlatformCountry" ADD CONSTRAINT "ResellPlatformCountry_countryCode_fkey" FOREIGN KEY ("countryCode") REFERENCES "Country"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResellPlatformCountry" ADD CONSTRAINT "ResellPlatformCountry_resellPlatformId_fkey" FOREIGN KEY ("resellPlatformId") REFERENCES "ResellPlatform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
