-- CreateTable
CREATE TABLE "StorefrontProductSegment" (
    "id" BIGSERIAL NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "productSegmentId" BIGINT NOT NULL,
    "primary" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorefrontProductSegment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontMarketSegment" (
    "id" BIGSERIAL NOT NULL,
    "gender" "Gender" NOT NULL,
    "ageGroup" "AgeGroup" NOT NULL,
    "primary" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "storefrontId" BIGINT NOT NULL,

    CONSTRAINT "StorefrontMarketSegment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontRegion" (
    "id" BIGSERIAL NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "primary" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorefrontRegion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StorefrontProductSegment" ADD CONSTRAINT "StorefrontProductSegment_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontProductSegment" ADD CONSTRAINT "StorefrontProductSegment_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontMarketSegment" ADD CONSTRAINT "StorefrontMarketSegment_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontRegion" ADD CONSTRAINT "StorefrontRegion_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontRegion" ADD CONSTRAINT "StorefrontRegion_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
