-- CreateTable
CREATE TABLE "ProductSegmentTranslation" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "productSegmentId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductSegmentTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProductSegmentTranslation_path_idx" ON "ProductSegmentTranslation"("path");

-- AddForeignKey
ALTER TABLE "ProductSegmentTranslation" ADD CONSTRAINT "ProductSegmentTranslation_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSegmentTranslation" ADD CONSTRAINT "ProductSegmentTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
