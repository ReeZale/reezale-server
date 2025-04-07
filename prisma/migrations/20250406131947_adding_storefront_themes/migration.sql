-- CreateEnum
CREATE TYPE "PublishStatus" AS ENUM ('DRAFT', 'ACTIVE', 'SCHEDULED');

-- CreateTable
CREATE TABLE "StoreFrontTheme" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pubishStatus" "PublishStatus" NOT NULL DEFAULT 'DRAFT',
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "effectiveAt" TIMESTAMP(3),
    "colorPrimary" TEXT NOT NULL DEFAULT '#5A643E',
    "colorSecondary" TEXT NOT NULL DEFAULT '#7F8D58',
    "colorBackground" TEXT NOT NULL DEFAULT '#F4F4F4',
    "colorSurface" TEXT NOT NULL DEFAULT '#FFFFFF',
    "colorTextPrimary" TEXT NOT NULL DEFAULT '#333333',
    "colorTextSecondary" TEXT NOT NULL DEFAULT '#666666',
    "colorLink" TEXT NOT NULL DEFAULT '#5A643E',
    "colorError" TEXT NOT NULL DEFAULT '#D32F2F',
    "fontFamily" TEXT NOT NULL DEFAULT 'Inter, sans-serif',
    "fontSizeBase" INTEGER NOT NULL DEFAULT 16,
    "fontSizeScale" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "borderRadius" INTEGER NOT NULL DEFAULT 8,
    "spacingUnit" INTEGER NOT NULL DEFAULT 8,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreFrontTheme_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StoreFrontTheme_storefrontId_name_key" ON "StoreFrontTheme"("storefrontId", "name");

-- AddForeignKey
ALTER TABLE "StoreFrontTheme" ADD CONSTRAINT "StoreFrontTheme_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;
