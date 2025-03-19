-- AlterTable
ALTER TABLE "StoreCategory" ADD COLUMN     "custom" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "key" TEXT;
