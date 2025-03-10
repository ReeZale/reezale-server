-- CreateTable
CREATE TABLE "ProductSegment" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "gcc" TEXT,
    "acc" TEXT,
    "scc" TEXT,
    "ecc" TEXT,
    "parentId" BIGINT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductSegment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductSegmentTranslations" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "slug" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "productSegmentId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductSegmentTranslations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProductSegment_parentId_idx" ON "ProductSegment"("parentId");

-- CreateIndex
CREATE INDEX "ProductSegment_path_idx" ON "ProductSegment" USING HASH ("path");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSegmentTranslations_localeId_slug_key" ON "ProductSegmentTranslations"("localeId", "slug");

-- AddForeignKey
ALTER TABLE "ProductSegment" ADD CONSTRAINT "ProductSegment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSegmentTranslations" ADD CONSTRAINT "ProductSegmentTranslations_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSegmentTranslations" ADD CONSTRAINT "ProductSegmentTranslations_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
