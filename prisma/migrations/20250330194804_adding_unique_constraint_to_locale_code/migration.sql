/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Locale` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Locale_code_key" ON "Locale"("code");
