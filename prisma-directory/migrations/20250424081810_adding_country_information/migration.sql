-- CreateEnum
CREATE TYPE "ResellPlatformType" AS ENUM ('B2C', 'C2C');

-- CreateTable
CREATE TABLE "ResellPlatform" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "platformType" "ResellPlatformType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

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
CREATE UNIQUE INDEX "ResellPlatformCategory_resellPlatformId_productCategoryId_key" ON "ResellPlatformCategory"("resellPlatformId", "productCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "ResellPlatformCountry_resellPlatformId_countryCode_key" ON "ResellPlatformCountry"("resellPlatformId", "countryCode");

-- AddForeignKey
ALTER TABLE "PartnerLocation" ADD CONSTRAINT "PartnerLocation_countryCode_fkey" FOREIGN KEY ("countryCode") REFERENCES "Country"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResellPlatformCategory" ADD CONSTRAINT "ResellPlatformCategory_resellPlatformId_fkey" FOREIGN KEY ("resellPlatformId") REFERENCES "ResellPlatform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResellPlatformCategory" ADD CONSTRAINT "ResellPlatformCategory_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResellPlatformCountry" ADD CONSTRAINT "ResellPlatformCountry_resellPlatformId_fkey" FOREIGN KEY ("resellPlatformId") REFERENCES "ResellPlatform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResellPlatformCountry" ADD CONSTRAINT "ResellPlatformCountry_countryCode_fkey" FOREIGN KEY ("countryCode") REFERENCES "Country"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
