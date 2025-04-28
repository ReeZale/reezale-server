/*
  Warnings:

  - Added the required column `countryId` to the `StorefrontContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `StorefrontContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lat` to the `StorefrontContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lon` to the `StorefrontContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `StorefrontContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `StorefrontContact` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StorefrontIdentity" DROP CONSTRAINT "StorefrontIdentity_iconId_fkey";

-- DropForeignKey
ALTER TABLE "StorefrontIdentity" DROP CONSTRAINT "StorefrontIdentity_imageId_fkey";

-- AlterTable
ALTER TABLE "StorefrontContact" ADD COLUMN     "countryId" BIGINT NOT NULL,
ADD COLUMN     "endTime" TEXT NOT NULL,
ADD COLUMN     "lat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lon" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "startTime" TEXT NOT NULL,
ADD COLUMN     "weekdays" "Weekday"[];

-- AddForeignKey
ALTER TABLE "StorefrontIdentity" ADD CONSTRAINT "StorefrontIdentity_iconId_fkey" FOREIGN KEY ("iconId") REFERENCES "Media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontIdentity" ADD CONSTRAINT "StorefrontIdentity_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontContact" ADD CONSTRAINT "StorefrontContact_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;
