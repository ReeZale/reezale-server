-- CreateTable
CREATE TABLE "StorefrontConfiguration" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Default Storefront Configuration',
    "storefrontId" BIGINT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "mainImageId" BIGINT NOT NULL,
    "mainImageBrightness" INTEGER NOT NULL DEFAULT 70,
    "collectionPreviewBrightness" INTEGER NOT NULL DEFAULT 80,
    "hasPromotedCollection" BOOLEAN NOT NULL DEFAULT false,
    "promotedStoreCollectionTitle" TEXT,
    "storeCollectionId" BIGINT,
    "about" TEXT NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StorefrontConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontNavigation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Default Storefront Navigation',
    "storefrontConfigurationId" TEXT NOT NULL,
    "storeCollectionId" BIGINT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "parentId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "level" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StorefrontNavigation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "StorefrontConfiguration_accountId_storefrontId_id_idx" ON "StorefrontConfiguration"("accountId", "storefrontId", "id");

-- CreateIndex
CREATE INDEX "StorefrontNavigation_id_storefrontId_accountId_idx" ON "StorefrontNavigation"("id", "storefrontId", "accountId");

-- CreateIndex
CREATE INDEX "StorefrontNavigation_parentId_idx" ON "StorefrontNavigation"("parentId");

-- AddForeignKey
ALTER TABLE "StorefrontConfiguration" ADD CONSTRAINT "StorefrontConfiguration_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontConfiguration" ADD CONSTRAINT "StorefrontConfiguration_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontConfiguration" ADD CONSTRAINT "StorefrontConfiguration_mainImageId_fkey" FOREIGN KEY ("mainImageId") REFERENCES "Media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontConfiguration" ADD CONSTRAINT "StorefrontConfiguration_storeCollectionId_fkey" FOREIGN KEY ("storeCollectionId") REFERENCES "StoreCollection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontNavigation" ADD CONSTRAINT "StorefrontNavigation_storefrontConfigurationId_fkey" FOREIGN KEY ("storefrontConfigurationId") REFERENCES "StorefrontConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontNavigation" ADD CONSTRAINT "StorefrontNavigation_storeCollectionId_fkey" FOREIGN KEY ("storeCollectionId") REFERENCES "StoreCollection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontNavigation" ADD CONSTRAINT "StorefrontNavigation_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontNavigation" ADD CONSTRAINT "StorefrontNavigation_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontNavigation" ADD CONSTRAINT "StorefrontNavigation_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "StorefrontNavigation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
