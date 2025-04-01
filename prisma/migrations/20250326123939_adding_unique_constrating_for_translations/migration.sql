/*
  Warnings:

  - A unique constraint covering the columns `[productSegmentId,localeId]` on the table `ProductSegmentTranslation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProductSegmentTranslation_productSegmentId_localeId_key" ON "ProductSegmentTranslation"("productSegmentId", "localeId");
