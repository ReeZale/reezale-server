-- CreateEnum
CREATE TYPE "PaymentProvider" AS ENUM ('stripe', 'ayden', 'mollie', 'checkout');

-- CreateEnum
CREATE TYPE "PaymentAccountType" AS ENUM ('managed', 'custom');

-- CreateEnum
CREATE TYPE "PaymentFrequency" AS ENUM ('daily', 'weekly', 'monthly');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('IMAGE', 'VIDEO', 'AUDIO', 'DOCUMENT', 'OTHER');

-- CreateEnum
CREATE TYPE "MediaSource" AS ENUM ('UPLOADED', 'EXTERNAL');

-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('NEW', 'USED', 'REFURBISHED', 'RETURN');

-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('GROUP', 'SEGMENT');

-- CreateEnum
CREATE TYPE "FieldFormat" AS ENUM ('text', 'longText', 'list', 'link', 'date', 'image', 'color');

-- CreateEnum
CREATE TYPE "FieldType" AS ENUM ('property', 'variant', 'other');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'unisex');

-- CreateEnum
CREATE TYPE "AgeGroup" AS ENUM ('adult', 'teen', 'kids', 'infant', 'toddler');

-- CreateEnum
CREATE TYPE "SizeType" AS ENUM ('regular', 'petite', 'plus', 'tall');

-- CreateEnum
CREATE TYPE "OfferStatus" AS ENUM ('available', 'reserved', 'allocated', 'pending_shipment', 'shipped', 'delivered', 'accepted', 'archived');

-- CreateEnum
CREATE TYPE "OfferType" AS ENUM ('private', 'business');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('pending', 'failed', 'complete');

-- CreateTable
CREATE TABLE "Account" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "organizationId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "storefrontId" BIGINT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "preferredLocalId" BIGINT,
    "archive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthToken" (
    "id" BIGSERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "isValid" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuthToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "url" TEXT,
    "logo" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "vatID" TEXT,
    "taxID" TEXT,
    "legalName" TEXT,
    "duns" TEXT,
    "linkedin" TEXT,
    "twitter" TEXT,
    "facebook" TEXT,
    "instagram" TEXT,
    "tiktok" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Storefront" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT,
    "bannerImage" TEXT,
    "domain" TEXT NOT NULL,
    "refundPolicy" TEXT,
    "termsOfService" TEXT,
    "privacyPolicy" TEXT,
    "facebook" TEXT,
    "twitter" TEXT,
    "instagram" TEXT,
    "linkedin" TEXT,
    "tiktok" TEXT,
    "primaryColor" TEXT NOT NULL DEFAULT '#5A643E',
    "secondaryColor" TEXT NOT NULL DEFAULT '#7F8D58',
    "backgroundColor" TEXT NOT NULL DEFAULT '#F4F4F4',
    "textColor" TEXT NOT NULL DEFAULT '#333333',
    "buttonColor" TEXT NOT NULL DEFAULT '#5A643E',
    "buttonTextColor" TEXT NOT NULL DEFAULT '#FFFFFF',
    "fontFamily" TEXT NOT NULL DEFAULT 'Inter, sans-serif',
    "borderRadius" INTEGER NOT NULL DEFAULT 8,
    "countryId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Storefront_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontProductSegment" (
    "id" BIGSERIAL NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "productSegmentId" BIGINT NOT NULL,
    "primary" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorefrontProductSegment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontMarketSegment" (
    "id" BIGSERIAL NOT NULL,
    "gender" "Gender" NOT NULL,
    "ageGroup" "AgeGroup" NOT NULL,
    "primary" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "storefrontId" BIGINT NOT NULL,

    CONSTRAINT "StorefrontMarketSegment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontRegion" (
    "id" BIGSERIAL NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "primary" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorefrontRegion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontLocale" (
    "id" BIGSERIAL NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "timezone" TEXT NOT NULL,
    "useStorefrontContact" BOOLEAN NOT NULL DEFAULT true,
    "contactEmail" TEXT,
    "contactPhone" TEXT,
    "address" TEXT,
    "domain" TEXT,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "metaKeywords" TEXT,
    "ogTitle" TEXT,
    "ogDescription" TEXT,
    "ogImage" TEXT,
    "paymentAccountId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorefrontLocale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentAccount" (
    "id" BIGSERIAL NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "type" "PaymentAccountType" NOT NULL DEFAULT 'managed',
    "paymentProvider" "PaymentProvider" NOT NULL DEFAULT 'stripe',
    "paymentProviderAccountId" TEXT,
    "currencyId" BIGINT NOT NULL,
    "paymentFrequency" "PaymentFrequency" NOT NULL DEFAULT 'weekly',
    "primary" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PaymentAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductSegment" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "gcc" TEXT,
    "acc" TEXT,
    "scc" TEXT,
    "ecc" TEXT,
    "translation" JSONB,
    "parentId" BIGINT,
    "imageUrl" TEXT,
    "standardTemplateId" BIGINT,
    "propertyGroupId" BIGINT,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductSegment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyGroup" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropertyGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyGroupProperty" (
    "id" BIGSERIAL NOT NULL,
    "propertyId" BIGINT NOT NULL,
    "propertyGroupId" BIGINT NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PropertyGroupProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "translations" JSONB NOT NULL,
    "options" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyOption" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "propertyId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropertyOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyTranslation" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "propertyId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropertyTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyOptionTranslation" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "propertyOptionId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropertyOptionTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SegmentProperty" (
    "id" BIGSERIAL NOT NULL,
    "propertyId" BIGINT NOT NULL,
    "productSegmentId" BIGINT NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SegmentProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" BIGSERIAL NOT NULL,
    "reference" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "thumbnailImage" TEXT NOT NULL,
    "productImage" TEXT,
    "images" TEXT[],
    "gender" "Gender",
    "ageGroup" "AgeGroup",
    "brandId" BIGINT,
    "productSegmentId" BIGINT,
    "storeCategoryId" BIGINT,
    "storefrontId" BIGINT NOT NULL,
    "url" TEXT,
    "hasProperties" BOOLEAN NOT NULL DEFAULT false,
    "hasVariants" BOOLEAN NOT NULL DEFAULT false,
    "variantConfigId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductMedia" (
    "id" BIGSERIAL NOT NULL,
    "productId" BIGINT NOT NULL,
    "mediaId" BIGINT NOT NULL,
    "isProductImage" BOOLEAN NOT NULL DEFAULT false,
    "isPreviewImage" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductMedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" BIGSERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "fileName" TEXT,
    "fileSize" INTEGER,
    "width" INTEGER,
    "height" INTEGER,
    "duration" INTEGER,
    "mimeType" TEXT,
    "alt" TEXT,
    "mediaType" "MediaType" NOT NULL,
    "source" "MediaSource" NOT NULL DEFAULT 'UPLOADED',
    "accountId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VariantConfig" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "translations" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VariantConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VariantProperty" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "translations" JSONB NOT NULL,
    "options" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VariantProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VariantConfigField" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "variantConfigId" BIGINT NOT NULL,
    "variantPropertyId" BIGINT NOT NULL,
    "order" INTEGER NOT NULL,
    "isRequired" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VariantConfigField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariantProperty" (
    "id" BIGSERIAL NOT NULL,
    "productVariantId" BIGINT NOT NULL,
    "variantConfigFieldId" BIGINT NOT NULL,
    "value" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductVariantProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariant" (
    "id" BIGSERIAL NOT NULL,
    "productId" BIGINT NOT NULL,
    "sku" TEXT NOT NULL,
    "gtin" TEXT,
    "mpn" TEXT,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "id" BIGSERIAL NOT NULL,
    "productVariantId" BIGINT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "salePrice" DECIMAL(10,2) NOT NULL,
    "discount" DECIMAL(10,2) NOT NULL,
    "currencyId" BIGINT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreBrand" (
    "id" BIGSERIAL NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "brandId" BIGINT NOT NULL,
    "isOwner" BOOLEAN NOT NULL DEFAULT true,
    "isDefault" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductProperty" (
    "id" BIGSERIAL NOT NULL,
    "productId" BIGINT NOT NULL,
    "propertyId" BIGINT NOT NULL,
    "type" "PropertyType",
    "values" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductPropertyOption" (
    "id" BIGSERIAL NOT NULL,
    "productPropertyId" BIGINT NOT NULL,
    "propertyOptionId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductPropertyOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreCategory" (
    "id" BIGSERIAL NOT NULL,
    "externalId" TEXT,
    "key" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "path" TEXT NOT NULL,
    "productSegmentId" BIGINT,
    "storefrontId" BIGINT NOT NULL,
    "storefrontProductSegmentId" BIGINT NOT NULL,
    "parentId" BIGINT,
    "custom" BOOLEAN NOT NULL DEFAULT false,
    "archive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "translations" JSONB,

    CONSTRAINT "StoreCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Template" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'STANDARD',
    "description" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Field" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "translations" JSONB,
    "options" JSONB,
    "index" BOOLEAN NOT NULL DEFAULT false,
    "type" "FieldType" NOT NULL,
    "format" "FieldFormat" NOT NULL DEFAULT 'text',
    "storefrontId" BIGINT NOT NULL,
    "standardFieldId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateField" (
    "id" BIGSERIAL NOT NULL,
    "templateId" BIGINT NOT NULL,
    "fieldId" BIGINT NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TemplateField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StandardField" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "translations" JSONB,
    "index" BOOLEAN NOT NULL DEFAULT false,
    "type" "FieldType" NOT NULL,
    "format" "FieldFormat" NOT NULL DEFAULT 'text',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StandardField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StandardTemplate" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'STANDARD',
    "description" TEXT NOT NULL,
    "parentId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StandardTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StandardTemplateField" (
    "id" BIGSERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "options" JSONB,
    "required" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "standardTemplateId" BIGINT NOT NULL,
    "standardFieldId" BIGINT NOT NULL,

    CONSTRAINT "StandardTemplateField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seller" (
    "id" BIGSERIAL NOT NULL,
    "domain" TEXT,
    "name" TEXT,
    "key" TEXT,
    "logo" TEXT,
    "accountId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageConfig" (
    "id" BIGSERIAL NOT NULL,
    "tagline" TEXT,
    "localeId" BIGINT NOT NULL,
    "sellerId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PageConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SellerCredentials" (
    "id" BIGSERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "secret" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "sellerId" BIGINT NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "isValid" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SellerCredentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscountRule" (
    "id" BIGSERIAL NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sellerId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,

    CONSTRAINT "DiscountRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryDiscountRule" (
    "id" BIGSERIAL NOT NULL,
    "discountRuleId" BIGINT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryId" BIGINT NOT NULL,

    CONSTRAINT "CategoryDiscountRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductFeed" (
    "id" BIGSERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sellerId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,

    CONSTRAINT "ProductFeed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Locale" (
    "id" BIGSERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "label" TEXT,
    "countryId" BIGINT,
    "languageId" BIGINT,
    "currency" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Locale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "relativePath" TEXT,
    "breadCrumbs" TEXT[],
    "parentId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sellerId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemGroup" (
    "id" BIGSERIAL NOT NULL,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "ageGroup" "AgeGroup" NOT NULL,
    "sizeType" "SizeType" NOT NULL,
    "image" TEXT NOT NULL,
    "images" TEXT[],
    "sellerId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "brandId" BIGINT NOT NULL,

    CONSTRAINT "ItemGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" BIGSERIAL NOT NULL,
    "itemGroupId" BIGINT NOT NULL,
    "sku" TEXT NOT NULL,
    "gtin" TEXT,
    "mpn" TEXT,
    "sellerId" BIGINT,
    "shipWeight" TEXT,
    "shipLength" TEXT,
    "shipWidth" TEXT,
    "shipHeight" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemSize" (
    "id" BIGSERIAL NOT NULL,
    "sizeOptionId" BIGINT NOT NULL,
    "itemId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItemSize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SizeOption" (
    "id" BIGSERIAL NOT NULL,
    "sizeSystem" TEXT NOT NULL,
    "sizeType" "SizeType" NOT NULL DEFAULT 'regular',
    "size" TEXT NOT NULL,

    CONSTRAINT "SizeOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemDescription" (
    "id" BIGSERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categoryId" BIGINT NOT NULL,
    "color" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "pattern" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "salePrice" DECIMAL(65,30) NOT NULL,
    "currency" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "itemGroupId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,

    CONSTRAINT "ItemDescription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OfferNotification" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "itemGroupId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "notified" BOOLEAN NOT NULL DEFAULT false,
    "notificationDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sellerId" BIGINT NOT NULL,

    CONSTRAINT "OfferNotification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" BIGSERIAL NOT NULL,
    "reference" TEXT,
    "memberId" BIGINT,
    "shipToAddress" JSONB NOT NULL,
    "countryId" BIGINT NOT NULL,
    "currency" TEXT NOT NULL,
    "subTotal" DECIMAL(65,30) NOT NULL,
    "taxAmount" DECIMAL(65,30) NOT NULL,
    "shipping" DECIMAL(65,30) NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "paymentId" BIGINT,
    "paymentStatus" "PaymentStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" BIGSERIAL NOT NULL,
    "orderId" BIGINT NOT NULL,
    "inventoryId" BIGINT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "currency" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "subTotal" DECIMAL(65,30) NOT NULL,
    "taxRate" DECIMAL(65,30) NOT NULL,
    "taxAmount" DECIMAL(65,30) NOT NULL,
    "shipping" DECIMAL(65,30) NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" BIGSERIAL NOT NULL,
    "itemId" BIGINT NOT NULL,
    "currency" TEXT NOT NULL,
    "countryId" BIGINT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "available" INTEGER NOT NULL DEFAULT 0,
    "allocated" INTEGER NOT NULL DEFAULT 0,
    "reserved" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryAllocation" (
    "id" BIGSERIAL NOT NULL,
    "orderItemId" BIGINT NOT NULL,
    "transportRequestId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InventoryAllocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Member" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" BIGSERIAL NOT NULL,
    "memberId" BIGINT,
    "street" TEXT NOT NULL,
    "unit" TEXT,
    "postCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "countryId" BIGINT NOT NULL,
    "formattedAddress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransportRequest" (
    "id" BIGSERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "sender" JSONB NOT NULL,
    "receiver" JSONB NOT NULL,
    "parcels" JSONB[],
    "attributes" JSONB,
    "deliveryDay" TIMESTAMP(3) NOT NULL,
    "release" BOOLEAN DEFAULT true,
    "deliveryRequirements" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransportRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransportOrder" (
    "id" BIGSERIAL NOT NULL,
    "trasnportRequestId" BIGINT NOT NULL,
    "trackingCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransportOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Delivery" (
    "id" BIGSERIAL NOT NULL,
    "transportOrderId" BIGINT NOT NULL,
    "deliveryId" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "trackingId" TEXT NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "returnCode" TEXT NOT NULL,
    "attributes" JSONB NOT NULL,
    "latestDeliveryDate" TIMESTAMP(3) NOT NULL,
    "earliestDeliveryDate" TIMESTAMP(3) NOT NULL,
    "label" TEXT NOT NULL,
    "senderTrackingUrl" TEXT NOT NULL,
    "receiverTrackingUrl" TEXT NOT NULL,
    "status" JSONB NOT NULL,
    "statusHistory" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" BIGSERIAL NOT NULL,
    "reference" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "currency" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "legalName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postCode" TEXT NOT NULL,
    "countryId" BIGINT NOT NULL,
    "vat" TEXT,
    "orgNumber" TEXT,
    "website" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "partnerId" BIGINT NOT NULL,
    "baseUrl" TEXT NOT NULL,
    "token" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" BIGSERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "currencyId" BIGINT,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Currency" (
    "id" BIGSERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" BIGSERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_organizationId_key" ON "Account"("organizationId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_storefrontId_key" ON "Account"("storefrontId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_password_key" ON "User"("email", "password");

-- CreateIndex
CREATE UNIQUE INDEX "AuthToken_token_key" ON "AuthToken"("token");

-- CreateIndex
CREATE INDEX "AuthToken_expiresAt_idx" ON "AuthToken"("expiresAt");

-- CreateIndex
CREATE INDEX "AuthToken_isValid_idx" ON "AuthToken"("isValid");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_url_key" ON "Organization"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_email_key" ON "Organization"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_phone_key" ON "Organization"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_vatID_key" ON "Organization"("vatID");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_taxID_key" ON "Organization"("taxID");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_duns_key" ON "Organization"("duns");

-- CreateIndex
CREATE UNIQUE INDEX "Storefront_domain_key" ON "Storefront"("domain");

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontProductSegment_storefrontId_productSegmentId_key" ON "StorefrontProductSegment"("storefrontId", "productSegmentId");

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontLocale_domain_key" ON "StorefrontLocale"("domain");

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontLocale_storefrontId_localeId_key" ON "StorefrontLocale"("storefrontId", "localeId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentAccount_storefrontId_accountId_paymentProvider_payme_key" ON "PaymentAccount"("storefrontId", "accountId", "paymentProvider", "paymentProviderAccountId");

-- CreateIndex
CREATE INDEX "ProductSegment_parentId_idx" ON "ProductSegment"("parentId");

-- CreateIndex
CREATE INDEX "ProductSegment_path_idx" ON "ProductSegment" USING HASH ("path");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyGroup_key_key" ON "PropertyGroup"("key");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyGroupProperty_propertyGroupId_propertyId_key" ON "PropertyGroupProperty"("propertyGroupId", "propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "Property_key_key" ON "Property"("key");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyTranslation_propertyId_localeId_key" ON "PropertyTranslation"("propertyId", "localeId");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyOptionTranslation_propertyOptionId_localeId_key" ON "PropertyOptionTranslation"("propertyOptionId", "localeId");

-- CreateIndex
CREATE UNIQUE INDEX "SegmentProperty_propertyId_productSegmentId_key" ON "SegmentProperty"("propertyId", "productSegmentId");

-- CreateIndex
CREATE INDEX "Product_brandId_storefrontId_idx" ON "Product"("brandId", "storefrontId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_reference_storefrontId_key" ON "Product"("reference", "storefrontId");

-- CreateIndex
CREATE INDEX "Media_mediaType_idx" ON "Media"("mediaType");

-- CreateIndex
CREATE UNIQUE INDEX "Media_url_accountId_key" ON "Media"("url", "accountId");

-- CreateIndex
CREATE UNIQUE INDEX "VariantConfig_key_key" ON "VariantConfig"("key");

-- CreateIndex
CREATE UNIQUE INDEX "VariantProperty_key_key" ON "VariantProperty"("key");

-- CreateIndex
CREATE UNIQUE INDEX "VariantConfigField_variantConfigId_variantPropertyId_key" ON "VariantConfigField"("variantConfigId", "variantPropertyId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariantProperty_productVariantId_variantConfigFieldI_key" ON "ProductVariantProperty"("productVariantId", "variantConfigFieldId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_productId_sku_key" ON "ProductVariant"("productId", "sku");

-- CreateIndex
CREATE INDEX "Offer_productVariantId_currencyId_idx" ON "Offer"("productVariantId", "currencyId");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_url_key" ON "Brand"("url");

-- CreateIndex
CREATE UNIQUE INDEX "StoreBrand_storefrontId_brandId_key" ON "StoreBrand"("storefrontId", "brandId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductProperty_productId_propertyId_key" ON "ProductProperty"("productId", "propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductPropertyOption_productPropertyId_propertyOptionId_key" ON "ProductPropertyOption"("productPropertyId", "propertyOptionId");

-- CreateIndex
CREATE INDEX "StoreCategory_productSegmentId_idx" ON "StoreCategory"("productSegmentId");

-- CreateIndex
CREATE INDEX "StoreCategory_storefrontId_idx" ON "StoreCategory"("storefrontId");

-- CreateIndex
CREATE INDEX "StoreCategory_parentId_idx" ON "StoreCategory"("parentId");

-- CreateIndex
CREATE INDEX "StoreCategory_name_idx" ON "StoreCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Field_key_storefrontId_key" ON "Field"("key", "storefrontId");

-- CreateIndex
CREATE UNIQUE INDEX "StandardField_key_key" ON "StandardField"("key");

-- CreateIndex
CREATE UNIQUE INDEX "Seller_domain_key" ON "Seller"("domain");

-- CreateIndex
CREATE UNIQUE INDEX "Seller_key_key" ON "Seller"("key");

-- CreateIndex
CREATE UNIQUE INDEX "DiscountRule_sellerId_localeId_key" ON "DiscountRule"("sellerId", "localeId");

-- CreateIndex
CREATE INDEX "CategoryDiscountRule_discountRuleId_categoryId_idx" ON "CategoryDiscountRule"("discountRuleId", "categoryId");

-- CreateIndex
CREATE INDEX "ProductFeed_sellerId_localeId_idx" ON "ProductFeed"("sellerId", "localeId");

-- CreateIndex
CREATE INDEX "Category_sellerId_localeId_idx" ON "Category"("sellerId", "localeId");

-- CreateIndex
CREATE INDEX "ItemGroup_brandId_sku_gender_ageGroup_sizeType_idx" ON "ItemGroup"("brandId", "sku", "gender", "ageGroup", "sizeType");

-- CreateIndex
CREATE UNIQUE INDEX "ItemGroup_brandId_sku_key" ON "ItemGroup"("brandId", "sku");

-- CreateIndex
CREATE UNIQUE INDEX "Item_itemGroupId_sku_key" ON "Item"("itemGroupId", "sku");

-- CreateIndex
CREATE UNIQUE INDEX "ItemSize_itemId_sizeOptionId_localeId_key" ON "ItemSize"("itemId", "sizeOptionId", "localeId");

-- CreateIndex
CREATE UNIQUE INDEX "SizeOption_sizeSystem_sizeType_size_key" ON "SizeOption"("sizeSystem", "sizeType", "size");

-- CreateIndex
CREATE UNIQUE INDEX "ItemDescription_itemGroupId_localeId_key" ON "ItemDescription"("itemGroupId", "localeId");

-- CreateIndex
CREATE UNIQUE INDEX "OfferNotification_email_sku_sellerId_localeId_key" ON "OfferNotification"("email", "sku", "sellerId", "localeId");

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Address_formattedAddress_key" ON "Address"("formattedAddress");

-- CreateIndex
CREATE UNIQUE INDEX "TransportOrder_trasnportRequestId_key" ON "TransportOrder"("trasnportRequestId");

-- CreateIndex
CREATE UNIQUE INDEX "Country_code_key" ON "Country"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Currency_code_key" ON "Currency"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Language_code_key" ON "Language"("code");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_preferredLocalId_fkey" FOREIGN KEY ("preferredLocalId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthToken" ADD CONSTRAINT "AuthToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Storefront" ADD CONSTRAINT "Storefront_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontProductSegment" ADD CONSTRAINT "StorefrontProductSegment_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontProductSegment" ADD CONSTRAINT "StorefrontProductSegment_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontMarketSegment" ADD CONSTRAINT "StorefrontMarketSegment_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontRegion" ADD CONSTRAINT "StorefrontRegion_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontRegion" ADD CONSTRAINT "StorefrontRegion_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontLocale" ADD CONSTRAINT "StorefrontLocale_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontLocale" ADD CONSTRAINT "StorefrontLocale_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontLocale" ADD CONSTRAINT "StorefrontLocale_paymentAccountId_fkey" FOREIGN KEY ("paymentAccountId") REFERENCES "PaymentAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentAccount" ADD CONSTRAINT "PaymentAccount_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentAccount" ADD CONSTRAINT "PaymentAccount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentAccount" ADD CONSTRAINT "PaymentAccount_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSegment" ADD CONSTRAINT "ProductSegment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSegment" ADD CONSTRAINT "ProductSegment_standardTemplateId_fkey" FOREIGN KEY ("standardTemplateId") REFERENCES "StandardTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSegment" ADD CONSTRAINT "ProductSegment_propertyGroupId_fkey" FOREIGN KEY ("propertyGroupId") REFERENCES "PropertyGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyGroupProperty" ADD CONSTRAINT "PropertyGroupProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyGroupProperty" ADD CONSTRAINT "PropertyGroupProperty_propertyGroupId_fkey" FOREIGN KEY ("propertyGroupId") REFERENCES "PropertyGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyOption" ADD CONSTRAINT "PropertyOption_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyTranslation" ADD CONSTRAINT "PropertyTranslation_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyTranslation" ADD CONSTRAINT "PropertyTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyOptionTranslation" ADD CONSTRAINT "PropertyOptionTranslation_propertyOptionId_fkey" FOREIGN KEY ("propertyOptionId") REFERENCES "PropertyOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyOptionTranslation" ADD CONSTRAINT "PropertyOptionTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SegmentProperty" ADD CONSTRAINT "SegmentProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SegmentProperty" ADD CONSTRAINT "SegmentProperty_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_storeCategoryId_fkey" FOREIGN KEY ("storeCategoryId") REFERENCES "StoreCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_variantConfigId_fkey" FOREIGN KEY ("variantConfigId") REFERENCES "VariantConfig"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductMedia" ADD CONSTRAINT "ProductMedia_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductMedia" ADD CONSTRAINT "ProductMedia_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantConfigField" ADD CONSTRAINT "VariantConfigField_variantConfigId_fkey" FOREIGN KEY ("variantConfigId") REFERENCES "VariantConfig"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantConfigField" ADD CONSTRAINT "VariantConfigField_variantPropertyId_fkey" FOREIGN KEY ("variantPropertyId") REFERENCES "VariantProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantProperty" ADD CONSTRAINT "ProductVariantProperty_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantProperty" ADD CONSTRAINT "ProductVariantProperty_variantConfigFieldId_fkey" FOREIGN KEY ("variantConfigFieldId") REFERENCES "VariantConfigField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreBrand" ADD CONSTRAINT "StoreBrand_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreBrand" ADD CONSTRAINT "StoreBrand_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductProperty" ADD CONSTRAINT "ProductProperty_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductProperty" ADD CONSTRAINT "ProductProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPropertyOption" ADD CONSTRAINT "ProductPropertyOption_productPropertyId_fkey" FOREIGN KEY ("productPropertyId") REFERENCES "ProductProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPropertyOption" ADD CONSTRAINT "ProductPropertyOption_propertyOptionId_fkey" FOREIGN KEY ("propertyOptionId") REFERENCES "PropertyOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCategory" ADD CONSTRAINT "StoreCategory_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCategory" ADD CONSTRAINT "StoreCategory_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCategory" ADD CONSTRAINT "StoreCategory_storefrontProductSegmentId_fkey" FOREIGN KEY ("storefrontProductSegmentId") REFERENCES "StorefrontProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCategory" ADD CONSTRAINT "StoreCategory_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "StoreCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_standardFieldId_fkey" FOREIGN KEY ("standardFieldId") REFERENCES "StandardField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateField" ADD CONSTRAINT "TemplateField_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateField" ADD CONSTRAINT "TemplateField_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardTemplate" ADD CONSTRAINT "StandardTemplate_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "StandardTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardTemplateField" ADD CONSTRAINT "StandardTemplateField_standardTemplateId_fkey" FOREIGN KEY ("standardTemplateId") REFERENCES "StandardTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardTemplateField" ADD CONSTRAINT "StandardTemplateField_standardFieldId_fkey" FOREIGN KEY ("standardFieldId") REFERENCES "StandardField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageConfig" ADD CONSTRAINT "PageConfig_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageConfig" ADD CONSTRAINT "PageConfig_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellerCredentials" ADD CONSTRAINT "SellerCredentials_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscountRule" ADD CONSTRAINT "DiscountRule_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscountRule" ADD CONSTRAINT "DiscountRule_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryDiscountRule" ADD CONSTRAINT "CategoryDiscountRule_discountRuleId_fkey" FOREIGN KEY ("discountRuleId") REFERENCES "DiscountRule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryDiscountRule" ADD CONSTRAINT "CategoryDiscountRule_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductFeed" ADD CONSTRAINT "ProductFeed_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductFeed" ADD CONSTRAINT "ProductFeed_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locale" ADD CONSTRAINT "Locale_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locale" ADD CONSTRAINT "Locale_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemGroup" ADD CONSTRAINT "ItemGroup_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemGroup" ADD CONSTRAINT "ItemGroup_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_itemGroupId_fkey" FOREIGN KEY ("itemGroupId") REFERENCES "ItemGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemSize" ADD CONSTRAINT "ItemSize_sizeOptionId_fkey" FOREIGN KEY ("sizeOptionId") REFERENCES "SizeOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemSize" ADD CONSTRAINT "ItemSize_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemSize" ADD CONSTRAINT "ItemSize_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemDescription" ADD CONSTRAINT "ItemDescription_itemGroupId_fkey" FOREIGN KEY ("itemGroupId") REFERENCES "ItemGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemDescription" ADD CONSTRAINT "ItemDescription_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemDescription" ADD CONSTRAINT "ItemDescription_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferNotification" ADD CONSTRAINT "OfferNotification_itemGroupId_fkey" FOREIGN KEY ("itemGroupId") REFERENCES "ItemGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferNotification" ADD CONSTRAINT "OfferNotification_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferNotification" ADD CONSTRAINT "OfferNotification_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryAllocation" ADD CONSTRAINT "InventoryAllocation_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryAllocation" ADD CONSTRAINT "InventoryAllocation_transportRequestId_fkey" FOREIGN KEY ("transportRequestId") REFERENCES "TransportRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransportOrder" ADD CONSTRAINT "TransportOrder_trasnportRequestId_fkey" FOREIGN KEY ("trasnportRequestId") REFERENCES "TransportRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_transportOrderId_fkey" FOREIGN KEY ("transportOrderId") REFERENCES "TransportOrder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partner" ADD CONSTRAINT "Partner_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;
