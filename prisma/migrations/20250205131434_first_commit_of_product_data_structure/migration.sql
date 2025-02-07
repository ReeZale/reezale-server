-- CreateTable
CREATE TABLE "ProductData" (
    "id" BIGSERIAL NOT NULL,
    "locale" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "itemGroupId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "material" TEXT[],
    "gender" TEXT NOT NULL,
    "ageGroup" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "pattern" TEXT NOT NULL,
    "sizeSystem" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "availableDate" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "productType" TEXT NOT NULL,

    CONSTRAINT "ProductData_pkey" PRIMARY KEY ("id")
);
