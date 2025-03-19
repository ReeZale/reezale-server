/*
  Warnings:

  - A unique constraint covering the columns `[storefrontId,productSegmentId]` on the table `StorefrontProductSegment` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "StorefrontProductSegment" ALTER COLUMN "primary" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontProductSegment_storefrontId_productSegmentId_key" ON "StorefrontProductSegment"("storefrontId", "productSegmentId");
