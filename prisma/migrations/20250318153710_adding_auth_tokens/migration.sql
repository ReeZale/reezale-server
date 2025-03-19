/*
  Warnings:

  - You are about to drop the `CustomProperties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StandardProperties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TemplateStandardField` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CustomProperties" DROP CONSTRAINT "CustomProperties_productId_fkey";

-- DropForeignKey
ALTER TABLE "CustomProperties" DROP CONSTRAINT "CustomProperties_templateFieldId_fkey";

-- DropForeignKey
ALTER TABLE "StandardProperties" DROP CONSTRAINT "StandardProperties_productId_fkey";

-- DropForeignKey
ALTER TABLE "StandardProperties" DROP CONSTRAINT "StandardProperties_standardFieldId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateStandardField" DROP CONSTRAINT "TemplateStandardField_standardFieldId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateStandardField" DROP CONSTRAINT "TemplateStandardField_templateId_fkey";

-- AlterTable
ALTER TABLE "Field" ADD COLUMN     "standardFieldId" BIGINT;

-- DropTable
DROP TABLE "CustomProperties";

-- DropTable
DROP TABLE "StandardProperties";

-- DropTable
DROP TABLE "TemplateStandardField";

-- CreateTable
CREATE TABLE "AuthToken" (
    "id" BIGSERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "isValid" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuthToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductProperties" (
    "id" BIGSERIAL NOT NULL,
    "fieldId" BIGINT NOT NULL,
    "productId" BIGINT NOT NULL,
    "value" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductProperties_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AuthToken_token_key" ON "AuthToken"("token");

-- CreateIndex
CREATE INDEX "AuthToken_expiresAt_idx" ON "AuthToken"("expiresAt");

-- CreateIndex
CREATE INDEX "AuthToken_isValid_idx" ON "AuthToken"("isValid");

-- AddForeignKey
ALTER TABLE "AuthToken" ADD CONSTRAINT "AuthToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductProperties" ADD CONSTRAINT "ProductProperties_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductProperties" ADD CONSTRAINT "ProductProperties_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_standardFieldId_fkey" FOREIGN KEY ("standardFieldId") REFERENCES "StandardField"("id") ON DELETE CASCADE ON UPDATE CASCADE;
