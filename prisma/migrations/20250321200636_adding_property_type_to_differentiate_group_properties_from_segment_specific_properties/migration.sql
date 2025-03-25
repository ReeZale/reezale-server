-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('GROUP', 'SEGMENT');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "productImage" TEXT;

-- AlterTable
ALTER TABLE "ProductProperty" ADD COLUMN     "type" "PropertyType";
