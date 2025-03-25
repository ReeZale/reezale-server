-- CreateEnum
CREATE TYPE "Section" AS ENUM ('ATTRIBUTES', 'MATERIAL', 'CARE_INSTRUCTIONS');

-- CreateTable
CREATE TABLE "SegmentSection" (
    "id" BIGSERIAL NOT NULL,
    "segmentId" BIGINT NOT NULL,
    "translations" JSONB,
    "section" "Section" NOT NULL,

    CONSTRAINT "SegmentSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SegmentSectionField" (
    "id" BIGSERIAL NOT NULL,
    "segmentSectionId" BIGINT NOT NULL,
    "fieldId" BIGINT NOT NULL,
    "value" JSONB NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "SegmentSectionField_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SegmentSection_segmentId_section_key" ON "SegmentSection"("segmentId", "section");

-- CreateIndex
CREATE UNIQUE INDEX "SegmentSectionField_segmentSectionId_fieldId_key" ON "SegmentSectionField"("segmentSectionId", "fieldId");

-- AddForeignKey
ALTER TABLE "SegmentSection" ADD CONSTRAINT "SegmentSection_segmentId_fkey" FOREIGN KEY ("segmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SegmentSectionField" ADD CONSTRAINT "SegmentSectionField_segmentSectionId_fkey" FOREIGN KEY ("segmentSectionId") REFERENCES "SegmentSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SegmentSectionField" ADD CONSTRAINT "SegmentSectionField_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;
