/*
  Warnings:

  - A unique constraint covering the columns `[storefrontId,accountId,paymentProvider,paymentProviderAccountId]` on the table `PaymentAccount` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "PaymentAccount_storefrontId_accountId_paymentProvider_key";

-- CreateIndex
CREATE UNIQUE INDEX "PaymentAccount_storefrontId_accountId_paymentProvider_payme_key" ON "PaymentAccount"("storefrontId", "accountId", "paymentProvider", "paymentProviderAccountId");
