/*
  Warnings:

  - A unique constraint covering the columns `[storefrontId,accountId,paymentProvider]` on the table `PaymentAccount` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PaymentAccount_storefrontId_accountId_paymentProvider_key" ON "PaymentAccount"("storefrontId", "accountId", "paymentProvider");
