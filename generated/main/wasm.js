
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.3.1
 * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
 */
Prisma.prismaVersion = {
  client: "6.3.1",
  engine: "acc0b9dd43eb689cbd20c9470515d719db10d0b0"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  name: 'name',
  organizationId: 'organizationId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  storefrontId: 'storefrontId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  accountId: 'accountId',
  preferredLocalId: 'preferredLocalId',
  archive: 'archive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AuthTokenScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  token: 'token',
  expiresAt: 'expiresAt',
  isValid: 'isValid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrganizationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  url: 'url',
  logo: 'logo',
  email: 'email',
  phone: 'phone',
  address: 'address',
  vatID: 'vatID',
  taxID: 'taxID',
  legalName: 'legalName',
  duns: 'duns',
  linkedin: 'linkedin',
  twitter: 'twitter',
  facebook: 'facebook',
  instagram: 'instagram',
  tiktok: 'tiktok',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StorefrontScalarFieldEnum = {
  id: 'id',
  name: 'name',
  logo: 'logo',
  bannerImage: 'bannerImage',
  domain: 'domain',
  refundPolicy: 'refundPolicy',
  termsOfService: 'termsOfService',
  privacyPolicy: 'privacyPolicy',
  facebook: 'facebook',
  twitter: 'twitter',
  instagram: 'instagram',
  linkedin: 'linkedin',
  tiktok: 'tiktok',
  primaryColor: 'primaryColor',
  secondaryColor: 'secondaryColor',
  backgroundColor: 'backgroundColor',
  textColor: 'textColor',
  buttonColor: 'buttonColor',
  buttonTextColor: 'buttonTextColor',
  fontFamily: 'fontFamily',
  borderRadius: 'borderRadius',
  countryId: 'countryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StorefrontIdentityScalarFieldEnum = {
  id: 'id',
  storefrontId: 'storefrontId',
  externalUrl: 'externalUrl',
  slug: 'slug',
  canonicalLink: 'canonicalLink',
  iconId: 'iconId',
  imageId: 'imageId',
  facebookLink: 'facebookLink',
  instagramLink: 'instagramLink',
  twitterLink: 'twitterLink',
  linkedin: 'linkedin',
  youtubeLink: 'youtubeLink',
  tiktokLink: 'tiktokLink',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StorefrontContactScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  telephone: 'telephone',
  formattedAddress: 'formattedAddress',
  lat: 'lat',
  lon: 'lon',
  weekdays: 'weekdays',
  startTime: 'startTime',
  endTime: 'endTime',
  placeId: 'placeId',
  countryId: 'countryId',
  isDefault: 'isDefault',
  storefrontId: 'storefrontId',
  accountId: 'accountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StorefrontLocaleScalarFieldEnum = {
  id: 'id',
  storefrontId: 'storefrontId',
  localeId: 'localeId',
  metaTitle: 'metaTitle',
  metaDescription: 'metaDescription',
  ogTitle: 'ogTitle',
  ogDescription: 'ogDescription',
  paymentAccountId: 'paymentAccountId',
  accountId: 'accountId',
  isDefault: 'isDefault',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StorefrontCountryScalarFieldEnum = {
  id: 'id',
  storefrontId: 'storefrontId',
  countryId: 'countryId',
  storefrontContactId: 'storefrontContactId',
  accountId: 'accountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StorefrontCurrencyScalarFieldEnum = {
  id: 'id',
  storefrontId: 'storefrontId',
  currencyId: 'currencyId',
  accountId: 'accountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StorefrontThemeScalarFieldEnum = {
  id: 'id',
  storefrontId: 'storefrontId',
  name: 'name',
  description: 'description',
  publishStatus: 'publishStatus',
  isActive: 'isActive',
  effectiveAt: 'effectiveAt',
  colorPrimary: 'colorPrimary',
  colorSecondary: 'colorSecondary',
  colorBackground: 'colorBackground',
  colorSurface: 'colorSurface',
  colorTextPrimary: 'colorTextPrimary',
  colorTextSecondary: 'colorTextSecondary',
  colorLink: 'colorLink',
  colorError: 'colorError',
  fontFamily: 'fontFamily',
  fontSizeBase: 'fontSizeBase',
  fontSizeScale: 'fontSizeScale',
  borderRadius: 'borderRadius',
  spacingUnit: 'spacingUnit',
  accountId: 'accountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StorefrontBrandingScalarFieldEnum = {
  id: 'id',
  storefrontId: 'storefrontId',
  accountId: 'accountId',
  brandName: 'brandName',
  description: 'description',
  slogan: 'slogan',
  logoUrl: 'logoUrl',
  imageUrl: 'imageUrl',
  url: 'url',
  facebookLink: 'facebookLink',
  instagramLink: 'instagramLink',
  twitterLink: 'twitterLink',
  linkedin: 'linkedin',
  pinterestLink: 'pinterestLink',
  youtubeLink: 'youtubeLink',
  tiktokLink: 'tiktokLink',
  snapchatLink: 'snapchatLink',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StorefrontConfigurationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  storefrontId: 'storefrontId',
  accountId: 'accountId',
  mainImageId: 'mainImageId',
  mainImageBrightness: 'mainImageBrightness',
  collectionPreviewBrightness: 'collectionPreviewBrightness',
  hasPromotedCollection: 'hasPromotedCollection',
  promotedStoreCollectionTitle: 'promotedStoreCollectionTitle',
  storeCollectionId: 'storeCollectionId',
  about: 'about',
  isPublished: 'isPublished',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StorefrontNavigationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  storefrontConfigurationId: 'storefrontConfigurationId',
  storeCollectionId: 'storeCollectionId',
  storefrontId: 'storefrontId',
  accountId: 'accountId',
  parentId: 'parentId',
  isActive: 'isActive',
  level: 'level',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StorefrontPageScalarFieldEnum = {
  id: 'id',
  key: 'key',
  storefrontId: 'storefrontId',
  accountId: 'accountId',
  pageId: 'pageId',
  content: 'content',
  isPublished: 'isPublished',
  publishStatus: 'publishStatus',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PageScalarFieldEnum = {
  id: 'id',
  key: 'key',
  pageType: 'pageType',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PageTranslationScalarFieldEnum = {
  id: 'id',
  pageId: 'pageId',
  localeId: 'localeId',
  slug: 'slug',
  label: 'label',
  description: 'description',
  index: 'index',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StaticFieldScalarFieldEnum = {
  id: 'id',
  key: 'key',
  pageFieldType: 'pageFieldType',
  dataSource: 'dataSource',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StaticFieldTranslationScalarFieldEnum = {
  id: 'id',
  staticFieldId: 'staticFieldId',
  localeId: 'localeId',
  label: 'label',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DynamicFieldScalarFieldEnum = {
  id: 'id',
  key: 'key',
  pageFieldType: 'pageFieldType',
  databaseObjectFieldId: 'databaseObjectFieldId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DynamicFieldTranslationScalarFieldEnum = {
  id: 'id',
  dynamicFieldId: 'dynamicFieldId',
  localeId: 'localeId',
  label: 'label',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StaticPageFieldScalarFieldEnum = {
  id: 'id',
  pageId: 'pageId',
  staticFieldId: 'staticFieldId',
  required: 'required',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DynamicPageFieldScalarFieldEnum = {
  id: 'id',
  pageId: 'pageId',
  dynamicFieldId: 'dynamicFieldId',
  required: 'required',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StorefrontProductSegmentScalarFieldEnum = {
  id: 'id',
  storefrontId: 'storefrontId',
  productSegmentId: 'productSegmentId',
  primary: 'primary',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StorefrontMarketSegmentScalarFieldEnum = {
  id: 'id',
  gender: 'gender',
  ageGroup: 'ageGroup',
  primary: 'primary',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  storefrontId: 'storefrontId'
};

exports.Prisma.StorefrontRegionScalarFieldEnum = {
  id: 'id',
  storefrontId: 'storefrontId',
  localeId: 'localeId',
  primary: 'primary',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaymentAccountScalarFieldEnum = {
  id: 'id',
  storefrontId: 'storefrontId',
  accountId: 'accountId',
  type: 'type',
  paymentProvider: 'paymentProvider',
  paymentProviderAccountId: 'paymentProviderAccountId',
  currencyId: 'currencyId',
  paymentFrequency: 'paymentFrequency',
  primary: 'primary',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductSegmentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  path: 'path',
  gcc: 'gcc',
  acc: 'acc',
  scc: 'scc',
  ecc: 'ecc',
  translation: 'translation',
  parentId: 'parentId',
  imageUrl: 'imageUrl',
  standardTemplateId: 'standardTemplateId',
  propertyGroupId: 'propertyGroupId',
  active: 'active',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductSegmentTranslationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  path: 'path',
  productSegmentId: 'productSegmentId',
  localeId: 'localeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PropertyGroupScalarFieldEnum = {
  id: 'id',
  key: 'key',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PropertyGroupPropertyScalarFieldEnum = {
  id: 'id',
  propertyId: 'propertyId',
  propertyGroupId: 'propertyGroupId',
  required: 'required'
};

exports.Prisma.PropertyScalarFieldEnum = {
  id: 'id',
  key: 'key',
  label: 'label',
  translations: 'translations',
  options: 'options',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PropertyOptionScalarFieldEnum = {
  id: 'id',
  key: 'key',
  propertyId: 'propertyId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PropertyTranslationScalarFieldEnum = {
  id: 'id',
  key: 'key',
  propertyId: 'propertyId',
  localeId: 'localeId',
  label: 'label',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PropertyOptionTranslationScalarFieldEnum = {
  id: 'id',
  key: 'key',
  propertyOptionId: 'propertyOptionId',
  localeId: 'localeId',
  label: 'label',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SegmentPropertyScalarFieldEnum = {
  id: 'id',
  propertyId: 'propertyId',
  productSegmentId: 'productSegmentId',
  required: 'required',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  reference: 'reference',
  name: 'name',
  description: 'description',
  thumbnailImage: 'thumbnailImage',
  productImage: 'productImage',
  images: 'images',
  gender: 'gender',
  ageGroup: 'ageGroup',
  brandId: 'brandId',
  productSegmentId: 'productSegmentId',
  storefrontId: 'storefrontId',
  url: 'url',
  hasProperties: 'hasProperties',
  hasVariants: 'hasVariants',
  variantConfigId: 'variantConfigId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductMediaScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  mediaId: 'mediaId',
  mediaType: 'mediaType',
  order: 'order',
  alt: 'alt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MediaScalarFieldEnum = {
  id: 'id',
  url: 'url',
  fileName: 'fileName',
  fileSize: 'fileSize',
  width: 'width',
  height: 'height',
  duration: 'duration',
  mimeType: 'mimeType',
  alt: 'alt',
  mediaType: 'mediaType',
  source: 'source',
  bucket: 'bucket',
  accountId: 'accountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CollectionScalarFieldEnum = {
  id: 'id',
  key: 'key',
  collectionType: 'collectionType',
  parentId: 'parentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CollectionTranslationScalarFieldEnum = {
  id: 'id',
  label: 'label',
  path: 'path',
  slug: 'slug',
  localeId: 'localeId',
  collectionId: 'collectionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StoreCollectionScalarFieldEnum = {
  id: 'id',
  storefrontId: 'storefrontId',
  collectionId: 'collectionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StoreCollectionProductsScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  storeCollectionId: 'storeCollectionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StorePropertyScalarFieldEnum = {
  id: 'id',
  storefrontId: 'storefrontId',
  propertyId: 'propertyId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StorePropertyOptionScalarFieldEnum = {
  id: 'id',
  storePropertyId: 'storePropertyId',
  propertyOptionId: 'propertyOptionId',
  position: 'position',
  display: 'display',
  labelOverride: 'labelOverride',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StoreNavigationScalarFieldEnum = {
  id: 'id',
  storefrontId: 'storefrontId',
  storeCollectionId: 'storeCollectionId',
  isPrimary: 'isPrimary',
  parentId: 'parentId',
  order: 'order',
  slug: 'slug',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StoreNavigationFilterScalarFieldEnum = {
  id: 'id',
  storeNavigationId: 'storeNavigationId',
  storePropertyId: 'storePropertyId',
  order: 'order',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VariantConfigScalarFieldEnum = {
  id: 'id',
  key: 'key',
  translations: 'translations',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VariantPropertyScalarFieldEnum = {
  id: 'id',
  key: 'key',
  translations: 'translations',
  options: 'options',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VariantConfigFieldScalarFieldEnum = {
  id: 'id',
  key: 'key',
  variantConfigId: 'variantConfigId',
  variantPropertyId: 'variantPropertyId',
  order: 'order',
  isRequired: 'isRequired',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductVariantPropertyScalarFieldEnum = {
  id: 'id',
  productVariantId: 'productVariantId',
  variantConfigFieldId: 'variantConfigFieldId',
  value: 'value',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductVariantScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  sku: 'sku',
  gtin: 'gtin',
  mpn: 'mpn',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ListPriceScalarFieldEnum = {
  id: 'id',
  productVariantId: 'productVariantId',
  condition: 'condition',
  currencyId: 'currencyId',
  countryId: 'countryId',
  amount: 'amount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OfferScalarFieldEnum = {
  id: 'id',
  listPriceId: 'listPriceId',
  amount: 'amount',
  available: 'available',
  validUntil: 'validUntil',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BrandScalarFieldEnum = {
  id: 'id',
  name: 'name',
  logo: 'logo',
  url: 'url',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StoreBrandScalarFieldEnum = {
  id: 'id',
  storefrontId: 'storefrontId',
  brandId: 'brandId',
  isOwner: 'isOwner',
  isDefault: 'isDefault',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StoreProductPropertyScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  storePropertyId: 'storePropertyId',
  values: 'values',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StoreProductPropertyOptionScalarFieldEnum = {
  id: 'id',
  storeProductPropertyId: 'storeProductPropertyId',
  storePropertyOptionId: 'storePropertyOptionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductPropertyScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  propertyId: 'propertyId',
  type: 'type',
  values: 'values',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductPropertyOptionScalarFieldEnum = {
  id: 'id',
  productPropertyId: 'productPropertyId',
  propertyOptionId: 'propertyOptionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TimeZoneScalarFieldEnum = {
  id: 'id',
  label: 'label',
  offset: 'offset',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LocationZoneScalarFieldEnum = {
  id: 'id',
  key: 'key',
  countryId: 'countryId',
  postalCode: 'postalCode',
  displayPostalCode: 'displayPostalCode',
  placeName: 'placeName',
  adminName1: 'adminName1',
  adminCode1: 'adminCode1',
  adminName2: 'adminName2',
  adminCode2: 'adminCode2',
  latitude: 'latitude',
  longitude: 'longitude',
  viewportNortheastLat: 'viewportNortheastLat',
  viewportNortheastLng: 'viewportNortheastLng',
  viewportSouthwestLat: 'viewportSouthwestLat',
  viewportSouthwestLng: 'viewportSouthwestLng',
  timeZoneId: 'timeZoneId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InventoryLocationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  displayAddress: 'displayAddress',
  unit: 'unit',
  streetNumber: 'streetNumber',
  street: 'street',
  city: 'city',
  locationType: 'locationType',
  locationZoneId: 'locationZoneId',
  latitude: 'latitude',
  longitude: 'longitude',
  priority: 'priority',
  capacity: 'capacity',
  contactEmail: 'contactEmail',
  contactPhone: 'contactPhone',
  accountId: 'accountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InventoryLocationFunctionScalarFieldEnum = {
  id: 'id',
  key: 'key',
  name: 'name',
  locationId: 'locationId',
  function: 'function',
  contactEmail: 'contactEmail',
  contactPhone: 'contactPhone',
  accountId: 'accountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InventoryLocationFunctionHoursScalarFieldEnum = {
  id: 'id',
  inventoryLocationFunctionId: 'inventoryLocationFunctionId',
  day: 'day',
  startTime: 'startTime',
  endTime: 'endTime',
  accountId: 'accountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StoreCategoryScalarFieldEnum = {
  id: 'id',
  externalId: 'externalId',
  key: 'key',
  name: 'name',
  description: 'description',
  path: 'path',
  productSegmentId: 'productSegmentId',
  storefrontId: 'storefrontId',
  storefrontProductSegmentId: 'storefrontProductSegmentId',
  parentId: 'parentId',
  custom: 'custom',
  archive: 'archive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  translations: 'translations'
};

exports.Prisma.TemplateScalarFieldEnum = {
  id: 'id',
  key: 'key',
  name: 'name',
  description: 'description',
  storefrontId: 'storefrontId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FieldScalarFieldEnum = {
  id: 'id',
  key: 'key',
  name: 'name',
  description: 'description',
  translations: 'translations',
  options: 'options',
  index: 'index',
  type: 'type',
  format: 'format',
  storefrontId: 'storefrontId',
  standardFieldId: 'standardFieldId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TemplateFieldScalarFieldEnum = {
  id: 'id',
  templateId: 'templateId',
  fieldId: 'fieldId',
  required: 'required',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StandardFieldScalarFieldEnum = {
  id: 'id',
  key: 'key',
  name: 'name',
  description: 'description',
  translations: 'translations',
  index: 'index',
  type: 'type',
  format: 'format',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StandardTemplateScalarFieldEnum = {
  id: 'id',
  key: 'key',
  name: 'name',
  description: 'description',
  parentId: 'parentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StandardTemplateFieldScalarFieldEnum = {
  id: 'id',
  order: 'order',
  options: 'options',
  required: 'required',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  standardTemplateId: 'standardTemplateId',
  standardFieldId: 'standardFieldId'
};

exports.Prisma.SellerScalarFieldEnum = {
  id: 'id',
  domain: 'domain',
  name: 'name',
  key: 'key',
  logo: 'logo',
  accountId: 'accountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PageConfigScalarFieldEnum = {
  id: 'id',
  tagline: 'tagline',
  localeId: 'localeId',
  sellerId: 'sellerId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SellerCredentialsScalarFieldEnum = {
  id: 'id',
  key: 'key',
  secret: 'secret',
  token: 'token',
  sellerId: 'sellerId',
  expirationDate: 'expirationDate',
  isValid: 'isValid',
  createdAt: 'createdAt',
  updateAt: 'updateAt'
};

exports.Prisma.DiscountRuleScalarFieldEnum = {
  id: 'id',
  amount: 'amount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  sellerId: 'sellerId',
  localeId: 'localeId'
};

exports.Prisma.CategoryDiscountRuleScalarFieldEnum = {
  id: 'id',
  discountRuleId: 'discountRuleId',
  amount: 'amount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  categoryId: 'categoryId'
};

exports.Prisma.ProductFeedScalarFieldEnum = {
  id: 'id',
  link: 'link',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  sellerId: 'sellerId',
  localeId: 'localeId'
};

exports.Prisma.LocaleScalarFieldEnum = {
  id: 'id',
  code: 'code',
  label: 'label',
  countryId: 'countryId',
  languageId: 'languageId',
  currencyId: 'currencyId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  path: 'path',
  relativePath: 'relativePath',
  breadCrumbs: 'breadCrumbs',
  parentId: 'parentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  sellerId: 'sellerId',
  localeId: 'localeId'
};

exports.Prisma.OfferNotificationScalarFieldEnum = {
  id: 'id',
  email: 'email',
  sku: 'sku',
  localeId: 'localeId',
  notified: 'notified',
  notificationDate: 'notificationDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  sellerId: 'sellerId'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  reference: 'reference',
  memberId: 'memberId',
  shipToAddress: 'shipToAddress',
  countryId: 'countryId',
  currency: 'currency',
  subTotal: 'subTotal',
  taxAmount: 'taxAmount',
  shipping: 'shipping',
  total: 'total',
  paymentId: 'paymentId',
  paymentStatus: 'paymentStatus',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  inventoryId: 'inventoryId',
  quantity: 'quantity',
  currency: 'currency',
  price: 'price',
  subTotal: 'subTotal',
  taxRate: 'taxRate',
  taxAmount: 'taxAmount',
  shipping: 'shipping',
  total: 'total',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InventoryScalarFieldEnum = {
  id: 'id',
  currency: 'currency',
  countryId: 'countryId',
  price: 'price',
  available: 'available',
  allocated: 'allocated',
  reserved: 'reserved',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InventoryAllocationScalarFieldEnum = {
  id: 'id',
  orderItemId: 'orderItemId',
  transportRequestId: 'transportRequestId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MemberScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  verified: 'verified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  memberId: 'memberId',
  street: 'street',
  unit: 'unit',
  postCode: 'postCode',
  city: 'city',
  countryId: 'countryId',
  formattedAddress: 'formattedAddress',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TransportRequestScalarFieldEnum = {
  id: 'id',
  type: 'type',
  method: 'method',
  sender: 'sender',
  receiver: 'receiver',
  parcels: 'parcels',
  attributes: 'attributes',
  deliveryDay: 'deliveryDay',
  release: 'release',
  deliveryRequirements: 'deliveryRequirements',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TransportOrderScalarFieldEnum = {
  id: 'id',
  trasnportRequestId: 'trasnportRequestId',
  trackingCode: 'trackingCode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DeliveryScalarFieldEnum = {
  id: 'id',
  transportOrderId: 'transportOrderId',
  deliveryId: 'deliveryId',
  method: 'method',
  trackingId: 'trackingId',
  deliveryDate: 'deliveryDate',
  returnCode: 'returnCode',
  attributes: 'attributes',
  latestDeliveryDate: 'latestDeliveryDate',
  earliestDeliveryDate: 'earliestDeliveryDate',
  label: 'label',
  senderTrackingUrl: 'senderTrackingUrl',
  receiverTrackingUrl: 'receiverTrackingUrl',
  status: 'status',
  statusHistory: 'statusHistory',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  reference: 'reference',
  method: 'method',
  amount: 'amount',
  currency: 'currency',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PartnerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  legalName: 'legalName',
  address: 'address',
  city: 'city',
  postCode: 'postCode',
  countryId: 'countryId',
  vat: 'vat',
  orgNumber: 'orgNumber',
  website: 'website',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ServiceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  partnerId: 'partnerId',
  baseUrl: 'baseUrl',
  token: 'token',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CountryScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  currencyId: 'currencyId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CurrencyScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LanguageScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DatabaseObjectScalarFieldEnum = {
  id: 'id',
  key: 'key',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DatabaseObjectTranslationScalarFieldEnum = {
  id: 'id',
  databaseObjectId: 'databaseObjectId',
  localeId: 'localeId',
  label: 'label',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DatabaseFieldScalarFieldEnum = {
  id: 'id',
  key: 'key',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DatabseFieldTranslationScalarFieldEnum = {
  id: 'id',
  databaseFieldId: 'databaseFieldId',
  localeId: 'localeId',
  label: 'label',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DatabaseObjectFieldScalarFieldEnum = {
  id: 'id',
  key: 'key',
  databaseObjectId: 'databaseObjectId',
  databaseFieldId: 'databaseFieldId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Weekday = exports.$Enums.Weekday = {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

exports.PublishStatus = exports.$Enums.PublishStatus = {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  SCHEDULED: 'SCHEDULED'
};

exports.PageType = exports.$Enums.PageType = {
  STATIC: 'STATIC',
  PRODUCT: 'PRODUCT',
  COLLECTION: 'COLLECTION',
  BLOG: 'BLOG',
  BLOG_LIST: 'BLOG_LIST',
  SEARCH: 'SEARCH',
  LANDING: 'LANDING',
  CART: 'CART',
  CHECKOUT: 'CHECKOUT',
  ACCOUNT: 'ACCOUNT',
  ORDER_HISTORY: 'ORDER_HISTORY',
  CUSTOM: 'CUSTOM'
};

exports.PageFieldType = exports.$Enums.PageFieldType = {
  SHORT_TEXT: 'SHORT_TEXT',
  LONG_TEXT: 'LONG_TEXT',
  RICH_TEXT: 'RICH_TEXT',
  SLUG: 'SLUG',
  NUMBER: 'NUMBER',
  BOOLEAN: 'BOOLEAN',
  DATE: 'DATE',
  DATETIME: 'DATETIME',
  URL: 'URL',
  EMAIL: 'EMAIL',
  PHONE: 'PHONE',
  PRICE: 'PRICE',
  IMAGE: 'IMAGE',
  FILE: 'FILE',
  COLOR: 'COLOR',
  VIDEO_URL: 'VIDEO_URL',
  SELECT: 'SELECT',
  MULTISELECT: 'MULTISELECT',
  LIST: 'LIST',
  OBJECT: 'OBJECT',
  REFERENCE: 'REFERENCE'
};

exports.Gender = exports.$Enums.Gender = {
  male: 'male',
  female: 'female',
  unisex: 'unisex'
};

exports.AgeGroup = exports.$Enums.AgeGroup = {
  adult: 'adult',
  teen: 'teen',
  kids: 'kids',
  infant: 'infant',
  toddler: 'toddler'
};

exports.PaymentAccountType = exports.$Enums.PaymentAccountType = {
  managed: 'managed',
  custom: 'custom'
};

exports.PaymentProvider = exports.$Enums.PaymentProvider = {
  stripe: 'stripe',
  ayden: 'ayden',
  mollie: 'mollie',
  checkout: 'checkout'
};

exports.PaymentFrequency = exports.$Enums.PaymentFrequency = {
  daily: 'daily',
  weekly: 'weekly',
  monthly: 'monthly'
};

exports.ProductMediaType = exports.$Enums.ProductMediaType = {
  PRIMARY: 'PRIMARY',
  PRODUCT: 'PRODUCT',
  GALLERY: 'GALLERY',
  OTHER: 'OTHER'
};

exports.MediaType = exports.$Enums.MediaType = {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO',
  DOCUMENT: 'DOCUMENT',
  OTHER: 'OTHER'
};

exports.MediaSource = exports.$Enums.MediaSource = {
  UPLOADED: 'UPLOADED',
  EXTERNAL: 'EXTERNAL'
};

exports.MediaBucket = exports.$Enums.MediaBucket = {
  PRODUCTS: 'PRODUCTS',
  CAMPAIGNS: 'CAMPAIGNS',
  BANNER: 'BANNER',
  LOGO: 'LOGO',
  CATEGORIES: 'CATEGORIES',
  COLLECTIONS: 'COLLECTIONS',
  PROFILE: 'PROFILE',
  DOCUMENTS: 'DOCUMENTS'
};

exports.CollectionType = exports.$Enums.CollectionType = {
  GENDER: 'GENDER',
  AGEGROUP: 'AGEGROUP',
  SEASON: 'SEASON',
  OCCASION: 'OCCASION',
  HOLIDAY: 'HOLIDAY',
  MATERIAL: 'MATERIAL',
  STYLE: 'STYLE',
  BRAND: 'BRAND',
  TREND: 'TREND',
  COLOR: 'COLOR',
  FUNCTION: 'FUNCTION',
  FEATURE: 'FEATURE',
  ROOM: 'ROOM',
  DEVICE: 'DEVICE',
  CATEGORY: 'CATEGORY'
};

exports.Condition = exports.$Enums.Condition = {
  NEW: 'NEW',
  USED: 'USED',
  REFURBISHED: 'REFURBISHED',
  RETURN: 'RETURN'
};

exports.PropertyType = exports.$Enums.PropertyType = {
  GROUP: 'GROUP',
  SEGMENT: 'SEGMENT'
};

exports.InventoryLocationType = exports.$Enums.InventoryLocationType = {
  STORE: 'STORE',
  WAREHOUSE: 'WAREHOUSE',
  LOCKER: 'LOCKER',
  VIRTUAL: 'VIRTUAL'
};

exports.InventoryFunctionType = exports.$Enums.InventoryFunctionType = {
  FULFILLMENT: 'FULFILLMENT',
  RECEIVING: 'RECEIVING',
  RETURNS: 'RETURNS',
  DROPOFF: 'DROPOFF',
  STORAGE: 'STORAGE'
};

exports.FieldType = exports.$Enums.FieldType = {
  property: 'property',
  variant: 'variant',
  other: 'other'
};

exports.FieldFormat = exports.$Enums.FieldFormat = {
  text: 'text',
  longText: 'longText',
  list: 'list',
  link: 'link',
  date: 'date',
  image: 'image',
  color: 'color'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  pending: 'pending',
  failed: 'failed',
  complete: 'complete'
};

exports.Prisma.ModelName = {
  Account: 'Account',
  User: 'User',
  AuthToken: 'AuthToken',
  Organization: 'Organization',
  Storefront: 'Storefront',
  StorefrontIdentity: 'StorefrontIdentity',
  StorefrontContact: 'StorefrontContact',
  StorefrontLocale: 'StorefrontLocale',
  StorefrontCountry: 'StorefrontCountry',
  StorefrontCurrency: 'StorefrontCurrency',
  StorefrontTheme: 'StorefrontTheme',
  StorefrontBranding: 'StorefrontBranding',
  StorefrontConfiguration: 'StorefrontConfiguration',
  StorefrontNavigation: 'StorefrontNavigation',
  StorefrontPage: 'StorefrontPage',
  Page: 'Page',
  PageTranslation: 'PageTranslation',
  StaticField: 'StaticField',
  StaticFieldTranslation: 'StaticFieldTranslation',
  DynamicField: 'DynamicField',
  DynamicFieldTranslation: 'DynamicFieldTranslation',
  StaticPageField: 'StaticPageField',
  DynamicPageField: 'DynamicPageField',
  StorefrontProductSegment: 'StorefrontProductSegment',
  StorefrontMarketSegment: 'StorefrontMarketSegment',
  StorefrontRegion: 'StorefrontRegion',
  PaymentAccount: 'PaymentAccount',
  ProductSegment: 'ProductSegment',
  ProductSegmentTranslation: 'ProductSegmentTranslation',
  PropertyGroup: 'PropertyGroup',
  PropertyGroupProperty: 'PropertyGroupProperty',
  Property: 'Property',
  PropertyOption: 'PropertyOption',
  PropertyTranslation: 'PropertyTranslation',
  PropertyOptionTranslation: 'PropertyOptionTranslation',
  SegmentProperty: 'SegmentProperty',
  Product: 'Product',
  ProductMedia: 'ProductMedia',
  Media: 'Media',
  Collection: 'Collection',
  CollectionTranslation: 'CollectionTranslation',
  StoreCollection: 'StoreCollection',
  StoreCollectionProducts: 'StoreCollectionProducts',
  StoreProperty: 'StoreProperty',
  StorePropertyOption: 'StorePropertyOption',
  StoreNavigation: 'StoreNavigation',
  StoreNavigationFilter: 'StoreNavigationFilter',
  VariantConfig: 'VariantConfig',
  VariantProperty: 'VariantProperty',
  VariantConfigField: 'VariantConfigField',
  ProductVariantProperty: 'ProductVariantProperty',
  ProductVariant: 'ProductVariant',
  ListPrice: 'ListPrice',
  Offer: 'Offer',
  Brand: 'Brand',
  StoreBrand: 'StoreBrand',
  StoreProductProperty: 'StoreProductProperty',
  StoreProductPropertyOption: 'StoreProductPropertyOption',
  ProductProperty: 'ProductProperty',
  ProductPropertyOption: 'ProductPropertyOption',
  TimeZone: 'TimeZone',
  LocationZone: 'LocationZone',
  InventoryLocation: 'InventoryLocation',
  InventoryLocationFunction: 'InventoryLocationFunction',
  InventoryLocationFunctionHours: 'InventoryLocationFunctionHours',
  StoreCategory: 'StoreCategory',
  Template: 'Template',
  Field: 'Field',
  TemplateField: 'TemplateField',
  StandardField: 'StandardField',
  StandardTemplate: 'StandardTemplate',
  StandardTemplateField: 'StandardTemplateField',
  Seller: 'Seller',
  PageConfig: 'PageConfig',
  SellerCredentials: 'SellerCredentials',
  DiscountRule: 'DiscountRule',
  CategoryDiscountRule: 'CategoryDiscountRule',
  ProductFeed: 'ProductFeed',
  Locale: 'Locale',
  Category: 'Category',
  OfferNotification: 'OfferNotification',
  Order: 'Order',
  OrderItem: 'OrderItem',
  Inventory: 'Inventory',
  InventoryAllocation: 'InventoryAllocation',
  Member: 'Member',
  Address: 'Address',
  TransportRequest: 'TransportRequest',
  TransportOrder: 'TransportOrder',
  Delivery: 'Delivery',
  Payment: 'Payment',
  Partner: 'Partner',
  Service: 'Service',
  Country: 'Country',
  Currency: 'Currency',
  Language: 'Language',
  DatabaseObject: 'DatabaseObject',
  DatabaseObjectTranslation: 'DatabaseObjectTranslation',
  DatabaseField: 'DatabaseField',
  DatabseFieldTranslation: 'DatabseFieldTranslation',
  DatabaseObjectField: 'DatabaseObjectField'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
