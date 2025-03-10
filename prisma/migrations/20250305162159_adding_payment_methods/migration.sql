-- CreateEnum
CREATE TYPE "PaymentProvider" AS ENUM ('stripe', 'ayden', 'mollie', 'checkout');

-- CreateEnum
CREATE TYPE "PaymentAccountType" AS ENUM ('managed', 'custom');

-- CreateEnum
CREATE TYPE "PaymentFrequency" AS ENUM ('daily', 'weekly', 'monthly');

-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_storefrontId_fkey";

-- DropForeignKey
ALTER TABLE "StorefrontLocale" DROP CONSTRAINT "StorefrontLocale_localeId_fkey";

-- AlterTable
ALTER TABLE "StorefrontLocale" ADD COLUMN     "paymentAccountId" BIGINT;

-- CreateTable
CREATE TABLE "PaymentAccount" (
    "id" BIGSERIAL NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "type" "PaymentAccountType" NOT NULL DEFAULT 'managed',
    "paymentProvider" "PaymentProvider" NOT NULL DEFAULT 'stripe',
    "paymentProviderAccountId" TEXT,
    "currencyId" BIGINT NOT NULL,
    "paymentFrequency" "PaymentFrequency" NOT NULL DEFAULT 'weekly',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PaymentAccount_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontLocale" ADD CONSTRAINT "StorefrontLocale_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontLocale" ADD CONSTRAINT "StorefrontLocale_paymentAccountId_fkey" FOREIGN KEY ("paymentAccountId") REFERENCES "PaymentAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentAccount" ADD CONSTRAINT "PaymentAccount_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentAccount" ADD CONSTRAINT "PaymentAccount_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;
