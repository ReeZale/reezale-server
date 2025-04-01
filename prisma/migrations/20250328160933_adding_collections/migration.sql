-- CreateEnum
CREATE TYPE "CollectionType" AS ENUM ('GENDER', 'AGEGROUP', 'SEASON', 'OCCASION', 'HOLIDAY', 'MATERIAL', 'STYLE', 'BRAND', 'TREND', 'COLOR', 'FUNCTION', 'FEATURE', 'ROOM', 'DEVICE', 'CATEGORY');

-- CreateTable
CREATE TABLE "Collection" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "collectionType" "CollectionType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollectionTranslation" (
    "id" BIGSERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "collectionId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CollectionTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCollection" (
    "id" BIGSERIAL NOT NULL,
    "productId" BIGINT NOT NULL,
    "collectionId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductCollection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collection_key_key" ON "Collection"("key");

-- CreateIndex
CREATE UNIQUE INDEX "CollectionTranslation_localeId_collectionId_key" ON "CollectionTranslation"("localeId", "collectionId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductCollection_productId_collectionId_key" ON "ProductCollection"("productId", "collectionId");

-- AddForeignKey
ALTER TABLE "CollectionTranslation" ADD CONSTRAINT "CollectionTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionTranslation" ADD CONSTRAINT "CollectionTranslation_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCollection" ADD CONSTRAINT "ProductCollection_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCollection" ADD CONSTRAINT "ProductCollection_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
