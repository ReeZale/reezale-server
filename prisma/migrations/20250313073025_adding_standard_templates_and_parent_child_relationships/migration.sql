-- DropForeignKey
ALTER TABLE "StandardTemplateField" DROP CONSTRAINT "StandardTemplateField_standardFieldId_fkey";

-- DropForeignKey
ALTER TABLE "StandardTemplateField" DROP CONSTRAINT "StandardTemplateField_standardTemplateId_fkey";

-- AlterTable
ALTER TABLE "ProductSegment" ADD COLUMN     "standardTemplateId" BIGINT;

-- AlterTable
ALTER TABLE "StandardTemplate" ADD COLUMN     "parentId" BIGINT;

-- AddForeignKey
ALTER TABLE "ProductSegment" ADD CONSTRAINT "ProductSegment_standardTemplateId_fkey" FOREIGN KEY ("standardTemplateId") REFERENCES "StandardTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardTemplate" ADD CONSTRAINT "StandardTemplate_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "StandardTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardTemplateField" ADD CONSTRAINT "StandardTemplateField_standardTemplateId_fkey" FOREIGN KEY ("standardTemplateId") REFERENCES "StandardTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardTemplateField" ADD CONSTRAINT "StandardTemplateField_standardFieldId_fkey" FOREIGN KEY ("standardFieldId") REFERENCES "StandardField"("id") ON DELETE CASCADE ON UPDATE CASCADE;
