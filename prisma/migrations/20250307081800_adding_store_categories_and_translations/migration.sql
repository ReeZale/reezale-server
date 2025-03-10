-- CreateTable
CREATE TABLE "StoreCategory" (
    "id" BIGSERIAL NOT NULL,
    "externalId" TEXT,
    "name" TEXT NOT NULL,
    "productSegmentId" BIGINT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "parentId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreCategoryTranslation" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "storeCategoryId" BIGINT NOT NULL,
    "storefrontLocaleId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreCategoryTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StoreCategory_externalId_key" ON "StoreCategory"("externalId");

-- CreateIndex
CREATE INDEX "StoreCategory_productSegmentId_idx" ON "StoreCategory"("productSegmentId");

-- CreateIndex
CREATE INDEX "StoreCategory_storefrontId_idx" ON "StoreCategory"("storefrontId");

-- CreateIndex
CREATE INDEX "StoreCategory_parentId_idx" ON "StoreCategory"("parentId");

-- CreateIndex
CREATE INDEX "StoreCategory_name_idx" ON "StoreCategory"("name");

-- CreateIndex
CREATE INDEX "StoreCategoryTranslation_storeCategoryId_idx" ON "StoreCategoryTranslation"("storeCategoryId");

-- CreateIndex
CREATE INDEX "StoreCategoryTranslation_storefrontLocaleId_idx" ON "StoreCategoryTranslation"("storefrontLocaleId");

-- CreateIndex
CREATE INDEX "StoreCategoryTranslation_name_idx" ON "StoreCategoryTranslation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "StoreCategoryTranslation_storeCategoryId_storefrontLocaleId_key" ON "StoreCategoryTranslation"("storeCategoryId", "storefrontLocaleId");

-- AddForeignKey
ALTER TABLE "StoreCategory" ADD CONSTRAINT "StoreCategory_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCategory" ADD CONSTRAINT "StoreCategory_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCategory" ADD CONSTRAINT "StoreCategory_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "StoreCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCategoryTranslation" ADD CONSTRAINT "StoreCategoryTranslation_storeCategoryId_fkey" FOREIGN KEY ("storeCategoryId") REFERENCES "StoreCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCategoryTranslation" ADD CONSTRAINT "StoreCategoryTranslation_storefrontLocaleId_fkey" FOREIGN KEY ("storefrontLocaleId") REFERENCES "StorefrontLocale"("id") ON DELETE CASCADE ON UPDATE CASCADE;
