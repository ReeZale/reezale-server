/*
  Warnings:

  - You are about to drop the column `iamge` on the `StorefrontIdentity` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `StorefrontIdentity` table. All the data in the column will be lost.
  - The primary key for the `StorefrontLocale` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `iconId` to the `StorefrontIdentity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageId` to the `StorefrontIdentity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StorefrontIdentity" DROP COLUMN "iamge",
DROP COLUMN "icon",
ADD COLUMN     "iconId" BIGINT NOT NULL,
ADD COLUMN     "imageId" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "StorefrontLocale" DROP CONSTRAINT "StorefrontLocale_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "StorefrontLocale_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "StorefrontLocale_id_seq";

-- AddForeignKey
ALTER TABLE "StorefrontIdentity" ADD CONSTRAINT "StorefrontIdentity_iconId_fkey" FOREIGN KEY ("iconId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontIdentity" ADD CONSTRAINT "StorefrontIdentity_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
