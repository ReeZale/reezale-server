-- AlterTable
ALTER TABLE "ProductProperties" ADD COLUMN     "templateId" BIGINT;

-- AddForeignKey
ALTER TABLE "ProductProperties" ADD CONSTRAINT "ProductProperties_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE SET NULL ON UPDATE CASCADE;
