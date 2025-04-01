/*
  Warnings:

  - You are about to drop the column `isPreviewImage` on the `ProductMedia` table. All the data in the column will be lost.
  - You are about to drop the column `isProductImage` on the `ProductMedia` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId,mediaId]` on the table `ProductMedia` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mediaType` to the `ProductMedia` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProductMediaType" AS ENUM ('PRIMARY', 'PRODUCT', 'GALLERY', 'OTHER');

-- AlterTable
ALTER TABLE "ProductMedia" DROP COLUMN "isPreviewImage",
DROP COLUMN "isProductImage",
ADD COLUMN     "mediaType" "ProductMediaType" NOT NULL,
ALTER COLUMN "order" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProductMedia_productId_mediaId_key" ON "ProductMedia"("productId", "mediaId");
