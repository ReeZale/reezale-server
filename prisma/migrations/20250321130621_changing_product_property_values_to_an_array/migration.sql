/*
  Warnings:

  - The `values` column on the `ProductProperty` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ProductProperty" DROP COLUMN "values",
ADD COLUMN     "values" JSONB[];
