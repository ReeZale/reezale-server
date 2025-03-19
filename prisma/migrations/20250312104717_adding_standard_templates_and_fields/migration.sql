-- CreateTable
CREATE TABLE "StandardTemplate" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'STANDARD',
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StandardTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StandardTemplateField" (
    "id" BIGSERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "options" JSONB,
    "required" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "standardTemplateId" BIGINT NOT NULL,
    "standardFieldId" BIGINT NOT NULL,

    CONSTRAINT "StandardTemplateField_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StandardTemplateField" ADD CONSTRAINT "StandardTemplateField_standardTemplateId_fkey" FOREIGN KEY ("standardTemplateId") REFERENCES "StandardTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardTemplateField" ADD CONSTRAINT "StandardTemplateField_standardFieldId_fkey" FOREIGN KEY ("standardFieldId") REFERENCES "StandardField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
