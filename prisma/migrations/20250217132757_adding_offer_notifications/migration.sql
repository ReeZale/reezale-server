-- CreateTable
CREATE TABLE "OfferNotification" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "itemId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "notified" BOOLEAN NOT NULL DEFAULT false,
    "notificationDate" TIMESTAMP(3),
    "offerId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OfferNotification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OfferNotification_email_itemId_localeId_key" ON "OfferNotification"("email", "itemId", "localeId");

-- AddForeignKey
ALTER TABLE "OfferNotification" ADD CONSTRAINT "OfferNotification_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferNotification" ADD CONSTRAINT "OfferNotification_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferNotification" ADD CONSTRAINT "OfferNotification_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
