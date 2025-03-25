/*
  Warnings:

  - You are about to drop the column `segmentPropertyId` on the `ProductProperty` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId,propertyId]` on the table `ProductProperty` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `propertyId` to the `ProductProperty` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductProperty" DROP CONSTRAINT "ProductProperty_segmentPropertyId_fkey";

-- DropIndex
DROP INDEX "ProductProperty_productId_segmentPropertyId_key";

-- AlterTable
ALTER TABLE "ProductProperty" DROP COLUMN "segmentPropertyId",
ADD COLUMN     "propertyId" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "ProductSegment" ADD COLUMN     "propertyGroupId" BIGINT;

-- CreateTable
CREATE TABLE "PropertyGroup" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropertyGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyGroupProperty" (
    "id" BIGSERIAL NOT NULL,
    "propertyId" BIGINT NOT NULL,
    "propertyGroupId" BIGINT NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PropertyGroupProperty_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PropertyGroup_key_key" ON "PropertyGroup"("key");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyGroupProperty_propertyGroupId_propertyId_key" ON "PropertyGroupProperty"("propertyGroupId", "propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductProperty_productId_propertyId_key" ON "ProductProperty"("productId", "propertyId");

-- AddForeignKey
ALTER TABLE "ProductSegment" ADD CONSTRAINT "ProductSegment_propertyGroupId_fkey" FOREIGN KEY ("propertyGroupId") REFERENCES "PropertyGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyGroupProperty" ADD CONSTRAINT "PropertyGroupProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyGroupProperty" ADD CONSTRAINT "PropertyGroupProperty_propertyGroupId_fkey" FOREIGN KEY ("propertyGroupId") REFERENCES "PropertyGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductProperty" ADD CONSTRAINT "ProductProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
