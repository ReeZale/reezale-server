-- CreateEnum
CREATE TYPE "InventoryLocationType" AS ENUM ('STORE', 'WAREHOUSE', 'LOCKER', 'VIRTUAL');

-- CreateEnum
CREATE TYPE "Weekday" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateEnum
CREATE TYPE "InventoryFunctionType" AS ENUM ('FULFILLMENT', 'RECEIVING', 'RETURNS', 'DROPOFF', 'STORAGE');

-- CreateTable
CREATE TABLE "TimeZone" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "offset" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TimeZone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LocationZone" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "countryId" BIGINT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "displayPostalCode" TEXT NOT NULL,
    "placeName" TEXT NOT NULL,
    "adminName1" TEXT,
    "adminCode1" TEXT,
    "adminName2" TEXT,
    "adminCode2" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "viewportNortheastLat" DOUBLE PRECISION,
    "viewportNortheastLng" DOUBLE PRECISION,
    "viewportSouthwestLat" DOUBLE PRECISION,
    "viewportSouthwestLng" DOUBLE PRECISION,
    "timeZoneId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LocationZone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryLocation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "displayAddress" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "locationType" "InventoryLocationType" NOT NULL,
    "locationZoneId" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "priority" INTEGER,
    "capacity" INTEGER,
    "contactEmail" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InventoryLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryLocationFunction" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "function" "InventoryFunctionType" NOT NULL,
    "contactEmail" TEXT,
    "contactPhone" TEXT,
    "accountId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InventoryLocationFunction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryLocationFunctionHours" (
    "id" TEXT NOT NULL,
    "inventoryLocationFunctionId" TEXT NOT NULL,
    "day" "Weekday" NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InventoryLocationFunctionHours_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LocationZone_key_key" ON "LocationZone"("key");

-- CreateIndex
CREATE INDEX "LocationZone_latitude_longitude_idx" ON "LocationZone"("latitude", "longitude");

-- CreateIndex
CREATE INDEX "LocationZone_timeZoneId_idx" ON "LocationZone"("timeZoneId");

-- CreateIndex
CREATE UNIQUE INDEX "LocationZone_countryId_postalCode_key" ON "LocationZone"("countryId", "postalCode");

-- CreateIndex
CREATE INDEX "InventoryLocation_accountId_idx" ON "InventoryLocation"("accountId");

-- CreateIndex
CREATE INDEX "InventoryLocationFunction_accountId_idx" ON "InventoryLocationFunction"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "InventoryLocationFunctionHours_inventoryLocationFunctionId__key" ON "InventoryLocationFunctionHours"("inventoryLocationFunctionId", "day");

-- AddForeignKey
ALTER TABLE "LocationZone" ADD CONSTRAINT "LocationZone_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationZone" ADD CONSTRAINT "LocationZone_timeZoneId_fkey" FOREIGN KEY ("timeZoneId") REFERENCES "TimeZone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryLocation" ADD CONSTRAINT "InventoryLocation_locationZoneId_fkey" FOREIGN KEY ("locationZoneId") REFERENCES "LocationZone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryLocation" ADD CONSTRAINT "InventoryLocation_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryLocationFunction" ADD CONSTRAINT "InventoryLocationFunction_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "InventoryLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryLocationFunction" ADD CONSTRAINT "InventoryLocationFunction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryLocationFunctionHours" ADD CONSTRAINT "InventoryLocationFunctionHours_inventoryLocationFunctionId_fkey" FOREIGN KEY ("inventoryLocationFunctionId") REFERENCES "InventoryLocationFunction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryLocationFunctionHours" ADD CONSTRAINT "InventoryLocationFunctionHours_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
