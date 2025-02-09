/*
  Warnings:

  - A unique constraint covering the columns `[sizeSystem,sizeType,size]` on the table `SizeOption` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SizeOption_sizeSystem_sizeType_size_key" ON "SizeOption"("sizeSystem", "sizeType", "size");
