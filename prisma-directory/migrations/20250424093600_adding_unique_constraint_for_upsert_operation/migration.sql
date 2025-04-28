/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `ResellPlatform` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
ALTER TYPE "ResellPlatformType" ADD VALUE 'B2B';

-- AlterTable
ALTER TABLE "ResellPlatform" ADD COLUMN     "altTagline" TEXT,
ADD COLUMN     "canSell" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "logo" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ResellPlatform_url_key" ON "ResellPlatform"("url");
