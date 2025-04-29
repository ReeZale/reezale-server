-- CreateEnum
CREATE TYPE "PublishStatus" AS ENUM ('DRAFT', 'ACTIVE', 'SCHEDULED');

-- CreateEnum
CREATE TYPE "SocialPlatform" AS ENUM ('FACEBOOK', 'INSTAGRAM', 'TWITTER', 'LINKEDIN', 'PINTEREST', 'YOUTUBE', 'TIKTOK', 'SNAPCHAT');

-- CreateEnum
CREATE TYPE "PageType" AS ENUM ('STATIC', 'PRODUCT', 'COLLECTION', 'BLOG', 'BLOG_LIST', 'SEARCH', 'LANDING', 'CART', 'CHECKOUT', 'ACCOUNT', 'ORDER_HISTORY', 'CUSTOM');

-- CreateEnum
CREATE TYPE "PageFieldType" AS ENUM ('SHORT_TEXT', 'LONG_TEXT', 'RICH_TEXT', 'SLUG', 'NUMBER', 'BOOLEAN', 'DATE', 'DATETIME', 'URL', 'EMAIL', 'PHONE', 'PRICE', 'IMAGE', 'FILE', 'COLOR', 'VIDEO_URL', 'SELECT', 'MULTISELECT', 'LIST', 'OBJECT', 'REFERENCE');

-- CreateEnum
CREATE TYPE "PaymentProvider" AS ENUM ('stripe', 'ayden', 'mollie', 'checkout');

-- CreateEnum
CREATE TYPE "PaymentAccountType" AS ENUM ('managed', 'custom');

-- CreateEnum
CREATE TYPE "PaymentFrequency" AS ENUM ('daily', 'weekly', 'monthly');

-- CreateEnum
CREATE TYPE "ProductMediaType" AS ENUM ('PRIMARY', 'PRODUCT', 'GALLERY', 'OTHER');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('IMAGE', 'VIDEO', 'AUDIO', 'DOCUMENT', 'OTHER');

-- CreateEnum
CREATE TYPE "MediaSource" AS ENUM ('UPLOADED', 'EXTERNAL');

-- CreateEnum
CREATE TYPE "MediaBucket" AS ENUM ('PRODUCTS', 'CAMPAIGNS', 'BANNER', 'LOGO', 'CATEGORIES', 'COLLECTIONS', 'PROFILE', 'DOCUMENTS');

-- CreateEnum
CREATE TYPE "CollectionType" AS ENUM ('GENDER', 'AGEGROUP', 'SEASON', 'OCCASION', 'HOLIDAY', 'MATERIAL', 'STYLE', 'BRAND', 'TREND', 'COLOR', 'FUNCTION', 'FEATURE', 'ROOM', 'DEVICE', 'CATEGORY');

-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('NEW', 'USED', 'REFURBISHED', 'RETURN');

-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('GROUP', 'SEGMENT');

-- CreateEnum
CREATE TYPE "InventoryLocationType" AS ENUM ('STORE', 'WAREHOUSE', 'LOCKER', 'VIRTUAL');

-- CreateEnum
CREATE TYPE "Weekday" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateEnum
CREATE TYPE "InventoryFunctionType" AS ENUM ('FULFILLMENT', 'RECEIVING', 'RETURNS', 'DROPOFF', 'STORAGE');

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
CREATE TABLE "StorefrontIdentity" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "externalUrl" TEXT,
    "slug" TEXT NOT NULL,
    "canonicalLink" TEXT NOT NULL,
    "facebookLink" TEXT,
    "instagramLink" TEXT,
    "twitterLink" TEXT,
    "linkedin" TEXT,
    "youtubeLink" TEXT,
    "tiktokLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "iconId" BIGINT NOT NULL,
    "imageId" BIGINT NOT NULL,

    CONSTRAINT "StorefrontIdentity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontContact" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "formattedAddress" TEXT,
    "placeId" TEXT,
    "isDefault" BOOLEAN NOT NULL DEFAULT true,
    "accountId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "countryId" BIGINT NOT NULL,
    "endTime" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lon" DOUBLE PRECISION NOT NULL,
    "name" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "weekdays" "Weekday"[],

    CONSTRAINT "StorefrontContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontLocale" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "ogTitle" TEXT,
    "ogDescription" TEXT,
    "paymentAccountId" BIGINT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accountId" BIGINT,
    "isDefault" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "StorefrontLocale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontCountry" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "countryId" BIGINT NOT NULL,
    "storefrontContactId" TEXT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorefrontCountry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontCurrency" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "currencyId" BIGINT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorefrontCurrency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontTheme" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "publishStatus" "PublishStatus" NOT NULL DEFAULT 'DRAFT',
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
    "accountId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorefrontTheme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontBranding" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "brandName" TEXT,
    "description" TEXT,
    "slogan" TEXT,
    "logoUrl" TEXT,
    "imageUrl" TEXT,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "facebookLink" TEXT,
    "instagramLink" TEXT,
    "linkedin" TEXT,
    "pinterestLink" TEXT,
    "snapchatLink" TEXT,
    "tiktokLink" TEXT,
    "twitterLink" TEXT,
    "youtubeLink" TEXT,

    CONSTRAINT "StorefrontBranding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontConfiguration" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Default Storefront Configuration',
    "storefrontId" BIGINT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "mainImageId" BIGINT NOT NULL,
    "mainImageBrightness" INTEGER NOT NULL DEFAULT 70,
    "collectionPreviewBrightness" INTEGER NOT NULL DEFAULT 80,
    "hasPromotedCollection" BOOLEAN NOT NULL DEFAULT false,
    "promotedStoreCollectionTitle" TEXT,
    "storeCollectionId" BIGINT,
    "about" TEXT NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StorefrontConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontNavigation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Default Storefront Navigation',
    "storefrontConfigurationId" TEXT NOT NULL,
    "storeCollectionId" BIGINT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "parentId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "level" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StorefrontNavigation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontPage" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "pageId" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "publishStatus" "PublishStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StorefrontPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "pageType" "PageType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageTranslation" (
    "id" TEXT NOT NULL,
    "pageId" TEXT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "slug" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "index" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaticField" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "pageFieldType" "PageFieldType" NOT NULL,
    "dataSource" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StaticField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaticFieldTranslation" (
    "id" TEXT NOT NULL,
    "staticFieldId" TEXT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StaticFieldTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DynamicField" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "pageFieldType" "PageFieldType" NOT NULL,
    "databaseObjectFieldId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DynamicField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DynamicFieldTranslation" (
    "id" TEXT NOT NULL,
    "dynamicFieldId" TEXT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DynamicFieldTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaticPageField" (
    "id" TEXT NOT NULL,
    "pageId" TEXT NOT NULL,
    "staticFieldId" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StaticPageField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DynamicPageField" (
    "id" TEXT NOT NULL,
    "pageId" TEXT NOT NULL,
    "dynamicFieldId" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DynamicPageField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorefrontProductSegment" (
    "id" BIGINT NOT NULL,
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
CREATE TABLE "ProductSegmentTranslation" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "productSegmentId" BIGINT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductSegmentTranslation_pkey" PRIMARY KEY ("id")
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
    "order" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mediaType" "ProductMediaType" NOT NULL,
    "alt" TEXT NOT NULL,

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
    "bucket" "MediaBucket" NOT NULL DEFAULT 'PRODUCTS',

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "collectionType" "CollectionType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "parentId" TEXT,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollectionTranslation" (
    "id" BIGSERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "collectionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "slug" TEXT NOT NULL,
    "path" TEXT,

    CONSTRAINT "CollectionTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreCollection" (
    "id" BIGSERIAL NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "collectionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreCollectionProducts" (
    "id" BIGSERIAL NOT NULL,
    "productId" BIGINT NOT NULL,
    "storeCollectionId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreCollectionProducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreProperty" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "propertyId" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorePropertyOption" (
    "id" TEXT NOT NULL,
    "storePropertyId" TEXT NOT NULL,
    "propertyOptionId" BIGINT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,
    "display" BOOLEAN NOT NULL DEFAULT true,
    "labelOverride" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorePropertyOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreNavigation" (
    "id" TEXT NOT NULL,
    "storefrontId" BIGINT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL,
    "parentId" TEXT NOT NULL,
    "storeCollectionId" BIGINT NOT NULL,

    CONSTRAINT "StoreNavigation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreNavigationFilter" (
    "id" TEXT NOT NULL,
    "storeNavigationId" TEXT NOT NULL,
    "storePropertyId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StoreNavigationFilter_pkey" PRIMARY KEY ("id")
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

-- CreateTable
CREATE TABLE "Offer" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DECIMAL(10,2) NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "listPriceId" BIGINT NOT NULL,
    "validUntil" TIMESTAMP(3),

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
CREATE TABLE "StoreProductProperty" (
    "id" TEXT NOT NULL,
    "productId" BIGINT NOT NULL,
    "storePropertyId" TEXT NOT NULL,
    "values" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreProductProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreProductPropertyOption" (
    "id" TEXT NOT NULL,
    "storeProductPropertyId" TEXT NOT NULL,
    "storePropertyOptionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreProductPropertyOption_pkey" PRIMARY KEY ("id")
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
    "streetNumber" TEXT NOT NULL,

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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "currencyId" BIGINT,

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
CREATE TABLE "OfferNotification" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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

-- CreateTable
CREATE TABLE "DatabaseObject" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DatabaseObject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatabaseObjectTranslation" (
    "id" TEXT NOT NULL,
    "databaseObjectId" TEXT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DatabaseObjectTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatabaseField" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DatabaseField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatabseFieldTranslation" (
    "id" TEXT NOT NULL,
    "databaseFieldId" TEXT NOT NULL,
    "localeId" BIGINT NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DatabseFieldTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatabaseObjectField" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "databaseObjectId" TEXT NOT NULL,
    "databaseFieldId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DatabaseObjectField_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "StorefrontIdentity_storefrontId_key" ON "StorefrontIdentity"("storefrontId");

-- CreateIndex
CREATE INDEX "StorefrontContact_accountId_idx" ON "StorefrontContact"("accountId");

-- CreateIndex
CREATE INDEX "StorefrontLocale_accountId_idx" ON "StorefrontLocale"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontLocale_storefrontId_localeId_key" ON "StorefrontLocale"("storefrontId", "localeId");

-- CreateIndex
CREATE INDEX "StorefrontCountry_accountId_idx" ON "StorefrontCountry"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontCountry_storefrontId_countryId_key" ON "StorefrontCountry"("storefrontId", "countryId");

-- CreateIndex
CREATE INDEX "StorefrontCurrency_accountId_idx" ON "StorefrontCurrency"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontCurrency_storefrontId_currencyId_key" ON "StorefrontCurrency"("storefrontId", "currencyId");

-- CreateIndex
CREATE INDEX "StorefrontTheme_storefrontId_isActive_idx" ON "StorefrontTheme"("storefrontId", "isActive");

-- CreateIndex
CREATE INDEX "StorefrontTheme_accountId_idx" ON "StorefrontTheme"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontTheme_storefrontId_name_key" ON "StorefrontTheme"("storefrontId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontBranding_storefrontId_key" ON "StorefrontBranding"("storefrontId");

-- CreateIndex
CREATE INDEX "StorefrontConfiguration_accountId_storefrontId_id_idx" ON "StorefrontConfiguration"("accountId", "storefrontId", "id");

-- CreateIndex
CREATE INDEX "StorefrontNavigation_id_storefrontId_accountId_idx" ON "StorefrontNavigation"("id", "storefrontId", "accountId");

-- CreateIndex
CREATE INDEX "StorefrontNavigation_parentId_idx" ON "StorefrontNavigation"("parentId");

-- CreateIndex
CREATE UNIQUE INDEX "Page_key_key" ON "Page"("key");

-- CreateIndex
CREATE UNIQUE INDEX "PageTranslation_pageId_localeId_key" ON "PageTranslation"("pageId", "localeId");

-- CreateIndex
CREATE UNIQUE INDEX "StaticField_key_key" ON "StaticField"("key");

-- CreateIndex
CREATE UNIQUE INDEX "StaticFieldTranslation_staticFieldId_localeId_key" ON "StaticFieldTranslation"("staticFieldId", "localeId");

-- CreateIndex
CREATE UNIQUE INDEX "DynamicField_key_key" ON "DynamicField"("key");

-- CreateIndex
CREATE UNIQUE INDEX "DynamicFieldTranslation_dynamicFieldId_localeId_key" ON "DynamicFieldTranslation"("dynamicFieldId", "localeId");

-- CreateIndex
CREATE UNIQUE INDEX "StaticPageField_pageId_staticFieldId_key" ON "StaticPageField"("pageId", "staticFieldId");

-- CreateIndex
CREATE UNIQUE INDEX "StorefrontProductSegment_storefrontId_productSegmentId_key" ON "StorefrontProductSegment"("storefrontId", "productSegmentId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentAccount_storefrontId_accountId_paymentProvider_payme_key" ON "PaymentAccount"("storefrontId", "accountId", "paymentProvider", "paymentProviderAccountId");

-- CreateIndex
CREATE INDEX "ProductSegment_parentId_idx" ON "ProductSegment"("parentId");

-- CreateIndex
CREATE INDEX "ProductSegment_path_idx" ON "ProductSegment" USING HASH ("path");

-- CreateIndex
CREATE INDEX "ProductSegmentTranslation_path_idx" ON "ProductSegmentTranslation"("path");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSegmentTranslation_productSegmentId_localeId_key" ON "ProductSegmentTranslation"("productSegmentId", "localeId");

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
CREATE UNIQUE INDEX "ProductMedia_productId_mediaId_key" ON "ProductMedia"("productId", "mediaId");

-- CreateIndex
CREATE INDEX "Media_mediaType_idx" ON "Media"("mediaType");

-- CreateIndex
CREATE UNIQUE INDEX "Media_url_accountId_key" ON "Media"("url", "accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_key_key" ON "Collection"("key");

-- CreateIndex
CREATE UNIQUE INDEX "CollectionTranslation_localeId_collectionId_key" ON "CollectionTranslation"("localeId", "collectionId");

-- CreateIndex
CREATE UNIQUE INDEX "StoreCollection_storefrontId_collectionId_key" ON "StoreCollection"("storefrontId", "collectionId");

-- CreateIndex
CREATE UNIQUE INDEX "StoreCollectionProducts_productId_storeCollectionId_key" ON "StoreCollectionProducts"("productId", "storeCollectionId");

-- CreateIndex
CREATE UNIQUE INDEX "StoreProperty_storefrontId_propertyId_key" ON "StoreProperty"("storefrontId", "propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "StorePropertyOption_storePropertyId_propertyOptionId_key" ON "StorePropertyOption"("storePropertyId", "propertyOptionId");

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
CREATE UNIQUE INDEX "ListPrice_productVariantId_countryId_currencyId_condition_key" ON "ListPrice"("productVariantId", "countryId", "currencyId", "condition");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_url_key" ON "Brand"("url");

-- CreateIndex
CREATE UNIQUE INDEX "StoreBrand_storefrontId_brandId_key" ON "StoreBrand"("storefrontId", "brandId");

-- CreateIndex
CREATE UNIQUE INDEX "StoreProductProperty_productId_storePropertyId_key" ON "StoreProductProperty"("productId", "storePropertyId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductProperty_productId_propertyId_key" ON "ProductProperty"("productId", "propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductPropertyOption_productPropertyId_propertyOptionId_key" ON "ProductPropertyOption"("productPropertyId", "propertyOptionId");

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
CREATE UNIQUE INDEX "Locale_code_key" ON "Locale"("code");

-- CreateIndex
CREATE INDEX "Category_sellerId_localeId_idx" ON "Category"("sellerId", "localeId");

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

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseObject_key_key" ON "DatabaseObject"("key");

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseObjectTranslation_databaseObjectId_localeId_key" ON "DatabaseObjectTranslation"("databaseObjectId", "localeId");

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseField_key_key" ON "DatabaseField"("key");

-- CreateIndex
CREATE UNIQUE INDEX "DatabseFieldTranslation_databaseFieldId_localeId_key" ON "DatabseFieldTranslation"("databaseFieldId", "localeId");

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseObjectField_key_key" ON "DatabaseObjectField"("key");

-- CreateIndex
CREATE UNIQUE INDEX "DatabaseObjectField_databaseObjectId_databaseFieldId_key" ON "DatabaseObjectField"("databaseObjectId", "databaseFieldId");

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
ALTER TABLE "StorefrontIdentity" ADD CONSTRAINT "StorefrontIdentity_iconId_fkey" FOREIGN KEY ("iconId") REFERENCES "Media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontIdentity" ADD CONSTRAINT "StorefrontIdentity_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontIdentity" ADD CONSTRAINT "StorefrontIdentity_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontContact" ADD CONSTRAINT "StorefrontContact_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontContact" ADD CONSTRAINT "StorefrontContact_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontContact" ADD CONSTRAINT "StorefrontContact_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontLocale" ADD CONSTRAINT "StorefrontLocale_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontLocale" ADD CONSTRAINT "StorefrontLocale_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontLocale" ADD CONSTRAINT "StorefrontLocale_paymentAccountId_fkey" FOREIGN KEY ("paymentAccountId") REFERENCES "PaymentAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontLocale" ADD CONSTRAINT "StorefrontLocale_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontCountry" ADD CONSTRAINT "StorefrontCountry_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontCountry" ADD CONSTRAINT "StorefrontCountry_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontCountry" ADD CONSTRAINT "StorefrontCountry_storefrontContactId_fkey" FOREIGN KEY ("storefrontContactId") REFERENCES "StorefrontContact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontCountry" ADD CONSTRAINT "StorefrontCountry_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontCurrency" ADD CONSTRAINT "StorefrontCurrency_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontCurrency" ADD CONSTRAINT "StorefrontCurrency_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontCurrency" ADD CONSTRAINT "StorefrontCurrency_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontTheme" ADD CONSTRAINT "StorefrontTheme_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontTheme" ADD CONSTRAINT "StorefrontTheme_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontBranding" ADD CONSTRAINT "StorefrontBranding_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontBranding" ADD CONSTRAINT "StorefrontBranding_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontConfiguration" ADD CONSTRAINT "StorefrontConfiguration_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontConfiguration" ADD CONSTRAINT "StorefrontConfiguration_mainImageId_fkey" FOREIGN KEY ("mainImageId") REFERENCES "Media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontConfiguration" ADD CONSTRAINT "StorefrontConfiguration_storeCollectionId_fkey" FOREIGN KEY ("storeCollectionId") REFERENCES "StoreCollection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontConfiguration" ADD CONSTRAINT "StorefrontConfiguration_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontNavigation" ADD CONSTRAINT "StorefrontNavigation_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontNavigation" ADD CONSTRAINT "StorefrontNavigation_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "StorefrontNavigation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontNavigation" ADD CONSTRAINT "StorefrontNavigation_storeCollectionId_fkey" FOREIGN KEY ("storeCollectionId") REFERENCES "StoreCollection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontNavigation" ADD CONSTRAINT "StorefrontNavigation_storefrontConfigurationId_fkey" FOREIGN KEY ("storefrontConfigurationId") REFERENCES "StorefrontConfiguration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontNavigation" ADD CONSTRAINT "StorefrontNavigation_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontPage" ADD CONSTRAINT "StorefrontPage_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontPage" ADD CONSTRAINT "StorefrontPage_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontPage" ADD CONSTRAINT "StorefrontPage_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageTranslation" ADD CONSTRAINT "PageTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageTranslation" ADD CONSTRAINT "PageTranslation_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaticFieldTranslation" ADD CONSTRAINT "StaticFieldTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaticFieldTranslation" ADD CONSTRAINT "StaticFieldTranslation_staticFieldId_fkey" FOREIGN KEY ("staticFieldId") REFERENCES "StaticField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DynamicField" ADD CONSTRAINT "DynamicField_databaseObjectFieldId_fkey" FOREIGN KEY ("databaseObjectFieldId") REFERENCES "DatabaseObjectField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DynamicFieldTranslation" ADD CONSTRAINT "DynamicFieldTranslation_dynamicFieldId_fkey" FOREIGN KEY ("dynamicFieldId") REFERENCES "DynamicField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DynamicFieldTranslation" ADD CONSTRAINT "DynamicFieldTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaticPageField" ADD CONSTRAINT "StaticPageField_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaticPageField" ADD CONSTRAINT "StaticPageField_staticFieldId_fkey" FOREIGN KEY ("staticFieldId") REFERENCES "StaticField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DynamicPageField" ADD CONSTRAINT "DynamicPageField_dynamicFieldId_fkey" FOREIGN KEY ("dynamicFieldId") REFERENCES "DynamicField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DynamicPageField" ADD CONSTRAINT "DynamicPageField_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontProductSegment" ADD CONSTRAINT "StorefrontProductSegment_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontProductSegment" ADD CONSTRAINT "StorefrontProductSegment_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontMarketSegment" ADD CONSTRAINT "StorefrontMarketSegment_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontRegion" ADD CONSTRAINT "StorefrontRegion_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorefrontRegion" ADD CONSTRAINT "StorefrontRegion_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentAccount" ADD CONSTRAINT "PaymentAccount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentAccount" ADD CONSTRAINT "PaymentAccount_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentAccount" ADD CONSTRAINT "PaymentAccount_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSegment" ADD CONSTRAINT "ProductSegment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSegment" ADD CONSTRAINT "ProductSegment_propertyGroupId_fkey" FOREIGN KEY ("propertyGroupId") REFERENCES "PropertyGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSegment" ADD CONSTRAINT "ProductSegment_standardTemplateId_fkey" FOREIGN KEY ("standardTemplateId") REFERENCES "StandardTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSegmentTranslation" ADD CONSTRAINT "ProductSegmentTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSegmentTranslation" ADD CONSTRAINT "ProductSegmentTranslation_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyGroupProperty" ADD CONSTRAINT "PropertyGroupProperty_propertyGroupId_fkey" FOREIGN KEY ("propertyGroupId") REFERENCES "PropertyGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyGroupProperty" ADD CONSTRAINT "PropertyGroupProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyOption" ADD CONSTRAINT "PropertyOption_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyTranslation" ADD CONSTRAINT "PropertyTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyTranslation" ADD CONSTRAINT "PropertyTranslation_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyOptionTranslation" ADD CONSTRAINT "PropertyOptionTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyOptionTranslation" ADD CONSTRAINT "PropertyOptionTranslation_propertyOptionId_fkey" FOREIGN KEY ("propertyOptionId") REFERENCES "PropertyOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SegmentProperty" ADD CONSTRAINT "SegmentProperty_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SegmentProperty" ADD CONSTRAINT "SegmentProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_variantConfigId_fkey" FOREIGN KEY ("variantConfigId") REFERENCES "VariantConfig"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductMedia" ADD CONSTRAINT "ProductMedia_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductMedia" ADD CONSTRAINT "ProductMedia_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionTranslation" ADD CONSTRAINT "CollectionTranslation_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionTranslation" ADD CONSTRAINT "CollectionTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCollection" ADD CONSTRAINT "StoreCollection_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCollection" ADD CONSTRAINT "StoreCollection_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCollectionProducts" ADD CONSTRAINT "StoreCollectionProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCollectionProducts" ADD CONSTRAINT "StoreCollectionProducts_storeCollectionId_fkey" FOREIGN KEY ("storeCollectionId") REFERENCES "StoreCollection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreProperty" ADD CONSTRAINT "StoreProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreProperty" ADD CONSTRAINT "StoreProperty_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorePropertyOption" ADD CONSTRAINT "StorePropertyOption_propertyOptionId_fkey" FOREIGN KEY ("propertyOptionId") REFERENCES "PropertyOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorePropertyOption" ADD CONSTRAINT "StorePropertyOption_storePropertyId_fkey" FOREIGN KEY ("storePropertyId") REFERENCES "StoreProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreNavigation" ADD CONSTRAINT "StoreNavigation_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "StoreNavigation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreNavigation" ADD CONSTRAINT "StoreNavigation_storeCollectionId_fkey" FOREIGN KEY ("storeCollectionId") REFERENCES "StoreCollection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreNavigation" ADD CONSTRAINT "StoreNavigation_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreNavigationFilter" ADD CONSTRAINT "StoreNavigationFilter_storeNavigationId_fkey" FOREIGN KEY ("storeNavigationId") REFERENCES "StoreNavigation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreNavigationFilter" ADD CONSTRAINT "StoreNavigationFilter_storePropertyId_fkey" FOREIGN KEY ("storePropertyId") REFERENCES "StoreProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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
ALTER TABLE "ListPrice" ADD CONSTRAINT "ListPrice_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListPrice" ADD CONSTRAINT "ListPrice_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListPrice" ADD CONSTRAINT "ListPrice_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_listPriceId_fkey" FOREIGN KEY ("listPriceId") REFERENCES "ListPrice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreBrand" ADD CONSTRAINT "StoreBrand_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreBrand" ADD CONSTRAINT "StoreBrand_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreProductProperty" ADD CONSTRAINT "StoreProductProperty_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreProductProperty" ADD CONSTRAINT "StoreProductProperty_storePropertyId_fkey" FOREIGN KEY ("storePropertyId") REFERENCES "StoreProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreProductPropertyOption" ADD CONSTRAINT "StoreProductPropertyOption_storeProductPropertyId_fkey" FOREIGN KEY ("storeProductPropertyId") REFERENCES "StoreProductProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreProductPropertyOption" ADD CONSTRAINT "StoreProductPropertyOption_storePropertyOptionId_fkey" FOREIGN KEY ("storePropertyOptionId") REFERENCES "StorePropertyOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductProperty" ADD CONSTRAINT "ProductProperty_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductProperty" ADD CONSTRAINT "ProductProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPropertyOption" ADD CONSTRAINT "ProductPropertyOption_productPropertyId_fkey" FOREIGN KEY ("productPropertyId") REFERENCES "ProductProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPropertyOption" ADD CONSTRAINT "ProductPropertyOption_propertyOptionId_fkey" FOREIGN KEY ("propertyOptionId") REFERENCES "PropertyOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationZone" ADD CONSTRAINT "LocationZone_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationZone" ADD CONSTRAINT "LocationZone_timeZoneId_fkey" FOREIGN KEY ("timeZoneId") REFERENCES "TimeZone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryLocation" ADD CONSTRAINT "InventoryLocation_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryLocation" ADD CONSTRAINT "InventoryLocation_locationZoneId_fkey" FOREIGN KEY ("locationZoneId") REFERENCES "LocationZone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryLocationFunction" ADD CONSTRAINT "InventoryLocationFunction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryLocationFunction" ADD CONSTRAINT "InventoryLocationFunction_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "InventoryLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryLocationFunctionHours" ADD CONSTRAINT "InventoryLocationFunctionHours_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryLocationFunctionHours" ADD CONSTRAINT "InventoryLocationFunctionHours_inventoryLocationFunctionId_fkey" FOREIGN KEY ("inventoryLocationFunctionId") REFERENCES "InventoryLocationFunction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCategory" ADD CONSTRAINT "StoreCategory_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "StoreCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCategory" ADD CONSTRAINT "StoreCategory_productSegmentId_fkey" FOREIGN KEY ("productSegmentId") REFERENCES "ProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCategory" ADD CONSTRAINT "StoreCategory_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreCategory" ADD CONSTRAINT "StoreCategory_storefrontProductSegmentId_fkey" FOREIGN KEY ("storefrontProductSegmentId") REFERENCES "StorefrontProductSegment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_standardFieldId_fkey" FOREIGN KEY ("standardFieldId") REFERENCES "StandardField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_storefrontId_fkey" FOREIGN KEY ("storefrontId") REFERENCES "Storefront"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateField" ADD CONSTRAINT "TemplateField_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateField" ADD CONSTRAINT "TemplateField_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardTemplate" ADD CONSTRAINT "StandardTemplate_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "StandardTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardTemplateField" ADD CONSTRAINT "StandardTemplateField_standardFieldId_fkey" FOREIGN KEY ("standardFieldId") REFERENCES "StandardField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandardTemplateField" ADD CONSTRAINT "StandardTemplateField_standardTemplateId_fkey" FOREIGN KEY ("standardTemplateId") REFERENCES "StandardTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageConfig" ADD CONSTRAINT "PageConfig_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageConfig" ADD CONSTRAINT "PageConfig_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellerCredentials" ADD CONSTRAINT "SellerCredentials_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscountRule" ADD CONSTRAINT "DiscountRule_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscountRule" ADD CONSTRAINT "DiscountRule_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryDiscountRule" ADD CONSTRAINT "CategoryDiscountRule_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryDiscountRule" ADD CONSTRAINT "CategoryDiscountRule_discountRuleId_fkey" FOREIGN KEY ("discountRuleId") REFERENCES "DiscountRule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductFeed" ADD CONSTRAINT "ProductFeed_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductFeed" ADD CONSTRAINT "ProductFeed_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locale" ADD CONSTRAINT "Locale_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locale" ADD CONSTRAINT "Locale_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locale" ADD CONSTRAINT "Locale_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferNotification" ADD CONSTRAINT "OfferNotification_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfferNotification" ADD CONSTRAINT "OfferNotification_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryAllocation" ADD CONSTRAINT "InventoryAllocation_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryAllocation" ADD CONSTRAINT "InventoryAllocation_transportRequestId_fkey" FOREIGN KEY ("transportRequestId") REFERENCES "TransportRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "DatabaseObjectTranslation" ADD CONSTRAINT "DatabaseObjectTranslation_databaseObjectId_fkey" FOREIGN KEY ("databaseObjectId") REFERENCES "DatabaseObject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatabaseObjectTranslation" ADD CONSTRAINT "DatabaseObjectTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatabseFieldTranslation" ADD CONSTRAINT "DatabseFieldTranslation_databaseFieldId_fkey" FOREIGN KEY ("databaseFieldId") REFERENCES "DatabaseField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatabseFieldTranslation" ADD CONSTRAINT "DatabseFieldTranslation_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatabaseObjectField" ADD CONSTRAINT "DatabaseObjectField_databaseFieldId_fkey" FOREIGN KEY ("databaseFieldId") REFERENCES "DatabaseField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DatabaseObjectField" ADD CONSTRAINT "DatabaseObjectField_databaseObjectId_fkey" FOREIGN KEY ("databaseObjectId") REFERENCES "DatabaseObject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
