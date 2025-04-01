-- CreateTable
CREATE TABLE "ListPrice" (
    "id" BIGSERIAL NOT NULL,
    "productVariantId" BIGINT NOT NULL,
    "condition" "Condition" NOT NULL,
    "currencyId" BIGINT NOT NULL,
    "countryId" BIGINT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ListPrice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ListPrice_productVariantId_countryId_currencyId_key" ON "ListPrice"("productVariantId", "countryId", "currencyId");

-- AddForeignKey
ALTER TABLE "ListPrice" ADD CONSTRAINT "ListPrice_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListPrice" ADD CONSTRAINT "ListPrice_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListPrice" ADD CONSTRAINT "ListPrice_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
