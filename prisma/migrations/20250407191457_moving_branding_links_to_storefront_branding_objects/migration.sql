/*
  Warnings:

  - The values [GITHUB,DISCORD,OTHER] on the enum `SocialPlatform` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SocialPlatform_new" AS ENUM ('FACEBOOK', 'INSTAGRAM', 'TWITTER', 'LINKEDIN', 'PINTEREST', 'YOUTUBE', 'TIKTOK', 'SNAPCHAT');
ALTER TABLE "StorefrontBrandingLink" ALTER COLUMN "platform" TYPE "SocialPlatform_new" USING ("platform"::text::"SocialPlatform_new");
ALTER TYPE "SocialPlatform" RENAME TO "SocialPlatform_old";
ALTER TYPE "SocialPlatform_new" RENAME TO "SocialPlatform";
DROP TYPE "SocialPlatform_old";
COMMIT;

-- AlterTable
ALTER TABLE "StorefrontBranding" ADD COLUMN     "facebookLink" TEXT,
ADD COLUMN     "instagramLink" TEXT,
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "pinterestLink" TEXT,
ADD COLUMN     "snapchatLink" TEXT,
ADD COLUMN     "tiktokLink" TEXT,
ADD COLUMN     "twitterLink" TEXT,
ADD COLUMN     "youtubeLink" TEXT;
