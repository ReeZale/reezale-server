/*
  Warnings:

  - A unique constraint covering the columns `[key,storefrontId]` on the table `Field` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Field_key_storefrontId_key" ON "Field"("key", "storefrontId");
