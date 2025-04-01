/*
  Warnings:

  - The primary key for the `Collection` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `ProductCollection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CollectionTranslation" DROP CONSTRAINT "CollectionTranslation_collectionId_fkey";

-- DropForeignKey
ALTER TABLE "CollectionTranslation" DROP CONSTRAINT "CollectionTranslation_localeId_fkey";

-- DropForeignKey
ALTER TABLE "ProductCollection" DROP CONSTRAINT "ProductCollection_collectionId_fkey";

-- DropForeignKey
ALTER TABLE "ProductCollection" DROP CONSTRAINT "ProductCollection_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductMedia" DROP CONSTRAINT "ProductMedia_mediaId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSegmentTranslation" DROP CONSTRAINT "ProductSegmentTranslation_localeId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSegmentTranslation" DROP CONSTRAINT "ProductSegmentTranslation_productSegmentId_fkey";

-- AlterTable
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_pkey",
ADD COLUMN     "parentId" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Collection_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Collection_id_seq";

-- AlterTable
ALTER TABLE "CollectionTranslation" ALTER COLUMN "collectionId" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "ProductCollection";

-- CreateTable
CREATE TABLE "StoreCollection" (
    "id" BIGSERIAL NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "collectionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StoreCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreCollectionProducts" (
    "id" BIGSERIAL NOT NULL,
    "productId" BIGINT NOT NULL,
    "storeCollectionId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StoreCollectionProducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreNavigation" (
    "id" BIGSERIAL NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StoreNavigation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StoreCollection_storefrontId_collectionId_key" ON "StoreCollection"("storefrontId", "collectionId");

-- CreateIndex
CREATE UNIQUE INDEX "StoreCollectionProducts_productId_key" ON "StoreCollectionProducts"("productId");

-- AddForeignKey
ALTER TABLE "ProductSegmentTranslation" ADD CONSTRAINT "ProductSegmentTranslation_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSegmentTranslation" ADD CONSTRAINT "ProductSegmentTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductMedia" ADD CONSTRAINT "ProductMedia_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionTranslation" ADD CONSTRAINT "CollectionTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionTranslation" ADD CONSTRAINT "CollectionTranslation_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCollection" ADD CONSTRAINT "StoreCollection_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCollection" ADD CONSTRAINT "StoreCollection_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCollectionProducts" ADD CONSTRAINT "StoreCollectionProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCollectionProducts" ADD CONSTRAINT "StoreCollectionProducts_storeCollectionId_fkey" FOREIGN KEY ("storeCollectionId") REFERENCES "StoreCollection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreNavigation" ADD CONSTRAINT "StoreNavigation_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
