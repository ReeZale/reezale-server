
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Partner
 * 
 */
export type Partner = $Result.DefaultSelection<Prisma.$PartnerPayload>
/**
 * Model PartnerRole
 * 
 */
export type PartnerRole = $Result.DefaultSelection<Prisma.$PartnerRolePayload>
/**
 * Model PartnerRoleAssignment
 * 
 */
export type PartnerRoleAssignment = $Result.DefaultSelection<Prisma.$PartnerRoleAssignmentPayload>
/**
 * Model PartnerChannel
 * 
 */
export type PartnerChannel = $Result.DefaultSelection<Prisma.$PartnerChannelPayload>
/**
 * Model PartnerLocation
 * 
 */
export type PartnerLocation = $Result.DefaultSelection<Prisma.$PartnerLocationPayload>
/**
 * Model PartnerServiceProfile
 * 
 */
export type PartnerServiceProfile = $Result.DefaultSelection<Prisma.$PartnerServiceProfilePayload>
/**
 * Model ServiceType
 * 
 */
export type ServiceType = $Result.DefaultSelection<Prisma.$ServiceTypePayload>
/**
 * Model ProductCategory
 * 
 */
export type ProductCategory = $Result.DefaultSelection<Prisma.$ProductCategoryPayload>
/**
 * Model PartnerProductCategory
 * 
 */
export type PartnerProductCategory = $Result.DefaultSelection<Prisma.$PartnerProductCategoryPayload>
/**
 * Model ResellPlatform
 * 
 */
export type ResellPlatform = $Result.DefaultSelection<Prisma.$ResellPlatformPayload>
/**
 * Model ResellPlatformCategory
 * 
 */
export type ResellPlatformCategory = $Result.DefaultSelection<Prisma.$ResellPlatformCategoryPayload>
/**
 * Model ResellPlatformCountry
 * 
 */
export type ResellPlatformCountry = $Result.DefaultSelection<Prisma.$ResellPlatformCountryPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ChannelType: {
  ECOMMERCE: 'ECOMMERCE',
  APP: 'APP',
  KIOSK: 'KIOSK',
  OTHER: 'OTHER'
};

export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType]


export const ResellPlatformType: {
  B2C: 'B2C',
  C2C: 'C2C',
  B2B: 'B2B'
};

export type ResellPlatformType = (typeof ResellPlatformType)[keyof typeof ResellPlatformType]

}

export type ChannelType = $Enums.ChannelType

export const ChannelType: typeof $Enums.ChannelType

export type ResellPlatformType = $Enums.ResellPlatformType

export const ResellPlatformType: typeof $Enums.ResellPlatformType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Partners
 * const partners = await prisma.partner.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Partners
   * const partners = await prisma.partner.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.partner`: Exposes CRUD operations for the **Partner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partners
    * const partners = await prisma.partner.findMany()
    * ```
    */
  get partner(): Prisma.PartnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partnerRole`: Exposes CRUD operations for the **PartnerRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartnerRoles
    * const partnerRoles = await prisma.partnerRole.findMany()
    * ```
    */
  get partnerRole(): Prisma.PartnerRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partnerRoleAssignment`: Exposes CRUD operations for the **PartnerRoleAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartnerRoleAssignments
    * const partnerRoleAssignments = await prisma.partnerRoleAssignment.findMany()
    * ```
    */
  get partnerRoleAssignment(): Prisma.PartnerRoleAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partnerChannel`: Exposes CRUD operations for the **PartnerChannel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartnerChannels
    * const partnerChannels = await prisma.partnerChannel.findMany()
    * ```
    */
  get partnerChannel(): Prisma.PartnerChannelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partnerLocation`: Exposes CRUD operations for the **PartnerLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartnerLocations
    * const partnerLocations = await prisma.partnerLocation.findMany()
    * ```
    */
  get partnerLocation(): Prisma.PartnerLocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partnerServiceProfile`: Exposes CRUD operations for the **PartnerServiceProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartnerServiceProfiles
    * const partnerServiceProfiles = await prisma.partnerServiceProfile.findMany()
    * ```
    */
  get partnerServiceProfile(): Prisma.PartnerServiceProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceType`: Exposes CRUD operations for the **ServiceType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceTypes
    * const serviceTypes = await prisma.serviceType.findMany()
    * ```
    */
  get serviceType(): Prisma.ServiceTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productCategory`: Exposes CRUD operations for the **ProductCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCategories
    * const productCategories = await prisma.productCategory.findMany()
    * ```
    */
  get productCategory(): Prisma.ProductCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partnerProductCategory`: Exposes CRUD operations for the **PartnerProductCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartnerProductCategories
    * const partnerProductCategories = await prisma.partnerProductCategory.findMany()
    * ```
    */
  get partnerProductCategory(): Prisma.PartnerProductCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resellPlatform`: Exposes CRUD operations for the **ResellPlatform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResellPlatforms
    * const resellPlatforms = await prisma.resellPlatform.findMany()
    * ```
    */
  get resellPlatform(): Prisma.ResellPlatformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resellPlatformCategory`: Exposes CRUD operations for the **ResellPlatformCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResellPlatformCategories
    * const resellPlatformCategories = await prisma.resellPlatformCategory.findMany()
    * ```
    */
  get resellPlatformCategory(): Prisma.ResellPlatformCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resellPlatformCountry`: Exposes CRUD operations for the **ResellPlatformCountry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResellPlatformCountries
    * const resellPlatformCountries = await prisma.resellPlatformCountry.findMany()
    * ```
    */
  get resellPlatformCountry(): Prisma.ResellPlatformCountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Partner: 'Partner',
    PartnerRole: 'PartnerRole',
    PartnerRoleAssignment: 'PartnerRoleAssignment',
    PartnerChannel: 'PartnerChannel',
    PartnerLocation: 'PartnerLocation',
    PartnerServiceProfile: 'PartnerServiceProfile',
    ServiceType: 'ServiceType',
    ProductCategory: 'ProductCategory',
    PartnerProductCategory: 'PartnerProductCategory',
    ResellPlatform: 'ResellPlatform',
    ResellPlatformCategory: 'ResellPlatformCategory',
    ResellPlatformCountry: 'ResellPlatformCountry',
    Country: 'Country'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "partner" | "partnerRole" | "partnerRoleAssignment" | "partnerChannel" | "partnerLocation" | "partnerServiceProfile" | "serviceType" | "productCategory" | "partnerProductCategory" | "resellPlatform" | "resellPlatformCategory" | "resellPlatformCountry" | "country"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Partner: {
        payload: Prisma.$PartnerPayload<ExtArgs>
        fields: Prisma.PartnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          findFirst: {
            args: Prisma.PartnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          findMany: {
            args: Prisma.PartnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          create: {
            args: Prisma.PartnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          createMany: {
            args: Prisma.PartnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          delete: {
            args: Prisma.PartnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          update: {
            args: Prisma.PartnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          deleteMany: {
            args: Prisma.PartnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          upsert: {
            args: Prisma.PartnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          aggregate: {
            args: Prisma.PartnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartner>
          }
          groupBy: {
            args: Prisma.PartnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerCountAggregateOutputType> | number
          }
        }
      }
      PartnerRole: {
        payload: Prisma.$PartnerRolePayload<ExtArgs>
        fields: Prisma.PartnerRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRolePayload>
          }
          findFirst: {
            args: Prisma.PartnerRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRolePayload>
          }
          findMany: {
            args: Prisma.PartnerRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRolePayload>[]
          }
          create: {
            args: Prisma.PartnerRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRolePayload>
          }
          createMany: {
            args: Prisma.PartnerRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartnerRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRolePayload>[]
          }
          delete: {
            args: Prisma.PartnerRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRolePayload>
          }
          update: {
            args: Prisma.PartnerRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRolePayload>
          }
          deleteMany: {
            args: Prisma.PartnerRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartnerRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRolePayload>[]
          }
          upsert: {
            args: Prisma.PartnerRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRolePayload>
          }
          aggregate: {
            args: Prisma.PartnerRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartnerRole>
          }
          groupBy: {
            args: Prisma.PartnerRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerRoleCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerRoleCountAggregateOutputType> | number
          }
        }
      }
      PartnerRoleAssignment: {
        payload: Prisma.$PartnerRoleAssignmentPayload<ExtArgs>
        fields: Prisma.PartnerRoleAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerRoleAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRoleAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerRoleAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRoleAssignmentPayload>
          }
          findFirst: {
            args: Prisma.PartnerRoleAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRoleAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerRoleAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRoleAssignmentPayload>
          }
          findMany: {
            args: Prisma.PartnerRoleAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRoleAssignmentPayload>[]
          }
          create: {
            args: Prisma.PartnerRoleAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRoleAssignmentPayload>
          }
          createMany: {
            args: Prisma.PartnerRoleAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartnerRoleAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRoleAssignmentPayload>[]
          }
          delete: {
            args: Prisma.PartnerRoleAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRoleAssignmentPayload>
          }
          update: {
            args: Prisma.PartnerRoleAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRoleAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.PartnerRoleAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerRoleAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartnerRoleAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRoleAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.PartnerRoleAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerRoleAssignmentPayload>
          }
          aggregate: {
            args: Prisma.PartnerRoleAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartnerRoleAssignment>
          }
          groupBy: {
            args: Prisma.PartnerRoleAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerRoleAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerRoleAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerRoleAssignmentCountAggregateOutputType> | number
          }
        }
      }
      PartnerChannel: {
        payload: Prisma.$PartnerChannelPayload<ExtArgs>
        fields: Prisma.PartnerChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerChannelPayload>
          }
          findFirst: {
            args: Prisma.PartnerChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerChannelPayload>
          }
          findMany: {
            args: Prisma.PartnerChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerChannelPayload>[]
          }
          create: {
            args: Prisma.PartnerChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerChannelPayload>
          }
          createMany: {
            args: Prisma.PartnerChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartnerChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerChannelPayload>[]
          }
          delete: {
            args: Prisma.PartnerChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerChannelPayload>
          }
          update: {
            args: Prisma.PartnerChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerChannelPayload>
          }
          deleteMany: {
            args: Prisma.PartnerChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartnerChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerChannelPayload>[]
          }
          upsert: {
            args: Prisma.PartnerChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerChannelPayload>
          }
          aggregate: {
            args: Prisma.PartnerChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartnerChannel>
          }
          groupBy: {
            args: Prisma.PartnerChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerChannelCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerChannelCountAggregateOutputType> | number
          }
        }
      }
      PartnerLocation: {
        payload: Prisma.$PartnerLocationPayload<ExtArgs>
        fields: Prisma.PartnerLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerLocationPayload>
          }
          findFirst: {
            args: Prisma.PartnerLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerLocationPayload>
          }
          findMany: {
            args: Prisma.PartnerLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerLocationPayload>[]
          }
          create: {
            args: Prisma.PartnerLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerLocationPayload>
          }
          createMany: {
            args: Prisma.PartnerLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartnerLocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerLocationPayload>[]
          }
          delete: {
            args: Prisma.PartnerLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerLocationPayload>
          }
          update: {
            args: Prisma.PartnerLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerLocationPayload>
          }
          deleteMany: {
            args: Prisma.PartnerLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartnerLocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerLocationPayload>[]
          }
          upsert: {
            args: Prisma.PartnerLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerLocationPayload>
          }
          aggregate: {
            args: Prisma.PartnerLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartnerLocation>
          }
          groupBy: {
            args: Prisma.PartnerLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerLocationCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerLocationCountAggregateOutputType> | number
          }
        }
      }
      PartnerServiceProfile: {
        payload: Prisma.$PartnerServiceProfilePayload<ExtArgs>
        fields: Prisma.PartnerServiceProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerServiceProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerServiceProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerServiceProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerServiceProfilePayload>
          }
          findFirst: {
            args: Prisma.PartnerServiceProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerServiceProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerServiceProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerServiceProfilePayload>
          }
          findMany: {
            args: Prisma.PartnerServiceProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerServiceProfilePayload>[]
          }
          create: {
            args: Prisma.PartnerServiceProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerServiceProfilePayload>
          }
          createMany: {
            args: Prisma.PartnerServiceProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartnerServiceProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerServiceProfilePayload>[]
          }
          delete: {
            args: Prisma.PartnerServiceProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerServiceProfilePayload>
          }
          update: {
            args: Prisma.PartnerServiceProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerServiceProfilePayload>
          }
          deleteMany: {
            args: Prisma.PartnerServiceProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerServiceProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartnerServiceProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerServiceProfilePayload>[]
          }
          upsert: {
            args: Prisma.PartnerServiceProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerServiceProfilePayload>
          }
          aggregate: {
            args: Prisma.PartnerServiceProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartnerServiceProfile>
          }
          groupBy: {
            args: Prisma.PartnerServiceProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerServiceProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerServiceProfileCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerServiceProfileCountAggregateOutputType> | number
          }
        }
      }
      ServiceType: {
        payload: Prisma.$ServiceTypePayload<ExtArgs>
        fields: Prisma.ServiceTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          findFirst: {
            args: Prisma.ServiceTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          findMany: {
            args: Prisma.ServiceTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>[]
          }
          create: {
            args: Prisma.ServiceTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          createMany: {
            args: Prisma.ServiceTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>[]
          }
          delete: {
            args: Prisma.ServiceTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          update: {
            args: Prisma.ServiceTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          deleteMany: {
            args: Prisma.ServiceTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>[]
          }
          upsert: {
            args: Prisma.ServiceTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceTypePayload>
          }
          aggregate: {
            args: Prisma.ServiceTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceType>
          }
          groupBy: {
            args: Prisma.ServiceTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceTypeCountAggregateOutputType> | number
          }
        }
      }
      ProductCategory: {
        payload: Prisma.$ProductCategoryPayload<ExtArgs>
        fields: Prisma.ProductCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProductCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findMany: {
            args: Prisma.ProductCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          create: {
            args: Prisma.ProductCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          createMany: {
            args: Prisma.ProductCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          delete: {
            args: Prisma.ProductCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          update: {
            args: Prisma.ProductCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ProductCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProductCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductCategory>
          }
          groupBy: {
            args: Prisma.ProductCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoryCountAggregateOutputType> | number
          }
        }
      }
      PartnerProductCategory: {
        payload: Prisma.$PartnerProductCategoryPayload<ExtArgs>
        fields: Prisma.PartnerProductCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerProductCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerProductCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerProductCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerProductCategoryPayload>
          }
          findFirst: {
            args: Prisma.PartnerProductCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerProductCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerProductCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerProductCategoryPayload>
          }
          findMany: {
            args: Prisma.PartnerProductCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerProductCategoryPayload>[]
          }
          create: {
            args: Prisma.PartnerProductCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerProductCategoryPayload>
          }
          createMany: {
            args: Prisma.PartnerProductCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartnerProductCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerProductCategoryPayload>[]
          }
          delete: {
            args: Prisma.PartnerProductCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerProductCategoryPayload>
          }
          update: {
            args: Prisma.PartnerProductCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerProductCategoryPayload>
          }
          deleteMany: {
            args: Prisma.PartnerProductCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerProductCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartnerProductCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerProductCategoryPayload>[]
          }
          upsert: {
            args: Prisma.PartnerProductCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerProductCategoryPayload>
          }
          aggregate: {
            args: Prisma.PartnerProductCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartnerProductCategory>
          }
          groupBy: {
            args: Prisma.PartnerProductCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerProductCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerProductCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerProductCategoryCountAggregateOutputType> | number
          }
        }
      }
      ResellPlatform: {
        payload: Prisma.$ResellPlatformPayload<ExtArgs>
        fields: Prisma.ResellPlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResellPlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResellPlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformPayload>
          }
          findFirst: {
            args: Prisma.ResellPlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResellPlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformPayload>
          }
          findMany: {
            args: Prisma.ResellPlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformPayload>[]
          }
          create: {
            args: Prisma.ResellPlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformPayload>
          }
          createMany: {
            args: Prisma.ResellPlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResellPlatformCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformPayload>[]
          }
          delete: {
            args: Prisma.ResellPlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformPayload>
          }
          update: {
            args: Prisma.ResellPlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformPayload>
          }
          deleteMany: {
            args: Prisma.ResellPlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResellPlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResellPlatformUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformPayload>[]
          }
          upsert: {
            args: Prisma.ResellPlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformPayload>
          }
          aggregate: {
            args: Prisma.ResellPlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResellPlatform>
          }
          groupBy: {
            args: Prisma.ResellPlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResellPlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResellPlatformCountArgs<ExtArgs>
            result: $Utils.Optional<ResellPlatformCountAggregateOutputType> | number
          }
        }
      }
      ResellPlatformCategory: {
        payload: Prisma.$ResellPlatformCategoryPayload<ExtArgs>
        fields: Prisma.ResellPlatformCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResellPlatformCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResellPlatformCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCategoryPayload>
          }
          findFirst: {
            args: Prisma.ResellPlatformCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResellPlatformCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCategoryPayload>
          }
          findMany: {
            args: Prisma.ResellPlatformCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCategoryPayload>[]
          }
          create: {
            args: Prisma.ResellPlatformCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCategoryPayload>
          }
          createMany: {
            args: Prisma.ResellPlatformCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResellPlatformCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCategoryPayload>[]
          }
          delete: {
            args: Prisma.ResellPlatformCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCategoryPayload>
          }
          update: {
            args: Prisma.ResellPlatformCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ResellPlatformCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResellPlatformCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResellPlatformCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ResellPlatformCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCategoryPayload>
          }
          aggregate: {
            args: Prisma.ResellPlatformCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResellPlatformCategory>
          }
          groupBy: {
            args: Prisma.ResellPlatformCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResellPlatformCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResellPlatformCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ResellPlatformCategoryCountAggregateOutputType> | number
          }
        }
      }
      ResellPlatformCountry: {
        payload: Prisma.$ResellPlatformCountryPayload<ExtArgs>
        fields: Prisma.ResellPlatformCountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResellPlatformCountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResellPlatformCountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCountryPayload>
          }
          findFirst: {
            args: Prisma.ResellPlatformCountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResellPlatformCountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCountryPayload>
          }
          findMany: {
            args: Prisma.ResellPlatformCountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCountryPayload>[]
          }
          create: {
            args: Prisma.ResellPlatformCountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCountryPayload>
          }
          createMany: {
            args: Prisma.ResellPlatformCountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResellPlatformCountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCountryPayload>[]
          }
          delete: {
            args: Prisma.ResellPlatformCountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCountryPayload>
          }
          update: {
            args: Prisma.ResellPlatformCountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCountryPayload>
          }
          deleteMany: {
            args: Prisma.ResellPlatformCountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResellPlatformCountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResellPlatformCountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCountryPayload>[]
          }
          upsert: {
            args: Prisma.ResellPlatformCountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResellPlatformCountryPayload>
          }
          aggregate: {
            args: Prisma.ResellPlatformCountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResellPlatformCountry>
          }
          groupBy: {
            args: Prisma.ResellPlatformCountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResellPlatformCountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResellPlatformCountryCountArgs<ExtArgs>
            result: $Utils.Optional<ResellPlatformCountryCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    partner?: PartnerOmit
    partnerRole?: PartnerRoleOmit
    partnerRoleAssignment?: PartnerRoleAssignmentOmit
    partnerChannel?: PartnerChannelOmit
    partnerLocation?: PartnerLocationOmit
    partnerServiceProfile?: PartnerServiceProfileOmit
    serviceType?: ServiceTypeOmit
    productCategory?: ProductCategoryOmit
    partnerProductCategory?: PartnerProductCategoryOmit
    resellPlatform?: ResellPlatformOmit
    resellPlatformCategory?: ResellPlatformCategoryOmit
    resellPlatformCountry?: ResellPlatformCountryOmit
    country?: CountryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PartnerCountOutputType
   */

  export type PartnerCountOutputType = {
    channels: number
    locations: number
    productCategories: number
    roleAssignments: number
  }

  export type PartnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channels?: boolean | PartnerCountOutputTypeCountChannelsArgs
    locations?: boolean | PartnerCountOutputTypeCountLocationsArgs
    productCategories?: boolean | PartnerCountOutputTypeCountProductCategoriesArgs
    roleAssignments?: boolean | PartnerCountOutputTypeCountRoleAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * PartnerCountOutputType without action
   */
  export type PartnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerCountOutputType
     */
    select?: PartnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartnerCountOutputType without action
   */
  export type PartnerCountOutputTypeCountChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerChannelWhereInput
  }

  /**
   * PartnerCountOutputType without action
   */
  export type PartnerCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerLocationWhereInput
  }

  /**
   * PartnerCountOutputType without action
   */
  export type PartnerCountOutputTypeCountProductCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerProductCategoryWhereInput
  }

  /**
   * PartnerCountOutputType without action
   */
  export type PartnerCountOutputTypeCountRoleAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerRoleAssignmentWhereInput
  }


  /**
   * Count Type PartnerRoleCountOutputType
   */

  export type PartnerRoleCountOutputType = {
    partners: number
  }

  export type PartnerRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partners?: boolean | PartnerRoleCountOutputTypeCountPartnersArgs
  }

  // Custom InputTypes
  /**
   * PartnerRoleCountOutputType without action
   */
  export type PartnerRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRoleCountOutputType
     */
    select?: PartnerRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartnerRoleCountOutputType without action
   */
  export type PartnerRoleCountOutputTypeCountPartnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerRoleAssignmentWhereInput
  }


  /**
   * Count Type PartnerChannelCountOutputType
   */

  export type PartnerChannelCountOutputType = {
    services: number
  }

  export type PartnerChannelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | PartnerChannelCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * PartnerChannelCountOutputType without action
   */
  export type PartnerChannelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerChannelCountOutputType
     */
    select?: PartnerChannelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartnerChannelCountOutputType without action
   */
  export type PartnerChannelCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerServiceProfileWhereInput
  }


  /**
   * Count Type PartnerLocationCountOutputType
   */

  export type PartnerLocationCountOutputType = {
    services: number
  }

  export type PartnerLocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | PartnerLocationCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * PartnerLocationCountOutputType without action
   */
  export type PartnerLocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerLocationCountOutputType
     */
    select?: PartnerLocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartnerLocationCountOutputType without action
   */
  export type PartnerLocationCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerServiceProfileWhereInput
  }


  /**
   * Count Type ServiceTypeCountOutputType
   */

  export type ServiceTypeCountOutputType = {
    services: number
  }

  export type ServiceTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ServiceTypeCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * ServiceTypeCountOutputType without action
   */
  export type ServiceTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceTypeCountOutputType
     */
    select?: ServiceTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceTypeCountOutputType without action
   */
  export type ServiceTypeCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerServiceProfileWhereInput
  }


  /**
   * Count Type ProductCategoryCountOutputType
   */

  export type ProductCategoryCountOutputType = {
    partners: number
    resellPlatforms: number
  }

  export type ProductCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partners?: boolean | ProductCategoryCountOutputTypeCountPartnersArgs
    resellPlatforms?: boolean | ProductCategoryCountOutputTypeCountResellPlatformsArgs
  }

  // Custom InputTypes
  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryCountOutputType
     */
    select?: ProductCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeCountPartnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerProductCategoryWhereInput
  }

  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeCountResellPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResellPlatformCategoryWhereInput
  }


  /**
   * Count Type ResellPlatformCountOutputType
   */

  export type ResellPlatformCountOutputType = {
    productCategories: number
    countries: number
  }

  export type ResellPlatformCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productCategories?: boolean | ResellPlatformCountOutputTypeCountProductCategoriesArgs
    countries?: boolean | ResellPlatformCountOutputTypeCountCountriesArgs
  }

  // Custom InputTypes
  /**
   * ResellPlatformCountOutputType without action
   */
  export type ResellPlatformCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCountOutputType
     */
    select?: ResellPlatformCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResellPlatformCountOutputType without action
   */
  export type ResellPlatformCountOutputTypeCountProductCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResellPlatformCategoryWhereInput
  }

  /**
   * ResellPlatformCountOutputType without action
   */
  export type ResellPlatformCountOutputTypeCountCountriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResellPlatformCountryWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    partners: number
    resellPlatforms: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partners?: boolean | CountryCountOutputTypeCountPartnersArgs
    resellPlatforms?: boolean | CountryCountOutputTypeCountResellPlatformsArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountPartnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerLocationWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountResellPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResellPlatformCountryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Partner
   */

  export type AggregatePartner = {
    _count: PartnerCountAggregateOutputType | null
    _min: PartnerMinAggregateOutputType | null
    _max: PartnerMaxAggregateOutputType | null
  }

  export type PartnerMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    logo: string | null
    tagline: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    logo: string | null
    tagline: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerCountAggregateOutputType = {
    id: number
    name: number
    url: number
    logo: number
    tagline: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartnerMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    logo?: true
    tagline?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    logo?: true
    tagline?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    logo?: true
    tagline?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partner to aggregate.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partners
    **/
    _count?: true | PartnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerMaxAggregateInputType
  }

  export type GetPartnerAggregateType<T extends PartnerAggregateArgs> = {
        [P in keyof T & keyof AggregatePartner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartner[P]>
      : GetScalarType<T[P], AggregatePartner[P]>
  }




  export type PartnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerWhereInput
    orderBy?: PartnerOrderByWithAggregationInput | PartnerOrderByWithAggregationInput[]
    by: PartnerScalarFieldEnum[] | PartnerScalarFieldEnum
    having?: PartnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerCountAggregateInputType | true
    _min?: PartnerMinAggregateInputType
    _max?: PartnerMaxAggregateInputType
  }

  export type PartnerGroupByOutputType = {
    id: string
    name: string
    url: string
    logo: string
    tagline: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: PartnerCountAggregateOutputType | null
    _min: PartnerMinAggregateOutputType | null
    _max: PartnerMaxAggregateOutputType | null
  }

  type GetPartnerGroupByPayload<T extends PartnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerGroupByOutputType[P]>
        }
      >
    >


  export type PartnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    logo?: boolean
    tagline?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channels?: boolean | Partner$channelsArgs<ExtArgs>
    locations?: boolean | Partner$locationsArgs<ExtArgs>
    productCategories?: boolean | Partner$productCategoriesArgs<ExtArgs>
    roleAssignments?: boolean | Partner$roleAssignmentsArgs<ExtArgs>
    _count?: boolean | PartnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    logo?: boolean
    tagline?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    logo?: boolean
    tagline?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    logo?: boolean
    tagline?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "logo" | "tagline" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["partner"]>
  export type PartnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channels?: boolean | Partner$channelsArgs<ExtArgs>
    locations?: boolean | Partner$locationsArgs<ExtArgs>
    productCategories?: boolean | Partner$productCategoriesArgs<ExtArgs>
    roleAssignments?: boolean | Partner$roleAssignmentsArgs<ExtArgs>
    _count?: boolean | PartnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PartnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PartnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PartnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partner"
    objects: {
      channels: Prisma.$PartnerChannelPayload<ExtArgs>[]
      locations: Prisma.$PartnerLocationPayload<ExtArgs>[]
      productCategories: Prisma.$PartnerProductCategoryPayload<ExtArgs>[]
      roleAssignments: Prisma.$PartnerRoleAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      logo: string
      tagline: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partner"]>
    composites: {}
  }

  type PartnerGetPayload<S extends boolean | null | undefined | PartnerDefaultArgs> = $Result.GetResult<Prisma.$PartnerPayload, S>

  type PartnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnerCountAggregateInputType | true
    }

  export interface PartnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partner'], meta: { name: 'Partner' } }
    /**
     * Find zero or one Partner that matches the filter.
     * @param {PartnerFindUniqueArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerFindUniqueArgs>(args: SelectSubset<T, PartnerFindUniqueArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Partner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnerFindUniqueOrThrowArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Partner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindFirstArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerFindFirstArgs>(args?: SelectSubset<T, PartnerFindFirstArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Partner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindFirstOrThrowArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partners
     * const partners = await prisma.partner.findMany()
     * 
     * // Get first 10 Partners
     * const partners = await prisma.partner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerWithIdOnly = await prisma.partner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnerFindManyArgs>(args?: SelectSubset<T, PartnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Partner.
     * @param {PartnerCreateArgs} args - Arguments to create a Partner.
     * @example
     * // Create one Partner
     * const Partner = await prisma.partner.create({
     *   data: {
     *     // ... data to create a Partner
     *   }
     * })
     * 
     */
    create<T extends PartnerCreateArgs>(args: SelectSubset<T, PartnerCreateArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Partners.
     * @param {PartnerCreateManyArgs} args - Arguments to create many Partners.
     * @example
     * // Create many Partners
     * const partner = await prisma.partner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerCreateManyArgs>(args?: SelectSubset<T, PartnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Partners and returns the data saved in the database.
     * @param {PartnerCreateManyAndReturnArgs} args - Arguments to create many Partners.
     * @example
     * // Create many Partners
     * const partner = await prisma.partner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Partners and only return the `id`
     * const partnerWithIdOnly = await prisma.partner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartnerCreateManyAndReturnArgs>(args?: SelectSubset<T, PartnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Partner.
     * @param {PartnerDeleteArgs} args - Arguments to delete one Partner.
     * @example
     * // Delete one Partner
     * const Partner = await prisma.partner.delete({
     *   where: {
     *     // ... filter to delete one Partner
     *   }
     * })
     * 
     */
    delete<T extends PartnerDeleteArgs>(args: SelectSubset<T, PartnerDeleteArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Partner.
     * @param {PartnerUpdateArgs} args - Arguments to update one Partner.
     * @example
     * // Update one Partner
     * const partner = await prisma.partner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerUpdateArgs>(args: SelectSubset<T, PartnerUpdateArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Partners.
     * @param {PartnerDeleteManyArgs} args - Arguments to filter Partners to delete.
     * @example
     * // Delete a few Partners
     * const { count } = await prisma.partner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerDeleteManyArgs>(args?: SelectSubset<T, PartnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partners
     * const partner = await prisma.partner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerUpdateManyArgs>(args: SelectSubset<T, PartnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partners and returns the data updated in the database.
     * @param {PartnerUpdateManyAndReturnArgs} args - Arguments to update many Partners.
     * @example
     * // Update many Partners
     * const partner = await prisma.partner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Partners and only return the `id`
     * const partnerWithIdOnly = await prisma.partner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartnerUpdateManyAndReturnArgs>(args: SelectSubset<T, PartnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Partner.
     * @param {PartnerUpsertArgs} args - Arguments to update or create a Partner.
     * @example
     * // Update or create a Partner
     * const partner = await prisma.partner.upsert({
     *   create: {
     *     // ... data to create a Partner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partner we want to update
     *   }
     * })
     */
    upsert<T extends PartnerUpsertArgs>(args: SelectSubset<T, PartnerUpsertArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerCountArgs} args - Arguments to filter Partners to count.
     * @example
     * // Count the number of Partners
     * const count = await prisma.partner.count({
     *   where: {
     *     // ... the filter for the Partners we want to count
     *   }
     * })
    **/
    count<T extends PartnerCountArgs>(
      args?: Subset<T, PartnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnerAggregateArgs>(args: Subset<T, PartnerAggregateArgs>): Prisma.PrismaPromise<GetPartnerAggregateType<T>>

    /**
     * Group by Partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerGroupByArgs['orderBy'] }
        : { orderBy?: PartnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partner model
   */
  readonly fields: PartnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channels<T extends Partner$channelsArgs<ExtArgs> = {}>(args?: Subset<T, Partner$channelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerChannelPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    locations<T extends Partner$locationsArgs<ExtArgs> = {}>(args?: Subset<T, Partner$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerLocationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    productCategories<T extends Partner$productCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Partner$productCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerProductCategoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    roleAssignments<T extends Partner$roleAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Partner$roleAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerRoleAssignmentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Partner model
   */ 
  interface PartnerFieldRefs {
    readonly id: FieldRef<"Partner", 'String'>
    readonly name: FieldRef<"Partner", 'String'>
    readonly url: FieldRef<"Partner", 'String'>
    readonly logo: FieldRef<"Partner", 'String'>
    readonly tagline: FieldRef<"Partner", 'String'>
    readonly description: FieldRef<"Partner", 'String'>
    readonly createdAt: FieldRef<"Partner", 'DateTime'>
    readonly updatedAt: FieldRef<"Partner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Partner findUnique
   */
  export type PartnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner findUniqueOrThrow
   */
  export type PartnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner findFirst
   */
  export type PartnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner findFirstOrThrow
   */
  export type PartnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner findMany
   */
  export type PartnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partners to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner create
   */
  export type PartnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Partner.
     */
    data: XOR<PartnerCreateInput, PartnerUncheckedCreateInput>
  }

  /**
   * Partner createMany
   */
  export type PartnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partners.
     */
    data: PartnerCreateManyInput | PartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partner createManyAndReturn
   */
  export type PartnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * The data used to create many Partners.
     */
    data: PartnerCreateManyInput | PartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partner update
   */
  export type PartnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Partner.
     */
    data: XOR<PartnerUpdateInput, PartnerUncheckedUpdateInput>
    /**
     * Choose, which Partner to update.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner updateMany
   */
  export type PartnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partners.
     */
    data: XOR<PartnerUpdateManyMutationInput, PartnerUncheckedUpdateManyInput>
    /**
     * Filter which Partners to update
     */
    where?: PartnerWhereInput
    /**
     * Limit how many Partners to update.
     */
    limit?: number
  }

  /**
   * Partner updateManyAndReturn
   */
  export type PartnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * The data used to update Partners.
     */
    data: XOR<PartnerUpdateManyMutationInput, PartnerUncheckedUpdateManyInput>
    /**
     * Filter which Partners to update
     */
    where?: PartnerWhereInput
    /**
     * Limit how many Partners to update.
     */
    limit?: number
  }

  /**
   * Partner upsert
   */
  export type PartnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Partner to update in case it exists.
     */
    where: PartnerWhereUniqueInput
    /**
     * In case the Partner found by the `where` argument doesn't exist, create a new Partner with this data.
     */
    create: XOR<PartnerCreateInput, PartnerUncheckedCreateInput>
    /**
     * In case the Partner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerUpdateInput, PartnerUncheckedUpdateInput>
  }

  /**
   * Partner delete
   */
  export type PartnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter which Partner to delete.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner deleteMany
   */
  export type PartnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partners to delete
     */
    where?: PartnerWhereInput
    /**
     * Limit how many Partners to delete.
     */
    limit?: number
  }

  /**
   * Partner.channels
   */
  export type Partner$channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerChannel
     */
    select?: PartnerChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerChannel
     */
    omit?: PartnerChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerChannelInclude<ExtArgs> | null
    where?: PartnerChannelWhereInput
    orderBy?: PartnerChannelOrderByWithRelationInput | PartnerChannelOrderByWithRelationInput[]
    cursor?: PartnerChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartnerChannelScalarFieldEnum | PartnerChannelScalarFieldEnum[]
  }

  /**
   * Partner.locations
   */
  export type Partner$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerLocation
     */
    select?: PartnerLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerLocation
     */
    omit?: PartnerLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerLocationInclude<ExtArgs> | null
    where?: PartnerLocationWhereInput
    orderBy?: PartnerLocationOrderByWithRelationInput | PartnerLocationOrderByWithRelationInput[]
    cursor?: PartnerLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartnerLocationScalarFieldEnum | PartnerLocationScalarFieldEnum[]
  }

  /**
   * Partner.productCategories
   */
  export type Partner$productCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerProductCategory
     */
    select?: PartnerProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerProductCategory
     */
    omit?: PartnerProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerProductCategoryInclude<ExtArgs> | null
    where?: PartnerProductCategoryWhereInput
    orderBy?: PartnerProductCategoryOrderByWithRelationInput | PartnerProductCategoryOrderByWithRelationInput[]
    cursor?: PartnerProductCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartnerProductCategoryScalarFieldEnum | PartnerProductCategoryScalarFieldEnum[]
  }

  /**
   * Partner.roleAssignments
   */
  export type Partner$roleAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRoleAssignment
     */
    select?: PartnerRoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRoleAssignment
     */
    omit?: PartnerRoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleAssignmentInclude<ExtArgs> | null
    where?: PartnerRoleAssignmentWhereInput
    orderBy?: PartnerRoleAssignmentOrderByWithRelationInput | PartnerRoleAssignmentOrderByWithRelationInput[]
    cursor?: PartnerRoleAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartnerRoleAssignmentScalarFieldEnum | PartnerRoleAssignmentScalarFieldEnum[]
  }

  /**
   * Partner without action
   */
  export type PartnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
  }


  /**
   * Model PartnerRole
   */

  export type AggregatePartnerRole = {
    _count: PartnerRoleCountAggregateOutputType | null
    _min: PartnerRoleMinAggregateOutputType | null
    _max: PartnerRoleMaxAggregateOutputType | null
  }

  export type PartnerRoleMinAggregateOutputType = {
    id: string | null
    key: string | null
    label: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerRoleMaxAggregateOutputType = {
    id: string | null
    key: string | null
    label: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerRoleCountAggregateOutputType = {
    id: number
    key: number
    label: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartnerRoleMinAggregateInputType = {
    id?: true
    key?: true
    label?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerRoleMaxAggregateInputType = {
    id?: true
    key?: true
    label?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerRoleCountAggregateInputType = {
    id?: true
    key?: true
    label?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartnerRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerRole to aggregate.
     */
    where?: PartnerRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerRoles to fetch.
     */
    orderBy?: PartnerRoleOrderByWithRelationInput | PartnerRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartnerRoles
    **/
    _count?: true | PartnerRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerRoleMaxAggregateInputType
  }

  export type GetPartnerRoleAggregateType<T extends PartnerRoleAggregateArgs> = {
        [P in keyof T & keyof AggregatePartnerRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartnerRole[P]>
      : GetScalarType<T[P], AggregatePartnerRole[P]>
  }




  export type PartnerRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerRoleWhereInput
    orderBy?: PartnerRoleOrderByWithAggregationInput | PartnerRoleOrderByWithAggregationInput[]
    by: PartnerRoleScalarFieldEnum[] | PartnerRoleScalarFieldEnum
    having?: PartnerRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerRoleCountAggregateInputType | true
    _min?: PartnerRoleMinAggregateInputType
    _max?: PartnerRoleMaxAggregateInputType
  }

  export type PartnerRoleGroupByOutputType = {
    id: string
    key: string
    label: string
    createdAt: Date
    updatedAt: Date
    _count: PartnerRoleCountAggregateOutputType | null
    _min: PartnerRoleMinAggregateOutputType | null
    _max: PartnerRoleMaxAggregateOutputType | null
  }

  type GetPartnerRoleGroupByPayload<T extends PartnerRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerRoleGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerRoleGroupByOutputType[P]>
        }
      >
    >


  export type PartnerRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partners?: boolean | PartnerRole$partnersArgs<ExtArgs>
    _count?: boolean | PartnerRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerRole"]>

  export type PartnerRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partnerRole"]>

  export type PartnerRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partnerRole"]>

  export type PartnerRoleSelectScalar = {
    id?: boolean
    key?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartnerRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "label" | "createdAt" | "updatedAt", ExtArgs["result"]["partnerRole"]>
  export type PartnerRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partners?: boolean | PartnerRole$partnersArgs<ExtArgs>
    _count?: boolean | PartnerRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PartnerRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PartnerRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PartnerRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartnerRole"
    objects: {
      partners: Prisma.$PartnerRoleAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      label: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partnerRole"]>
    composites: {}
  }

  type PartnerRoleGetPayload<S extends boolean | null | undefined | PartnerRoleDefaultArgs> = $Result.GetResult<Prisma.$PartnerRolePayload, S>

  type PartnerRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartnerRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnerRoleCountAggregateInputType | true
    }

  export interface PartnerRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartnerRole'], meta: { name: 'PartnerRole' } }
    /**
     * Find zero or one PartnerRole that matches the filter.
     * @param {PartnerRoleFindUniqueArgs} args - Arguments to find a PartnerRole
     * @example
     * // Get one PartnerRole
     * const partnerRole = await prisma.partnerRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerRoleFindUniqueArgs>(args: SelectSubset<T, PartnerRoleFindUniqueArgs<ExtArgs>>): Prisma__PartnerRoleClient<$Result.GetResult<Prisma.$PartnerRolePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PartnerRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnerRoleFindUniqueOrThrowArgs} args - Arguments to find a PartnerRole
     * @example
     * // Get one PartnerRole
     * const partnerRole = await prisma.partnerRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerRoleClient<$Result.GetResult<Prisma.$PartnerRolePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PartnerRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRoleFindFirstArgs} args - Arguments to find a PartnerRole
     * @example
     * // Get one PartnerRole
     * const partnerRole = await prisma.partnerRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerRoleFindFirstArgs>(args?: SelectSubset<T, PartnerRoleFindFirstArgs<ExtArgs>>): Prisma__PartnerRoleClient<$Result.GetResult<Prisma.$PartnerRolePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PartnerRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRoleFindFirstOrThrowArgs} args - Arguments to find a PartnerRole
     * @example
     * // Get one PartnerRole
     * const partnerRole = await prisma.partnerRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerRoleClient<$Result.GetResult<Prisma.$PartnerRolePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PartnerRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartnerRoles
     * const partnerRoles = await prisma.partnerRole.findMany()
     * 
     * // Get first 10 PartnerRoles
     * const partnerRoles = await prisma.partnerRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerRoleWithIdOnly = await prisma.partnerRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnerRoleFindManyArgs>(args?: SelectSubset<T, PartnerRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerRolePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PartnerRole.
     * @param {PartnerRoleCreateArgs} args - Arguments to create a PartnerRole.
     * @example
     * // Create one PartnerRole
     * const PartnerRole = await prisma.partnerRole.create({
     *   data: {
     *     // ... data to create a PartnerRole
     *   }
     * })
     * 
     */
    create<T extends PartnerRoleCreateArgs>(args: SelectSubset<T, PartnerRoleCreateArgs<ExtArgs>>): Prisma__PartnerRoleClient<$Result.GetResult<Prisma.$PartnerRolePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PartnerRoles.
     * @param {PartnerRoleCreateManyArgs} args - Arguments to create many PartnerRoles.
     * @example
     * // Create many PartnerRoles
     * const partnerRole = await prisma.partnerRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerRoleCreateManyArgs>(args?: SelectSubset<T, PartnerRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PartnerRoles and returns the data saved in the database.
     * @param {PartnerRoleCreateManyAndReturnArgs} args - Arguments to create many PartnerRoles.
     * @example
     * // Create many PartnerRoles
     * const partnerRole = await prisma.partnerRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PartnerRoles and only return the `id`
     * const partnerRoleWithIdOnly = await prisma.partnerRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartnerRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, PartnerRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerRolePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PartnerRole.
     * @param {PartnerRoleDeleteArgs} args - Arguments to delete one PartnerRole.
     * @example
     * // Delete one PartnerRole
     * const PartnerRole = await prisma.partnerRole.delete({
     *   where: {
     *     // ... filter to delete one PartnerRole
     *   }
     * })
     * 
     */
    delete<T extends PartnerRoleDeleteArgs>(args: SelectSubset<T, PartnerRoleDeleteArgs<ExtArgs>>): Prisma__PartnerRoleClient<$Result.GetResult<Prisma.$PartnerRolePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PartnerRole.
     * @param {PartnerRoleUpdateArgs} args - Arguments to update one PartnerRole.
     * @example
     * // Update one PartnerRole
     * const partnerRole = await prisma.partnerRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerRoleUpdateArgs>(args: SelectSubset<T, PartnerRoleUpdateArgs<ExtArgs>>): Prisma__PartnerRoleClient<$Result.GetResult<Prisma.$PartnerRolePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PartnerRoles.
     * @param {PartnerRoleDeleteManyArgs} args - Arguments to filter PartnerRoles to delete.
     * @example
     * // Delete a few PartnerRoles
     * const { count } = await prisma.partnerRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerRoleDeleteManyArgs>(args?: SelectSubset<T, PartnerRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartnerRoles
     * const partnerRole = await prisma.partnerRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerRoleUpdateManyArgs>(args: SelectSubset<T, PartnerRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerRoles and returns the data updated in the database.
     * @param {PartnerRoleUpdateManyAndReturnArgs} args - Arguments to update many PartnerRoles.
     * @example
     * // Update many PartnerRoles
     * const partnerRole = await prisma.partnerRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PartnerRoles and only return the `id`
     * const partnerRoleWithIdOnly = await prisma.partnerRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartnerRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, PartnerRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerRolePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PartnerRole.
     * @param {PartnerRoleUpsertArgs} args - Arguments to update or create a PartnerRole.
     * @example
     * // Update or create a PartnerRole
     * const partnerRole = await prisma.partnerRole.upsert({
     *   create: {
     *     // ... data to create a PartnerRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartnerRole we want to update
     *   }
     * })
     */
    upsert<T extends PartnerRoleUpsertArgs>(args: SelectSubset<T, PartnerRoleUpsertArgs<ExtArgs>>): Prisma__PartnerRoleClient<$Result.GetResult<Prisma.$PartnerRolePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PartnerRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRoleCountArgs} args - Arguments to filter PartnerRoles to count.
     * @example
     * // Count the number of PartnerRoles
     * const count = await prisma.partnerRole.count({
     *   where: {
     *     // ... the filter for the PartnerRoles we want to count
     *   }
     * })
    **/
    count<T extends PartnerRoleCountArgs>(
      args?: Subset<T, PartnerRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartnerRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnerRoleAggregateArgs>(args: Subset<T, PartnerRoleAggregateArgs>): Prisma.PrismaPromise<GetPartnerRoleAggregateType<T>>

    /**
     * Group by PartnerRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnerRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerRoleGroupByArgs['orderBy'] }
        : { orderBy?: PartnerRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnerRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartnerRole model
   */
  readonly fields: PartnerRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartnerRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partners<T extends PartnerRole$partnersArgs<ExtArgs> = {}>(args?: Subset<T, PartnerRole$partnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerRoleAssignmentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartnerRole model
   */ 
  interface PartnerRoleFieldRefs {
    readonly id: FieldRef<"PartnerRole", 'String'>
    readonly key: FieldRef<"PartnerRole", 'String'>
    readonly label: FieldRef<"PartnerRole", 'String'>
    readonly createdAt: FieldRef<"PartnerRole", 'DateTime'>
    readonly updatedAt: FieldRef<"PartnerRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PartnerRole findUnique
   */
  export type PartnerRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRole
     */
    select?: PartnerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRole
     */
    omit?: PartnerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleInclude<ExtArgs> | null
    /**
     * Filter, which PartnerRole to fetch.
     */
    where: PartnerRoleWhereUniqueInput
  }

  /**
   * PartnerRole findUniqueOrThrow
   */
  export type PartnerRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRole
     */
    select?: PartnerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRole
     */
    omit?: PartnerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleInclude<ExtArgs> | null
    /**
     * Filter, which PartnerRole to fetch.
     */
    where: PartnerRoleWhereUniqueInput
  }

  /**
   * PartnerRole findFirst
   */
  export type PartnerRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRole
     */
    select?: PartnerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRole
     */
    omit?: PartnerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleInclude<ExtArgs> | null
    /**
     * Filter, which PartnerRole to fetch.
     */
    where?: PartnerRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerRoles to fetch.
     */
    orderBy?: PartnerRoleOrderByWithRelationInput | PartnerRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerRoles.
     */
    cursor?: PartnerRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerRoles.
     */
    distinct?: PartnerRoleScalarFieldEnum | PartnerRoleScalarFieldEnum[]
  }

  /**
   * PartnerRole findFirstOrThrow
   */
  export type PartnerRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRole
     */
    select?: PartnerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRole
     */
    omit?: PartnerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleInclude<ExtArgs> | null
    /**
     * Filter, which PartnerRole to fetch.
     */
    where?: PartnerRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerRoles to fetch.
     */
    orderBy?: PartnerRoleOrderByWithRelationInput | PartnerRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerRoles.
     */
    cursor?: PartnerRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerRoles.
     */
    distinct?: PartnerRoleScalarFieldEnum | PartnerRoleScalarFieldEnum[]
  }

  /**
   * PartnerRole findMany
   */
  export type PartnerRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRole
     */
    select?: PartnerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRole
     */
    omit?: PartnerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleInclude<ExtArgs> | null
    /**
     * Filter, which PartnerRoles to fetch.
     */
    where?: PartnerRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerRoles to fetch.
     */
    orderBy?: PartnerRoleOrderByWithRelationInput | PartnerRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartnerRoles.
     */
    cursor?: PartnerRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerRoles.
     */
    skip?: number
    distinct?: PartnerRoleScalarFieldEnum | PartnerRoleScalarFieldEnum[]
  }

  /**
   * PartnerRole create
   */
  export type PartnerRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRole
     */
    select?: PartnerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRole
     */
    omit?: PartnerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a PartnerRole.
     */
    data: XOR<PartnerRoleCreateInput, PartnerRoleUncheckedCreateInput>
  }

  /**
   * PartnerRole createMany
   */
  export type PartnerRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartnerRoles.
     */
    data: PartnerRoleCreateManyInput | PartnerRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartnerRole createManyAndReturn
   */
  export type PartnerRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRole
     */
    select?: PartnerRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRole
     */
    omit?: PartnerRoleOmit<ExtArgs> | null
    /**
     * The data used to create many PartnerRoles.
     */
    data: PartnerRoleCreateManyInput | PartnerRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartnerRole update
   */
  export type PartnerRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRole
     */
    select?: PartnerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRole
     */
    omit?: PartnerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a PartnerRole.
     */
    data: XOR<PartnerRoleUpdateInput, PartnerRoleUncheckedUpdateInput>
    /**
     * Choose, which PartnerRole to update.
     */
    where: PartnerRoleWhereUniqueInput
  }

  /**
   * PartnerRole updateMany
   */
  export type PartnerRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartnerRoles.
     */
    data: XOR<PartnerRoleUpdateManyMutationInput, PartnerRoleUncheckedUpdateManyInput>
    /**
     * Filter which PartnerRoles to update
     */
    where?: PartnerRoleWhereInput
    /**
     * Limit how many PartnerRoles to update.
     */
    limit?: number
  }

  /**
   * PartnerRole updateManyAndReturn
   */
  export type PartnerRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRole
     */
    select?: PartnerRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRole
     */
    omit?: PartnerRoleOmit<ExtArgs> | null
    /**
     * The data used to update PartnerRoles.
     */
    data: XOR<PartnerRoleUpdateManyMutationInput, PartnerRoleUncheckedUpdateManyInput>
    /**
     * Filter which PartnerRoles to update
     */
    where?: PartnerRoleWhereInput
    /**
     * Limit how many PartnerRoles to update.
     */
    limit?: number
  }

  /**
   * PartnerRole upsert
   */
  export type PartnerRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRole
     */
    select?: PartnerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRole
     */
    omit?: PartnerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the PartnerRole to update in case it exists.
     */
    where: PartnerRoleWhereUniqueInput
    /**
     * In case the PartnerRole found by the `where` argument doesn't exist, create a new PartnerRole with this data.
     */
    create: XOR<PartnerRoleCreateInput, PartnerRoleUncheckedCreateInput>
    /**
     * In case the PartnerRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerRoleUpdateInput, PartnerRoleUncheckedUpdateInput>
  }

  /**
   * PartnerRole delete
   */
  export type PartnerRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRole
     */
    select?: PartnerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRole
     */
    omit?: PartnerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleInclude<ExtArgs> | null
    /**
     * Filter which PartnerRole to delete.
     */
    where: PartnerRoleWhereUniqueInput
  }

  /**
   * PartnerRole deleteMany
   */
  export type PartnerRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerRoles to delete
     */
    where?: PartnerRoleWhereInput
    /**
     * Limit how many PartnerRoles to delete.
     */
    limit?: number
  }

  /**
   * PartnerRole.partners
   */
  export type PartnerRole$partnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRoleAssignment
     */
    select?: PartnerRoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRoleAssignment
     */
    omit?: PartnerRoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleAssignmentInclude<ExtArgs> | null
    where?: PartnerRoleAssignmentWhereInput
    orderBy?: PartnerRoleAssignmentOrderByWithRelationInput | PartnerRoleAssignmentOrderByWithRelationInput[]
    cursor?: PartnerRoleAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartnerRoleAssignmentScalarFieldEnum | PartnerRoleAssignmentScalarFieldEnum[]
  }

  /**
   * PartnerRole without action
   */
  export type PartnerRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRole
     */
    select?: PartnerRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRole
     */
    omit?: PartnerRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleInclude<ExtArgs> | null
  }


  /**
   * Model PartnerRoleAssignment
   */

  export type AggregatePartnerRoleAssignment = {
    _count: PartnerRoleAssignmentCountAggregateOutputType | null
    _min: PartnerRoleAssignmentMinAggregateOutputType | null
    _max: PartnerRoleAssignmentMaxAggregateOutputType | null
  }

  export type PartnerRoleAssignmentMinAggregateOutputType = {
    id: string | null
    partnerId: string | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerRoleAssignmentMaxAggregateOutputType = {
    id: string | null
    partnerId: string | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerRoleAssignmentCountAggregateOutputType = {
    id: number
    partnerId: number
    roleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartnerRoleAssignmentMinAggregateInputType = {
    id?: true
    partnerId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerRoleAssignmentMaxAggregateInputType = {
    id?: true
    partnerId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerRoleAssignmentCountAggregateInputType = {
    id?: true
    partnerId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartnerRoleAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerRoleAssignment to aggregate.
     */
    where?: PartnerRoleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerRoleAssignments to fetch.
     */
    orderBy?: PartnerRoleAssignmentOrderByWithRelationInput | PartnerRoleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerRoleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerRoleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerRoleAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartnerRoleAssignments
    **/
    _count?: true | PartnerRoleAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerRoleAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerRoleAssignmentMaxAggregateInputType
  }

  export type GetPartnerRoleAssignmentAggregateType<T extends PartnerRoleAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregatePartnerRoleAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartnerRoleAssignment[P]>
      : GetScalarType<T[P], AggregatePartnerRoleAssignment[P]>
  }




  export type PartnerRoleAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerRoleAssignmentWhereInput
    orderBy?: PartnerRoleAssignmentOrderByWithAggregationInput | PartnerRoleAssignmentOrderByWithAggregationInput[]
    by: PartnerRoleAssignmentScalarFieldEnum[] | PartnerRoleAssignmentScalarFieldEnum
    having?: PartnerRoleAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerRoleAssignmentCountAggregateInputType | true
    _min?: PartnerRoleAssignmentMinAggregateInputType
    _max?: PartnerRoleAssignmentMaxAggregateInputType
  }

  export type PartnerRoleAssignmentGroupByOutputType = {
    id: string
    partnerId: string
    roleId: string
    createdAt: Date
    updatedAt: Date
    _count: PartnerRoleAssignmentCountAggregateOutputType | null
    _min: PartnerRoleAssignmentMinAggregateOutputType | null
    _max: PartnerRoleAssignmentMaxAggregateOutputType | null
  }

  type GetPartnerRoleAssignmentGroupByPayload<T extends PartnerRoleAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerRoleAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerRoleAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerRoleAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerRoleAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type PartnerRoleAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partnerId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
    role?: boolean | PartnerRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerRoleAssignment"]>

  export type PartnerRoleAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partnerId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
    role?: boolean | PartnerRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerRoleAssignment"]>

  export type PartnerRoleAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partnerId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
    role?: boolean | PartnerRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerRoleAssignment"]>

  export type PartnerRoleAssignmentSelectScalar = {
    id?: boolean
    partnerId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartnerRoleAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "partnerId" | "roleId" | "createdAt" | "updatedAt", ExtArgs["result"]["partnerRoleAssignment"]>
  export type PartnerRoleAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
    role?: boolean | PartnerRoleDefaultArgs<ExtArgs>
  }
  export type PartnerRoleAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
    role?: boolean | PartnerRoleDefaultArgs<ExtArgs>
  }
  export type PartnerRoleAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
    role?: boolean | PartnerRoleDefaultArgs<ExtArgs>
  }

  export type $PartnerRoleAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartnerRoleAssignment"
    objects: {
      partner: Prisma.$PartnerPayload<ExtArgs>
      role: Prisma.$PartnerRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      partnerId: string
      roleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partnerRoleAssignment"]>
    composites: {}
  }

  type PartnerRoleAssignmentGetPayload<S extends boolean | null | undefined | PartnerRoleAssignmentDefaultArgs> = $Result.GetResult<Prisma.$PartnerRoleAssignmentPayload, S>

  type PartnerRoleAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartnerRoleAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnerRoleAssignmentCountAggregateInputType | true
    }

  export interface PartnerRoleAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartnerRoleAssignment'], meta: { name: 'PartnerRoleAssignment' } }
    /**
     * Find zero or one PartnerRoleAssignment that matches the filter.
     * @param {PartnerRoleAssignmentFindUniqueArgs} args - Arguments to find a PartnerRoleAssignment
     * @example
     * // Get one PartnerRoleAssignment
     * const partnerRoleAssignment = await prisma.partnerRoleAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerRoleAssignmentFindUniqueArgs>(args: SelectSubset<T, PartnerRoleAssignmentFindUniqueArgs<ExtArgs>>): Prisma__PartnerRoleAssignmentClient<$Result.GetResult<Prisma.$PartnerRoleAssignmentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PartnerRoleAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnerRoleAssignmentFindUniqueOrThrowArgs} args - Arguments to find a PartnerRoleAssignment
     * @example
     * // Get one PartnerRoleAssignment
     * const partnerRoleAssignment = await prisma.partnerRoleAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerRoleAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerRoleAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerRoleAssignmentClient<$Result.GetResult<Prisma.$PartnerRoleAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PartnerRoleAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRoleAssignmentFindFirstArgs} args - Arguments to find a PartnerRoleAssignment
     * @example
     * // Get one PartnerRoleAssignment
     * const partnerRoleAssignment = await prisma.partnerRoleAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerRoleAssignmentFindFirstArgs>(args?: SelectSubset<T, PartnerRoleAssignmentFindFirstArgs<ExtArgs>>): Prisma__PartnerRoleAssignmentClient<$Result.GetResult<Prisma.$PartnerRoleAssignmentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PartnerRoleAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRoleAssignmentFindFirstOrThrowArgs} args - Arguments to find a PartnerRoleAssignment
     * @example
     * // Get one PartnerRoleAssignment
     * const partnerRoleAssignment = await prisma.partnerRoleAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerRoleAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerRoleAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerRoleAssignmentClient<$Result.GetResult<Prisma.$PartnerRoleAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PartnerRoleAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRoleAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartnerRoleAssignments
     * const partnerRoleAssignments = await prisma.partnerRoleAssignment.findMany()
     * 
     * // Get first 10 PartnerRoleAssignments
     * const partnerRoleAssignments = await prisma.partnerRoleAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerRoleAssignmentWithIdOnly = await prisma.partnerRoleAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnerRoleAssignmentFindManyArgs>(args?: SelectSubset<T, PartnerRoleAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerRoleAssignmentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PartnerRoleAssignment.
     * @param {PartnerRoleAssignmentCreateArgs} args - Arguments to create a PartnerRoleAssignment.
     * @example
     * // Create one PartnerRoleAssignment
     * const PartnerRoleAssignment = await prisma.partnerRoleAssignment.create({
     *   data: {
     *     // ... data to create a PartnerRoleAssignment
     *   }
     * })
     * 
     */
    create<T extends PartnerRoleAssignmentCreateArgs>(args: SelectSubset<T, PartnerRoleAssignmentCreateArgs<ExtArgs>>): Prisma__PartnerRoleAssignmentClient<$Result.GetResult<Prisma.$PartnerRoleAssignmentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PartnerRoleAssignments.
     * @param {PartnerRoleAssignmentCreateManyArgs} args - Arguments to create many PartnerRoleAssignments.
     * @example
     * // Create many PartnerRoleAssignments
     * const partnerRoleAssignment = await prisma.partnerRoleAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerRoleAssignmentCreateManyArgs>(args?: SelectSubset<T, PartnerRoleAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PartnerRoleAssignments and returns the data saved in the database.
     * @param {PartnerRoleAssignmentCreateManyAndReturnArgs} args - Arguments to create many PartnerRoleAssignments.
     * @example
     * // Create many PartnerRoleAssignments
     * const partnerRoleAssignment = await prisma.partnerRoleAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PartnerRoleAssignments and only return the `id`
     * const partnerRoleAssignmentWithIdOnly = await prisma.partnerRoleAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartnerRoleAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, PartnerRoleAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerRoleAssignmentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PartnerRoleAssignment.
     * @param {PartnerRoleAssignmentDeleteArgs} args - Arguments to delete one PartnerRoleAssignment.
     * @example
     * // Delete one PartnerRoleAssignment
     * const PartnerRoleAssignment = await prisma.partnerRoleAssignment.delete({
     *   where: {
     *     // ... filter to delete one PartnerRoleAssignment
     *   }
     * })
     * 
     */
    delete<T extends PartnerRoleAssignmentDeleteArgs>(args: SelectSubset<T, PartnerRoleAssignmentDeleteArgs<ExtArgs>>): Prisma__PartnerRoleAssignmentClient<$Result.GetResult<Prisma.$PartnerRoleAssignmentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PartnerRoleAssignment.
     * @param {PartnerRoleAssignmentUpdateArgs} args - Arguments to update one PartnerRoleAssignment.
     * @example
     * // Update one PartnerRoleAssignment
     * const partnerRoleAssignment = await prisma.partnerRoleAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerRoleAssignmentUpdateArgs>(args: SelectSubset<T, PartnerRoleAssignmentUpdateArgs<ExtArgs>>): Prisma__PartnerRoleAssignmentClient<$Result.GetResult<Prisma.$PartnerRoleAssignmentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PartnerRoleAssignments.
     * @param {PartnerRoleAssignmentDeleteManyArgs} args - Arguments to filter PartnerRoleAssignments to delete.
     * @example
     * // Delete a few PartnerRoleAssignments
     * const { count } = await prisma.partnerRoleAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerRoleAssignmentDeleteManyArgs>(args?: SelectSubset<T, PartnerRoleAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerRoleAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRoleAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartnerRoleAssignments
     * const partnerRoleAssignment = await prisma.partnerRoleAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerRoleAssignmentUpdateManyArgs>(args: SelectSubset<T, PartnerRoleAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerRoleAssignments and returns the data updated in the database.
     * @param {PartnerRoleAssignmentUpdateManyAndReturnArgs} args - Arguments to update many PartnerRoleAssignments.
     * @example
     * // Update many PartnerRoleAssignments
     * const partnerRoleAssignment = await prisma.partnerRoleAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PartnerRoleAssignments and only return the `id`
     * const partnerRoleAssignmentWithIdOnly = await prisma.partnerRoleAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartnerRoleAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, PartnerRoleAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerRoleAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PartnerRoleAssignment.
     * @param {PartnerRoleAssignmentUpsertArgs} args - Arguments to update or create a PartnerRoleAssignment.
     * @example
     * // Update or create a PartnerRoleAssignment
     * const partnerRoleAssignment = await prisma.partnerRoleAssignment.upsert({
     *   create: {
     *     // ... data to create a PartnerRoleAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartnerRoleAssignment we want to update
     *   }
     * })
     */
    upsert<T extends PartnerRoleAssignmentUpsertArgs>(args: SelectSubset<T, PartnerRoleAssignmentUpsertArgs<ExtArgs>>): Prisma__PartnerRoleAssignmentClient<$Result.GetResult<Prisma.$PartnerRoleAssignmentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PartnerRoleAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRoleAssignmentCountArgs} args - Arguments to filter PartnerRoleAssignments to count.
     * @example
     * // Count the number of PartnerRoleAssignments
     * const count = await prisma.partnerRoleAssignment.count({
     *   where: {
     *     // ... the filter for the PartnerRoleAssignments we want to count
     *   }
     * })
    **/
    count<T extends PartnerRoleAssignmentCountArgs>(
      args?: Subset<T, PartnerRoleAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerRoleAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartnerRoleAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRoleAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnerRoleAssignmentAggregateArgs>(args: Subset<T, PartnerRoleAssignmentAggregateArgs>): Prisma.PrismaPromise<GetPartnerRoleAssignmentAggregateType<T>>

    /**
     * Group by PartnerRoleAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerRoleAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnerRoleAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerRoleAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: PartnerRoleAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnerRoleAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerRoleAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartnerRoleAssignment model
   */
  readonly fields: PartnerRoleAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartnerRoleAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerRoleAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partner<T extends PartnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartnerDefaultArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    role<T extends PartnerRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartnerRoleDefaultArgs<ExtArgs>>): Prisma__PartnerRoleClient<$Result.GetResult<Prisma.$PartnerRolePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartnerRoleAssignment model
   */ 
  interface PartnerRoleAssignmentFieldRefs {
    readonly id: FieldRef<"PartnerRoleAssignment", 'String'>
    readonly partnerId: FieldRef<"PartnerRoleAssignment", 'String'>
    readonly roleId: FieldRef<"PartnerRoleAssignment", 'String'>
    readonly createdAt: FieldRef<"PartnerRoleAssignment", 'DateTime'>
    readonly updatedAt: FieldRef<"PartnerRoleAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PartnerRoleAssignment findUnique
   */
  export type PartnerRoleAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRoleAssignment
     */
    select?: PartnerRoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRoleAssignment
     */
    omit?: PartnerRoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which PartnerRoleAssignment to fetch.
     */
    where: PartnerRoleAssignmentWhereUniqueInput
  }

  /**
   * PartnerRoleAssignment findUniqueOrThrow
   */
  export type PartnerRoleAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRoleAssignment
     */
    select?: PartnerRoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRoleAssignment
     */
    omit?: PartnerRoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which PartnerRoleAssignment to fetch.
     */
    where: PartnerRoleAssignmentWhereUniqueInput
  }

  /**
   * PartnerRoleAssignment findFirst
   */
  export type PartnerRoleAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRoleAssignment
     */
    select?: PartnerRoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRoleAssignment
     */
    omit?: PartnerRoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which PartnerRoleAssignment to fetch.
     */
    where?: PartnerRoleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerRoleAssignments to fetch.
     */
    orderBy?: PartnerRoleAssignmentOrderByWithRelationInput | PartnerRoleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerRoleAssignments.
     */
    cursor?: PartnerRoleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerRoleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerRoleAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerRoleAssignments.
     */
    distinct?: PartnerRoleAssignmentScalarFieldEnum | PartnerRoleAssignmentScalarFieldEnum[]
  }

  /**
   * PartnerRoleAssignment findFirstOrThrow
   */
  export type PartnerRoleAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRoleAssignment
     */
    select?: PartnerRoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRoleAssignment
     */
    omit?: PartnerRoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which PartnerRoleAssignment to fetch.
     */
    where?: PartnerRoleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerRoleAssignments to fetch.
     */
    orderBy?: PartnerRoleAssignmentOrderByWithRelationInput | PartnerRoleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerRoleAssignments.
     */
    cursor?: PartnerRoleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerRoleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerRoleAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerRoleAssignments.
     */
    distinct?: PartnerRoleAssignmentScalarFieldEnum | PartnerRoleAssignmentScalarFieldEnum[]
  }

  /**
   * PartnerRoleAssignment findMany
   */
  export type PartnerRoleAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRoleAssignment
     */
    select?: PartnerRoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRoleAssignment
     */
    omit?: PartnerRoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which PartnerRoleAssignments to fetch.
     */
    where?: PartnerRoleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerRoleAssignments to fetch.
     */
    orderBy?: PartnerRoleAssignmentOrderByWithRelationInput | PartnerRoleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartnerRoleAssignments.
     */
    cursor?: PartnerRoleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerRoleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerRoleAssignments.
     */
    skip?: number
    distinct?: PartnerRoleAssignmentScalarFieldEnum | PartnerRoleAssignmentScalarFieldEnum[]
  }

  /**
   * PartnerRoleAssignment create
   */
  export type PartnerRoleAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRoleAssignment
     */
    select?: PartnerRoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRoleAssignment
     */
    omit?: PartnerRoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a PartnerRoleAssignment.
     */
    data: XOR<PartnerRoleAssignmentCreateInput, PartnerRoleAssignmentUncheckedCreateInput>
  }

  /**
   * PartnerRoleAssignment createMany
   */
  export type PartnerRoleAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartnerRoleAssignments.
     */
    data: PartnerRoleAssignmentCreateManyInput | PartnerRoleAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartnerRoleAssignment createManyAndReturn
   */
  export type PartnerRoleAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRoleAssignment
     */
    select?: PartnerRoleAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRoleAssignment
     */
    omit?: PartnerRoleAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many PartnerRoleAssignments.
     */
    data: PartnerRoleAssignmentCreateManyInput | PartnerRoleAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartnerRoleAssignment update
   */
  export type PartnerRoleAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRoleAssignment
     */
    select?: PartnerRoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRoleAssignment
     */
    omit?: PartnerRoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a PartnerRoleAssignment.
     */
    data: XOR<PartnerRoleAssignmentUpdateInput, PartnerRoleAssignmentUncheckedUpdateInput>
    /**
     * Choose, which PartnerRoleAssignment to update.
     */
    where: PartnerRoleAssignmentWhereUniqueInput
  }

  /**
   * PartnerRoleAssignment updateMany
   */
  export type PartnerRoleAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartnerRoleAssignments.
     */
    data: XOR<PartnerRoleAssignmentUpdateManyMutationInput, PartnerRoleAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which PartnerRoleAssignments to update
     */
    where?: PartnerRoleAssignmentWhereInput
    /**
     * Limit how many PartnerRoleAssignments to update.
     */
    limit?: number
  }

  /**
   * PartnerRoleAssignment updateManyAndReturn
   */
  export type PartnerRoleAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRoleAssignment
     */
    select?: PartnerRoleAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRoleAssignment
     */
    omit?: PartnerRoleAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update PartnerRoleAssignments.
     */
    data: XOR<PartnerRoleAssignmentUpdateManyMutationInput, PartnerRoleAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which PartnerRoleAssignments to update
     */
    where?: PartnerRoleAssignmentWhereInput
    /**
     * Limit how many PartnerRoleAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartnerRoleAssignment upsert
   */
  export type PartnerRoleAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRoleAssignment
     */
    select?: PartnerRoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRoleAssignment
     */
    omit?: PartnerRoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the PartnerRoleAssignment to update in case it exists.
     */
    where: PartnerRoleAssignmentWhereUniqueInput
    /**
     * In case the PartnerRoleAssignment found by the `where` argument doesn't exist, create a new PartnerRoleAssignment with this data.
     */
    create: XOR<PartnerRoleAssignmentCreateInput, PartnerRoleAssignmentUncheckedCreateInput>
    /**
     * In case the PartnerRoleAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerRoleAssignmentUpdateInput, PartnerRoleAssignmentUncheckedUpdateInput>
  }

  /**
   * PartnerRoleAssignment delete
   */
  export type PartnerRoleAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRoleAssignment
     */
    select?: PartnerRoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRoleAssignment
     */
    omit?: PartnerRoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleAssignmentInclude<ExtArgs> | null
    /**
     * Filter which PartnerRoleAssignment to delete.
     */
    where: PartnerRoleAssignmentWhereUniqueInput
  }

  /**
   * PartnerRoleAssignment deleteMany
   */
  export type PartnerRoleAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerRoleAssignments to delete
     */
    where?: PartnerRoleAssignmentWhereInput
    /**
     * Limit how many PartnerRoleAssignments to delete.
     */
    limit?: number
  }

  /**
   * PartnerRoleAssignment without action
   */
  export type PartnerRoleAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerRoleAssignment
     */
    select?: PartnerRoleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerRoleAssignment
     */
    omit?: PartnerRoleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerRoleAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model PartnerChannel
   */

  export type AggregatePartnerChannel = {
    _count: PartnerChannelCountAggregateOutputType | null
    _min: PartnerChannelMinAggregateOutputType | null
    _max: PartnerChannelMaxAggregateOutputType | null
  }

  export type PartnerChannelMinAggregateOutputType = {
    id: string | null
    partnerId: string | null
    type: $Enums.ChannelType | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerChannelMaxAggregateOutputType = {
    id: string | null
    partnerId: string | null
    type: $Enums.ChannelType | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerChannelCountAggregateOutputType = {
    id: number
    partnerId: number
    type: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartnerChannelMinAggregateInputType = {
    id?: true
    partnerId?: true
    type?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerChannelMaxAggregateInputType = {
    id?: true
    partnerId?: true
    type?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerChannelCountAggregateInputType = {
    id?: true
    partnerId?: true
    type?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartnerChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerChannel to aggregate.
     */
    where?: PartnerChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerChannels to fetch.
     */
    orderBy?: PartnerChannelOrderByWithRelationInput | PartnerChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartnerChannels
    **/
    _count?: true | PartnerChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerChannelMaxAggregateInputType
  }

  export type GetPartnerChannelAggregateType<T extends PartnerChannelAggregateArgs> = {
        [P in keyof T & keyof AggregatePartnerChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartnerChannel[P]>
      : GetScalarType<T[P], AggregatePartnerChannel[P]>
  }




  export type PartnerChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerChannelWhereInput
    orderBy?: PartnerChannelOrderByWithAggregationInput | PartnerChannelOrderByWithAggregationInput[]
    by: PartnerChannelScalarFieldEnum[] | PartnerChannelScalarFieldEnum
    having?: PartnerChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerChannelCountAggregateInputType | true
    _min?: PartnerChannelMinAggregateInputType
    _max?: PartnerChannelMaxAggregateInputType
  }

  export type PartnerChannelGroupByOutputType = {
    id: string
    partnerId: string
    type: $Enums.ChannelType
    url: string | null
    createdAt: Date
    updatedAt: Date
    _count: PartnerChannelCountAggregateOutputType | null
    _min: PartnerChannelMinAggregateOutputType | null
    _max: PartnerChannelMaxAggregateOutputType | null
  }

  type GetPartnerChannelGroupByPayload<T extends PartnerChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerChannelGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerChannelGroupByOutputType[P]>
        }
      >
    >


  export type PartnerChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partnerId?: boolean
    type?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
    services?: boolean | PartnerChannel$servicesArgs<ExtArgs>
    _count?: boolean | PartnerChannelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerChannel"]>

  export type PartnerChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partnerId?: boolean
    type?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerChannel"]>

  export type PartnerChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partnerId?: boolean
    type?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerChannel"]>

  export type PartnerChannelSelectScalar = {
    id?: boolean
    partnerId?: boolean
    type?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartnerChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "partnerId" | "type" | "url" | "createdAt" | "updatedAt", ExtArgs["result"]["partnerChannel"]>
  export type PartnerChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
    services?: boolean | PartnerChannel$servicesArgs<ExtArgs>
    _count?: boolean | PartnerChannelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PartnerChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
  }
  export type PartnerChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
  }

  export type $PartnerChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartnerChannel"
    objects: {
      partner: Prisma.$PartnerPayload<ExtArgs>
      services: Prisma.$PartnerServiceProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      partnerId: string
      type: $Enums.ChannelType
      url: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partnerChannel"]>
    composites: {}
  }

  type PartnerChannelGetPayload<S extends boolean | null | undefined | PartnerChannelDefaultArgs> = $Result.GetResult<Prisma.$PartnerChannelPayload, S>

  type PartnerChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartnerChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnerChannelCountAggregateInputType | true
    }

  export interface PartnerChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartnerChannel'], meta: { name: 'PartnerChannel' } }
    /**
     * Find zero or one PartnerChannel that matches the filter.
     * @param {PartnerChannelFindUniqueArgs} args - Arguments to find a PartnerChannel
     * @example
     * // Get one PartnerChannel
     * const partnerChannel = await prisma.partnerChannel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerChannelFindUniqueArgs>(args: SelectSubset<T, PartnerChannelFindUniqueArgs<ExtArgs>>): Prisma__PartnerChannelClient<$Result.GetResult<Prisma.$PartnerChannelPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PartnerChannel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnerChannelFindUniqueOrThrowArgs} args - Arguments to find a PartnerChannel
     * @example
     * // Get one PartnerChannel
     * const partnerChannel = await prisma.partnerChannel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerChannelClient<$Result.GetResult<Prisma.$PartnerChannelPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PartnerChannel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerChannelFindFirstArgs} args - Arguments to find a PartnerChannel
     * @example
     * // Get one PartnerChannel
     * const partnerChannel = await prisma.partnerChannel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerChannelFindFirstArgs>(args?: SelectSubset<T, PartnerChannelFindFirstArgs<ExtArgs>>): Prisma__PartnerChannelClient<$Result.GetResult<Prisma.$PartnerChannelPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PartnerChannel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerChannelFindFirstOrThrowArgs} args - Arguments to find a PartnerChannel
     * @example
     * // Get one PartnerChannel
     * const partnerChannel = await prisma.partnerChannel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerChannelClient<$Result.GetResult<Prisma.$PartnerChannelPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PartnerChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartnerChannels
     * const partnerChannels = await prisma.partnerChannel.findMany()
     * 
     * // Get first 10 PartnerChannels
     * const partnerChannels = await prisma.partnerChannel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerChannelWithIdOnly = await prisma.partnerChannel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnerChannelFindManyArgs>(args?: SelectSubset<T, PartnerChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerChannelPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PartnerChannel.
     * @param {PartnerChannelCreateArgs} args - Arguments to create a PartnerChannel.
     * @example
     * // Create one PartnerChannel
     * const PartnerChannel = await prisma.partnerChannel.create({
     *   data: {
     *     // ... data to create a PartnerChannel
     *   }
     * })
     * 
     */
    create<T extends PartnerChannelCreateArgs>(args: SelectSubset<T, PartnerChannelCreateArgs<ExtArgs>>): Prisma__PartnerChannelClient<$Result.GetResult<Prisma.$PartnerChannelPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PartnerChannels.
     * @param {PartnerChannelCreateManyArgs} args - Arguments to create many PartnerChannels.
     * @example
     * // Create many PartnerChannels
     * const partnerChannel = await prisma.partnerChannel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerChannelCreateManyArgs>(args?: SelectSubset<T, PartnerChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PartnerChannels and returns the data saved in the database.
     * @param {PartnerChannelCreateManyAndReturnArgs} args - Arguments to create many PartnerChannels.
     * @example
     * // Create many PartnerChannels
     * const partnerChannel = await prisma.partnerChannel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PartnerChannels and only return the `id`
     * const partnerChannelWithIdOnly = await prisma.partnerChannel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartnerChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, PartnerChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerChannelPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PartnerChannel.
     * @param {PartnerChannelDeleteArgs} args - Arguments to delete one PartnerChannel.
     * @example
     * // Delete one PartnerChannel
     * const PartnerChannel = await prisma.partnerChannel.delete({
     *   where: {
     *     // ... filter to delete one PartnerChannel
     *   }
     * })
     * 
     */
    delete<T extends PartnerChannelDeleteArgs>(args: SelectSubset<T, PartnerChannelDeleteArgs<ExtArgs>>): Prisma__PartnerChannelClient<$Result.GetResult<Prisma.$PartnerChannelPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PartnerChannel.
     * @param {PartnerChannelUpdateArgs} args - Arguments to update one PartnerChannel.
     * @example
     * // Update one PartnerChannel
     * const partnerChannel = await prisma.partnerChannel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerChannelUpdateArgs>(args: SelectSubset<T, PartnerChannelUpdateArgs<ExtArgs>>): Prisma__PartnerChannelClient<$Result.GetResult<Prisma.$PartnerChannelPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PartnerChannels.
     * @param {PartnerChannelDeleteManyArgs} args - Arguments to filter PartnerChannels to delete.
     * @example
     * // Delete a few PartnerChannels
     * const { count } = await prisma.partnerChannel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerChannelDeleteManyArgs>(args?: SelectSubset<T, PartnerChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartnerChannels
     * const partnerChannel = await prisma.partnerChannel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerChannelUpdateManyArgs>(args: SelectSubset<T, PartnerChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerChannels and returns the data updated in the database.
     * @param {PartnerChannelUpdateManyAndReturnArgs} args - Arguments to update many PartnerChannels.
     * @example
     * // Update many PartnerChannels
     * const partnerChannel = await prisma.partnerChannel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PartnerChannels and only return the `id`
     * const partnerChannelWithIdOnly = await prisma.partnerChannel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartnerChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, PartnerChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerChannelPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PartnerChannel.
     * @param {PartnerChannelUpsertArgs} args - Arguments to update or create a PartnerChannel.
     * @example
     * // Update or create a PartnerChannel
     * const partnerChannel = await prisma.partnerChannel.upsert({
     *   create: {
     *     // ... data to create a PartnerChannel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartnerChannel we want to update
     *   }
     * })
     */
    upsert<T extends PartnerChannelUpsertArgs>(args: SelectSubset<T, PartnerChannelUpsertArgs<ExtArgs>>): Prisma__PartnerChannelClient<$Result.GetResult<Prisma.$PartnerChannelPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PartnerChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerChannelCountArgs} args - Arguments to filter PartnerChannels to count.
     * @example
     * // Count the number of PartnerChannels
     * const count = await prisma.partnerChannel.count({
     *   where: {
     *     // ... the filter for the PartnerChannels we want to count
     *   }
     * })
    **/
    count<T extends PartnerChannelCountArgs>(
      args?: Subset<T, PartnerChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartnerChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnerChannelAggregateArgs>(args: Subset<T, PartnerChannelAggregateArgs>): Prisma.PrismaPromise<GetPartnerChannelAggregateType<T>>

    /**
     * Group by PartnerChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerChannelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnerChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerChannelGroupByArgs['orderBy'] }
        : { orderBy?: PartnerChannelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnerChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartnerChannel model
   */
  readonly fields: PartnerChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartnerChannel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partner<T extends PartnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartnerDefaultArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    services<T extends PartnerChannel$servicesArgs<ExtArgs> = {}>(args?: Subset<T, PartnerChannel$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerServiceProfilePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartnerChannel model
   */ 
  interface PartnerChannelFieldRefs {
    readonly id: FieldRef<"PartnerChannel", 'String'>
    readonly partnerId: FieldRef<"PartnerChannel", 'String'>
    readonly type: FieldRef<"PartnerChannel", 'ChannelType'>
    readonly url: FieldRef<"PartnerChannel", 'String'>
    readonly createdAt: FieldRef<"PartnerChannel", 'DateTime'>
    readonly updatedAt: FieldRef<"PartnerChannel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PartnerChannel findUnique
   */
  export type PartnerChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerChannel
     */
    select?: PartnerChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerChannel
     */
    omit?: PartnerChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerChannelInclude<ExtArgs> | null
    /**
     * Filter, which PartnerChannel to fetch.
     */
    where: PartnerChannelWhereUniqueInput
  }

  /**
   * PartnerChannel findUniqueOrThrow
   */
  export type PartnerChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerChannel
     */
    select?: PartnerChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerChannel
     */
    omit?: PartnerChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerChannelInclude<ExtArgs> | null
    /**
     * Filter, which PartnerChannel to fetch.
     */
    where: PartnerChannelWhereUniqueInput
  }

  /**
   * PartnerChannel findFirst
   */
  export type PartnerChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerChannel
     */
    select?: PartnerChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerChannel
     */
    omit?: PartnerChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerChannelInclude<ExtArgs> | null
    /**
     * Filter, which PartnerChannel to fetch.
     */
    where?: PartnerChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerChannels to fetch.
     */
    orderBy?: PartnerChannelOrderByWithRelationInput | PartnerChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerChannels.
     */
    cursor?: PartnerChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerChannels.
     */
    distinct?: PartnerChannelScalarFieldEnum | PartnerChannelScalarFieldEnum[]
  }

  /**
   * PartnerChannel findFirstOrThrow
   */
  export type PartnerChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerChannel
     */
    select?: PartnerChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerChannel
     */
    omit?: PartnerChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerChannelInclude<ExtArgs> | null
    /**
     * Filter, which PartnerChannel to fetch.
     */
    where?: PartnerChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerChannels to fetch.
     */
    orderBy?: PartnerChannelOrderByWithRelationInput | PartnerChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerChannels.
     */
    cursor?: PartnerChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerChannels.
     */
    distinct?: PartnerChannelScalarFieldEnum | PartnerChannelScalarFieldEnum[]
  }

  /**
   * PartnerChannel findMany
   */
  export type PartnerChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerChannel
     */
    select?: PartnerChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerChannel
     */
    omit?: PartnerChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerChannelInclude<ExtArgs> | null
    /**
     * Filter, which PartnerChannels to fetch.
     */
    where?: PartnerChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerChannels to fetch.
     */
    orderBy?: PartnerChannelOrderByWithRelationInput | PartnerChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartnerChannels.
     */
    cursor?: PartnerChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerChannels.
     */
    skip?: number
    distinct?: PartnerChannelScalarFieldEnum | PartnerChannelScalarFieldEnum[]
  }

  /**
   * PartnerChannel create
   */
  export type PartnerChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerChannel
     */
    select?: PartnerChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerChannel
     */
    omit?: PartnerChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a PartnerChannel.
     */
    data: XOR<PartnerChannelCreateInput, PartnerChannelUncheckedCreateInput>
  }

  /**
   * PartnerChannel createMany
   */
  export type PartnerChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartnerChannels.
     */
    data: PartnerChannelCreateManyInput | PartnerChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartnerChannel createManyAndReturn
   */
  export type PartnerChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerChannel
     */
    select?: PartnerChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerChannel
     */
    omit?: PartnerChannelOmit<ExtArgs> | null
    /**
     * The data used to create many PartnerChannels.
     */
    data: PartnerChannelCreateManyInput | PartnerChannelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerChannelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartnerChannel update
   */
  export type PartnerChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerChannel
     */
    select?: PartnerChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerChannel
     */
    omit?: PartnerChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a PartnerChannel.
     */
    data: XOR<PartnerChannelUpdateInput, PartnerChannelUncheckedUpdateInput>
    /**
     * Choose, which PartnerChannel to update.
     */
    where: PartnerChannelWhereUniqueInput
  }

  /**
   * PartnerChannel updateMany
   */
  export type PartnerChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartnerChannels.
     */
    data: XOR<PartnerChannelUpdateManyMutationInput, PartnerChannelUncheckedUpdateManyInput>
    /**
     * Filter which PartnerChannels to update
     */
    where?: PartnerChannelWhereInput
    /**
     * Limit how many PartnerChannels to update.
     */
    limit?: number
  }

  /**
   * PartnerChannel updateManyAndReturn
   */
  export type PartnerChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerChannel
     */
    select?: PartnerChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerChannel
     */
    omit?: PartnerChannelOmit<ExtArgs> | null
    /**
     * The data used to update PartnerChannels.
     */
    data: XOR<PartnerChannelUpdateManyMutationInput, PartnerChannelUncheckedUpdateManyInput>
    /**
     * Filter which PartnerChannels to update
     */
    where?: PartnerChannelWhereInput
    /**
     * Limit how many PartnerChannels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerChannelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartnerChannel upsert
   */
  export type PartnerChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerChannel
     */
    select?: PartnerChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerChannel
     */
    omit?: PartnerChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the PartnerChannel to update in case it exists.
     */
    where: PartnerChannelWhereUniqueInput
    /**
     * In case the PartnerChannel found by the `where` argument doesn't exist, create a new PartnerChannel with this data.
     */
    create: XOR<PartnerChannelCreateInput, PartnerChannelUncheckedCreateInput>
    /**
     * In case the PartnerChannel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerChannelUpdateInput, PartnerChannelUncheckedUpdateInput>
  }

  /**
   * PartnerChannel delete
   */
  export type PartnerChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerChannel
     */
    select?: PartnerChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerChannel
     */
    omit?: PartnerChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerChannelInclude<ExtArgs> | null
    /**
     * Filter which PartnerChannel to delete.
     */
    where: PartnerChannelWhereUniqueInput
  }

  /**
   * PartnerChannel deleteMany
   */
  export type PartnerChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerChannels to delete
     */
    where?: PartnerChannelWhereInput
    /**
     * Limit how many PartnerChannels to delete.
     */
    limit?: number
  }

  /**
   * PartnerChannel.services
   */
  export type PartnerChannel$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerServiceProfile
     */
    select?: PartnerServiceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerServiceProfile
     */
    omit?: PartnerServiceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerServiceProfileInclude<ExtArgs> | null
    where?: PartnerServiceProfileWhereInput
    orderBy?: PartnerServiceProfileOrderByWithRelationInput | PartnerServiceProfileOrderByWithRelationInput[]
    cursor?: PartnerServiceProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartnerServiceProfileScalarFieldEnum | PartnerServiceProfileScalarFieldEnum[]
  }

  /**
   * PartnerChannel without action
   */
  export type PartnerChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerChannel
     */
    select?: PartnerChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerChannel
     */
    omit?: PartnerChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerChannelInclude<ExtArgs> | null
  }


  /**
   * Model PartnerLocation
   */

  export type AggregatePartnerLocation = {
    _count: PartnerLocationCountAggregateOutputType | null
    _avg: PartnerLocationAvgAggregateOutputType | null
    _sum: PartnerLocationSumAggregateOutputType | null
    _min: PartnerLocationMinAggregateOutputType | null
    _max: PartnerLocationMaxAggregateOutputType | null
  }

  export type PartnerLocationAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type PartnerLocationSumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type PartnerLocationMinAggregateOutputType = {
    id: string | null
    partnerId: string | null
    name: string | null
    formattedAddress: string | null
    lat: number | null
    lng: number | null
    countryCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerLocationMaxAggregateOutputType = {
    id: string | null
    partnerId: string | null
    name: string | null
    formattedAddress: string | null
    lat: number | null
    lng: number | null
    countryCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerLocationCountAggregateOutputType = {
    id: number
    partnerId: number
    name: number
    formattedAddress: number
    lat: number
    lng: number
    countryCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartnerLocationAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type PartnerLocationSumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type PartnerLocationMinAggregateInputType = {
    id?: true
    partnerId?: true
    name?: true
    formattedAddress?: true
    lat?: true
    lng?: true
    countryCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerLocationMaxAggregateInputType = {
    id?: true
    partnerId?: true
    name?: true
    formattedAddress?: true
    lat?: true
    lng?: true
    countryCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerLocationCountAggregateInputType = {
    id?: true
    partnerId?: true
    name?: true
    formattedAddress?: true
    lat?: true
    lng?: true
    countryCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartnerLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerLocation to aggregate.
     */
    where?: PartnerLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerLocations to fetch.
     */
    orderBy?: PartnerLocationOrderByWithRelationInput | PartnerLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartnerLocations
    **/
    _count?: true | PartnerLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartnerLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartnerLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerLocationMaxAggregateInputType
  }

  export type GetPartnerLocationAggregateType<T extends PartnerLocationAggregateArgs> = {
        [P in keyof T & keyof AggregatePartnerLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartnerLocation[P]>
      : GetScalarType<T[P], AggregatePartnerLocation[P]>
  }




  export type PartnerLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerLocationWhereInput
    orderBy?: PartnerLocationOrderByWithAggregationInput | PartnerLocationOrderByWithAggregationInput[]
    by: PartnerLocationScalarFieldEnum[] | PartnerLocationScalarFieldEnum
    having?: PartnerLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerLocationCountAggregateInputType | true
    _avg?: PartnerLocationAvgAggregateInputType
    _sum?: PartnerLocationSumAggregateInputType
    _min?: PartnerLocationMinAggregateInputType
    _max?: PartnerLocationMaxAggregateInputType
  }

  export type PartnerLocationGroupByOutputType = {
    id: string
    partnerId: string
    name: string
    formattedAddress: string
    lat: number
    lng: number
    countryCode: string
    createdAt: Date
    updatedAt: Date
    _count: PartnerLocationCountAggregateOutputType | null
    _avg: PartnerLocationAvgAggregateOutputType | null
    _sum: PartnerLocationSumAggregateOutputType | null
    _min: PartnerLocationMinAggregateOutputType | null
    _max: PartnerLocationMaxAggregateOutputType | null
  }

  type GetPartnerLocationGroupByPayload<T extends PartnerLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerLocationGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerLocationGroupByOutputType[P]>
        }
      >
    >


  export type PartnerLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partnerId?: boolean
    name?: boolean
    formattedAddress?: boolean
    lat?: boolean
    lng?: boolean
    countryCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
    services?: boolean | PartnerLocation$servicesArgs<ExtArgs>
    _count?: boolean | PartnerLocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerLocation"]>

  export type PartnerLocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partnerId?: boolean
    name?: boolean
    formattedAddress?: boolean
    lat?: boolean
    lng?: boolean
    countryCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerLocation"]>

  export type PartnerLocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partnerId?: boolean
    name?: boolean
    formattedAddress?: boolean
    lat?: boolean
    lng?: boolean
    countryCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerLocation"]>

  export type PartnerLocationSelectScalar = {
    id?: boolean
    partnerId?: boolean
    name?: boolean
    formattedAddress?: boolean
    lat?: boolean
    lng?: boolean
    countryCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartnerLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "partnerId" | "name" | "formattedAddress" | "lat" | "lng" | "countryCode" | "createdAt" | "updatedAt", ExtArgs["result"]["partnerLocation"]>
  export type PartnerLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
    services?: boolean | PartnerLocation$servicesArgs<ExtArgs>
    _count?: boolean | PartnerLocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PartnerLocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
  }
  export type PartnerLocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
  }

  export type $PartnerLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartnerLocation"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      partner: Prisma.$PartnerPayload<ExtArgs>
      services: Prisma.$PartnerServiceProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      partnerId: string
      name: string
      formattedAddress: string
      lat: number
      lng: number
      countryCode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partnerLocation"]>
    composites: {}
  }

  type PartnerLocationGetPayload<S extends boolean | null | undefined | PartnerLocationDefaultArgs> = $Result.GetResult<Prisma.$PartnerLocationPayload, S>

  type PartnerLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartnerLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnerLocationCountAggregateInputType | true
    }

  export interface PartnerLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartnerLocation'], meta: { name: 'PartnerLocation' } }
    /**
     * Find zero or one PartnerLocation that matches the filter.
     * @param {PartnerLocationFindUniqueArgs} args - Arguments to find a PartnerLocation
     * @example
     * // Get one PartnerLocation
     * const partnerLocation = await prisma.partnerLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerLocationFindUniqueArgs>(args: SelectSubset<T, PartnerLocationFindUniqueArgs<ExtArgs>>): Prisma__PartnerLocationClient<$Result.GetResult<Prisma.$PartnerLocationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PartnerLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnerLocationFindUniqueOrThrowArgs} args - Arguments to find a PartnerLocation
     * @example
     * // Get one PartnerLocation
     * const partnerLocation = await prisma.partnerLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerLocationClient<$Result.GetResult<Prisma.$PartnerLocationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PartnerLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerLocationFindFirstArgs} args - Arguments to find a PartnerLocation
     * @example
     * // Get one PartnerLocation
     * const partnerLocation = await prisma.partnerLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerLocationFindFirstArgs>(args?: SelectSubset<T, PartnerLocationFindFirstArgs<ExtArgs>>): Prisma__PartnerLocationClient<$Result.GetResult<Prisma.$PartnerLocationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PartnerLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerLocationFindFirstOrThrowArgs} args - Arguments to find a PartnerLocation
     * @example
     * // Get one PartnerLocation
     * const partnerLocation = await prisma.partnerLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerLocationClient<$Result.GetResult<Prisma.$PartnerLocationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PartnerLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartnerLocations
     * const partnerLocations = await prisma.partnerLocation.findMany()
     * 
     * // Get first 10 PartnerLocations
     * const partnerLocations = await prisma.partnerLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerLocationWithIdOnly = await prisma.partnerLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnerLocationFindManyArgs>(args?: SelectSubset<T, PartnerLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerLocationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PartnerLocation.
     * @param {PartnerLocationCreateArgs} args - Arguments to create a PartnerLocation.
     * @example
     * // Create one PartnerLocation
     * const PartnerLocation = await prisma.partnerLocation.create({
     *   data: {
     *     // ... data to create a PartnerLocation
     *   }
     * })
     * 
     */
    create<T extends PartnerLocationCreateArgs>(args: SelectSubset<T, PartnerLocationCreateArgs<ExtArgs>>): Prisma__PartnerLocationClient<$Result.GetResult<Prisma.$PartnerLocationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PartnerLocations.
     * @param {PartnerLocationCreateManyArgs} args - Arguments to create many PartnerLocations.
     * @example
     * // Create many PartnerLocations
     * const partnerLocation = await prisma.partnerLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerLocationCreateManyArgs>(args?: SelectSubset<T, PartnerLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PartnerLocations and returns the data saved in the database.
     * @param {PartnerLocationCreateManyAndReturnArgs} args - Arguments to create many PartnerLocations.
     * @example
     * // Create many PartnerLocations
     * const partnerLocation = await prisma.partnerLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PartnerLocations and only return the `id`
     * const partnerLocationWithIdOnly = await prisma.partnerLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartnerLocationCreateManyAndReturnArgs>(args?: SelectSubset<T, PartnerLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerLocationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PartnerLocation.
     * @param {PartnerLocationDeleteArgs} args - Arguments to delete one PartnerLocation.
     * @example
     * // Delete one PartnerLocation
     * const PartnerLocation = await prisma.partnerLocation.delete({
     *   where: {
     *     // ... filter to delete one PartnerLocation
     *   }
     * })
     * 
     */
    delete<T extends PartnerLocationDeleteArgs>(args: SelectSubset<T, PartnerLocationDeleteArgs<ExtArgs>>): Prisma__PartnerLocationClient<$Result.GetResult<Prisma.$PartnerLocationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PartnerLocation.
     * @param {PartnerLocationUpdateArgs} args - Arguments to update one PartnerLocation.
     * @example
     * // Update one PartnerLocation
     * const partnerLocation = await prisma.partnerLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerLocationUpdateArgs>(args: SelectSubset<T, PartnerLocationUpdateArgs<ExtArgs>>): Prisma__PartnerLocationClient<$Result.GetResult<Prisma.$PartnerLocationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PartnerLocations.
     * @param {PartnerLocationDeleteManyArgs} args - Arguments to filter PartnerLocations to delete.
     * @example
     * // Delete a few PartnerLocations
     * const { count } = await prisma.partnerLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerLocationDeleteManyArgs>(args?: SelectSubset<T, PartnerLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartnerLocations
     * const partnerLocation = await prisma.partnerLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerLocationUpdateManyArgs>(args: SelectSubset<T, PartnerLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerLocations and returns the data updated in the database.
     * @param {PartnerLocationUpdateManyAndReturnArgs} args - Arguments to update many PartnerLocations.
     * @example
     * // Update many PartnerLocations
     * const partnerLocation = await prisma.partnerLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PartnerLocations and only return the `id`
     * const partnerLocationWithIdOnly = await prisma.partnerLocation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartnerLocationUpdateManyAndReturnArgs>(args: SelectSubset<T, PartnerLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerLocationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PartnerLocation.
     * @param {PartnerLocationUpsertArgs} args - Arguments to update or create a PartnerLocation.
     * @example
     * // Update or create a PartnerLocation
     * const partnerLocation = await prisma.partnerLocation.upsert({
     *   create: {
     *     // ... data to create a PartnerLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartnerLocation we want to update
     *   }
     * })
     */
    upsert<T extends PartnerLocationUpsertArgs>(args: SelectSubset<T, PartnerLocationUpsertArgs<ExtArgs>>): Prisma__PartnerLocationClient<$Result.GetResult<Prisma.$PartnerLocationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PartnerLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerLocationCountArgs} args - Arguments to filter PartnerLocations to count.
     * @example
     * // Count the number of PartnerLocations
     * const count = await prisma.partnerLocation.count({
     *   where: {
     *     // ... the filter for the PartnerLocations we want to count
     *   }
     * })
    **/
    count<T extends PartnerLocationCountArgs>(
      args?: Subset<T, PartnerLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartnerLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnerLocationAggregateArgs>(args: Subset<T, PartnerLocationAggregateArgs>): Prisma.PrismaPromise<GetPartnerLocationAggregateType<T>>

    /**
     * Group by PartnerLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerLocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnerLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerLocationGroupByArgs['orderBy'] }
        : { orderBy?: PartnerLocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnerLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartnerLocation model
   */
  readonly fields: PartnerLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartnerLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    partner<T extends PartnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartnerDefaultArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    services<T extends PartnerLocation$servicesArgs<ExtArgs> = {}>(args?: Subset<T, PartnerLocation$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerServiceProfilePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartnerLocation model
   */ 
  interface PartnerLocationFieldRefs {
    readonly id: FieldRef<"PartnerLocation", 'String'>
    readonly partnerId: FieldRef<"PartnerLocation", 'String'>
    readonly name: FieldRef<"PartnerLocation", 'String'>
    readonly formattedAddress: FieldRef<"PartnerLocation", 'String'>
    readonly lat: FieldRef<"PartnerLocation", 'Float'>
    readonly lng: FieldRef<"PartnerLocation", 'Float'>
    readonly countryCode: FieldRef<"PartnerLocation", 'String'>
    readonly createdAt: FieldRef<"PartnerLocation", 'DateTime'>
    readonly updatedAt: FieldRef<"PartnerLocation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PartnerLocation findUnique
   */
  export type PartnerLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerLocation
     */
    select?: PartnerLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerLocation
     */
    omit?: PartnerLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerLocationInclude<ExtArgs> | null
    /**
     * Filter, which PartnerLocation to fetch.
     */
    where: PartnerLocationWhereUniqueInput
  }

  /**
   * PartnerLocation findUniqueOrThrow
   */
  export type PartnerLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerLocation
     */
    select?: PartnerLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerLocation
     */
    omit?: PartnerLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerLocationInclude<ExtArgs> | null
    /**
     * Filter, which PartnerLocation to fetch.
     */
    where: PartnerLocationWhereUniqueInput
  }

  /**
   * PartnerLocation findFirst
   */
  export type PartnerLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerLocation
     */
    select?: PartnerLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerLocation
     */
    omit?: PartnerLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerLocationInclude<ExtArgs> | null
    /**
     * Filter, which PartnerLocation to fetch.
     */
    where?: PartnerLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerLocations to fetch.
     */
    orderBy?: PartnerLocationOrderByWithRelationInput | PartnerLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerLocations.
     */
    cursor?: PartnerLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerLocations.
     */
    distinct?: PartnerLocationScalarFieldEnum | PartnerLocationScalarFieldEnum[]
  }

  /**
   * PartnerLocation findFirstOrThrow
   */
  export type PartnerLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerLocation
     */
    select?: PartnerLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerLocation
     */
    omit?: PartnerLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerLocationInclude<ExtArgs> | null
    /**
     * Filter, which PartnerLocation to fetch.
     */
    where?: PartnerLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerLocations to fetch.
     */
    orderBy?: PartnerLocationOrderByWithRelationInput | PartnerLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerLocations.
     */
    cursor?: PartnerLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerLocations.
     */
    distinct?: PartnerLocationScalarFieldEnum | PartnerLocationScalarFieldEnum[]
  }

  /**
   * PartnerLocation findMany
   */
  export type PartnerLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerLocation
     */
    select?: PartnerLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerLocation
     */
    omit?: PartnerLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerLocationInclude<ExtArgs> | null
    /**
     * Filter, which PartnerLocations to fetch.
     */
    where?: PartnerLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerLocations to fetch.
     */
    orderBy?: PartnerLocationOrderByWithRelationInput | PartnerLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartnerLocations.
     */
    cursor?: PartnerLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerLocations.
     */
    skip?: number
    distinct?: PartnerLocationScalarFieldEnum | PartnerLocationScalarFieldEnum[]
  }

  /**
   * PartnerLocation create
   */
  export type PartnerLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerLocation
     */
    select?: PartnerLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerLocation
     */
    omit?: PartnerLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a PartnerLocation.
     */
    data: XOR<PartnerLocationCreateInput, PartnerLocationUncheckedCreateInput>
  }

  /**
   * PartnerLocation createMany
   */
  export type PartnerLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartnerLocations.
     */
    data: PartnerLocationCreateManyInput | PartnerLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartnerLocation createManyAndReturn
   */
  export type PartnerLocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerLocation
     */
    select?: PartnerLocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerLocation
     */
    omit?: PartnerLocationOmit<ExtArgs> | null
    /**
     * The data used to create many PartnerLocations.
     */
    data: PartnerLocationCreateManyInput | PartnerLocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerLocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartnerLocation update
   */
  export type PartnerLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerLocation
     */
    select?: PartnerLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerLocation
     */
    omit?: PartnerLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a PartnerLocation.
     */
    data: XOR<PartnerLocationUpdateInput, PartnerLocationUncheckedUpdateInput>
    /**
     * Choose, which PartnerLocation to update.
     */
    where: PartnerLocationWhereUniqueInput
  }

  /**
   * PartnerLocation updateMany
   */
  export type PartnerLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartnerLocations.
     */
    data: XOR<PartnerLocationUpdateManyMutationInput, PartnerLocationUncheckedUpdateManyInput>
    /**
     * Filter which PartnerLocations to update
     */
    where?: PartnerLocationWhereInput
    /**
     * Limit how many PartnerLocations to update.
     */
    limit?: number
  }

  /**
   * PartnerLocation updateManyAndReturn
   */
  export type PartnerLocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerLocation
     */
    select?: PartnerLocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerLocation
     */
    omit?: PartnerLocationOmit<ExtArgs> | null
    /**
     * The data used to update PartnerLocations.
     */
    data: XOR<PartnerLocationUpdateManyMutationInput, PartnerLocationUncheckedUpdateManyInput>
    /**
     * Filter which PartnerLocations to update
     */
    where?: PartnerLocationWhereInput
    /**
     * Limit how many PartnerLocations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerLocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartnerLocation upsert
   */
  export type PartnerLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerLocation
     */
    select?: PartnerLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerLocation
     */
    omit?: PartnerLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the PartnerLocation to update in case it exists.
     */
    where: PartnerLocationWhereUniqueInput
    /**
     * In case the PartnerLocation found by the `where` argument doesn't exist, create a new PartnerLocation with this data.
     */
    create: XOR<PartnerLocationCreateInput, PartnerLocationUncheckedCreateInput>
    /**
     * In case the PartnerLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerLocationUpdateInput, PartnerLocationUncheckedUpdateInput>
  }

  /**
   * PartnerLocation delete
   */
  export type PartnerLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerLocation
     */
    select?: PartnerLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerLocation
     */
    omit?: PartnerLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerLocationInclude<ExtArgs> | null
    /**
     * Filter which PartnerLocation to delete.
     */
    where: PartnerLocationWhereUniqueInput
  }

  /**
   * PartnerLocation deleteMany
   */
  export type PartnerLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerLocations to delete
     */
    where?: PartnerLocationWhereInput
    /**
     * Limit how many PartnerLocations to delete.
     */
    limit?: number
  }

  /**
   * PartnerLocation.services
   */
  export type PartnerLocation$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerServiceProfile
     */
    select?: PartnerServiceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerServiceProfile
     */
    omit?: PartnerServiceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerServiceProfileInclude<ExtArgs> | null
    where?: PartnerServiceProfileWhereInput
    orderBy?: PartnerServiceProfileOrderByWithRelationInput | PartnerServiceProfileOrderByWithRelationInput[]
    cursor?: PartnerServiceProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartnerServiceProfileScalarFieldEnum | PartnerServiceProfileScalarFieldEnum[]
  }

  /**
   * PartnerLocation without action
   */
  export type PartnerLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerLocation
     */
    select?: PartnerLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerLocation
     */
    omit?: PartnerLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerLocationInclude<ExtArgs> | null
  }


  /**
   * Model PartnerServiceProfile
   */

  export type AggregatePartnerServiceProfile = {
    _count: PartnerServiceProfileCountAggregateOutputType | null
    _min: PartnerServiceProfileMinAggregateOutputType | null
    _max: PartnerServiceProfileMaxAggregateOutputType | null
  }

  export type PartnerServiceProfileMinAggregateOutputType = {
    id: string | null
    channelId: string | null
    locationId: string | null
    serviceTypeId: string | null
    available: boolean | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerServiceProfileMaxAggregateOutputType = {
    id: string | null
    channelId: string | null
    locationId: string | null
    serviceTypeId: string | null
    available: boolean | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerServiceProfileCountAggregateOutputType = {
    id: number
    channelId: number
    locationId: number
    serviceTypeId: number
    available: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartnerServiceProfileMinAggregateInputType = {
    id?: true
    channelId?: true
    locationId?: true
    serviceTypeId?: true
    available?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerServiceProfileMaxAggregateInputType = {
    id?: true
    channelId?: true
    locationId?: true
    serviceTypeId?: true
    available?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerServiceProfileCountAggregateInputType = {
    id?: true
    channelId?: true
    locationId?: true
    serviceTypeId?: true
    available?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartnerServiceProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerServiceProfile to aggregate.
     */
    where?: PartnerServiceProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerServiceProfiles to fetch.
     */
    orderBy?: PartnerServiceProfileOrderByWithRelationInput | PartnerServiceProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerServiceProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerServiceProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerServiceProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartnerServiceProfiles
    **/
    _count?: true | PartnerServiceProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerServiceProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerServiceProfileMaxAggregateInputType
  }

  export type GetPartnerServiceProfileAggregateType<T extends PartnerServiceProfileAggregateArgs> = {
        [P in keyof T & keyof AggregatePartnerServiceProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartnerServiceProfile[P]>
      : GetScalarType<T[P], AggregatePartnerServiceProfile[P]>
  }




  export type PartnerServiceProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerServiceProfileWhereInput
    orderBy?: PartnerServiceProfileOrderByWithAggregationInput | PartnerServiceProfileOrderByWithAggregationInput[]
    by: PartnerServiceProfileScalarFieldEnum[] | PartnerServiceProfileScalarFieldEnum
    having?: PartnerServiceProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerServiceProfileCountAggregateInputType | true
    _min?: PartnerServiceProfileMinAggregateInputType
    _max?: PartnerServiceProfileMaxAggregateInputType
  }

  export type PartnerServiceProfileGroupByOutputType = {
    id: string
    channelId: string | null
    locationId: string | null
    serviceTypeId: string
    available: boolean
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: PartnerServiceProfileCountAggregateOutputType | null
    _min: PartnerServiceProfileMinAggregateOutputType | null
    _max: PartnerServiceProfileMaxAggregateOutputType | null
  }

  type GetPartnerServiceProfileGroupByPayload<T extends PartnerServiceProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerServiceProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerServiceProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerServiceProfileGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerServiceProfileGroupByOutputType[P]>
        }
      >
    >


  export type PartnerServiceProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    locationId?: boolean
    serviceTypeId?: boolean
    available?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | PartnerServiceProfile$channelArgs<ExtArgs>
    location?: boolean | PartnerServiceProfile$locationArgs<ExtArgs>
    serviceType?: boolean | ServiceTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerServiceProfile"]>

  export type PartnerServiceProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    locationId?: boolean
    serviceTypeId?: boolean
    available?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | PartnerServiceProfile$channelArgs<ExtArgs>
    location?: boolean | PartnerServiceProfile$locationArgs<ExtArgs>
    serviceType?: boolean | ServiceTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerServiceProfile"]>

  export type PartnerServiceProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    locationId?: boolean
    serviceTypeId?: boolean
    available?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    channel?: boolean | PartnerServiceProfile$channelArgs<ExtArgs>
    location?: boolean | PartnerServiceProfile$locationArgs<ExtArgs>
    serviceType?: boolean | ServiceTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerServiceProfile"]>

  export type PartnerServiceProfileSelectScalar = {
    id?: boolean
    channelId?: boolean
    locationId?: boolean
    serviceTypeId?: boolean
    available?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartnerServiceProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "channelId" | "locationId" | "serviceTypeId" | "available" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["partnerServiceProfile"]>
  export type PartnerServiceProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | PartnerServiceProfile$channelArgs<ExtArgs>
    location?: boolean | PartnerServiceProfile$locationArgs<ExtArgs>
    serviceType?: boolean | ServiceTypeDefaultArgs<ExtArgs>
  }
  export type PartnerServiceProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | PartnerServiceProfile$channelArgs<ExtArgs>
    location?: boolean | PartnerServiceProfile$locationArgs<ExtArgs>
    serviceType?: boolean | ServiceTypeDefaultArgs<ExtArgs>
  }
  export type PartnerServiceProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | PartnerServiceProfile$channelArgs<ExtArgs>
    location?: boolean | PartnerServiceProfile$locationArgs<ExtArgs>
    serviceType?: boolean | ServiceTypeDefaultArgs<ExtArgs>
  }

  export type $PartnerServiceProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartnerServiceProfile"
    objects: {
      channel: Prisma.$PartnerChannelPayload<ExtArgs> | null
      location: Prisma.$PartnerLocationPayload<ExtArgs> | null
      serviceType: Prisma.$ServiceTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      channelId: string | null
      locationId: string | null
      serviceTypeId: string
      available: boolean
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partnerServiceProfile"]>
    composites: {}
  }

  type PartnerServiceProfileGetPayload<S extends boolean | null | undefined | PartnerServiceProfileDefaultArgs> = $Result.GetResult<Prisma.$PartnerServiceProfilePayload, S>

  type PartnerServiceProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartnerServiceProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnerServiceProfileCountAggregateInputType | true
    }

  export interface PartnerServiceProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartnerServiceProfile'], meta: { name: 'PartnerServiceProfile' } }
    /**
     * Find zero or one PartnerServiceProfile that matches the filter.
     * @param {PartnerServiceProfileFindUniqueArgs} args - Arguments to find a PartnerServiceProfile
     * @example
     * // Get one PartnerServiceProfile
     * const partnerServiceProfile = await prisma.partnerServiceProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerServiceProfileFindUniqueArgs>(args: SelectSubset<T, PartnerServiceProfileFindUniqueArgs<ExtArgs>>): Prisma__PartnerServiceProfileClient<$Result.GetResult<Prisma.$PartnerServiceProfilePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PartnerServiceProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnerServiceProfileFindUniqueOrThrowArgs} args - Arguments to find a PartnerServiceProfile
     * @example
     * // Get one PartnerServiceProfile
     * const partnerServiceProfile = await prisma.partnerServiceProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerServiceProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerServiceProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerServiceProfileClient<$Result.GetResult<Prisma.$PartnerServiceProfilePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PartnerServiceProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerServiceProfileFindFirstArgs} args - Arguments to find a PartnerServiceProfile
     * @example
     * // Get one PartnerServiceProfile
     * const partnerServiceProfile = await prisma.partnerServiceProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerServiceProfileFindFirstArgs>(args?: SelectSubset<T, PartnerServiceProfileFindFirstArgs<ExtArgs>>): Prisma__PartnerServiceProfileClient<$Result.GetResult<Prisma.$PartnerServiceProfilePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PartnerServiceProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerServiceProfileFindFirstOrThrowArgs} args - Arguments to find a PartnerServiceProfile
     * @example
     * // Get one PartnerServiceProfile
     * const partnerServiceProfile = await prisma.partnerServiceProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerServiceProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerServiceProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerServiceProfileClient<$Result.GetResult<Prisma.$PartnerServiceProfilePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PartnerServiceProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerServiceProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartnerServiceProfiles
     * const partnerServiceProfiles = await prisma.partnerServiceProfile.findMany()
     * 
     * // Get first 10 PartnerServiceProfiles
     * const partnerServiceProfiles = await prisma.partnerServiceProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerServiceProfileWithIdOnly = await prisma.partnerServiceProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnerServiceProfileFindManyArgs>(args?: SelectSubset<T, PartnerServiceProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerServiceProfilePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PartnerServiceProfile.
     * @param {PartnerServiceProfileCreateArgs} args - Arguments to create a PartnerServiceProfile.
     * @example
     * // Create one PartnerServiceProfile
     * const PartnerServiceProfile = await prisma.partnerServiceProfile.create({
     *   data: {
     *     // ... data to create a PartnerServiceProfile
     *   }
     * })
     * 
     */
    create<T extends PartnerServiceProfileCreateArgs>(args: SelectSubset<T, PartnerServiceProfileCreateArgs<ExtArgs>>): Prisma__PartnerServiceProfileClient<$Result.GetResult<Prisma.$PartnerServiceProfilePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PartnerServiceProfiles.
     * @param {PartnerServiceProfileCreateManyArgs} args - Arguments to create many PartnerServiceProfiles.
     * @example
     * // Create many PartnerServiceProfiles
     * const partnerServiceProfile = await prisma.partnerServiceProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerServiceProfileCreateManyArgs>(args?: SelectSubset<T, PartnerServiceProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PartnerServiceProfiles and returns the data saved in the database.
     * @param {PartnerServiceProfileCreateManyAndReturnArgs} args - Arguments to create many PartnerServiceProfiles.
     * @example
     * // Create many PartnerServiceProfiles
     * const partnerServiceProfile = await prisma.partnerServiceProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PartnerServiceProfiles and only return the `id`
     * const partnerServiceProfileWithIdOnly = await prisma.partnerServiceProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartnerServiceProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, PartnerServiceProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerServiceProfilePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PartnerServiceProfile.
     * @param {PartnerServiceProfileDeleteArgs} args - Arguments to delete one PartnerServiceProfile.
     * @example
     * // Delete one PartnerServiceProfile
     * const PartnerServiceProfile = await prisma.partnerServiceProfile.delete({
     *   where: {
     *     // ... filter to delete one PartnerServiceProfile
     *   }
     * })
     * 
     */
    delete<T extends PartnerServiceProfileDeleteArgs>(args: SelectSubset<T, PartnerServiceProfileDeleteArgs<ExtArgs>>): Prisma__PartnerServiceProfileClient<$Result.GetResult<Prisma.$PartnerServiceProfilePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PartnerServiceProfile.
     * @param {PartnerServiceProfileUpdateArgs} args - Arguments to update one PartnerServiceProfile.
     * @example
     * // Update one PartnerServiceProfile
     * const partnerServiceProfile = await prisma.partnerServiceProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerServiceProfileUpdateArgs>(args: SelectSubset<T, PartnerServiceProfileUpdateArgs<ExtArgs>>): Prisma__PartnerServiceProfileClient<$Result.GetResult<Prisma.$PartnerServiceProfilePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PartnerServiceProfiles.
     * @param {PartnerServiceProfileDeleteManyArgs} args - Arguments to filter PartnerServiceProfiles to delete.
     * @example
     * // Delete a few PartnerServiceProfiles
     * const { count } = await prisma.partnerServiceProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerServiceProfileDeleteManyArgs>(args?: SelectSubset<T, PartnerServiceProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerServiceProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerServiceProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartnerServiceProfiles
     * const partnerServiceProfile = await prisma.partnerServiceProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerServiceProfileUpdateManyArgs>(args: SelectSubset<T, PartnerServiceProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerServiceProfiles and returns the data updated in the database.
     * @param {PartnerServiceProfileUpdateManyAndReturnArgs} args - Arguments to update many PartnerServiceProfiles.
     * @example
     * // Update many PartnerServiceProfiles
     * const partnerServiceProfile = await prisma.partnerServiceProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PartnerServiceProfiles and only return the `id`
     * const partnerServiceProfileWithIdOnly = await prisma.partnerServiceProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartnerServiceProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, PartnerServiceProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerServiceProfilePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PartnerServiceProfile.
     * @param {PartnerServiceProfileUpsertArgs} args - Arguments to update or create a PartnerServiceProfile.
     * @example
     * // Update or create a PartnerServiceProfile
     * const partnerServiceProfile = await prisma.partnerServiceProfile.upsert({
     *   create: {
     *     // ... data to create a PartnerServiceProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartnerServiceProfile we want to update
     *   }
     * })
     */
    upsert<T extends PartnerServiceProfileUpsertArgs>(args: SelectSubset<T, PartnerServiceProfileUpsertArgs<ExtArgs>>): Prisma__PartnerServiceProfileClient<$Result.GetResult<Prisma.$PartnerServiceProfilePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PartnerServiceProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerServiceProfileCountArgs} args - Arguments to filter PartnerServiceProfiles to count.
     * @example
     * // Count the number of PartnerServiceProfiles
     * const count = await prisma.partnerServiceProfile.count({
     *   where: {
     *     // ... the filter for the PartnerServiceProfiles we want to count
     *   }
     * })
    **/
    count<T extends PartnerServiceProfileCountArgs>(
      args?: Subset<T, PartnerServiceProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerServiceProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartnerServiceProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerServiceProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnerServiceProfileAggregateArgs>(args: Subset<T, PartnerServiceProfileAggregateArgs>): Prisma.PrismaPromise<GetPartnerServiceProfileAggregateType<T>>

    /**
     * Group by PartnerServiceProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerServiceProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnerServiceProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerServiceProfileGroupByArgs['orderBy'] }
        : { orderBy?: PartnerServiceProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnerServiceProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerServiceProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartnerServiceProfile model
   */
  readonly fields: PartnerServiceProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartnerServiceProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerServiceProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channel<T extends PartnerServiceProfile$channelArgs<ExtArgs> = {}>(args?: Subset<T, PartnerServiceProfile$channelArgs<ExtArgs>>): Prisma__PartnerChannelClient<$Result.GetResult<Prisma.$PartnerChannelPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    location<T extends PartnerServiceProfile$locationArgs<ExtArgs> = {}>(args?: Subset<T, PartnerServiceProfile$locationArgs<ExtArgs>>): Prisma__PartnerLocationClient<$Result.GetResult<Prisma.$PartnerLocationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    serviceType<T extends ServiceTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceTypeDefaultArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartnerServiceProfile model
   */ 
  interface PartnerServiceProfileFieldRefs {
    readonly id: FieldRef<"PartnerServiceProfile", 'String'>
    readonly channelId: FieldRef<"PartnerServiceProfile", 'String'>
    readonly locationId: FieldRef<"PartnerServiceProfile", 'String'>
    readonly serviceTypeId: FieldRef<"PartnerServiceProfile", 'String'>
    readonly available: FieldRef<"PartnerServiceProfile", 'Boolean'>
    readonly notes: FieldRef<"PartnerServiceProfile", 'String'>
    readonly createdAt: FieldRef<"PartnerServiceProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"PartnerServiceProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PartnerServiceProfile findUnique
   */
  export type PartnerServiceProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerServiceProfile
     */
    select?: PartnerServiceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerServiceProfile
     */
    omit?: PartnerServiceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerServiceProfileInclude<ExtArgs> | null
    /**
     * Filter, which PartnerServiceProfile to fetch.
     */
    where: PartnerServiceProfileWhereUniqueInput
  }

  /**
   * PartnerServiceProfile findUniqueOrThrow
   */
  export type PartnerServiceProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerServiceProfile
     */
    select?: PartnerServiceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerServiceProfile
     */
    omit?: PartnerServiceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerServiceProfileInclude<ExtArgs> | null
    /**
     * Filter, which PartnerServiceProfile to fetch.
     */
    where: PartnerServiceProfileWhereUniqueInput
  }

  /**
   * PartnerServiceProfile findFirst
   */
  export type PartnerServiceProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerServiceProfile
     */
    select?: PartnerServiceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerServiceProfile
     */
    omit?: PartnerServiceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerServiceProfileInclude<ExtArgs> | null
    /**
     * Filter, which PartnerServiceProfile to fetch.
     */
    where?: PartnerServiceProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerServiceProfiles to fetch.
     */
    orderBy?: PartnerServiceProfileOrderByWithRelationInput | PartnerServiceProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerServiceProfiles.
     */
    cursor?: PartnerServiceProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerServiceProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerServiceProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerServiceProfiles.
     */
    distinct?: PartnerServiceProfileScalarFieldEnum | PartnerServiceProfileScalarFieldEnum[]
  }

  /**
   * PartnerServiceProfile findFirstOrThrow
   */
  export type PartnerServiceProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerServiceProfile
     */
    select?: PartnerServiceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerServiceProfile
     */
    omit?: PartnerServiceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerServiceProfileInclude<ExtArgs> | null
    /**
     * Filter, which PartnerServiceProfile to fetch.
     */
    where?: PartnerServiceProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerServiceProfiles to fetch.
     */
    orderBy?: PartnerServiceProfileOrderByWithRelationInput | PartnerServiceProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerServiceProfiles.
     */
    cursor?: PartnerServiceProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerServiceProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerServiceProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerServiceProfiles.
     */
    distinct?: PartnerServiceProfileScalarFieldEnum | PartnerServiceProfileScalarFieldEnum[]
  }

  /**
   * PartnerServiceProfile findMany
   */
  export type PartnerServiceProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerServiceProfile
     */
    select?: PartnerServiceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerServiceProfile
     */
    omit?: PartnerServiceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerServiceProfileInclude<ExtArgs> | null
    /**
     * Filter, which PartnerServiceProfiles to fetch.
     */
    where?: PartnerServiceProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerServiceProfiles to fetch.
     */
    orderBy?: PartnerServiceProfileOrderByWithRelationInput | PartnerServiceProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartnerServiceProfiles.
     */
    cursor?: PartnerServiceProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerServiceProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerServiceProfiles.
     */
    skip?: number
    distinct?: PartnerServiceProfileScalarFieldEnum | PartnerServiceProfileScalarFieldEnum[]
  }

  /**
   * PartnerServiceProfile create
   */
  export type PartnerServiceProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerServiceProfile
     */
    select?: PartnerServiceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerServiceProfile
     */
    omit?: PartnerServiceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerServiceProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a PartnerServiceProfile.
     */
    data: XOR<PartnerServiceProfileCreateInput, PartnerServiceProfileUncheckedCreateInput>
  }

  /**
   * PartnerServiceProfile createMany
   */
  export type PartnerServiceProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartnerServiceProfiles.
     */
    data: PartnerServiceProfileCreateManyInput | PartnerServiceProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartnerServiceProfile createManyAndReturn
   */
  export type PartnerServiceProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerServiceProfile
     */
    select?: PartnerServiceProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerServiceProfile
     */
    omit?: PartnerServiceProfileOmit<ExtArgs> | null
    /**
     * The data used to create many PartnerServiceProfiles.
     */
    data: PartnerServiceProfileCreateManyInput | PartnerServiceProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerServiceProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartnerServiceProfile update
   */
  export type PartnerServiceProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerServiceProfile
     */
    select?: PartnerServiceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerServiceProfile
     */
    omit?: PartnerServiceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerServiceProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a PartnerServiceProfile.
     */
    data: XOR<PartnerServiceProfileUpdateInput, PartnerServiceProfileUncheckedUpdateInput>
    /**
     * Choose, which PartnerServiceProfile to update.
     */
    where: PartnerServiceProfileWhereUniqueInput
  }

  /**
   * PartnerServiceProfile updateMany
   */
  export type PartnerServiceProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartnerServiceProfiles.
     */
    data: XOR<PartnerServiceProfileUpdateManyMutationInput, PartnerServiceProfileUncheckedUpdateManyInput>
    /**
     * Filter which PartnerServiceProfiles to update
     */
    where?: PartnerServiceProfileWhereInput
    /**
     * Limit how many PartnerServiceProfiles to update.
     */
    limit?: number
  }

  /**
   * PartnerServiceProfile updateManyAndReturn
   */
  export type PartnerServiceProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerServiceProfile
     */
    select?: PartnerServiceProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerServiceProfile
     */
    omit?: PartnerServiceProfileOmit<ExtArgs> | null
    /**
     * The data used to update PartnerServiceProfiles.
     */
    data: XOR<PartnerServiceProfileUpdateManyMutationInput, PartnerServiceProfileUncheckedUpdateManyInput>
    /**
     * Filter which PartnerServiceProfiles to update
     */
    where?: PartnerServiceProfileWhereInput
    /**
     * Limit how many PartnerServiceProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerServiceProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartnerServiceProfile upsert
   */
  export type PartnerServiceProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerServiceProfile
     */
    select?: PartnerServiceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerServiceProfile
     */
    omit?: PartnerServiceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerServiceProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the PartnerServiceProfile to update in case it exists.
     */
    where: PartnerServiceProfileWhereUniqueInput
    /**
     * In case the PartnerServiceProfile found by the `where` argument doesn't exist, create a new PartnerServiceProfile with this data.
     */
    create: XOR<PartnerServiceProfileCreateInput, PartnerServiceProfileUncheckedCreateInput>
    /**
     * In case the PartnerServiceProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerServiceProfileUpdateInput, PartnerServiceProfileUncheckedUpdateInput>
  }

  /**
   * PartnerServiceProfile delete
   */
  export type PartnerServiceProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerServiceProfile
     */
    select?: PartnerServiceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerServiceProfile
     */
    omit?: PartnerServiceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerServiceProfileInclude<ExtArgs> | null
    /**
     * Filter which PartnerServiceProfile to delete.
     */
    where: PartnerServiceProfileWhereUniqueInput
  }

  /**
   * PartnerServiceProfile deleteMany
   */
  export type PartnerServiceProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerServiceProfiles to delete
     */
    where?: PartnerServiceProfileWhereInput
    /**
     * Limit how many PartnerServiceProfiles to delete.
     */
    limit?: number
  }

  /**
   * PartnerServiceProfile.channel
   */
  export type PartnerServiceProfile$channelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerChannel
     */
    select?: PartnerChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerChannel
     */
    omit?: PartnerChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerChannelInclude<ExtArgs> | null
    where?: PartnerChannelWhereInput
  }

  /**
   * PartnerServiceProfile.location
   */
  export type PartnerServiceProfile$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerLocation
     */
    select?: PartnerLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerLocation
     */
    omit?: PartnerLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerLocationInclude<ExtArgs> | null
    where?: PartnerLocationWhereInput
  }

  /**
   * PartnerServiceProfile without action
   */
  export type PartnerServiceProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerServiceProfile
     */
    select?: PartnerServiceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerServiceProfile
     */
    omit?: PartnerServiceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerServiceProfileInclude<ExtArgs> | null
  }


  /**
   * Model ServiceType
   */

  export type AggregateServiceType = {
    _count: ServiceTypeCountAggregateOutputType | null
    _min: ServiceTypeMinAggregateOutputType | null
    _max: ServiceTypeMaxAggregateOutputType | null
  }

  export type ServiceTypeMinAggregateOutputType = {
    id: string | null
    key: string | null
    label: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceTypeMaxAggregateOutputType = {
    id: string | null
    key: string | null
    label: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceTypeCountAggregateOutputType = {
    id: number
    key: number
    label: number
    icon: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceTypeMinAggregateInputType = {
    id?: true
    key?: true
    label?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceTypeMaxAggregateInputType = {
    id?: true
    key?: true
    label?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceTypeCountAggregateInputType = {
    id?: true
    key?: true
    label?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceType to aggregate.
     */
    where?: ServiceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceTypes to fetch.
     */
    orderBy?: ServiceTypeOrderByWithRelationInput | ServiceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceTypes
    **/
    _count?: true | ServiceTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceTypeMaxAggregateInputType
  }

  export type GetServiceTypeAggregateType<T extends ServiceTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceType[P]>
      : GetScalarType<T[P], AggregateServiceType[P]>
  }




  export type ServiceTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceTypeWhereInput
    orderBy?: ServiceTypeOrderByWithAggregationInput | ServiceTypeOrderByWithAggregationInput[]
    by: ServiceTypeScalarFieldEnum[] | ServiceTypeScalarFieldEnum
    having?: ServiceTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceTypeCountAggregateInputType | true
    _min?: ServiceTypeMinAggregateInputType
    _max?: ServiceTypeMaxAggregateInputType
  }

  export type ServiceTypeGroupByOutputType = {
    id: string
    key: string
    label: string
    icon: string | null
    createdAt: Date
    updatedAt: Date
    _count: ServiceTypeCountAggregateOutputType | null
    _min: ServiceTypeMinAggregateOutputType | null
    _max: ServiceTypeMaxAggregateOutputType | null
  }

  type GetServiceTypeGroupByPayload<T extends ServiceTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceTypeGroupByOutputType[P]>
        }
      >
    >


  export type ServiceTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    services?: boolean | ServiceType$servicesArgs<ExtArgs>
    _count?: boolean | ServiceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceType"]>

  export type ServiceTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["serviceType"]>

  export type ServiceTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["serviceType"]>

  export type ServiceTypeSelectScalar = {
    id?: boolean
    key?: boolean
    label?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "label" | "icon" | "createdAt" | "updatedAt", ExtArgs["result"]["serviceType"]>
  export type ServiceTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ServiceType$servicesArgs<ExtArgs>
    _count?: boolean | ServiceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServiceTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceType"
    objects: {
      services: Prisma.$PartnerServiceProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      label: string
      icon: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["serviceType"]>
    composites: {}
  }

  type ServiceTypeGetPayload<S extends boolean | null | undefined | ServiceTypeDefaultArgs> = $Result.GetResult<Prisma.$ServiceTypePayload, S>

  type ServiceTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceTypeCountAggregateInputType | true
    }

  export interface ServiceTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceType'], meta: { name: 'ServiceType' } }
    /**
     * Find zero or one ServiceType that matches the filter.
     * @param {ServiceTypeFindUniqueArgs} args - Arguments to find a ServiceType
     * @example
     * // Get one ServiceType
     * const serviceType = await prisma.serviceType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceTypeFindUniqueArgs>(args: SelectSubset<T, ServiceTypeFindUniqueArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ServiceType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceTypeFindUniqueOrThrowArgs} args - Arguments to find a ServiceType
     * @example
     * // Get one ServiceType
     * const serviceType = await prisma.serviceType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ServiceType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeFindFirstArgs} args - Arguments to find a ServiceType
     * @example
     * // Get one ServiceType
     * const serviceType = await prisma.serviceType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceTypeFindFirstArgs>(args?: SelectSubset<T, ServiceTypeFindFirstArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ServiceType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeFindFirstOrThrowArgs} args - Arguments to find a ServiceType
     * @example
     * // Get one ServiceType
     * const serviceType = await prisma.serviceType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ServiceTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceTypes
     * const serviceTypes = await prisma.serviceType.findMany()
     * 
     * // Get first 10 ServiceTypes
     * const serviceTypes = await prisma.serviceType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceTypeWithIdOnly = await prisma.serviceType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceTypeFindManyArgs>(args?: SelectSubset<T, ServiceTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ServiceType.
     * @param {ServiceTypeCreateArgs} args - Arguments to create a ServiceType.
     * @example
     * // Create one ServiceType
     * const ServiceType = await prisma.serviceType.create({
     *   data: {
     *     // ... data to create a ServiceType
     *   }
     * })
     * 
     */
    create<T extends ServiceTypeCreateArgs>(args: SelectSubset<T, ServiceTypeCreateArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ServiceTypes.
     * @param {ServiceTypeCreateManyArgs} args - Arguments to create many ServiceTypes.
     * @example
     * // Create many ServiceTypes
     * const serviceType = await prisma.serviceType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceTypeCreateManyArgs>(args?: SelectSubset<T, ServiceTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceTypes and returns the data saved in the database.
     * @param {ServiceTypeCreateManyAndReturnArgs} args - Arguments to create many ServiceTypes.
     * @example
     * // Create many ServiceTypes
     * const serviceType = await prisma.serviceType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceTypes and only return the `id`
     * const serviceTypeWithIdOnly = await prisma.serviceType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ServiceType.
     * @param {ServiceTypeDeleteArgs} args - Arguments to delete one ServiceType.
     * @example
     * // Delete one ServiceType
     * const ServiceType = await prisma.serviceType.delete({
     *   where: {
     *     // ... filter to delete one ServiceType
     *   }
     * })
     * 
     */
    delete<T extends ServiceTypeDeleteArgs>(args: SelectSubset<T, ServiceTypeDeleteArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ServiceType.
     * @param {ServiceTypeUpdateArgs} args - Arguments to update one ServiceType.
     * @example
     * // Update one ServiceType
     * const serviceType = await prisma.serviceType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceTypeUpdateArgs>(args: SelectSubset<T, ServiceTypeUpdateArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ServiceTypes.
     * @param {ServiceTypeDeleteManyArgs} args - Arguments to filter ServiceTypes to delete.
     * @example
     * // Delete a few ServiceTypes
     * const { count } = await prisma.serviceType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceTypeDeleteManyArgs>(args?: SelectSubset<T, ServiceTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceTypes
     * const serviceType = await prisma.serviceType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceTypeUpdateManyArgs>(args: SelectSubset<T, ServiceTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceTypes and returns the data updated in the database.
     * @param {ServiceTypeUpdateManyAndReturnArgs} args - Arguments to update many ServiceTypes.
     * @example
     * // Update many ServiceTypes
     * const serviceType = await prisma.serviceType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceTypes and only return the `id`
     * const serviceTypeWithIdOnly = await prisma.serviceType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ServiceType.
     * @param {ServiceTypeUpsertArgs} args - Arguments to update or create a ServiceType.
     * @example
     * // Update or create a ServiceType
     * const serviceType = await prisma.serviceType.upsert({
     *   create: {
     *     // ... data to create a ServiceType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceType we want to update
     *   }
     * })
     */
    upsert<T extends ServiceTypeUpsertArgs>(args: SelectSubset<T, ServiceTypeUpsertArgs<ExtArgs>>): Prisma__ServiceTypeClient<$Result.GetResult<Prisma.$ServiceTypePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ServiceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeCountArgs} args - Arguments to filter ServiceTypes to count.
     * @example
     * // Count the number of ServiceTypes
     * const count = await prisma.serviceType.count({
     *   where: {
     *     // ... the filter for the ServiceTypes we want to count
     *   }
     * })
    **/
    count<T extends ServiceTypeCountArgs>(
      args?: Subset<T, ServiceTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceTypeAggregateArgs>(args: Subset<T, ServiceTypeAggregateArgs>): Prisma.PrismaPromise<GetServiceTypeAggregateType<T>>

    /**
     * Group by ServiceType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceTypeGroupByArgs['orderBy'] }
        : { orderBy?: ServiceTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceType model
   */
  readonly fields: ServiceTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends ServiceType$servicesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceType$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerServiceProfilePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceType model
   */ 
  interface ServiceTypeFieldRefs {
    readonly id: FieldRef<"ServiceType", 'String'>
    readonly key: FieldRef<"ServiceType", 'String'>
    readonly label: FieldRef<"ServiceType", 'String'>
    readonly icon: FieldRef<"ServiceType", 'String'>
    readonly createdAt: FieldRef<"ServiceType", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceType findUnique
   */
  export type ServiceTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceType to fetch.
     */
    where: ServiceTypeWhereUniqueInput
  }

  /**
   * ServiceType findUniqueOrThrow
   */
  export type ServiceTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceType to fetch.
     */
    where: ServiceTypeWhereUniqueInput
  }

  /**
   * ServiceType findFirst
   */
  export type ServiceTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceType to fetch.
     */
    where?: ServiceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceTypes to fetch.
     */
    orderBy?: ServiceTypeOrderByWithRelationInput | ServiceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceTypes.
     */
    cursor?: ServiceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceTypes.
     */
    distinct?: ServiceTypeScalarFieldEnum | ServiceTypeScalarFieldEnum[]
  }

  /**
   * ServiceType findFirstOrThrow
   */
  export type ServiceTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceType to fetch.
     */
    where?: ServiceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceTypes to fetch.
     */
    orderBy?: ServiceTypeOrderByWithRelationInput | ServiceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceTypes.
     */
    cursor?: ServiceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceTypes.
     */
    distinct?: ServiceTypeScalarFieldEnum | ServiceTypeScalarFieldEnum[]
  }

  /**
   * ServiceType findMany
   */
  export type ServiceTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ServiceTypes to fetch.
     */
    where?: ServiceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceTypes to fetch.
     */
    orderBy?: ServiceTypeOrderByWithRelationInput | ServiceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceTypes.
     */
    cursor?: ServiceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceTypes.
     */
    skip?: number
    distinct?: ServiceTypeScalarFieldEnum | ServiceTypeScalarFieldEnum[]
  }

  /**
   * ServiceType create
   */
  export type ServiceTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceType.
     */
    data: XOR<ServiceTypeCreateInput, ServiceTypeUncheckedCreateInput>
  }

  /**
   * ServiceType createMany
   */
  export type ServiceTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceTypes.
     */
    data: ServiceTypeCreateManyInput | ServiceTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceType createManyAndReturn
   */
  export type ServiceTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceTypes.
     */
    data: ServiceTypeCreateManyInput | ServiceTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceType update
   */
  export type ServiceTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceType.
     */
    data: XOR<ServiceTypeUpdateInput, ServiceTypeUncheckedUpdateInput>
    /**
     * Choose, which ServiceType to update.
     */
    where: ServiceTypeWhereUniqueInput
  }

  /**
   * ServiceType updateMany
   */
  export type ServiceTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceTypes.
     */
    data: XOR<ServiceTypeUpdateManyMutationInput, ServiceTypeUncheckedUpdateManyInput>
    /**
     * Filter which ServiceTypes to update
     */
    where?: ServiceTypeWhereInput
    /**
     * Limit how many ServiceTypes to update.
     */
    limit?: number
  }

  /**
   * ServiceType updateManyAndReturn
   */
  export type ServiceTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * The data used to update ServiceTypes.
     */
    data: XOR<ServiceTypeUpdateManyMutationInput, ServiceTypeUncheckedUpdateManyInput>
    /**
     * Filter which ServiceTypes to update
     */
    where?: ServiceTypeWhereInput
    /**
     * Limit how many ServiceTypes to update.
     */
    limit?: number
  }

  /**
   * ServiceType upsert
   */
  export type ServiceTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceType to update in case it exists.
     */
    where: ServiceTypeWhereUniqueInput
    /**
     * In case the ServiceType found by the `where` argument doesn't exist, create a new ServiceType with this data.
     */
    create: XOR<ServiceTypeCreateInput, ServiceTypeUncheckedCreateInput>
    /**
     * In case the ServiceType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceTypeUpdateInput, ServiceTypeUncheckedUpdateInput>
  }

  /**
   * ServiceType delete
   */
  export type ServiceTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
    /**
     * Filter which ServiceType to delete.
     */
    where: ServiceTypeWhereUniqueInput
  }

  /**
   * ServiceType deleteMany
   */
  export type ServiceTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceTypes to delete
     */
    where?: ServiceTypeWhereInput
    /**
     * Limit how many ServiceTypes to delete.
     */
    limit?: number
  }

  /**
   * ServiceType.services
   */
  export type ServiceType$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerServiceProfile
     */
    select?: PartnerServiceProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerServiceProfile
     */
    omit?: PartnerServiceProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerServiceProfileInclude<ExtArgs> | null
    where?: PartnerServiceProfileWhereInput
    orderBy?: PartnerServiceProfileOrderByWithRelationInput | PartnerServiceProfileOrderByWithRelationInput[]
    cursor?: PartnerServiceProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartnerServiceProfileScalarFieldEnum | PartnerServiceProfileScalarFieldEnum[]
  }

  /**
   * ServiceType without action
   */
  export type ServiceTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceType
     */
    select?: ServiceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceType
     */
    omit?: ServiceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceTypeInclude<ExtArgs> | null
  }


  /**
   * Model ProductCategory
   */

  export type AggregateProductCategory = {
    _count: ProductCategoryCountAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  export type ProductCategoryMinAggregateOutputType = {
    id: string | null
    key: string | null
    label: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCategoryMaxAggregateOutputType = {
    id: string | null
    key: string | null
    label: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCategoryCountAggregateOutputType = {
    id: number
    key: number
    label: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductCategoryMinAggregateInputType = {
    id?: true
    key?: true
    label?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCategoryMaxAggregateInputType = {
    id?: true
    key?: true
    label?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCategoryCountAggregateInputType = {
    id?: true
    key?: true
    label?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategory to aggregate.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCategories
    **/
    _count?: true | ProductCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type GetProductCategoryAggregateType<T extends ProductCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCategory[P]>
      : GetScalarType<T[P], AggregateProductCategory[P]>
  }




  export type ProductCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoryWhereInput
    orderBy?: ProductCategoryOrderByWithAggregationInput | ProductCategoryOrderByWithAggregationInput[]
    by: ProductCategoryScalarFieldEnum[] | ProductCategoryScalarFieldEnum
    having?: ProductCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCategoryCountAggregateInputType | true
    _min?: ProductCategoryMinAggregateInputType
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type ProductCategoryGroupByOutputType = {
    id: string
    key: string
    label: string
    createdAt: Date
    updatedAt: Date
    _count: ProductCategoryCountAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  type GetProductCategoryGroupByPayload<T extends ProductCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partners?: boolean | ProductCategory$partnersArgs<ExtArgs>
    resellPlatforms?: boolean | ProductCategory$resellPlatformsArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productCategory"]>

  export type ProductCategorySelectScalar = {
    id?: boolean
    key?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "label" | "createdAt" | "updatedAt", ExtArgs["result"]["productCategory"]>
  export type ProductCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partners?: boolean | ProductCategory$partnersArgs<ExtArgs>
    resellPlatforms?: boolean | ProductCategory$resellPlatformsArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCategory"
    objects: {
      partners: Prisma.$PartnerProductCategoryPayload<ExtArgs>[]
      resellPlatforms: Prisma.$ResellPlatformCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      label: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productCategory"]>
    composites: {}
  }

  type ProductCategoryGetPayload<S extends boolean | null | undefined | ProductCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProductCategoryPayload, S>

  type ProductCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCategoryCountAggregateInputType | true
    }

  export interface ProductCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCategory'], meta: { name: 'ProductCategory' } }
    /**
     * Find zero or one ProductCategory that matches the filter.
     * @param {ProductCategoryFindUniqueArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCategoryFindUniqueArgs>(args: SelectSubset<T, ProductCategoryFindUniqueArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProductCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProductCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCategoryFindFirstArgs>(args?: SelectSubset<T, ProductCategoryFindFirstArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProductCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCategories
     * const productCategories = await prisma.productCategory.findMany()
     * 
     * // Get first 10 ProductCategories
     * const productCategories = await prisma.productCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductCategoryFindManyArgs>(args?: SelectSubset<T, ProductCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProductCategory.
     * @param {ProductCategoryCreateArgs} args - Arguments to create a ProductCategory.
     * @example
     * // Create one ProductCategory
     * const ProductCategory = await prisma.productCategory.create({
     *   data: {
     *     // ... data to create a ProductCategory
     *   }
     * })
     * 
     */
    create<T extends ProductCategoryCreateArgs>(args: SelectSubset<T, ProductCategoryCreateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProductCategories.
     * @param {ProductCategoryCreateManyArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategory = await prisma.productCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCategoryCreateManyArgs>(args?: SelectSubset<T, ProductCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductCategories and returns the data saved in the database.
     * @param {ProductCategoryCreateManyAndReturnArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategory = await prisma.productCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductCategories and only return the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ProductCategory.
     * @param {ProductCategoryDeleteArgs} args - Arguments to delete one ProductCategory.
     * @example
     * // Delete one ProductCategory
     * const ProductCategory = await prisma.productCategory.delete({
     *   where: {
     *     // ... filter to delete one ProductCategory
     *   }
     * })
     * 
     */
    delete<T extends ProductCategoryDeleteArgs>(args: SelectSubset<T, ProductCategoryDeleteArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProductCategory.
     * @param {ProductCategoryUpdateArgs} args - Arguments to update one ProductCategory.
     * @example
     * // Update one ProductCategory
     * const productCategory = await prisma.productCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductCategoryUpdateArgs>(args: SelectSubset<T, ProductCategoryUpdateArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProductCategories.
     * @param {ProductCategoryDeleteManyArgs} args - Arguments to filter ProductCategories to delete.
     * @example
     * // Delete a few ProductCategories
     * const { count } = await prisma.productCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductCategoryDeleteManyArgs>(args?: SelectSubset<T, ProductCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductCategoryUpdateManyArgs>(args: SelectSubset<T, ProductCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories and returns the data updated in the database.
     * @param {ProductCategoryUpdateManyAndReturnArgs} args - Arguments to update many ProductCategories.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductCategories and only return the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ProductCategory.
     * @param {ProductCategoryUpsertArgs} args - Arguments to update or create a ProductCategory.
     * @example
     * // Update or create a ProductCategory
     * const productCategory = await prisma.productCategory.upsert({
     *   create: {
     *     // ... data to create a ProductCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCategory we want to update
     *   }
     * })
     */
    upsert<T extends ProductCategoryUpsertArgs>(args: SelectSubset<T, ProductCategoryUpsertArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryCountArgs} args - Arguments to filter ProductCategories to count.
     * @example
     * // Count the number of ProductCategories
     * const count = await prisma.productCategory.count({
     *   where: {
     *     // ... the filter for the ProductCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductCategoryCountArgs>(
      args?: Subset<T, ProductCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductCategoryAggregateArgs>(args: Subset<T, ProductCategoryAggregateArgs>): Prisma.PrismaPromise<GetProductCategoryAggregateType<T>>

    /**
     * Group by ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCategory model
   */
  readonly fields: ProductCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partners<T extends ProductCategory$partnersArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategory$partnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerProductCategoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    resellPlatforms<T extends ProductCategory$resellPlatformsArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategory$resellPlatformsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellPlatformCategoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductCategory model
   */ 
  interface ProductCategoryFieldRefs {
    readonly id: FieldRef<"ProductCategory", 'String'>
    readonly key: FieldRef<"ProductCategory", 'String'>
    readonly label: FieldRef<"ProductCategory", 'String'>
    readonly createdAt: FieldRef<"ProductCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductCategory findUnique
   */
  export type ProductCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findUniqueOrThrow
   */
  export type ProductCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findFirst
   */
  export type ProductCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findFirstOrThrow
   */
  export type ProductCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findMany
   */
  export type ProductCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory create
   */
  export type ProductCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCategory.
     */
    data: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
  }

  /**
   * ProductCategory createMany
   */
  export type ProductCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoryCreateManyInput | ProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCategory createManyAndReturn
   */
  export type ProductCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoryCreateManyInput | ProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCategory update
   */
  export type ProductCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCategory.
     */
    data: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProductCategory to update.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory updateMany
   */
  export type ProductCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to update.
     */
    limit?: number
  }

  /**
   * ProductCategory updateManyAndReturn
   */
  export type ProductCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to update.
     */
    limit?: number
  }

  /**
   * ProductCategory upsert
   */
  export type ProductCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCategory to update in case it exists.
     */
    where: ProductCategoryWhereUniqueInput
    /**
     * In case the ProductCategory found by the `where` argument doesn't exist, create a new ProductCategory with this data.
     */
    create: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
    /**
     * In case the ProductCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
  }

  /**
   * ProductCategory delete
   */
  export type ProductCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProductCategory to delete.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory deleteMany
   */
  export type ProductCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategories to delete
     */
    where?: ProductCategoryWhereInput
    /**
     * Limit how many ProductCategories to delete.
     */
    limit?: number
  }

  /**
   * ProductCategory.partners
   */
  export type ProductCategory$partnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerProductCategory
     */
    select?: PartnerProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerProductCategory
     */
    omit?: PartnerProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerProductCategoryInclude<ExtArgs> | null
    where?: PartnerProductCategoryWhereInput
    orderBy?: PartnerProductCategoryOrderByWithRelationInput | PartnerProductCategoryOrderByWithRelationInput[]
    cursor?: PartnerProductCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartnerProductCategoryScalarFieldEnum | PartnerProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory.resellPlatforms
   */
  export type ProductCategory$resellPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCategory
     */
    select?: ResellPlatformCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCategory
     */
    omit?: ResellPlatformCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCategoryInclude<ExtArgs> | null
    where?: ResellPlatformCategoryWhereInput
    orderBy?: ResellPlatformCategoryOrderByWithRelationInput | ResellPlatformCategoryOrderByWithRelationInput[]
    cursor?: ResellPlatformCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResellPlatformCategoryScalarFieldEnum | ResellPlatformCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory without action
   */
  export type ProductCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategory
     */
    omit?: ProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
  }


  /**
   * Model PartnerProductCategory
   */

  export type AggregatePartnerProductCategory = {
    _count: PartnerProductCategoryCountAggregateOutputType | null
    _min: PartnerProductCategoryMinAggregateOutputType | null
    _max: PartnerProductCategoryMaxAggregateOutputType | null
  }

  export type PartnerProductCategoryMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    partnerId: string | null
    productCategoryId: string | null
  }

  export type PartnerProductCategoryMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    partnerId: string | null
    productCategoryId: string | null
  }

  export type PartnerProductCategoryCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    partnerId: number
    productCategoryId: number
    _all: number
  }


  export type PartnerProductCategoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    partnerId?: true
    productCategoryId?: true
  }

  export type PartnerProductCategoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    partnerId?: true
    productCategoryId?: true
  }

  export type PartnerProductCategoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    partnerId?: true
    productCategoryId?: true
    _all?: true
  }

  export type PartnerProductCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerProductCategory to aggregate.
     */
    where?: PartnerProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerProductCategories to fetch.
     */
    orderBy?: PartnerProductCategoryOrderByWithRelationInput | PartnerProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartnerProductCategories
    **/
    _count?: true | PartnerProductCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerProductCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerProductCategoryMaxAggregateInputType
  }

  export type GetPartnerProductCategoryAggregateType<T extends PartnerProductCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePartnerProductCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartnerProductCategory[P]>
      : GetScalarType<T[P], AggregatePartnerProductCategory[P]>
  }




  export type PartnerProductCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerProductCategoryWhereInput
    orderBy?: PartnerProductCategoryOrderByWithAggregationInput | PartnerProductCategoryOrderByWithAggregationInput[]
    by: PartnerProductCategoryScalarFieldEnum[] | PartnerProductCategoryScalarFieldEnum
    having?: PartnerProductCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerProductCategoryCountAggregateInputType | true
    _min?: PartnerProductCategoryMinAggregateInputType
    _max?: PartnerProductCategoryMaxAggregateInputType
  }

  export type PartnerProductCategoryGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    partnerId: string
    productCategoryId: string
    _count: PartnerProductCategoryCountAggregateOutputType | null
    _min: PartnerProductCategoryMinAggregateOutputType | null
    _max: PartnerProductCategoryMaxAggregateOutputType | null
  }

  type GetPartnerProductCategoryGroupByPayload<T extends PartnerProductCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerProductCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerProductCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerProductCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerProductCategoryGroupByOutputType[P]>
        }
      >
    >


  export type PartnerProductCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partnerId?: boolean
    productCategoryId?: boolean
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerProductCategory"]>

  export type PartnerProductCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partnerId?: boolean
    productCategoryId?: boolean
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerProductCategory"]>

  export type PartnerProductCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partnerId?: boolean
    productCategoryId?: boolean
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerProductCategory"]>

  export type PartnerProductCategorySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partnerId?: boolean
    productCategoryId?: boolean
  }

  export type PartnerProductCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "partnerId" | "productCategoryId", ExtArgs["result"]["partnerProductCategory"]>
  export type PartnerProductCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }
  export type PartnerProductCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }
  export type PartnerProductCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partner?: boolean | PartnerDefaultArgs<ExtArgs>
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }

  export type $PartnerProductCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartnerProductCategory"
    objects: {
      partner: Prisma.$PartnerPayload<ExtArgs>
      productCategory: Prisma.$ProductCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      partnerId: string
      productCategoryId: string
    }, ExtArgs["result"]["partnerProductCategory"]>
    composites: {}
  }

  type PartnerProductCategoryGetPayload<S extends boolean | null | undefined | PartnerProductCategoryDefaultArgs> = $Result.GetResult<Prisma.$PartnerProductCategoryPayload, S>

  type PartnerProductCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartnerProductCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnerProductCategoryCountAggregateInputType | true
    }

  export interface PartnerProductCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartnerProductCategory'], meta: { name: 'PartnerProductCategory' } }
    /**
     * Find zero or one PartnerProductCategory that matches the filter.
     * @param {PartnerProductCategoryFindUniqueArgs} args - Arguments to find a PartnerProductCategory
     * @example
     * // Get one PartnerProductCategory
     * const partnerProductCategory = await prisma.partnerProductCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerProductCategoryFindUniqueArgs>(args: SelectSubset<T, PartnerProductCategoryFindUniqueArgs<ExtArgs>>): Prisma__PartnerProductCategoryClient<$Result.GetResult<Prisma.$PartnerProductCategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PartnerProductCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnerProductCategoryFindUniqueOrThrowArgs} args - Arguments to find a PartnerProductCategory
     * @example
     * // Get one PartnerProductCategory
     * const partnerProductCategory = await prisma.partnerProductCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerProductCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerProductCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerProductCategoryClient<$Result.GetResult<Prisma.$PartnerProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PartnerProductCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerProductCategoryFindFirstArgs} args - Arguments to find a PartnerProductCategory
     * @example
     * // Get one PartnerProductCategory
     * const partnerProductCategory = await prisma.partnerProductCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerProductCategoryFindFirstArgs>(args?: SelectSubset<T, PartnerProductCategoryFindFirstArgs<ExtArgs>>): Prisma__PartnerProductCategoryClient<$Result.GetResult<Prisma.$PartnerProductCategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PartnerProductCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerProductCategoryFindFirstOrThrowArgs} args - Arguments to find a PartnerProductCategory
     * @example
     * // Get one PartnerProductCategory
     * const partnerProductCategory = await prisma.partnerProductCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerProductCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerProductCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerProductCategoryClient<$Result.GetResult<Prisma.$PartnerProductCategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PartnerProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerProductCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartnerProductCategories
     * const partnerProductCategories = await prisma.partnerProductCategory.findMany()
     * 
     * // Get first 10 PartnerProductCategories
     * const partnerProductCategories = await prisma.partnerProductCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerProductCategoryWithIdOnly = await prisma.partnerProductCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnerProductCategoryFindManyArgs>(args?: SelectSubset<T, PartnerProductCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerProductCategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PartnerProductCategory.
     * @param {PartnerProductCategoryCreateArgs} args - Arguments to create a PartnerProductCategory.
     * @example
     * // Create one PartnerProductCategory
     * const PartnerProductCategory = await prisma.partnerProductCategory.create({
     *   data: {
     *     // ... data to create a PartnerProductCategory
     *   }
     * })
     * 
     */
    create<T extends PartnerProductCategoryCreateArgs>(args: SelectSubset<T, PartnerProductCategoryCreateArgs<ExtArgs>>): Prisma__PartnerProductCategoryClient<$Result.GetResult<Prisma.$PartnerProductCategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PartnerProductCategories.
     * @param {PartnerProductCategoryCreateManyArgs} args - Arguments to create many PartnerProductCategories.
     * @example
     * // Create many PartnerProductCategories
     * const partnerProductCategory = await prisma.partnerProductCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerProductCategoryCreateManyArgs>(args?: SelectSubset<T, PartnerProductCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PartnerProductCategories and returns the data saved in the database.
     * @param {PartnerProductCategoryCreateManyAndReturnArgs} args - Arguments to create many PartnerProductCategories.
     * @example
     * // Create many PartnerProductCategories
     * const partnerProductCategory = await prisma.partnerProductCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PartnerProductCategories and only return the `id`
     * const partnerProductCategoryWithIdOnly = await prisma.partnerProductCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartnerProductCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PartnerProductCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerProductCategoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PartnerProductCategory.
     * @param {PartnerProductCategoryDeleteArgs} args - Arguments to delete one PartnerProductCategory.
     * @example
     * // Delete one PartnerProductCategory
     * const PartnerProductCategory = await prisma.partnerProductCategory.delete({
     *   where: {
     *     // ... filter to delete one PartnerProductCategory
     *   }
     * })
     * 
     */
    delete<T extends PartnerProductCategoryDeleteArgs>(args: SelectSubset<T, PartnerProductCategoryDeleteArgs<ExtArgs>>): Prisma__PartnerProductCategoryClient<$Result.GetResult<Prisma.$PartnerProductCategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PartnerProductCategory.
     * @param {PartnerProductCategoryUpdateArgs} args - Arguments to update one PartnerProductCategory.
     * @example
     * // Update one PartnerProductCategory
     * const partnerProductCategory = await prisma.partnerProductCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerProductCategoryUpdateArgs>(args: SelectSubset<T, PartnerProductCategoryUpdateArgs<ExtArgs>>): Prisma__PartnerProductCategoryClient<$Result.GetResult<Prisma.$PartnerProductCategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PartnerProductCategories.
     * @param {PartnerProductCategoryDeleteManyArgs} args - Arguments to filter PartnerProductCategories to delete.
     * @example
     * // Delete a few PartnerProductCategories
     * const { count } = await prisma.partnerProductCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerProductCategoryDeleteManyArgs>(args?: SelectSubset<T, PartnerProductCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerProductCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartnerProductCategories
     * const partnerProductCategory = await prisma.partnerProductCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerProductCategoryUpdateManyArgs>(args: SelectSubset<T, PartnerProductCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerProductCategories and returns the data updated in the database.
     * @param {PartnerProductCategoryUpdateManyAndReturnArgs} args - Arguments to update many PartnerProductCategories.
     * @example
     * // Update many PartnerProductCategories
     * const partnerProductCategory = await prisma.partnerProductCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PartnerProductCategories and only return the `id`
     * const partnerProductCategoryWithIdOnly = await prisma.partnerProductCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartnerProductCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PartnerProductCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerProductCategoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PartnerProductCategory.
     * @param {PartnerProductCategoryUpsertArgs} args - Arguments to update or create a PartnerProductCategory.
     * @example
     * // Update or create a PartnerProductCategory
     * const partnerProductCategory = await prisma.partnerProductCategory.upsert({
     *   create: {
     *     // ... data to create a PartnerProductCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartnerProductCategory we want to update
     *   }
     * })
     */
    upsert<T extends PartnerProductCategoryUpsertArgs>(args: SelectSubset<T, PartnerProductCategoryUpsertArgs<ExtArgs>>): Prisma__PartnerProductCategoryClient<$Result.GetResult<Prisma.$PartnerProductCategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PartnerProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerProductCategoryCountArgs} args - Arguments to filter PartnerProductCategories to count.
     * @example
     * // Count the number of PartnerProductCategories
     * const count = await prisma.partnerProductCategory.count({
     *   where: {
     *     // ... the filter for the PartnerProductCategories we want to count
     *   }
     * })
    **/
    count<T extends PartnerProductCategoryCountArgs>(
      args?: Subset<T, PartnerProductCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerProductCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartnerProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerProductCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnerProductCategoryAggregateArgs>(args: Subset<T, PartnerProductCategoryAggregateArgs>): Prisma.PrismaPromise<GetPartnerProductCategoryAggregateType<T>>

    /**
     * Group by PartnerProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerProductCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnerProductCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerProductCategoryGroupByArgs['orderBy'] }
        : { orderBy?: PartnerProductCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnerProductCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerProductCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartnerProductCategory model
   */
  readonly fields: PartnerProductCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartnerProductCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerProductCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partner<T extends PartnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartnerDefaultArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    productCategory<T extends ProductCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategoryDefaultArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartnerProductCategory model
   */ 
  interface PartnerProductCategoryFieldRefs {
    readonly id: FieldRef<"PartnerProductCategory", 'String'>
    readonly createdAt: FieldRef<"PartnerProductCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"PartnerProductCategory", 'DateTime'>
    readonly partnerId: FieldRef<"PartnerProductCategory", 'String'>
    readonly productCategoryId: FieldRef<"PartnerProductCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PartnerProductCategory findUnique
   */
  export type PartnerProductCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerProductCategory
     */
    select?: PartnerProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerProductCategory
     */
    omit?: PartnerProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PartnerProductCategory to fetch.
     */
    where: PartnerProductCategoryWhereUniqueInput
  }

  /**
   * PartnerProductCategory findUniqueOrThrow
   */
  export type PartnerProductCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerProductCategory
     */
    select?: PartnerProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerProductCategory
     */
    omit?: PartnerProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PartnerProductCategory to fetch.
     */
    where: PartnerProductCategoryWhereUniqueInput
  }

  /**
   * PartnerProductCategory findFirst
   */
  export type PartnerProductCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerProductCategory
     */
    select?: PartnerProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerProductCategory
     */
    omit?: PartnerProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PartnerProductCategory to fetch.
     */
    where?: PartnerProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerProductCategories to fetch.
     */
    orderBy?: PartnerProductCategoryOrderByWithRelationInput | PartnerProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerProductCategories.
     */
    cursor?: PartnerProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerProductCategories.
     */
    distinct?: PartnerProductCategoryScalarFieldEnum | PartnerProductCategoryScalarFieldEnum[]
  }

  /**
   * PartnerProductCategory findFirstOrThrow
   */
  export type PartnerProductCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerProductCategory
     */
    select?: PartnerProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerProductCategory
     */
    omit?: PartnerProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PartnerProductCategory to fetch.
     */
    where?: PartnerProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerProductCategories to fetch.
     */
    orderBy?: PartnerProductCategoryOrderByWithRelationInput | PartnerProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerProductCategories.
     */
    cursor?: PartnerProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerProductCategories.
     */
    distinct?: PartnerProductCategoryScalarFieldEnum | PartnerProductCategoryScalarFieldEnum[]
  }

  /**
   * PartnerProductCategory findMany
   */
  export type PartnerProductCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerProductCategory
     */
    select?: PartnerProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerProductCategory
     */
    omit?: PartnerProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PartnerProductCategories to fetch.
     */
    where?: PartnerProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerProductCategories to fetch.
     */
    orderBy?: PartnerProductCategoryOrderByWithRelationInput | PartnerProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartnerProductCategories.
     */
    cursor?: PartnerProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerProductCategories.
     */
    skip?: number
    distinct?: PartnerProductCategoryScalarFieldEnum | PartnerProductCategoryScalarFieldEnum[]
  }

  /**
   * PartnerProductCategory create
   */
  export type PartnerProductCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerProductCategory
     */
    select?: PartnerProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerProductCategory
     */
    omit?: PartnerProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PartnerProductCategory.
     */
    data: XOR<PartnerProductCategoryCreateInput, PartnerProductCategoryUncheckedCreateInput>
  }

  /**
   * PartnerProductCategory createMany
   */
  export type PartnerProductCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartnerProductCategories.
     */
    data: PartnerProductCategoryCreateManyInput | PartnerProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartnerProductCategory createManyAndReturn
   */
  export type PartnerProductCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerProductCategory
     */
    select?: PartnerProductCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerProductCategory
     */
    omit?: PartnerProductCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many PartnerProductCategories.
     */
    data: PartnerProductCategoryCreateManyInput | PartnerProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerProductCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartnerProductCategory update
   */
  export type PartnerProductCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerProductCategory
     */
    select?: PartnerProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerProductCategory
     */
    omit?: PartnerProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PartnerProductCategory.
     */
    data: XOR<PartnerProductCategoryUpdateInput, PartnerProductCategoryUncheckedUpdateInput>
    /**
     * Choose, which PartnerProductCategory to update.
     */
    where: PartnerProductCategoryWhereUniqueInput
  }

  /**
   * PartnerProductCategory updateMany
   */
  export type PartnerProductCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartnerProductCategories.
     */
    data: XOR<PartnerProductCategoryUpdateManyMutationInput, PartnerProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PartnerProductCategories to update
     */
    where?: PartnerProductCategoryWhereInput
    /**
     * Limit how many PartnerProductCategories to update.
     */
    limit?: number
  }

  /**
   * PartnerProductCategory updateManyAndReturn
   */
  export type PartnerProductCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerProductCategory
     */
    select?: PartnerProductCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerProductCategory
     */
    omit?: PartnerProductCategoryOmit<ExtArgs> | null
    /**
     * The data used to update PartnerProductCategories.
     */
    data: XOR<PartnerProductCategoryUpdateManyMutationInput, PartnerProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PartnerProductCategories to update
     */
    where?: PartnerProductCategoryWhereInput
    /**
     * Limit how many PartnerProductCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerProductCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PartnerProductCategory upsert
   */
  export type PartnerProductCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerProductCategory
     */
    select?: PartnerProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerProductCategory
     */
    omit?: PartnerProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerProductCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PartnerProductCategory to update in case it exists.
     */
    where: PartnerProductCategoryWhereUniqueInput
    /**
     * In case the PartnerProductCategory found by the `where` argument doesn't exist, create a new PartnerProductCategory with this data.
     */
    create: XOR<PartnerProductCategoryCreateInput, PartnerProductCategoryUncheckedCreateInput>
    /**
     * In case the PartnerProductCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerProductCategoryUpdateInput, PartnerProductCategoryUncheckedUpdateInput>
  }

  /**
   * PartnerProductCategory delete
   */
  export type PartnerProductCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerProductCategory
     */
    select?: PartnerProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerProductCategory
     */
    omit?: PartnerProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerProductCategoryInclude<ExtArgs> | null
    /**
     * Filter which PartnerProductCategory to delete.
     */
    where: PartnerProductCategoryWhereUniqueInput
  }

  /**
   * PartnerProductCategory deleteMany
   */
  export type PartnerProductCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerProductCategories to delete
     */
    where?: PartnerProductCategoryWhereInput
    /**
     * Limit how many PartnerProductCategories to delete.
     */
    limit?: number
  }

  /**
   * PartnerProductCategory without action
   */
  export type PartnerProductCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerProductCategory
     */
    select?: PartnerProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerProductCategory
     */
    omit?: PartnerProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerProductCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ResellPlatform
   */

  export type AggregateResellPlatform = {
    _count: ResellPlatformCountAggregateOutputType | null
    _min: ResellPlatformMinAggregateOutputType | null
    _max: ResellPlatformMaxAggregateOutputType | null
  }

  export type ResellPlatformMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    logo: string | null
    tagline: string | null
    description: string | null
    platformType: $Enums.ResellPlatformType | null
    createdAt: Date | null
    updatedAt: Date | null
    altTagline: string | null
    canSell: boolean | null
  }

  export type ResellPlatformMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    logo: string | null
    tagline: string | null
    description: string | null
    platformType: $Enums.ResellPlatformType | null
    createdAt: Date | null
    updatedAt: Date | null
    altTagline: string | null
    canSell: boolean | null
  }

  export type ResellPlatformCountAggregateOutputType = {
    id: number
    name: number
    url: number
    logo: number
    tagline: number
    description: number
    platformType: number
    createdAt: number
    updatedAt: number
    altTagline: number
    canSell: number
    _all: number
  }


  export type ResellPlatformMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    logo?: true
    tagline?: true
    description?: true
    platformType?: true
    createdAt?: true
    updatedAt?: true
    altTagline?: true
    canSell?: true
  }

  export type ResellPlatformMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    logo?: true
    tagline?: true
    description?: true
    platformType?: true
    createdAt?: true
    updatedAt?: true
    altTagline?: true
    canSell?: true
  }

  export type ResellPlatformCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    logo?: true
    tagline?: true
    description?: true
    platformType?: true
    createdAt?: true
    updatedAt?: true
    altTagline?: true
    canSell?: true
    _all?: true
  }

  export type ResellPlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResellPlatform to aggregate.
     */
    where?: ResellPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResellPlatforms to fetch.
     */
    orderBy?: ResellPlatformOrderByWithRelationInput | ResellPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResellPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResellPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResellPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResellPlatforms
    **/
    _count?: true | ResellPlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResellPlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResellPlatformMaxAggregateInputType
  }

  export type GetResellPlatformAggregateType<T extends ResellPlatformAggregateArgs> = {
        [P in keyof T & keyof AggregateResellPlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResellPlatform[P]>
      : GetScalarType<T[P], AggregateResellPlatform[P]>
  }




  export type ResellPlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResellPlatformWhereInput
    orderBy?: ResellPlatformOrderByWithAggregationInput | ResellPlatformOrderByWithAggregationInput[]
    by: ResellPlatformScalarFieldEnum[] | ResellPlatformScalarFieldEnum
    having?: ResellPlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResellPlatformCountAggregateInputType | true
    _min?: ResellPlatformMinAggregateInputType
    _max?: ResellPlatformMaxAggregateInputType
  }

  export type ResellPlatformGroupByOutputType = {
    id: string
    name: string
    url: string
    logo: string | null
    tagline: string
    description: string
    platformType: $Enums.ResellPlatformType
    createdAt: Date
    updatedAt: Date
    altTagline: string | null
    canSell: boolean
    _count: ResellPlatformCountAggregateOutputType | null
    _min: ResellPlatformMinAggregateOutputType | null
    _max: ResellPlatformMaxAggregateOutputType | null
  }

  type GetResellPlatformGroupByPayload<T extends ResellPlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResellPlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResellPlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResellPlatformGroupByOutputType[P]>
            : GetScalarType<T[P], ResellPlatformGroupByOutputType[P]>
        }
      >
    >


  export type ResellPlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    logo?: boolean
    tagline?: boolean
    description?: boolean
    platformType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    altTagline?: boolean
    canSell?: boolean
    productCategories?: boolean | ResellPlatform$productCategoriesArgs<ExtArgs>
    countries?: boolean | ResellPlatform$countriesArgs<ExtArgs>
    _count?: boolean | ResellPlatformCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resellPlatform"]>

  export type ResellPlatformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    logo?: boolean
    tagline?: boolean
    description?: boolean
    platformType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    altTagline?: boolean
    canSell?: boolean
  }, ExtArgs["result"]["resellPlatform"]>

  export type ResellPlatformSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    logo?: boolean
    tagline?: boolean
    description?: boolean
    platformType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    altTagline?: boolean
    canSell?: boolean
  }, ExtArgs["result"]["resellPlatform"]>

  export type ResellPlatformSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    logo?: boolean
    tagline?: boolean
    description?: boolean
    platformType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    altTagline?: boolean
    canSell?: boolean
  }

  export type ResellPlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "logo" | "tagline" | "description" | "platformType" | "createdAt" | "updatedAt" | "altTagline" | "canSell", ExtArgs["result"]["resellPlatform"]>
  export type ResellPlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productCategories?: boolean | ResellPlatform$productCategoriesArgs<ExtArgs>
    countries?: boolean | ResellPlatform$countriesArgs<ExtArgs>
    _count?: boolean | ResellPlatformCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResellPlatformIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ResellPlatformIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ResellPlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResellPlatform"
    objects: {
      productCategories: Prisma.$ResellPlatformCategoryPayload<ExtArgs>[]
      countries: Prisma.$ResellPlatformCountryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      logo: string | null
      tagline: string
      description: string
      platformType: $Enums.ResellPlatformType
      createdAt: Date
      updatedAt: Date
      altTagline: string | null
      canSell: boolean
    }, ExtArgs["result"]["resellPlatform"]>
    composites: {}
  }

  type ResellPlatformGetPayload<S extends boolean | null | undefined | ResellPlatformDefaultArgs> = $Result.GetResult<Prisma.$ResellPlatformPayload, S>

  type ResellPlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResellPlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResellPlatformCountAggregateInputType | true
    }

  export interface ResellPlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResellPlatform'], meta: { name: 'ResellPlatform' } }
    /**
     * Find zero or one ResellPlatform that matches the filter.
     * @param {ResellPlatformFindUniqueArgs} args - Arguments to find a ResellPlatform
     * @example
     * // Get one ResellPlatform
     * const resellPlatform = await prisma.resellPlatform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResellPlatformFindUniqueArgs>(args: SelectSubset<T, ResellPlatformFindUniqueArgs<ExtArgs>>): Prisma__ResellPlatformClient<$Result.GetResult<Prisma.$ResellPlatformPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ResellPlatform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResellPlatformFindUniqueOrThrowArgs} args - Arguments to find a ResellPlatform
     * @example
     * // Get one ResellPlatform
     * const resellPlatform = await prisma.resellPlatform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResellPlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, ResellPlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResellPlatformClient<$Result.GetResult<Prisma.$ResellPlatformPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ResellPlatform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformFindFirstArgs} args - Arguments to find a ResellPlatform
     * @example
     * // Get one ResellPlatform
     * const resellPlatform = await prisma.resellPlatform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResellPlatformFindFirstArgs>(args?: SelectSubset<T, ResellPlatformFindFirstArgs<ExtArgs>>): Prisma__ResellPlatformClient<$Result.GetResult<Prisma.$ResellPlatformPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ResellPlatform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformFindFirstOrThrowArgs} args - Arguments to find a ResellPlatform
     * @example
     * // Get one ResellPlatform
     * const resellPlatform = await prisma.resellPlatform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResellPlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, ResellPlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResellPlatformClient<$Result.GetResult<Prisma.$ResellPlatformPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ResellPlatforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResellPlatforms
     * const resellPlatforms = await prisma.resellPlatform.findMany()
     * 
     * // Get first 10 ResellPlatforms
     * const resellPlatforms = await prisma.resellPlatform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resellPlatformWithIdOnly = await prisma.resellPlatform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResellPlatformFindManyArgs>(args?: SelectSubset<T, ResellPlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellPlatformPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ResellPlatform.
     * @param {ResellPlatformCreateArgs} args - Arguments to create a ResellPlatform.
     * @example
     * // Create one ResellPlatform
     * const ResellPlatform = await prisma.resellPlatform.create({
     *   data: {
     *     // ... data to create a ResellPlatform
     *   }
     * })
     * 
     */
    create<T extends ResellPlatformCreateArgs>(args: SelectSubset<T, ResellPlatformCreateArgs<ExtArgs>>): Prisma__ResellPlatformClient<$Result.GetResult<Prisma.$ResellPlatformPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ResellPlatforms.
     * @param {ResellPlatformCreateManyArgs} args - Arguments to create many ResellPlatforms.
     * @example
     * // Create many ResellPlatforms
     * const resellPlatform = await prisma.resellPlatform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResellPlatformCreateManyArgs>(args?: SelectSubset<T, ResellPlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResellPlatforms and returns the data saved in the database.
     * @param {ResellPlatformCreateManyAndReturnArgs} args - Arguments to create many ResellPlatforms.
     * @example
     * // Create many ResellPlatforms
     * const resellPlatform = await prisma.resellPlatform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResellPlatforms and only return the `id`
     * const resellPlatformWithIdOnly = await prisma.resellPlatform.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResellPlatformCreateManyAndReturnArgs>(args?: SelectSubset<T, ResellPlatformCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellPlatformPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ResellPlatform.
     * @param {ResellPlatformDeleteArgs} args - Arguments to delete one ResellPlatform.
     * @example
     * // Delete one ResellPlatform
     * const ResellPlatform = await prisma.resellPlatform.delete({
     *   where: {
     *     // ... filter to delete one ResellPlatform
     *   }
     * })
     * 
     */
    delete<T extends ResellPlatformDeleteArgs>(args: SelectSubset<T, ResellPlatformDeleteArgs<ExtArgs>>): Prisma__ResellPlatformClient<$Result.GetResult<Prisma.$ResellPlatformPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ResellPlatform.
     * @param {ResellPlatformUpdateArgs} args - Arguments to update one ResellPlatform.
     * @example
     * // Update one ResellPlatform
     * const resellPlatform = await prisma.resellPlatform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResellPlatformUpdateArgs>(args: SelectSubset<T, ResellPlatformUpdateArgs<ExtArgs>>): Prisma__ResellPlatformClient<$Result.GetResult<Prisma.$ResellPlatformPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ResellPlatforms.
     * @param {ResellPlatformDeleteManyArgs} args - Arguments to filter ResellPlatforms to delete.
     * @example
     * // Delete a few ResellPlatforms
     * const { count } = await prisma.resellPlatform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResellPlatformDeleteManyArgs>(args?: SelectSubset<T, ResellPlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResellPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResellPlatforms
     * const resellPlatform = await prisma.resellPlatform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResellPlatformUpdateManyArgs>(args: SelectSubset<T, ResellPlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResellPlatforms and returns the data updated in the database.
     * @param {ResellPlatformUpdateManyAndReturnArgs} args - Arguments to update many ResellPlatforms.
     * @example
     * // Update many ResellPlatforms
     * const resellPlatform = await prisma.resellPlatform.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResellPlatforms and only return the `id`
     * const resellPlatformWithIdOnly = await prisma.resellPlatform.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResellPlatformUpdateManyAndReturnArgs>(args: SelectSubset<T, ResellPlatformUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellPlatformPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ResellPlatform.
     * @param {ResellPlatformUpsertArgs} args - Arguments to update or create a ResellPlatform.
     * @example
     * // Update or create a ResellPlatform
     * const resellPlatform = await prisma.resellPlatform.upsert({
     *   create: {
     *     // ... data to create a ResellPlatform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResellPlatform we want to update
     *   }
     * })
     */
    upsert<T extends ResellPlatformUpsertArgs>(args: SelectSubset<T, ResellPlatformUpsertArgs<ExtArgs>>): Prisma__ResellPlatformClient<$Result.GetResult<Prisma.$ResellPlatformPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ResellPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformCountArgs} args - Arguments to filter ResellPlatforms to count.
     * @example
     * // Count the number of ResellPlatforms
     * const count = await prisma.resellPlatform.count({
     *   where: {
     *     // ... the filter for the ResellPlatforms we want to count
     *   }
     * })
    **/
    count<T extends ResellPlatformCountArgs>(
      args?: Subset<T, ResellPlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResellPlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResellPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResellPlatformAggregateArgs>(args: Subset<T, ResellPlatformAggregateArgs>): Prisma.PrismaPromise<GetResellPlatformAggregateType<T>>

    /**
     * Group by ResellPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResellPlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResellPlatformGroupByArgs['orderBy'] }
        : { orderBy?: ResellPlatformGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResellPlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResellPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResellPlatform model
   */
  readonly fields: ResellPlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResellPlatform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResellPlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productCategories<T extends ResellPlatform$productCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, ResellPlatform$productCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellPlatformCategoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    countries<T extends ResellPlatform$countriesArgs<ExtArgs> = {}>(args?: Subset<T, ResellPlatform$countriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellPlatformCountryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResellPlatform model
   */ 
  interface ResellPlatformFieldRefs {
    readonly id: FieldRef<"ResellPlatform", 'String'>
    readonly name: FieldRef<"ResellPlatform", 'String'>
    readonly url: FieldRef<"ResellPlatform", 'String'>
    readonly logo: FieldRef<"ResellPlatform", 'String'>
    readonly tagline: FieldRef<"ResellPlatform", 'String'>
    readonly description: FieldRef<"ResellPlatform", 'String'>
    readonly platformType: FieldRef<"ResellPlatform", 'ResellPlatformType'>
    readonly createdAt: FieldRef<"ResellPlatform", 'DateTime'>
    readonly updatedAt: FieldRef<"ResellPlatform", 'DateTime'>
    readonly altTagline: FieldRef<"ResellPlatform", 'String'>
    readonly canSell: FieldRef<"ResellPlatform", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ResellPlatform findUnique
   */
  export type ResellPlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatform
     */
    select?: ResellPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatform
     */
    omit?: ResellPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformInclude<ExtArgs> | null
    /**
     * Filter, which ResellPlatform to fetch.
     */
    where: ResellPlatformWhereUniqueInput
  }

  /**
   * ResellPlatform findUniqueOrThrow
   */
  export type ResellPlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatform
     */
    select?: ResellPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatform
     */
    omit?: ResellPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformInclude<ExtArgs> | null
    /**
     * Filter, which ResellPlatform to fetch.
     */
    where: ResellPlatformWhereUniqueInput
  }

  /**
   * ResellPlatform findFirst
   */
  export type ResellPlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatform
     */
    select?: ResellPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatform
     */
    omit?: ResellPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformInclude<ExtArgs> | null
    /**
     * Filter, which ResellPlatform to fetch.
     */
    where?: ResellPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResellPlatforms to fetch.
     */
    orderBy?: ResellPlatformOrderByWithRelationInput | ResellPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResellPlatforms.
     */
    cursor?: ResellPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResellPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResellPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResellPlatforms.
     */
    distinct?: ResellPlatformScalarFieldEnum | ResellPlatformScalarFieldEnum[]
  }

  /**
   * ResellPlatform findFirstOrThrow
   */
  export type ResellPlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatform
     */
    select?: ResellPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatform
     */
    omit?: ResellPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformInclude<ExtArgs> | null
    /**
     * Filter, which ResellPlatform to fetch.
     */
    where?: ResellPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResellPlatforms to fetch.
     */
    orderBy?: ResellPlatformOrderByWithRelationInput | ResellPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResellPlatforms.
     */
    cursor?: ResellPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResellPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResellPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResellPlatforms.
     */
    distinct?: ResellPlatformScalarFieldEnum | ResellPlatformScalarFieldEnum[]
  }

  /**
   * ResellPlatform findMany
   */
  export type ResellPlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatform
     */
    select?: ResellPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatform
     */
    omit?: ResellPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformInclude<ExtArgs> | null
    /**
     * Filter, which ResellPlatforms to fetch.
     */
    where?: ResellPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResellPlatforms to fetch.
     */
    orderBy?: ResellPlatformOrderByWithRelationInput | ResellPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResellPlatforms.
     */
    cursor?: ResellPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResellPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResellPlatforms.
     */
    skip?: number
    distinct?: ResellPlatformScalarFieldEnum | ResellPlatformScalarFieldEnum[]
  }

  /**
   * ResellPlatform create
   */
  export type ResellPlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatform
     */
    select?: ResellPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatform
     */
    omit?: ResellPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a ResellPlatform.
     */
    data: XOR<ResellPlatformCreateInput, ResellPlatformUncheckedCreateInput>
  }

  /**
   * ResellPlatform createMany
   */
  export type ResellPlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResellPlatforms.
     */
    data: ResellPlatformCreateManyInput | ResellPlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResellPlatform createManyAndReturn
   */
  export type ResellPlatformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatform
     */
    select?: ResellPlatformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatform
     */
    omit?: ResellPlatformOmit<ExtArgs> | null
    /**
     * The data used to create many ResellPlatforms.
     */
    data: ResellPlatformCreateManyInput | ResellPlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResellPlatform update
   */
  export type ResellPlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatform
     */
    select?: ResellPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatform
     */
    omit?: ResellPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a ResellPlatform.
     */
    data: XOR<ResellPlatformUpdateInput, ResellPlatformUncheckedUpdateInput>
    /**
     * Choose, which ResellPlatform to update.
     */
    where: ResellPlatformWhereUniqueInput
  }

  /**
   * ResellPlatform updateMany
   */
  export type ResellPlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResellPlatforms.
     */
    data: XOR<ResellPlatformUpdateManyMutationInput, ResellPlatformUncheckedUpdateManyInput>
    /**
     * Filter which ResellPlatforms to update
     */
    where?: ResellPlatformWhereInput
    /**
     * Limit how many ResellPlatforms to update.
     */
    limit?: number
  }

  /**
   * ResellPlatform updateManyAndReturn
   */
  export type ResellPlatformUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatform
     */
    select?: ResellPlatformSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatform
     */
    omit?: ResellPlatformOmit<ExtArgs> | null
    /**
     * The data used to update ResellPlatforms.
     */
    data: XOR<ResellPlatformUpdateManyMutationInput, ResellPlatformUncheckedUpdateManyInput>
    /**
     * Filter which ResellPlatforms to update
     */
    where?: ResellPlatformWhereInput
    /**
     * Limit how many ResellPlatforms to update.
     */
    limit?: number
  }

  /**
   * ResellPlatform upsert
   */
  export type ResellPlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatform
     */
    select?: ResellPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatform
     */
    omit?: ResellPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the ResellPlatform to update in case it exists.
     */
    where: ResellPlatformWhereUniqueInput
    /**
     * In case the ResellPlatform found by the `where` argument doesn't exist, create a new ResellPlatform with this data.
     */
    create: XOR<ResellPlatformCreateInput, ResellPlatformUncheckedCreateInput>
    /**
     * In case the ResellPlatform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResellPlatformUpdateInput, ResellPlatformUncheckedUpdateInput>
  }

  /**
   * ResellPlatform delete
   */
  export type ResellPlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatform
     */
    select?: ResellPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatform
     */
    omit?: ResellPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformInclude<ExtArgs> | null
    /**
     * Filter which ResellPlatform to delete.
     */
    where: ResellPlatformWhereUniqueInput
  }

  /**
   * ResellPlatform deleteMany
   */
  export type ResellPlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResellPlatforms to delete
     */
    where?: ResellPlatformWhereInput
    /**
     * Limit how many ResellPlatforms to delete.
     */
    limit?: number
  }

  /**
   * ResellPlatform.productCategories
   */
  export type ResellPlatform$productCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCategory
     */
    select?: ResellPlatformCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCategory
     */
    omit?: ResellPlatformCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCategoryInclude<ExtArgs> | null
    where?: ResellPlatformCategoryWhereInput
    orderBy?: ResellPlatformCategoryOrderByWithRelationInput | ResellPlatformCategoryOrderByWithRelationInput[]
    cursor?: ResellPlatformCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResellPlatformCategoryScalarFieldEnum | ResellPlatformCategoryScalarFieldEnum[]
  }

  /**
   * ResellPlatform.countries
   */
  export type ResellPlatform$countriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCountry
     */
    select?: ResellPlatformCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCountry
     */
    omit?: ResellPlatformCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCountryInclude<ExtArgs> | null
    where?: ResellPlatformCountryWhereInput
    orderBy?: ResellPlatformCountryOrderByWithRelationInput | ResellPlatformCountryOrderByWithRelationInput[]
    cursor?: ResellPlatformCountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResellPlatformCountryScalarFieldEnum | ResellPlatformCountryScalarFieldEnum[]
  }

  /**
   * ResellPlatform without action
   */
  export type ResellPlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatform
     */
    select?: ResellPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatform
     */
    omit?: ResellPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformInclude<ExtArgs> | null
  }


  /**
   * Model ResellPlatformCategory
   */

  export type AggregateResellPlatformCategory = {
    _count: ResellPlatformCategoryCountAggregateOutputType | null
    _min: ResellPlatformCategoryMinAggregateOutputType | null
    _max: ResellPlatformCategoryMaxAggregateOutputType | null
  }

  export type ResellPlatformCategoryMinAggregateOutputType = {
    id: string | null
    resellPlatformId: string | null
    productCategoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResellPlatformCategoryMaxAggregateOutputType = {
    id: string | null
    resellPlatformId: string | null
    productCategoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResellPlatformCategoryCountAggregateOutputType = {
    id: number
    resellPlatformId: number
    productCategoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResellPlatformCategoryMinAggregateInputType = {
    id?: true
    resellPlatformId?: true
    productCategoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResellPlatformCategoryMaxAggregateInputType = {
    id?: true
    resellPlatformId?: true
    productCategoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResellPlatformCategoryCountAggregateInputType = {
    id?: true
    resellPlatformId?: true
    productCategoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResellPlatformCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResellPlatformCategory to aggregate.
     */
    where?: ResellPlatformCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResellPlatformCategories to fetch.
     */
    orderBy?: ResellPlatformCategoryOrderByWithRelationInput | ResellPlatformCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResellPlatformCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResellPlatformCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResellPlatformCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResellPlatformCategories
    **/
    _count?: true | ResellPlatformCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResellPlatformCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResellPlatformCategoryMaxAggregateInputType
  }

  export type GetResellPlatformCategoryAggregateType<T extends ResellPlatformCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateResellPlatformCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResellPlatformCategory[P]>
      : GetScalarType<T[P], AggregateResellPlatformCategory[P]>
  }




  export type ResellPlatformCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResellPlatformCategoryWhereInput
    orderBy?: ResellPlatformCategoryOrderByWithAggregationInput | ResellPlatformCategoryOrderByWithAggregationInput[]
    by: ResellPlatformCategoryScalarFieldEnum[] | ResellPlatformCategoryScalarFieldEnum
    having?: ResellPlatformCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResellPlatformCategoryCountAggregateInputType | true
    _min?: ResellPlatformCategoryMinAggregateInputType
    _max?: ResellPlatformCategoryMaxAggregateInputType
  }

  export type ResellPlatformCategoryGroupByOutputType = {
    id: string
    resellPlatformId: string
    productCategoryId: string
    createdAt: Date
    updatedAt: Date
    _count: ResellPlatformCategoryCountAggregateOutputType | null
    _min: ResellPlatformCategoryMinAggregateOutputType | null
    _max: ResellPlatformCategoryMaxAggregateOutputType | null
  }

  type GetResellPlatformCategoryGroupByPayload<T extends ResellPlatformCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResellPlatformCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResellPlatformCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResellPlatformCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ResellPlatformCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ResellPlatformCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resellPlatformId?: boolean
    productCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    resellPlatform?: boolean | ResellPlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resellPlatformCategory"]>

  export type ResellPlatformCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resellPlatformId?: boolean
    productCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    resellPlatform?: boolean | ResellPlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resellPlatformCategory"]>

  export type ResellPlatformCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resellPlatformId?: boolean
    productCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    resellPlatform?: boolean | ResellPlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resellPlatformCategory"]>

  export type ResellPlatformCategorySelectScalar = {
    id?: boolean
    resellPlatformId?: boolean
    productCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResellPlatformCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resellPlatformId" | "productCategoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["resellPlatformCategory"]>
  export type ResellPlatformCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    resellPlatform?: boolean | ResellPlatformDefaultArgs<ExtArgs>
  }
  export type ResellPlatformCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    resellPlatform?: boolean | ResellPlatformDefaultArgs<ExtArgs>
  }
  export type ResellPlatformCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productCategory?: boolean | ProductCategoryDefaultArgs<ExtArgs>
    resellPlatform?: boolean | ResellPlatformDefaultArgs<ExtArgs>
  }

  export type $ResellPlatformCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResellPlatformCategory"
    objects: {
      productCategory: Prisma.$ProductCategoryPayload<ExtArgs>
      resellPlatform: Prisma.$ResellPlatformPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resellPlatformId: string
      productCategoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resellPlatformCategory"]>
    composites: {}
  }

  type ResellPlatformCategoryGetPayload<S extends boolean | null | undefined | ResellPlatformCategoryDefaultArgs> = $Result.GetResult<Prisma.$ResellPlatformCategoryPayload, S>

  type ResellPlatformCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResellPlatformCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResellPlatformCategoryCountAggregateInputType | true
    }

  export interface ResellPlatformCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResellPlatformCategory'], meta: { name: 'ResellPlatformCategory' } }
    /**
     * Find zero or one ResellPlatformCategory that matches the filter.
     * @param {ResellPlatformCategoryFindUniqueArgs} args - Arguments to find a ResellPlatformCategory
     * @example
     * // Get one ResellPlatformCategory
     * const resellPlatformCategory = await prisma.resellPlatformCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResellPlatformCategoryFindUniqueArgs>(args: SelectSubset<T, ResellPlatformCategoryFindUniqueArgs<ExtArgs>>): Prisma__ResellPlatformCategoryClient<$Result.GetResult<Prisma.$ResellPlatformCategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ResellPlatformCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResellPlatformCategoryFindUniqueOrThrowArgs} args - Arguments to find a ResellPlatformCategory
     * @example
     * // Get one ResellPlatformCategory
     * const resellPlatformCategory = await prisma.resellPlatformCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResellPlatformCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ResellPlatformCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResellPlatformCategoryClient<$Result.GetResult<Prisma.$ResellPlatformCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ResellPlatformCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformCategoryFindFirstArgs} args - Arguments to find a ResellPlatformCategory
     * @example
     * // Get one ResellPlatformCategory
     * const resellPlatformCategory = await prisma.resellPlatformCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResellPlatformCategoryFindFirstArgs>(args?: SelectSubset<T, ResellPlatformCategoryFindFirstArgs<ExtArgs>>): Prisma__ResellPlatformCategoryClient<$Result.GetResult<Prisma.$ResellPlatformCategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ResellPlatformCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformCategoryFindFirstOrThrowArgs} args - Arguments to find a ResellPlatformCategory
     * @example
     * // Get one ResellPlatformCategory
     * const resellPlatformCategory = await prisma.resellPlatformCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResellPlatformCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ResellPlatformCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResellPlatformCategoryClient<$Result.GetResult<Prisma.$ResellPlatformCategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ResellPlatformCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResellPlatformCategories
     * const resellPlatformCategories = await prisma.resellPlatformCategory.findMany()
     * 
     * // Get first 10 ResellPlatformCategories
     * const resellPlatformCategories = await prisma.resellPlatformCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resellPlatformCategoryWithIdOnly = await prisma.resellPlatformCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResellPlatformCategoryFindManyArgs>(args?: SelectSubset<T, ResellPlatformCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellPlatformCategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ResellPlatformCategory.
     * @param {ResellPlatformCategoryCreateArgs} args - Arguments to create a ResellPlatformCategory.
     * @example
     * // Create one ResellPlatformCategory
     * const ResellPlatformCategory = await prisma.resellPlatformCategory.create({
     *   data: {
     *     // ... data to create a ResellPlatformCategory
     *   }
     * })
     * 
     */
    create<T extends ResellPlatformCategoryCreateArgs>(args: SelectSubset<T, ResellPlatformCategoryCreateArgs<ExtArgs>>): Prisma__ResellPlatformCategoryClient<$Result.GetResult<Prisma.$ResellPlatformCategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ResellPlatformCategories.
     * @param {ResellPlatformCategoryCreateManyArgs} args - Arguments to create many ResellPlatformCategories.
     * @example
     * // Create many ResellPlatformCategories
     * const resellPlatformCategory = await prisma.resellPlatformCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResellPlatformCategoryCreateManyArgs>(args?: SelectSubset<T, ResellPlatformCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResellPlatformCategories and returns the data saved in the database.
     * @param {ResellPlatformCategoryCreateManyAndReturnArgs} args - Arguments to create many ResellPlatformCategories.
     * @example
     * // Create many ResellPlatformCategories
     * const resellPlatformCategory = await prisma.resellPlatformCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResellPlatformCategories and only return the `id`
     * const resellPlatformCategoryWithIdOnly = await prisma.resellPlatformCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResellPlatformCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ResellPlatformCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellPlatformCategoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ResellPlatformCategory.
     * @param {ResellPlatformCategoryDeleteArgs} args - Arguments to delete one ResellPlatformCategory.
     * @example
     * // Delete one ResellPlatformCategory
     * const ResellPlatformCategory = await prisma.resellPlatformCategory.delete({
     *   where: {
     *     // ... filter to delete one ResellPlatformCategory
     *   }
     * })
     * 
     */
    delete<T extends ResellPlatformCategoryDeleteArgs>(args: SelectSubset<T, ResellPlatformCategoryDeleteArgs<ExtArgs>>): Prisma__ResellPlatformCategoryClient<$Result.GetResult<Prisma.$ResellPlatformCategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ResellPlatformCategory.
     * @param {ResellPlatformCategoryUpdateArgs} args - Arguments to update one ResellPlatformCategory.
     * @example
     * // Update one ResellPlatformCategory
     * const resellPlatformCategory = await prisma.resellPlatformCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResellPlatformCategoryUpdateArgs>(args: SelectSubset<T, ResellPlatformCategoryUpdateArgs<ExtArgs>>): Prisma__ResellPlatformCategoryClient<$Result.GetResult<Prisma.$ResellPlatformCategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ResellPlatformCategories.
     * @param {ResellPlatformCategoryDeleteManyArgs} args - Arguments to filter ResellPlatformCategories to delete.
     * @example
     * // Delete a few ResellPlatformCategories
     * const { count } = await prisma.resellPlatformCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResellPlatformCategoryDeleteManyArgs>(args?: SelectSubset<T, ResellPlatformCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResellPlatformCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResellPlatformCategories
     * const resellPlatformCategory = await prisma.resellPlatformCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResellPlatformCategoryUpdateManyArgs>(args: SelectSubset<T, ResellPlatformCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResellPlatformCategories and returns the data updated in the database.
     * @param {ResellPlatformCategoryUpdateManyAndReturnArgs} args - Arguments to update many ResellPlatformCategories.
     * @example
     * // Update many ResellPlatformCategories
     * const resellPlatformCategory = await prisma.resellPlatformCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResellPlatformCategories and only return the `id`
     * const resellPlatformCategoryWithIdOnly = await prisma.resellPlatformCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResellPlatformCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ResellPlatformCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellPlatformCategoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ResellPlatformCategory.
     * @param {ResellPlatformCategoryUpsertArgs} args - Arguments to update or create a ResellPlatformCategory.
     * @example
     * // Update or create a ResellPlatformCategory
     * const resellPlatformCategory = await prisma.resellPlatformCategory.upsert({
     *   create: {
     *     // ... data to create a ResellPlatformCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResellPlatformCategory we want to update
     *   }
     * })
     */
    upsert<T extends ResellPlatformCategoryUpsertArgs>(args: SelectSubset<T, ResellPlatformCategoryUpsertArgs<ExtArgs>>): Prisma__ResellPlatformCategoryClient<$Result.GetResult<Prisma.$ResellPlatformCategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ResellPlatformCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformCategoryCountArgs} args - Arguments to filter ResellPlatformCategories to count.
     * @example
     * // Count the number of ResellPlatformCategories
     * const count = await prisma.resellPlatformCategory.count({
     *   where: {
     *     // ... the filter for the ResellPlatformCategories we want to count
     *   }
     * })
    **/
    count<T extends ResellPlatformCategoryCountArgs>(
      args?: Subset<T, ResellPlatformCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResellPlatformCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResellPlatformCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResellPlatformCategoryAggregateArgs>(args: Subset<T, ResellPlatformCategoryAggregateArgs>): Prisma.PrismaPromise<GetResellPlatformCategoryAggregateType<T>>

    /**
     * Group by ResellPlatformCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResellPlatformCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResellPlatformCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ResellPlatformCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResellPlatformCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResellPlatformCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResellPlatformCategory model
   */
  readonly fields: ResellPlatformCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResellPlatformCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResellPlatformCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productCategory<T extends ProductCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategoryDefaultArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    resellPlatform<T extends ResellPlatformDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResellPlatformDefaultArgs<ExtArgs>>): Prisma__ResellPlatformClient<$Result.GetResult<Prisma.$ResellPlatformPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResellPlatformCategory model
   */ 
  interface ResellPlatformCategoryFieldRefs {
    readonly id: FieldRef<"ResellPlatformCategory", 'String'>
    readonly resellPlatformId: FieldRef<"ResellPlatformCategory", 'String'>
    readonly productCategoryId: FieldRef<"ResellPlatformCategory", 'String'>
    readonly createdAt: FieldRef<"ResellPlatformCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ResellPlatformCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResellPlatformCategory findUnique
   */
  export type ResellPlatformCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCategory
     */
    select?: ResellPlatformCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCategory
     */
    omit?: ResellPlatformCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ResellPlatformCategory to fetch.
     */
    where: ResellPlatformCategoryWhereUniqueInput
  }

  /**
   * ResellPlatformCategory findUniqueOrThrow
   */
  export type ResellPlatformCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCategory
     */
    select?: ResellPlatformCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCategory
     */
    omit?: ResellPlatformCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ResellPlatformCategory to fetch.
     */
    where: ResellPlatformCategoryWhereUniqueInput
  }

  /**
   * ResellPlatformCategory findFirst
   */
  export type ResellPlatformCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCategory
     */
    select?: ResellPlatformCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCategory
     */
    omit?: ResellPlatformCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ResellPlatformCategory to fetch.
     */
    where?: ResellPlatformCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResellPlatformCategories to fetch.
     */
    orderBy?: ResellPlatformCategoryOrderByWithRelationInput | ResellPlatformCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResellPlatformCategories.
     */
    cursor?: ResellPlatformCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResellPlatformCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResellPlatformCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResellPlatformCategories.
     */
    distinct?: ResellPlatformCategoryScalarFieldEnum | ResellPlatformCategoryScalarFieldEnum[]
  }

  /**
   * ResellPlatformCategory findFirstOrThrow
   */
  export type ResellPlatformCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCategory
     */
    select?: ResellPlatformCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCategory
     */
    omit?: ResellPlatformCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ResellPlatformCategory to fetch.
     */
    where?: ResellPlatformCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResellPlatformCategories to fetch.
     */
    orderBy?: ResellPlatformCategoryOrderByWithRelationInput | ResellPlatformCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResellPlatformCategories.
     */
    cursor?: ResellPlatformCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResellPlatformCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResellPlatformCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResellPlatformCategories.
     */
    distinct?: ResellPlatformCategoryScalarFieldEnum | ResellPlatformCategoryScalarFieldEnum[]
  }

  /**
   * ResellPlatformCategory findMany
   */
  export type ResellPlatformCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCategory
     */
    select?: ResellPlatformCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCategory
     */
    omit?: ResellPlatformCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ResellPlatformCategories to fetch.
     */
    where?: ResellPlatformCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResellPlatformCategories to fetch.
     */
    orderBy?: ResellPlatformCategoryOrderByWithRelationInput | ResellPlatformCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResellPlatformCategories.
     */
    cursor?: ResellPlatformCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResellPlatformCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResellPlatformCategories.
     */
    skip?: number
    distinct?: ResellPlatformCategoryScalarFieldEnum | ResellPlatformCategoryScalarFieldEnum[]
  }

  /**
   * ResellPlatformCategory create
   */
  export type ResellPlatformCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCategory
     */
    select?: ResellPlatformCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCategory
     */
    omit?: ResellPlatformCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ResellPlatformCategory.
     */
    data: XOR<ResellPlatformCategoryCreateInput, ResellPlatformCategoryUncheckedCreateInput>
  }

  /**
   * ResellPlatformCategory createMany
   */
  export type ResellPlatformCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResellPlatformCategories.
     */
    data: ResellPlatformCategoryCreateManyInput | ResellPlatformCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResellPlatformCategory createManyAndReturn
   */
  export type ResellPlatformCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCategory
     */
    select?: ResellPlatformCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCategory
     */
    omit?: ResellPlatformCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ResellPlatformCategories.
     */
    data: ResellPlatformCategoryCreateManyInput | ResellPlatformCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResellPlatformCategory update
   */
  export type ResellPlatformCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCategory
     */
    select?: ResellPlatformCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCategory
     */
    omit?: ResellPlatformCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ResellPlatformCategory.
     */
    data: XOR<ResellPlatformCategoryUpdateInput, ResellPlatformCategoryUncheckedUpdateInput>
    /**
     * Choose, which ResellPlatformCategory to update.
     */
    where: ResellPlatformCategoryWhereUniqueInput
  }

  /**
   * ResellPlatformCategory updateMany
   */
  export type ResellPlatformCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResellPlatformCategories.
     */
    data: XOR<ResellPlatformCategoryUpdateManyMutationInput, ResellPlatformCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ResellPlatformCategories to update
     */
    where?: ResellPlatformCategoryWhereInput
    /**
     * Limit how many ResellPlatformCategories to update.
     */
    limit?: number
  }

  /**
   * ResellPlatformCategory updateManyAndReturn
   */
  export type ResellPlatformCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCategory
     */
    select?: ResellPlatformCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCategory
     */
    omit?: ResellPlatformCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ResellPlatformCategories.
     */
    data: XOR<ResellPlatformCategoryUpdateManyMutationInput, ResellPlatformCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ResellPlatformCategories to update
     */
    where?: ResellPlatformCategoryWhereInput
    /**
     * Limit how many ResellPlatformCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResellPlatformCategory upsert
   */
  export type ResellPlatformCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCategory
     */
    select?: ResellPlatformCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCategory
     */
    omit?: ResellPlatformCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ResellPlatformCategory to update in case it exists.
     */
    where: ResellPlatformCategoryWhereUniqueInput
    /**
     * In case the ResellPlatformCategory found by the `where` argument doesn't exist, create a new ResellPlatformCategory with this data.
     */
    create: XOR<ResellPlatformCategoryCreateInput, ResellPlatformCategoryUncheckedCreateInput>
    /**
     * In case the ResellPlatformCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResellPlatformCategoryUpdateInput, ResellPlatformCategoryUncheckedUpdateInput>
  }

  /**
   * ResellPlatformCategory delete
   */
  export type ResellPlatformCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCategory
     */
    select?: ResellPlatformCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCategory
     */
    omit?: ResellPlatformCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCategoryInclude<ExtArgs> | null
    /**
     * Filter which ResellPlatformCategory to delete.
     */
    where: ResellPlatformCategoryWhereUniqueInput
  }

  /**
   * ResellPlatformCategory deleteMany
   */
  export type ResellPlatformCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResellPlatformCategories to delete
     */
    where?: ResellPlatformCategoryWhereInput
    /**
     * Limit how many ResellPlatformCategories to delete.
     */
    limit?: number
  }

  /**
   * ResellPlatformCategory without action
   */
  export type ResellPlatformCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCategory
     */
    select?: ResellPlatformCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCategory
     */
    omit?: ResellPlatformCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ResellPlatformCountry
   */

  export type AggregateResellPlatformCountry = {
    _count: ResellPlatformCountryCountAggregateOutputType | null
    _min: ResellPlatformCountryMinAggregateOutputType | null
    _max: ResellPlatformCountryMaxAggregateOutputType | null
  }

  export type ResellPlatformCountryMinAggregateOutputType = {
    id: string | null
    countryCode: string | null
    resellPlatformId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResellPlatformCountryMaxAggregateOutputType = {
    id: string | null
    countryCode: string | null
    resellPlatformId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResellPlatformCountryCountAggregateOutputType = {
    id: number
    countryCode: number
    resellPlatformId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResellPlatformCountryMinAggregateInputType = {
    id?: true
    countryCode?: true
    resellPlatformId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResellPlatformCountryMaxAggregateInputType = {
    id?: true
    countryCode?: true
    resellPlatformId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResellPlatformCountryCountAggregateInputType = {
    id?: true
    countryCode?: true
    resellPlatformId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResellPlatformCountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResellPlatformCountry to aggregate.
     */
    where?: ResellPlatformCountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResellPlatformCountries to fetch.
     */
    orderBy?: ResellPlatformCountryOrderByWithRelationInput | ResellPlatformCountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResellPlatformCountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResellPlatformCountries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResellPlatformCountries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResellPlatformCountries
    **/
    _count?: true | ResellPlatformCountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResellPlatformCountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResellPlatformCountryMaxAggregateInputType
  }

  export type GetResellPlatformCountryAggregateType<T extends ResellPlatformCountryAggregateArgs> = {
        [P in keyof T & keyof AggregateResellPlatformCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResellPlatformCountry[P]>
      : GetScalarType<T[P], AggregateResellPlatformCountry[P]>
  }




  export type ResellPlatformCountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResellPlatformCountryWhereInput
    orderBy?: ResellPlatformCountryOrderByWithAggregationInput | ResellPlatformCountryOrderByWithAggregationInput[]
    by: ResellPlatformCountryScalarFieldEnum[] | ResellPlatformCountryScalarFieldEnum
    having?: ResellPlatformCountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResellPlatformCountryCountAggregateInputType | true
    _min?: ResellPlatformCountryMinAggregateInputType
    _max?: ResellPlatformCountryMaxAggregateInputType
  }

  export type ResellPlatformCountryGroupByOutputType = {
    id: string
    countryCode: string
    resellPlatformId: string
    createdAt: Date
    updatedAt: Date
    _count: ResellPlatformCountryCountAggregateOutputType | null
    _min: ResellPlatformCountryMinAggregateOutputType | null
    _max: ResellPlatformCountryMaxAggregateOutputType | null
  }

  type GetResellPlatformCountryGroupByPayload<T extends ResellPlatformCountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResellPlatformCountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResellPlatformCountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResellPlatformCountryGroupByOutputType[P]>
            : GetScalarType<T[P], ResellPlatformCountryGroupByOutputType[P]>
        }
      >
    >


  export type ResellPlatformCountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryCode?: boolean
    resellPlatformId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    resellPlatform?: boolean | ResellPlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resellPlatformCountry"]>

  export type ResellPlatformCountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryCode?: boolean
    resellPlatformId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    resellPlatform?: boolean | ResellPlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resellPlatformCountry"]>

  export type ResellPlatformCountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryCode?: boolean
    resellPlatformId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    resellPlatform?: boolean | ResellPlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resellPlatformCountry"]>

  export type ResellPlatformCountrySelectScalar = {
    id?: boolean
    countryCode?: boolean
    resellPlatformId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResellPlatformCountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "countryCode" | "resellPlatformId" | "createdAt" | "updatedAt", ExtArgs["result"]["resellPlatformCountry"]>
  export type ResellPlatformCountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    resellPlatform?: boolean | ResellPlatformDefaultArgs<ExtArgs>
  }
  export type ResellPlatformCountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    resellPlatform?: boolean | ResellPlatformDefaultArgs<ExtArgs>
  }
  export type ResellPlatformCountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    resellPlatform?: boolean | ResellPlatformDefaultArgs<ExtArgs>
  }

  export type $ResellPlatformCountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResellPlatformCountry"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      resellPlatform: Prisma.$ResellPlatformPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      countryCode: string
      resellPlatformId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resellPlatformCountry"]>
    composites: {}
  }

  type ResellPlatformCountryGetPayload<S extends boolean | null | undefined | ResellPlatformCountryDefaultArgs> = $Result.GetResult<Prisma.$ResellPlatformCountryPayload, S>

  type ResellPlatformCountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResellPlatformCountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResellPlatformCountryCountAggregateInputType | true
    }

  export interface ResellPlatformCountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResellPlatformCountry'], meta: { name: 'ResellPlatformCountry' } }
    /**
     * Find zero or one ResellPlatformCountry that matches the filter.
     * @param {ResellPlatformCountryFindUniqueArgs} args - Arguments to find a ResellPlatformCountry
     * @example
     * // Get one ResellPlatformCountry
     * const resellPlatformCountry = await prisma.resellPlatformCountry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResellPlatformCountryFindUniqueArgs>(args: SelectSubset<T, ResellPlatformCountryFindUniqueArgs<ExtArgs>>): Prisma__ResellPlatformCountryClient<$Result.GetResult<Prisma.$ResellPlatformCountryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ResellPlatformCountry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResellPlatformCountryFindUniqueOrThrowArgs} args - Arguments to find a ResellPlatformCountry
     * @example
     * // Get one ResellPlatformCountry
     * const resellPlatformCountry = await prisma.resellPlatformCountry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResellPlatformCountryFindUniqueOrThrowArgs>(args: SelectSubset<T, ResellPlatformCountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResellPlatformCountryClient<$Result.GetResult<Prisma.$ResellPlatformCountryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ResellPlatformCountry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformCountryFindFirstArgs} args - Arguments to find a ResellPlatformCountry
     * @example
     * // Get one ResellPlatformCountry
     * const resellPlatformCountry = await prisma.resellPlatformCountry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResellPlatformCountryFindFirstArgs>(args?: SelectSubset<T, ResellPlatformCountryFindFirstArgs<ExtArgs>>): Prisma__ResellPlatformCountryClient<$Result.GetResult<Prisma.$ResellPlatformCountryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ResellPlatformCountry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformCountryFindFirstOrThrowArgs} args - Arguments to find a ResellPlatformCountry
     * @example
     * // Get one ResellPlatformCountry
     * const resellPlatformCountry = await prisma.resellPlatformCountry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResellPlatformCountryFindFirstOrThrowArgs>(args?: SelectSubset<T, ResellPlatformCountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResellPlatformCountryClient<$Result.GetResult<Prisma.$ResellPlatformCountryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ResellPlatformCountries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformCountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResellPlatformCountries
     * const resellPlatformCountries = await prisma.resellPlatformCountry.findMany()
     * 
     * // Get first 10 ResellPlatformCountries
     * const resellPlatformCountries = await prisma.resellPlatformCountry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resellPlatformCountryWithIdOnly = await prisma.resellPlatformCountry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResellPlatformCountryFindManyArgs>(args?: SelectSubset<T, ResellPlatformCountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellPlatformCountryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ResellPlatformCountry.
     * @param {ResellPlatformCountryCreateArgs} args - Arguments to create a ResellPlatformCountry.
     * @example
     * // Create one ResellPlatformCountry
     * const ResellPlatformCountry = await prisma.resellPlatformCountry.create({
     *   data: {
     *     // ... data to create a ResellPlatformCountry
     *   }
     * })
     * 
     */
    create<T extends ResellPlatformCountryCreateArgs>(args: SelectSubset<T, ResellPlatformCountryCreateArgs<ExtArgs>>): Prisma__ResellPlatformCountryClient<$Result.GetResult<Prisma.$ResellPlatformCountryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ResellPlatformCountries.
     * @param {ResellPlatformCountryCreateManyArgs} args - Arguments to create many ResellPlatformCountries.
     * @example
     * // Create many ResellPlatformCountries
     * const resellPlatformCountry = await prisma.resellPlatformCountry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResellPlatformCountryCreateManyArgs>(args?: SelectSubset<T, ResellPlatformCountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResellPlatformCountries and returns the data saved in the database.
     * @param {ResellPlatformCountryCreateManyAndReturnArgs} args - Arguments to create many ResellPlatformCountries.
     * @example
     * // Create many ResellPlatformCountries
     * const resellPlatformCountry = await prisma.resellPlatformCountry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResellPlatformCountries and only return the `id`
     * const resellPlatformCountryWithIdOnly = await prisma.resellPlatformCountry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResellPlatformCountryCreateManyAndReturnArgs>(args?: SelectSubset<T, ResellPlatformCountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellPlatformCountryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ResellPlatformCountry.
     * @param {ResellPlatformCountryDeleteArgs} args - Arguments to delete one ResellPlatformCountry.
     * @example
     * // Delete one ResellPlatformCountry
     * const ResellPlatformCountry = await prisma.resellPlatformCountry.delete({
     *   where: {
     *     // ... filter to delete one ResellPlatformCountry
     *   }
     * })
     * 
     */
    delete<T extends ResellPlatformCountryDeleteArgs>(args: SelectSubset<T, ResellPlatformCountryDeleteArgs<ExtArgs>>): Prisma__ResellPlatformCountryClient<$Result.GetResult<Prisma.$ResellPlatformCountryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ResellPlatformCountry.
     * @param {ResellPlatformCountryUpdateArgs} args - Arguments to update one ResellPlatformCountry.
     * @example
     * // Update one ResellPlatformCountry
     * const resellPlatformCountry = await prisma.resellPlatformCountry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResellPlatformCountryUpdateArgs>(args: SelectSubset<T, ResellPlatformCountryUpdateArgs<ExtArgs>>): Prisma__ResellPlatformCountryClient<$Result.GetResult<Prisma.$ResellPlatformCountryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ResellPlatformCountries.
     * @param {ResellPlatformCountryDeleteManyArgs} args - Arguments to filter ResellPlatformCountries to delete.
     * @example
     * // Delete a few ResellPlatformCountries
     * const { count } = await prisma.resellPlatformCountry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResellPlatformCountryDeleteManyArgs>(args?: SelectSubset<T, ResellPlatformCountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResellPlatformCountries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformCountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResellPlatformCountries
     * const resellPlatformCountry = await prisma.resellPlatformCountry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResellPlatformCountryUpdateManyArgs>(args: SelectSubset<T, ResellPlatformCountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResellPlatformCountries and returns the data updated in the database.
     * @param {ResellPlatformCountryUpdateManyAndReturnArgs} args - Arguments to update many ResellPlatformCountries.
     * @example
     * // Update many ResellPlatformCountries
     * const resellPlatformCountry = await prisma.resellPlatformCountry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResellPlatformCountries and only return the `id`
     * const resellPlatformCountryWithIdOnly = await prisma.resellPlatformCountry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResellPlatformCountryUpdateManyAndReturnArgs>(args: SelectSubset<T, ResellPlatformCountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellPlatformCountryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ResellPlatformCountry.
     * @param {ResellPlatformCountryUpsertArgs} args - Arguments to update or create a ResellPlatformCountry.
     * @example
     * // Update or create a ResellPlatformCountry
     * const resellPlatformCountry = await prisma.resellPlatformCountry.upsert({
     *   create: {
     *     // ... data to create a ResellPlatformCountry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResellPlatformCountry we want to update
     *   }
     * })
     */
    upsert<T extends ResellPlatformCountryUpsertArgs>(args: SelectSubset<T, ResellPlatformCountryUpsertArgs<ExtArgs>>): Prisma__ResellPlatformCountryClient<$Result.GetResult<Prisma.$ResellPlatformCountryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ResellPlatformCountries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformCountryCountArgs} args - Arguments to filter ResellPlatformCountries to count.
     * @example
     * // Count the number of ResellPlatformCountries
     * const count = await prisma.resellPlatformCountry.count({
     *   where: {
     *     // ... the filter for the ResellPlatformCountries we want to count
     *   }
     * })
    **/
    count<T extends ResellPlatformCountryCountArgs>(
      args?: Subset<T, ResellPlatformCountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResellPlatformCountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResellPlatformCountry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformCountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResellPlatformCountryAggregateArgs>(args: Subset<T, ResellPlatformCountryAggregateArgs>): Prisma.PrismaPromise<GetResellPlatformCountryAggregateType<T>>

    /**
     * Group by ResellPlatformCountry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResellPlatformCountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResellPlatformCountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResellPlatformCountryGroupByArgs['orderBy'] }
        : { orderBy?: ResellPlatformCountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResellPlatformCountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResellPlatformCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResellPlatformCountry model
   */
  readonly fields: ResellPlatformCountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResellPlatformCountry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResellPlatformCountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    resellPlatform<T extends ResellPlatformDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResellPlatformDefaultArgs<ExtArgs>>): Prisma__ResellPlatformClient<$Result.GetResult<Prisma.$ResellPlatformPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResellPlatformCountry model
   */ 
  interface ResellPlatformCountryFieldRefs {
    readonly id: FieldRef<"ResellPlatformCountry", 'String'>
    readonly countryCode: FieldRef<"ResellPlatformCountry", 'String'>
    readonly resellPlatformId: FieldRef<"ResellPlatformCountry", 'String'>
    readonly createdAt: FieldRef<"ResellPlatformCountry", 'DateTime'>
    readonly updatedAt: FieldRef<"ResellPlatformCountry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResellPlatformCountry findUnique
   */
  export type ResellPlatformCountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCountry
     */
    select?: ResellPlatformCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCountry
     */
    omit?: ResellPlatformCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCountryInclude<ExtArgs> | null
    /**
     * Filter, which ResellPlatformCountry to fetch.
     */
    where: ResellPlatformCountryWhereUniqueInput
  }

  /**
   * ResellPlatformCountry findUniqueOrThrow
   */
  export type ResellPlatformCountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCountry
     */
    select?: ResellPlatformCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCountry
     */
    omit?: ResellPlatformCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCountryInclude<ExtArgs> | null
    /**
     * Filter, which ResellPlatformCountry to fetch.
     */
    where: ResellPlatformCountryWhereUniqueInput
  }

  /**
   * ResellPlatformCountry findFirst
   */
  export type ResellPlatformCountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCountry
     */
    select?: ResellPlatformCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCountry
     */
    omit?: ResellPlatformCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCountryInclude<ExtArgs> | null
    /**
     * Filter, which ResellPlatformCountry to fetch.
     */
    where?: ResellPlatformCountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResellPlatformCountries to fetch.
     */
    orderBy?: ResellPlatformCountryOrderByWithRelationInput | ResellPlatformCountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResellPlatformCountries.
     */
    cursor?: ResellPlatformCountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResellPlatformCountries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResellPlatformCountries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResellPlatformCountries.
     */
    distinct?: ResellPlatformCountryScalarFieldEnum | ResellPlatformCountryScalarFieldEnum[]
  }

  /**
   * ResellPlatformCountry findFirstOrThrow
   */
  export type ResellPlatformCountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCountry
     */
    select?: ResellPlatformCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCountry
     */
    omit?: ResellPlatformCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCountryInclude<ExtArgs> | null
    /**
     * Filter, which ResellPlatformCountry to fetch.
     */
    where?: ResellPlatformCountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResellPlatformCountries to fetch.
     */
    orderBy?: ResellPlatformCountryOrderByWithRelationInput | ResellPlatformCountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResellPlatformCountries.
     */
    cursor?: ResellPlatformCountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResellPlatformCountries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResellPlatformCountries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResellPlatformCountries.
     */
    distinct?: ResellPlatformCountryScalarFieldEnum | ResellPlatformCountryScalarFieldEnum[]
  }

  /**
   * ResellPlatformCountry findMany
   */
  export type ResellPlatformCountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCountry
     */
    select?: ResellPlatformCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCountry
     */
    omit?: ResellPlatformCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCountryInclude<ExtArgs> | null
    /**
     * Filter, which ResellPlatformCountries to fetch.
     */
    where?: ResellPlatformCountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResellPlatformCountries to fetch.
     */
    orderBy?: ResellPlatformCountryOrderByWithRelationInput | ResellPlatformCountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResellPlatformCountries.
     */
    cursor?: ResellPlatformCountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResellPlatformCountries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResellPlatformCountries.
     */
    skip?: number
    distinct?: ResellPlatformCountryScalarFieldEnum | ResellPlatformCountryScalarFieldEnum[]
  }

  /**
   * ResellPlatformCountry create
   */
  export type ResellPlatformCountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCountry
     */
    select?: ResellPlatformCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCountry
     */
    omit?: ResellPlatformCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCountryInclude<ExtArgs> | null
    /**
     * The data needed to create a ResellPlatformCountry.
     */
    data: XOR<ResellPlatformCountryCreateInput, ResellPlatformCountryUncheckedCreateInput>
  }

  /**
   * ResellPlatformCountry createMany
   */
  export type ResellPlatformCountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResellPlatformCountries.
     */
    data: ResellPlatformCountryCreateManyInput | ResellPlatformCountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResellPlatformCountry createManyAndReturn
   */
  export type ResellPlatformCountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCountry
     */
    select?: ResellPlatformCountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCountry
     */
    omit?: ResellPlatformCountryOmit<ExtArgs> | null
    /**
     * The data used to create many ResellPlatformCountries.
     */
    data: ResellPlatformCountryCreateManyInput | ResellPlatformCountryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCountryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResellPlatformCountry update
   */
  export type ResellPlatformCountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCountry
     */
    select?: ResellPlatformCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCountry
     */
    omit?: ResellPlatformCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCountryInclude<ExtArgs> | null
    /**
     * The data needed to update a ResellPlatformCountry.
     */
    data: XOR<ResellPlatformCountryUpdateInput, ResellPlatformCountryUncheckedUpdateInput>
    /**
     * Choose, which ResellPlatformCountry to update.
     */
    where: ResellPlatformCountryWhereUniqueInput
  }

  /**
   * ResellPlatformCountry updateMany
   */
  export type ResellPlatformCountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResellPlatformCountries.
     */
    data: XOR<ResellPlatformCountryUpdateManyMutationInput, ResellPlatformCountryUncheckedUpdateManyInput>
    /**
     * Filter which ResellPlatformCountries to update
     */
    where?: ResellPlatformCountryWhereInput
    /**
     * Limit how many ResellPlatformCountries to update.
     */
    limit?: number
  }

  /**
   * ResellPlatformCountry updateManyAndReturn
   */
  export type ResellPlatformCountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCountry
     */
    select?: ResellPlatformCountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCountry
     */
    omit?: ResellPlatformCountryOmit<ExtArgs> | null
    /**
     * The data used to update ResellPlatformCountries.
     */
    data: XOR<ResellPlatformCountryUpdateManyMutationInput, ResellPlatformCountryUncheckedUpdateManyInput>
    /**
     * Filter which ResellPlatformCountries to update
     */
    where?: ResellPlatformCountryWhereInput
    /**
     * Limit how many ResellPlatformCountries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCountryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResellPlatformCountry upsert
   */
  export type ResellPlatformCountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCountry
     */
    select?: ResellPlatformCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCountry
     */
    omit?: ResellPlatformCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCountryInclude<ExtArgs> | null
    /**
     * The filter to search for the ResellPlatformCountry to update in case it exists.
     */
    where: ResellPlatformCountryWhereUniqueInput
    /**
     * In case the ResellPlatformCountry found by the `where` argument doesn't exist, create a new ResellPlatformCountry with this data.
     */
    create: XOR<ResellPlatformCountryCreateInput, ResellPlatformCountryUncheckedCreateInput>
    /**
     * In case the ResellPlatformCountry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResellPlatformCountryUpdateInput, ResellPlatformCountryUncheckedUpdateInput>
  }

  /**
   * ResellPlatformCountry delete
   */
  export type ResellPlatformCountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCountry
     */
    select?: ResellPlatformCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCountry
     */
    omit?: ResellPlatformCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCountryInclude<ExtArgs> | null
    /**
     * Filter which ResellPlatformCountry to delete.
     */
    where: ResellPlatformCountryWhereUniqueInput
  }

  /**
   * ResellPlatformCountry deleteMany
   */
  export type ResellPlatformCountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResellPlatformCountries to delete
     */
    where?: ResellPlatformCountryWhereInput
    /**
     * Limit how many ResellPlatformCountries to delete.
     */
    limit?: number
  }

  /**
   * ResellPlatformCountry without action
   */
  export type ResellPlatformCountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCountry
     */
    select?: ResellPlatformCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCountry
     */
    omit?: ResellPlatformCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCountryInclude<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    code: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CountryMaxAggregateOutputType = {
    code: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CountryCountAggregateOutputType = {
    code: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    code?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CountryMaxAggregateInputType = {
    code?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CountryCountAggregateInputType = {
    code?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    code: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    partners?: boolean | Country$partnersArgs<ExtArgs>
    resellPlatforms?: boolean | Country$resellPlatformsArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    code?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partners?: boolean | Country$partnersArgs<ExtArgs>
    resellPlatforms?: boolean | Country$resellPlatformsArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      partners: Prisma.$PartnerLocationPayload<ExtArgs>[]
      resellPlatforms: Prisma.$ResellPlatformCountryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const countryWithCodeOnly = await prisma.country.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `code`
     * const countryWithCodeOnly = await prisma.country.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `code`
     * const countryWithCodeOnly = await prisma.country.updateManyAndReturn({
     *   select: { code: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partners<T extends Country$partnersArgs<ExtArgs> = {}>(args?: Subset<T, Country$partnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerLocationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    resellPlatforms<T extends Country$resellPlatformsArgs<ExtArgs> = {}>(args?: Subset<T, Country$resellPlatformsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResellPlatformCountryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Country model
   */ 
  interface CountryFieldRefs {
    readonly code: FieldRef<"Country", 'String'>
    readonly name: FieldRef<"Country", 'String'>
    readonly createdAt: FieldRef<"Country", 'DateTime'>
    readonly updatedAt: FieldRef<"Country", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.partners
   */
  export type Country$partnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerLocation
     */
    select?: PartnerLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerLocation
     */
    omit?: PartnerLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerLocationInclude<ExtArgs> | null
    where?: PartnerLocationWhereInput
    orderBy?: PartnerLocationOrderByWithRelationInput | PartnerLocationOrderByWithRelationInput[]
    cursor?: PartnerLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartnerLocationScalarFieldEnum | PartnerLocationScalarFieldEnum[]
  }

  /**
   * Country.resellPlatforms
   */
  export type Country$resellPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResellPlatformCountry
     */
    select?: ResellPlatformCountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResellPlatformCountry
     */
    omit?: ResellPlatformCountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResellPlatformCountryInclude<ExtArgs> | null
    where?: ResellPlatformCountryWhereInput
    orderBy?: ResellPlatformCountryOrderByWithRelationInput | ResellPlatformCountryOrderByWithRelationInput[]
    cursor?: ResellPlatformCountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResellPlatformCountryScalarFieldEnum | ResellPlatformCountryScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PartnerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    logo: 'logo',
    tagline: 'tagline',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartnerScalarFieldEnum = (typeof PartnerScalarFieldEnum)[keyof typeof PartnerScalarFieldEnum]


  export const PartnerRoleScalarFieldEnum: {
    id: 'id',
    key: 'key',
    label: 'label',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartnerRoleScalarFieldEnum = (typeof PartnerRoleScalarFieldEnum)[keyof typeof PartnerRoleScalarFieldEnum]


  export const PartnerRoleAssignmentScalarFieldEnum: {
    id: 'id',
    partnerId: 'partnerId',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartnerRoleAssignmentScalarFieldEnum = (typeof PartnerRoleAssignmentScalarFieldEnum)[keyof typeof PartnerRoleAssignmentScalarFieldEnum]


  export const PartnerChannelScalarFieldEnum: {
    id: 'id',
    partnerId: 'partnerId',
    type: 'type',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartnerChannelScalarFieldEnum = (typeof PartnerChannelScalarFieldEnum)[keyof typeof PartnerChannelScalarFieldEnum]


  export const PartnerLocationScalarFieldEnum: {
    id: 'id',
    partnerId: 'partnerId',
    name: 'name',
    formattedAddress: 'formattedAddress',
    lat: 'lat',
    lng: 'lng',
    countryCode: 'countryCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartnerLocationScalarFieldEnum = (typeof PartnerLocationScalarFieldEnum)[keyof typeof PartnerLocationScalarFieldEnum]


  export const PartnerServiceProfileScalarFieldEnum: {
    id: 'id',
    channelId: 'channelId',
    locationId: 'locationId',
    serviceTypeId: 'serviceTypeId',
    available: 'available',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartnerServiceProfileScalarFieldEnum = (typeof PartnerServiceProfileScalarFieldEnum)[keyof typeof PartnerServiceProfileScalarFieldEnum]


  export const ServiceTypeScalarFieldEnum: {
    id: 'id',
    key: 'key',
    label: 'label',
    icon: 'icon',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceTypeScalarFieldEnum = (typeof ServiceTypeScalarFieldEnum)[keyof typeof ServiceTypeScalarFieldEnum]


  export const ProductCategoryScalarFieldEnum: {
    id: 'id',
    key: 'key',
    label: 'label',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductCategoryScalarFieldEnum = (typeof ProductCategoryScalarFieldEnum)[keyof typeof ProductCategoryScalarFieldEnum]


  export const PartnerProductCategoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    partnerId: 'partnerId',
    productCategoryId: 'productCategoryId'
  };

  export type PartnerProductCategoryScalarFieldEnum = (typeof PartnerProductCategoryScalarFieldEnum)[keyof typeof PartnerProductCategoryScalarFieldEnum]


  export const ResellPlatformScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    logo: 'logo',
    tagline: 'tagline',
    description: 'description',
    platformType: 'platformType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    altTagline: 'altTagline',
    canSell: 'canSell'
  };

  export type ResellPlatformScalarFieldEnum = (typeof ResellPlatformScalarFieldEnum)[keyof typeof ResellPlatformScalarFieldEnum]


  export const ResellPlatformCategoryScalarFieldEnum: {
    id: 'id',
    resellPlatformId: 'resellPlatformId',
    productCategoryId: 'productCategoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResellPlatformCategoryScalarFieldEnum = (typeof ResellPlatformCategoryScalarFieldEnum)[keyof typeof ResellPlatformCategoryScalarFieldEnum]


  export const ResellPlatformCountryScalarFieldEnum: {
    id: 'id',
    countryCode: 'countryCode',
    resellPlatformId: 'resellPlatformId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResellPlatformCountryScalarFieldEnum = (typeof ResellPlatformCountryScalarFieldEnum)[keyof typeof ResellPlatformCountryScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    code: 'code',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ChannelType'
   */
  export type EnumChannelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelType'>
    


  /**
   * Reference to a field of type 'ChannelType[]'
   */
  export type ListEnumChannelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ResellPlatformType'
   */
  export type EnumResellPlatformTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResellPlatformType'>
    


  /**
   * Reference to a field of type 'ResellPlatformType[]'
   */
  export type ListEnumResellPlatformTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResellPlatformType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PartnerWhereInput = {
    AND?: PartnerWhereInput | PartnerWhereInput[]
    OR?: PartnerWhereInput[]
    NOT?: PartnerWhereInput | PartnerWhereInput[]
    id?: StringFilter<"Partner"> | string
    name?: StringFilter<"Partner"> | string
    url?: StringFilter<"Partner"> | string
    logo?: StringFilter<"Partner"> | string
    tagline?: StringFilter<"Partner"> | string
    description?: StringFilter<"Partner"> | string
    createdAt?: DateTimeFilter<"Partner"> | Date | string
    updatedAt?: DateTimeFilter<"Partner"> | Date | string
    channels?: PartnerChannelListRelationFilter
    locations?: PartnerLocationListRelationFilter
    productCategories?: PartnerProductCategoryListRelationFilter
    roleAssignments?: PartnerRoleAssignmentListRelationFilter
  }

  export type PartnerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    channels?: PartnerChannelOrderByRelationAggregateInput
    locations?: PartnerLocationOrderByRelationAggregateInput
    productCategories?: PartnerProductCategoryOrderByRelationAggregateInput
    roleAssignments?: PartnerRoleAssignmentOrderByRelationAggregateInput
  }

  export type PartnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PartnerWhereInput | PartnerWhereInput[]
    OR?: PartnerWhereInput[]
    NOT?: PartnerWhereInput | PartnerWhereInput[]
    name?: StringFilter<"Partner"> | string
    url?: StringFilter<"Partner"> | string
    logo?: StringFilter<"Partner"> | string
    tagline?: StringFilter<"Partner"> | string
    description?: StringFilter<"Partner"> | string
    createdAt?: DateTimeFilter<"Partner"> | Date | string
    updatedAt?: DateTimeFilter<"Partner"> | Date | string
    channels?: PartnerChannelListRelationFilter
    locations?: PartnerLocationListRelationFilter
    productCategories?: PartnerProductCategoryListRelationFilter
    roleAssignments?: PartnerRoleAssignmentListRelationFilter
  }, "id">

  export type PartnerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartnerCountOrderByAggregateInput
    _max?: PartnerMaxOrderByAggregateInput
    _min?: PartnerMinOrderByAggregateInput
  }

  export type PartnerScalarWhereWithAggregatesInput = {
    AND?: PartnerScalarWhereWithAggregatesInput | PartnerScalarWhereWithAggregatesInput[]
    OR?: PartnerScalarWhereWithAggregatesInput[]
    NOT?: PartnerScalarWhereWithAggregatesInput | PartnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Partner"> | string
    name?: StringWithAggregatesFilter<"Partner"> | string
    url?: StringWithAggregatesFilter<"Partner"> | string
    logo?: StringWithAggregatesFilter<"Partner"> | string
    tagline?: StringWithAggregatesFilter<"Partner"> | string
    description?: StringWithAggregatesFilter<"Partner"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Partner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Partner"> | Date | string
  }

  export type PartnerRoleWhereInput = {
    AND?: PartnerRoleWhereInput | PartnerRoleWhereInput[]
    OR?: PartnerRoleWhereInput[]
    NOT?: PartnerRoleWhereInput | PartnerRoleWhereInput[]
    id?: StringFilter<"PartnerRole"> | string
    key?: StringFilter<"PartnerRole"> | string
    label?: StringFilter<"PartnerRole"> | string
    createdAt?: DateTimeFilter<"PartnerRole"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerRole"> | Date | string
    partners?: PartnerRoleAssignmentListRelationFilter
  }

  export type PartnerRoleOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    partners?: PartnerRoleAssignmentOrderByRelationAggregateInput
  }

  export type PartnerRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: PartnerRoleWhereInput | PartnerRoleWhereInput[]
    OR?: PartnerRoleWhereInput[]
    NOT?: PartnerRoleWhereInput | PartnerRoleWhereInput[]
    label?: StringFilter<"PartnerRole"> | string
    createdAt?: DateTimeFilter<"PartnerRole"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerRole"> | Date | string
    partners?: PartnerRoleAssignmentListRelationFilter
  }, "id" | "key">

  export type PartnerRoleOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartnerRoleCountOrderByAggregateInput
    _max?: PartnerRoleMaxOrderByAggregateInput
    _min?: PartnerRoleMinOrderByAggregateInput
  }

  export type PartnerRoleScalarWhereWithAggregatesInput = {
    AND?: PartnerRoleScalarWhereWithAggregatesInput | PartnerRoleScalarWhereWithAggregatesInput[]
    OR?: PartnerRoleScalarWhereWithAggregatesInput[]
    NOT?: PartnerRoleScalarWhereWithAggregatesInput | PartnerRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PartnerRole"> | string
    key?: StringWithAggregatesFilter<"PartnerRole"> | string
    label?: StringWithAggregatesFilter<"PartnerRole"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PartnerRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PartnerRole"> | Date | string
  }

  export type PartnerRoleAssignmentWhereInput = {
    AND?: PartnerRoleAssignmentWhereInput | PartnerRoleAssignmentWhereInput[]
    OR?: PartnerRoleAssignmentWhereInput[]
    NOT?: PartnerRoleAssignmentWhereInput | PartnerRoleAssignmentWhereInput[]
    id?: StringFilter<"PartnerRoleAssignment"> | string
    partnerId?: StringFilter<"PartnerRoleAssignment"> | string
    roleId?: StringFilter<"PartnerRoleAssignment"> | string
    createdAt?: DateTimeFilter<"PartnerRoleAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerRoleAssignment"> | Date | string
    partner?: XOR<PartnerScalarRelationFilter, PartnerWhereInput>
    role?: XOR<PartnerRoleScalarRelationFilter, PartnerRoleWhereInput>
  }

  export type PartnerRoleAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    partnerId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    partner?: PartnerOrderByWithRelationInput
    role?: PartnerRoleOrderByWithRelationInput
  }

  export type PartnerRoleAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    partnerId_roleId?: PartnerRoleAssignmentPartnerIdRoleIdCompoundUniqueInput
    AND?: PartnerRoleAssignmentWhereInput | PartnerRoleAssignmentWhereInput[]
    OR?: PartnerRoleAssignmentWhereInput[]
    NOT?: PartnerRoleAssignmentWhereInput | PartnerRoleAssignmentWhereInput[]
    partnerId?: StringFilter<"PartnerRoleAssignment"> | string
    roleId?: StringFilter<"PartnerRoleAssignment"> | string
    createdAt?: DateTimeFilter<"PartnerRoleAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerRoleAssignment"> | Date | string
    partner?: XOR<PartnerScalarRelationFilter, PartnerWhereInput>
    role?: XOR<PartnerRoleScalarRelationFilter, PartnerRoleWhereInput>
  }, "id" | "partnerId_roleId">

  export type PartnerRoleAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    partnerId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartnerRoleAssignmentCountOrderByAggregateInput
    _max?: PartnerRoleAssignmentMaxOrderByAggregateInput
    _min?: PartnerRoleAssignmentMinOrderByAggregateInput
  }

  export type PartnerRoleAssignmentScalarWhereWithAggregatesInput = {
    AND?: PartnerRoleAssignmentScalarWhereWithAggregatesInput | PartnerRoleAssignmentScalarWhereWithAggregatesInput[]
    OR?: PartnerRoleAssignmentScalarWhereWithAggregatesInput[]
    NOT?: PartnerRoleAssignmentScalarWhereWithAggregatesInput | PartnerRoleAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PartnerRoleAssignment"> | string
    partnerId?: StringWithAggregatesFilter<"PartnerRoleAssignment"> | string
    roleId?: StringWithAggregatesFilter<"PartnerRoleAssignment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PartnerRoleAssignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PartnerRoleAssignment"> | Date | string
  }

  export type PartnerChannelWhereInput = {
    AND?: PartnerChannelWhereInput | PartnerChannelWhereInput[]
    OR?: PartnerChannelWhereInput[]
    NOT?: PartnerChannelWhereInput | PartnerChannelWhereInput[]
    id?: StringFilter<"PartnerChannel"> | string
    partnerId?: StringFilter<"PartnerChannel"> | string
    type?: EnumChannelTypeFilter<"PartnerChannel"> | $Enums.ChannelType
    url?: StringNullableFilter<"PartnerChannel"> | string | null
    createdAt?: DateTimeFilter<"PartnerChannel"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerChannel"> | Date | string
    partner?: XOR<PartnerScalarRelationFilter, PartnerWhereInput>
    services?: PartnerServiceProfileListRelationFilter
  }

  export type PartnerChannelOrderByWithRelationInput = {
    id?: SortOrder
    partnerId?: SortOrder
    type?: SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    partner?: PartnerOrderByWithRelationInput
    services?: PartnerServiceProfileOrderByRelationAggregateInput
  }

  export type PartnerChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PartnerChannelWhereInput | PartnerChannelWhereInput[]
    OR?: PartnerChannelWhereInput[]
    NOT?: PartnerChannelWhereInput | PartnerChannelWhereInput[]
    partnerId?: StringFilter<"PartnerChannel"> | string
    type?: EnumChannelTypeFilter<"PartnerChannel"> | $Enums.ChannelType
    url?: StringNullableFilter<"PartnerChannel"> | string | null
    createdAt?: DateTimeFilter<"PartnerChannel"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerChannel"> | Date | string
    partner?: XOR<PartnerScalarRelationFilter, PartnerWhereInput>
    services?: PartnerServiceProfileListRelationFilter
  }, "id">

  export type PartnerChannelOrderByWithAggregationInput = {
    id?: SortOrder
    partnerId?: SortOrder
    type?: SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartnerChannelCountOrderByAggregateInput
    _max?: PartnerChannelMaxOrderByAggregateInput
    _min?: PartnerChannelMinOrderByAggregateInput
  }

  export type PartnerChannelScalarWhereWithAggregatesInput = {
    AND?: PartnerChannelScalarWhereWithAggregatesInput | PartnerChannelScalarWhereWithAggregatesInput[]
    OR?: PartnerChannelScalarWhereWithAggregatesInput[]
    NOT?: PartnerChannelScalarWhereWithAggregatesInput | PartnerChannelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PartnerChannel"> | string
    partnerId?: StringWithAggregatesFilter<"PartnerChannel"> | string
    type?: EnumChannelTypeWithAggregatesFilter<"PartnerChannel"> | $Enums.ChannelType
    url?: StringNullableWithAggregatesFilter<"PartnerChannel"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PartnerChannel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PartnerChannel"> | Date | string
  }

  export type PartnerLocationWhereInput = {
    AND?: PartnerLocationWhereInput | PartnerLocationWhereInput[]
    OR?: PartnerLocationWhereInput[]
    NOT?: PartnerLocationWhereInput | PartnerLocationWhereInput[]
    id?: StringFilter<"PartnerLocation"> | string
    partnerId?: StringFilter<"PartnerLocation"> | string
    name?: StringFilter<"PartnerLocation"> | string
    formattedAddress?: StringFilter<"PartnerLocation"> | string
    lat?: FloatFilter<"PartnerLocation"> | number
    lng?: FloatFilter<"PartnerLocation"> | number
    countryCode?: StringFilter<"PartnerLocation"> | string
    createdAt?: DateTimeFilter<"PartnerLocation"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerLocation"> | Date | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    partner?: XOR<PartnerScalarRelationFilter, PartnerWhereInput>
    services?: PartnerServiceProfileListRelationFilter
  }

  export type PartnerLocationOrderByWithRelationInput = {
    id?: SortOrder
    partnerId?: SortOrder
    name?: SortOrder
    formattedAddress?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    countryCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: CountryOrderByWithRelationInput
    partner?: PartnerOrderByWithRelationInput
    services?: PartnerServiceProfileOrderByRelationAggregateInput
  }

  export type PartnerLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PartnerLocationWhereInput | PartnerLocationWhereInput[]
    OR?: PartnerLocationWhereInput[]
    NOT?: PartnerLocationWhereInput | PartnerLocationWhereInput[]
    partnerId?: StringFilter<"PartnerLocation"> | string
    name?: StringFilter<"PartnerLocation"> | string
    formattedAddress?: StringFilter<"PartnerLocation"> | string
    lat?: FloatFilter<"PartnerLocation"> | number
    lng?: FloatFilter<"PartnerLocation"> | number
    countryCode?: StringFilter<"PartnerLocation"> | string
    createdAt?: DateTimeFilter<"PartnerLocation"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerLocation"> | Date | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    partner?: XOR<PartnerScalarRelationFilter, PartnerWhereInput>
    services?: PartnerServiceProfileListRelationFilter
  }, "id">

  export type PartnerLocationOrderByWithAggregationInput = {
    id?: SortOrder
    partnerId?: SortOrder
    name?: SortOrder
    formattedAddress?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    countryCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartnerLocationCountOrderByAggregateInput
    _avg?: PartnerLocationAvgOrderByAggregateInput
    _max?: PartnerLocationMaxOrderByAggregateInput
    _min?: PartnerLocationMinOrderByAggregateInput
    _sum?: PartnerLocationSumOrderByAggregateInput
  }

  export type PartnerLocationScalarWhereWithAggregatesInput = {
    AND?: PartnerLocationScalarWhereWithAggregatesInput | PartnerLocationScalarWhereWithAggregatesInput[]
    OR?: PartnerLocationScalarWhereWithAggregatesInput[]
    NOT?: PartnerLocationScalarWhereWithAggregatesInput | PartnerLocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PartnerLocation"> | string
    partnerId?: StringWithAggregatesFilter<"PartnerLocation"> | string
    name?: StringWithAggregatesFilter<"PartnerLocation"> | string
    formattedAddress?: StringWithAggregatesFilter<"PartnerLocation"> | string
    lat?: FloatWithAggregatesFilter<"PartnerLocation"> | number
    lng?: FloatWithAggregatesFilter<"PartnerLocation"> | number
    countryCode?: StringWithAggregatesFilter<"PartnerLocation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PartnerLocation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PartnerLocation"> | Date | string
  }

  export type PartnerServiceProfileWhereInput = {
    AND?: PartnerServiceProfileWhereInput | PartnerServiceProfileWhereInput[]
    OR?: PartnerServiceProfileWhereInput[]
    NOT?: PartnerServiceProfileWhereInput | PartnerServiceProfileWhereInput[]
    id?: StringFilter<"PartnerServiceProfile"> | string
    channelId?: StringNullableFilter<"PartnerServiceProfile"> | string | null
    locationId?: StringNullableFilter<"PartnerServiceProfile"> | string | null
    serviceTypeId?: StringFilter<"PartnerServiceProfile"> | string
    available?: BoolFilter<"PartnerServiceProfile"> | boolean
    notes?: StringNullableFilter<"PartnerServiceProfile"> | string | null
    createdAt?: DateTimeFilter<"PartnerServiceProfile"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerServiceProfile"> | Date | string
    channel?: XOR<PartnerChannelNullableScalarRelationFilter, PartnerChannelWhereInput> | null
    location?: XOR<PartnerLocationNullableScalarRelationFilter, PartnerLocationWhereInput> | null
    serviceType?: XOR<ServiceTypeScalarRelationFilter, ServiceTypeWhereInput>
  }

  export type PartnerServiceProfileOrderByWithRelationInput = {
    id?: SortOrder
    channelId?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    serviceTypeId?: SortOrder
    available?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    channel?: PartnerChannelOrderByWithRelationInput
    location?: PartnerLocationOrderByWithRelationInput
    serviceType?: ServiceTypeOrderByWithRelationInput
  }

  export type PartnerServiceProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    channelId_locationId_serviceTypeId?: PartnerServiceProfileChannelIdLocationIdServiceTypeIdCompoundUniqueInput
    AND?: PartnerServiceProfileWhereInput | PartnerServiceProfileWhereInput[]
    OR?: PartnerServiceProfileWhereInput[]
    NOT?: PartnerServiceProfileWhereInput | PartnerServiceProfileWhereInput[]
    channelId?: StringNullableFilter<"PartnerServiceProfile"> | string | null
    locationId?: StringNullableFilter<"PartnerServiceProfile"> | string | null
    serviceTypeId?: StringFilter<"PartnerServiceProfile"> | string
    available?: BoolFilter<"PartnerServiceProfile"> | boolean
    notes?: StringNullableFilter<"PartnerServiceProfile"> | string | null
    createdAt?: DateTimeFilter<"PartnerServiceProfile"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerServiceProfile"> | Date | string
    channel?: XOR<PartnerChannelNullableScalarRelationFilter, PartnerChannelWhereInput> | null
    location?: XOR<PartnerLocationNullableScalarRelationFilter, PartnerLocationWhereInput> | null
    serviceType?: XOR<ServiceTypeScalarRelationFilter, ServiceTypeWhereInput>
  }, "id" | "channelId_locationId_serviceTypeId">

  export type PartnerServiceProfileOrderByWithAggregationInput = {
    id?: SortOrder
    channelId?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    serviceTypeId?: SortOrder
    available?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartnerServiceProfileCountOrderByAggregateInput
    _max?: PartnerServiceProfileMaxOrderByAggregateInput
    _min?: PartnerServiceProfileMinOrderByAggregateInput
  }

  export type PartnerServiceProfileScalarWhereWithAggregatesInput = {
    AND?: PartnerServiceProfileScalarWhereWithAggregatesInput | PartnerServiceProfileScalarWhereWithAggregatesInput[]
    OR?: PartnerServiceProfileScalarWhereWithAggregatesInput[]
    NOT?: PartnerServiceProfileScalarWhereWithAggregatesInput | PartnerServiceProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PartnerServiceProfile"> | string
    channelId?: StringNullableWithAggregatesFilter<"PartnerServiceProfile"> | string | null
    locationId?: StringNullableWithAggregatesFilter<"PartnerServiceProfile"> | string | null
    serviceTypeId?: StringWithAggregatesFilter<"PartnerServiceProfile"> | string
    available?: BoolWithAggregatesFilter<"PartnerServiceProfile"> | boolean
    notes?: StringNullableWithAggregatesFilter<"PartnerServiceProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PartnerServiceProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PartnerServiceProfile"> | Date | string
  }

  export type ServiceTypeWhereInput = {
    AND?: ServiceTypeWhereInput | ServiceTypeWhereInput[]
    OR?: ServiceTypeWhereInput[]
    NOT?: ServiceTypeWhereInput | ServiceTypeWhereInput[]
    id?: StringFilter<"ServiceType"> | string
    key?: StringFilter<"ServiceType"> | string
    label?: StringFilter<"ServiceType"> | string
    icon?: StringNullableFilter<"ServiceType"> | string | null
    createdAt?: DateTimeFilter<"ServiceType"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceType"> | Date | string
    services?: PartnerServiceProfileListRelationFilter
  }

  export type ServiceTypeOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    services?: PartnerServiceProfileOrderByRelationAggregateInput
  }

  export type ServiceTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ServiceTypeWhereInput | ServiceTypeWhereInput[]
    OR?: ServiceTypeWhereInput[]
    NOT?: ServiceTypeWhereInput | ServiceTypeWhereInput[]
    label?: StringFilter<"ServiceType"> | string
    icon?: StringNullableFilter<"ServiceType"> | string | null
    createdAt?: DateTimeFilter<"ServiceType"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceType"> | Date | string
    services?: PartnerServiceProfileListRelationFilter
  }, "id" | "key">

  export type ServiceTypeOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceTypeCountOrderByAggregateInput
    _max?: ServiceTypeMaxOrderByAggregateInput
    _min?: ServiceTypeMinOrderByAggregateInput
  }

  export type ServiceTypeScalarWhereWithAggregatesInput = {
    AND?: ServiceTypeScalarWhereWithAggregatesInput | ServiceTypeScalarWhereWithAggregatesInput[]
    OR?: ServiceTypeScalarWhereWithAggregatesInput[]
    NOT?: ServiceTypeScalarWhereWithAggregatesInput | ServiceTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceType"> | string
    key?: StringWithAggregatesFilter<"ServiceType"> | string
    label?: StringWithAggregatesFilter<"ServiceType"> | string
    icon?: StringNullableWithAggregatesFilter<"ServiceType"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ServiceType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceType"> | Date | string
  }

  export type ProductCategoryWhereInput = {
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    id?: StringFilter<"ProductCategory"> | string
    key?: StringFilter<"ProductCategory"> | string
    label?: StringFilter<"ProductCategory"> | string
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductCategory"> | Date | string
    partners?: PartnerProductCategoryListRelationFilter
    resellPlatforms?: ResellPlatformCategoryListRelationFilter
  }

  export type ProductCategoryOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    partners?: PartnerProductCategoryOrderByRelationAggregateInput
    resellPlatforms?: ResellPlatformCategoryOrderByRelationAggregateInput
  }

  export type ProductCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    label?: StringFilter<"ProductCategory"> | string
    createdAt?: DateTimeFilter<"ProductCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ProductCategory"> | Date | string
    partners?: PartnerProductCategoryListRelationFilter
    resellPlatforms?: ResellPlatformCategoryListRelationFilter
  }, "id" | "key">

  export type ProductCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCategoryCountOrderByAggregateInput
    _max?: ProductCategoryMaxOrderByAggregateInput
    _min?: ProductCategoryMinOrderByAggregateInput
  }

  export type ProductCategoryScalarWhereWithAggregatesInput = {
    AND?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    OR?: ProductCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductCategory"> | string
    key?: StringWithAggregatesFilter<"ProductCategory"> | string
    label?: StringWithAggregatesFilter<"ProductCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductCategory"> | Date | string
  }

  export type PartnerProductCategoryWhereInput = {
    AND?: PartnerProductCategoryWhereInput | PartnerProductCategoryWhereInput[]
    OR?: PartnerProductCategoryWhereInput[]
    NOT?: PartnerProductCategoryWhereInput | PartnerProductCategoryWhereInput[]
    id?: StringFilter<"PartnerProductCategory"> | string
    createdAt?: DateTimeFilter<"PartnerProductCategory"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerProductCategory"> | Date | string
    partnerId?: StringFilter<"PartnerProductCategory"> | string
    productCategoryId?: StringFilter<"PartnerProductCategory"> | string
    partner?: XOR<PartnerScalarRelationFilter, PartnerWhereInput>
    productCategory?: XOR<ProductCategoryScalarRelationFilter, ProductCategoryWhereInput>
  }

  export type PartnerProductCategoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    partnerId?: SortOrder
    productCategoryId?: SortOrder
    partner?: PartnerOrderByWithRelationInput
    productCategory?: ProductCategoryOrderByWithRelationInput
  }

  export type PartnerProductCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    partnerId_productCategoryId?: PartnerProductCategoryPartnerIdProductCategoryIdCompoundUniqueInput
    AND?: PartnerProductCategoryWhereInput | PartnerProductCategoryWhereInput[]
    OR?: PartnerProductCategoryWhereInput[]
    NOT?: PartnerProductCategoryWhereInput | PartnerProductCategoryWhereInput[]
    createdAt?: DateTimeFilter<"PartnerProductCategory"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerProductCategory"> | Date | string
    partnerId?: StringFilter<"PartnerProductCategory"> | string
    productCategoryId?: StringFilter<"PartnerProductCategory"> | string
    partner?: XOR<PartnerScalarRelationFilter, PartnerWhereInput>
    productCategory?: XOR<ProductCategoryScalarRelationFilter, ProductCategoryWhereInput>
  }, "id" | "partnerId_productCategoryId">

  export type PartnerProductCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    partnerId?: SortOrder
    productCategoryId?: SortOrder
    _count?: PartnerProductCategoryCountOrderByAggregateInput
    _max?: PartnerProductCategoryMaxOrderByAggregateInput
    _min?: PartnerProductCategoryMinOrderByAggregateInput
  }

  export type PartnerProductCategoryScalarWhereWithAggregatesInput = {
    AND?: PartnerProductCategoryScalarWhereWithAggregatesInput | PartnerProductCategoryScalarWhereWithAggregatesInput[]
    OR?: PartnerProductCategoryScalarWhereWithAggregatesInput[]
    NOT?: PartnerProductCategoryScalarWhereWithAggregatesInput | PartnerProductCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PartnerProductCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PartnerProductCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PartnerProductCategory"> | Date | string
    partnerId?: StringWithAggregatesFilter<"PartnerProductCategory"> | string
    productCategoryId?: StringWithAggregatesFilter<"PartnerProductCategory"> | string
  }

  export type ResellPlatformWhereInput = {
    AND?: ResellPlatformWhereInput | ResellPlatformWhereInput[]
    OR?: ResellPlatformWhereInput[]
    NOT?: ResellPlatformWhereInput | ResellPlatformWhereInput[]
    id?: StringFilter<"ResellPlatform"> | string
    name?: StringFilter<"ResellPlatform"> | string
    url?: StringFilter<"ResellPlatform"> | string
    logo?: StringNullableFilter<"ResellPlatform"> | string | null
    tagline?: StringFilter<"ResellPlatform"> | string
    description?: StringFilter<"ResellPlatform"> | string
    platformType?: EnumResellPlatformTypeFilter<"ResellPlatform"> | $Enums.ResellPlatformType
    createdAt?: DateTimeFilter<"ResellPlatform"> | Date | string
    updatedAt?: DateTimeFilter<"ResellPlatform"> | Date | string
    altTagline?: StringNullableFilter<"ResellPlatform"> | string | null
    canSell?: BoolFilter<"ResellPlatform"> | boolean
    productCategories?: ResellPlatformCategoryListRelationFilter
    countries?: ResellPlatformCountryListRelationFilter
  }

  export type ResellPlatformOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrderInput | SortOrder
    tagline?: SortOrder
    description?: SortOrder
    platformType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    altTagline?: SortOrderInput | SortOrder
    canSell?: SortOrder
    productCategories?: ResellPlatformCategoryOrderByRelationAggregateInput
    countries?: ResellPlatformCountryOrderByRelationAggregateInput
  }

  export type ResellPlatformWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: ResellPlatformWhereInput | ResellPlatformWhereInput[]
    OR?: ResellPlatformWhereInput[]
    NOT?: ResellPlatformWhereInput | ResellPlatformWhereInput[]
    name?: StringFilter<"ResellPlatform"> | string
    logo?: StringNullableFilter<"ResellPlatform"> | string | null
    tagline?: StringFilter<"ResellPlatform"> | string
    description?: StringFilter<"ResellPlatform"> | string
    platformType?: EnumResellPlatformTypeFilter<"ResellPlatform"> | $Enums.ResellPlatformType
    createdAt?: DateTimeFilter<"ResellPlatform"> | Date | string
    updatedAt?: DateTimeFilter<"ResellPlatform"> | Date | string
    altTagline?: StringNullableFilter<"ResellPlatform"> | string | null
    canSell?: BoolFilter<"ResellPlatform"> | boolean
    productCategories?: ResellPlatformCategoryListRelationFilter
    countries?: ResellPlatformCountryListRelationFilter
  }, "id" | "url">

  export type ResellPlatformOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrderInput | SortOrder
    tagline?: SortOrder
    description?: SortOrder
    platformType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    altTagline?: SortOrderInput | SortOrder
    canSell?: SortOrder
    _count?: ResellPlatformCountOrderByAggregateInput
    _max?: ResellPlatformMaxOrderByAggregateInput
    _min?: ResellPlatformMinOrderByAggregateInput
  }

  export type ResellPlatformScalarWhereWithAggregatesInput = {
    AND?: ResellPlatformScalarWhereWithAggregatesInput | ResellPlatformScalarWhereWithAggregatesInput[]
    OR?: ResellPlatformScalarWhereWithAggregatesInput[]
    NOT?: ResellPlatformScalarWhereWithAggregatesInput | ResellPlatformScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResellPlatform"> | string
    name?: StringWithAggregatesFilter<"ResellPlatform"> | string
    url?: StringWithAggregatesFilter<"ResellPlatform"> | string
    logo?: StringNullableWithAggregatesFilter<"ResellPlatform"> | string | null
    tagline?: StringWithAggregatesFilter<"ResellPlatform"> | string
    description?: StringWithAggregatesFilter<"ResellPlatform"> | string
    platformType?: EnumResellPlatformTypeWithAggregatesFilter<"ResellPlatform"> | $Enums.ResellPlatformType
    createdAt?: DateTimeWithAggregatesFilter<"ResellPlatform"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ResellPlatform"> | Date | string
    altTagline?: StringNullableWithAggregatesFilter<"ResellPlatform"> | string | null
    canSell?: BoolWithAggregatesFilter<"ResellPlatform"> | boolean
  }

  export type ResellPlatformCategoryWhereInput = {
    AND?: ResellPlatformCategoryWhereInput | ResellPlatformCategoryWhereInput[]
    OR?: ResellPlatformCategoryWhereInput[]
    NOT?: ResellPlatformCategoryWhereInput | ResellPlatformCategoryWhereInput[]
    id?: StringFilter<"ResellPlatformCategory"> | string
    resellPlatformId?: StringFilter<"ResellPlatformCategory"> | string
    productCategoryId?: StringFilter<"ResellPlatformCategory"> | string
    createdAt?: DateTimeFilter<"ResellPlatformCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ResellPlatformCategory"> | Date | string
    productCategory?: XOR<ProductCategoryScalarRelationFilter, ProductCategoryWhereInput>
    resellPlatform?: XOR<ResellPlatformScalarRelationFilter, ResellPlatformWhereInput>
  }

  export type ResellPlatformCategoryOrderByWithRelationInput = {
    id?: SortOrder
    resellPlatformId?: SortOrder
    productCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productCategory?: ProductCategoryOrderByWithRelationInput
    resellPlatform?: ResellPlatformOrderByWithRelationInput
  }

  export type ResellPlatformCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    resellPlatformId_productCategoryId?: ResellPlatformCategoryResellPlatformIdProductCategoryIdCompoundUniqueInput
    AND?: ResellPlatformCategoryWhereInput | ResellPlatformCategoryWhereInput[]
    OR?: ResellPlatformCategoryWhereInput[]
    NOT?: ResellPlatformCategoryWhereInput | ResellPlatformCategoryWhereInput[]
    resellPlatformId?: StringFilter<"ResellPlatformCategory"> | string
    productCategoryId?: StringFilter<"ResellPlatformCategory"> | string
    createdAt?: DateTimeFilter<"ResellPlatformCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ResellPlatformCategory"> | Date | string
    productCategory?: XOR<ProductCategoryScalarRelationFilter, ProductCategoryWhereInput>
    resellPlatform?: XOR<ResellPlatformScalarRelationFilter, ResellPlatformWhereInput>
  }, "id" | "resellPlatformId_productCategoryId">

  export type ResellPlatformCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    resellPlatformId?: SortOrder
    productCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResellPlatformCategoryCountOrderByAggregateInput
    _max?: ResellPlatformCategoryMaxOrderByAggregateInput
    _min?: ResellPlatformCategoryMinOrderByAggregateInput
  }

  export type ResellPlatformCategoryScalarWhereWithAggregatesInput = {
    AND?: ResellPlatformCategoryScalarWhereWithAggregatesInput | ResellPlatformCategoryScalarWhereWithAggregatesInput[]
    OR?: ResellPlatformCategoryScalarWhereWithAggregatesInput[]
    NOT?: ResellPlatformCategoryScalarWhereWithAggregatesInput | ResellPlatformCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResellPlatformCategory"> | string
    resellPlatformId?: StringWithAggregatesFilter<"ResellPlatformCategory"> | string
    productCategoryId?: StringWithAggregatesFilter<"ResellPlatformCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ResellPlatformCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ResellPlatformCategory"> | Date | string
  }

  export type ResellPlatformCountryWhereInput = {
    AND?: ResellPlatformCountryWhereInput | ResellPlatformCountryWhereInput[]
    OR?: ResellPlatformCountryWhereInput[]
    NOT?: ResellPlatformCountryWhereInput | ResellPlatformCountryWhereInput[]
    id?: StringFilter<"ResellPlatformCountry"> | string
    countryCode?: StringFilter<"ResellPlatformCountry"> | string
    resellPlatformId?: StringFilter<"ResellPlatformCountry"> | string
    createdAt?: DateTimeFilter<"ResellPlatformCountry"> | Date | string
    updatedAt?: DateTimeFilter<"ResellPlatformCountry"> | Date | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    resellPlatform?: XOR<ResellPlatformScalarRelationFilter, ResellPlatformWhereInput>
  }

  export type ResellPlatformCountryOrderByWithRelationInput = {
    id?: SortOrder
    countryCode?: SortOrder
    resellPlatformId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: CountryOrderByWithRelationInput
    resellPlatform?: ResellPlatformOrderByWithRelationInput
  }

  export type ResellPlatformCountryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    resellPlatformId_countryCode?: ResellPlatformCountryResellPlatformIdCountryCodeCompoundUniqueInput
    AND?: ResellPlatformCountryWhereInput | ResellPlatformCountryWhereInput[]
    OR?: ResellPlatformCountryWhereInput[]
    NOT?: ResellPlatformCountryWhereInput | ResellPlatformCountryWhereInput[]
    countryCode?: StringFilter<"ResellPlatformCountry"> | string
    resellPlatformId?: StringFilter<"ResellPlatformCountry"> | string
    createdAt?: DateTimeFilter<"ResellPlatformCountry"> | Date | string
    updatedAt?: DateTimeFilter<"ResellPlatformCountry"> | Date | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    resellPlatform?: XOR<ResellPlatformScalarRelationFilter, ResellPlatformWhereInput>
  }, "id" | "resellPlatformId_countryCode">

  export type ResellPlatformCountryOrderByWithAggregationInput = {
    id?: SortOrder
    countryCode?: SortOrder
    resellPlatformId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResellPlatformCountryCountOrderByAggregateInput
    _max?: ResellPlatformCountryMaxOrderByAggregateInput
    _min?: ResellPlatformCountryMinOrderByAggregateInput
  }

  export type ResellPlatformCountryScalarWhereWithAggregatesInput = {
    AND?: ResellPlatformCountryScalarWhereWithAggregatesInput | ResellPlatformCountryScalarWhereWithAggregatesInput[]
    OR?: ResellPlatformCountryScalarWhereWithAggregatesInput[]
    NOT?: ResellPlatformCountryScalarWhereWithAggregatesInput | ResellPlatformCountryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResellPlatformCountry"> | string
    countryCode?: StringWithAggregatesFilter<"ResellPlatformCountry"> | string
    resellPlatformId?: StringWithAggregatesFilter<"ResellPlatformCountry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ResellPlatformCountry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ResellPlatformCountry"> | Date | string
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    code?: StringFilter<"Country"> | string
    name?: StringFilter<"Country"> | string
    createdAt?: DateTimeFilter<"Country"> | Date | string
    updatedAt?: DateTimeFilter<"Country"> | Date | string
    partners?: PartnerLocationListRelationFilter
    resellPlatforms?: ResellPlatformCountryListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    partners?: PartnerLocationOrderByRelationAggregateInput
    resellPlatforms?: ResellPlatformCountryOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    name?: StringFilter<"Country"> | string
    createdAt?: DateTimeFilter<"Country"> | Date | string
    updatedAt?: DateTimeFilter<"Country"> | Date | string
    partners?: PartnerLocationListRelationFilter
    resellPlatforms?: ResellPlatformCountryListRelationFilter
  }, "code">

  export type CountryOrderByWithAggregationInput = {
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Country"> | string
    name?: StringWithAggregatesFilter<"Country"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Country"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Country"> | Date | string
  }

  export type PartnerCreateInput = {
    id: string
    name: string
    url: string
    logo: string
    tagline: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: PartnerChannelCreateNestedManyWithoutPartnerInput
    locations?: PartnerLocationCreateNestedManyWithoutPartnerInput
    productCategories?: PartnerProductCategoryCreateNestedManyWithoutPartnerInput
    roleAssignments?: PartnerRoleAssignmentCreateNestedManyWithoutPartnerInput
  }

  export type PartnerUncheckedCreateInput = {
    id: string
    name: string
    url: string
    logo: string
    tagline: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: PartnerChannelUncheckedCreateNestedManyWithoutPartnerInput
    locations?: PartnerLocationUncheckedCreateNestedManyWithoutPartnerInput
    productCategories?: PartnerProductCategoryUncheckedCreateNestedManyWithoutPartnerInput
    roleAssignments?: PartnerRoleAssignmentUncheckedCreateNestedManyWithoutPartnerInput
  }

  export type PartnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: PartnerChannelUpdateManyWithoutPartnerNestedInput
    locations?: PartnerLocationUpdateManyWithoutPartnerNestedInput
    productCategories?: PartnerProductCategoryUpdateManyWithoutPartnerNestedInput
    roleAssignments?: PartnerRoleAssignmentUpdateManyWithoutPartnerNestedInput
  }

  export type PartnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: PartnerChannelUncheckedUpdateManyWithoutPartnerNestedInput
    locations?: PartnerLocationUncheckedUpdateManyWithoutPartnerNestedInput
    productCategories?: PartnerProductCategoryUncheckedUpdateManyWithoutPartnerNestedInput
    roleAssignments?: PartnerRoleAssignmentUncheckedUpdateManyWithoutPartnerNestedInput
  }

  export type PartnerCreateManyInput = {
    id: string
    name: string
    url: string
    logo: string
    tagline: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerRoleCreateInput = {
    id: string
    key: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partners?: PartnerRoleAssignmentCreateNestedManyWithoutRoleInput
  }

  export type PartnerRoleUncheckedCreateInput = {
    id: string
    key: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partners?: PartnerRoleAssignmentUncheckedCreateNestedManyWithoutRoleInput
  }

  export type PartnerRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerRoleAssignmentUpdateManyWithoutRoleNestedInput
  }

  export type PartnerRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerRoleAssignmentUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type PartnerRoleCreateManyInput = {
    id: string
    key: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerRoleAssignmentCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partner: PartnerCreateNestedOneWithoutRoleAssignmentsInput
    role: PartnerRoleCreateNestedOneWithoutPartnersInput
  }

  export type PartnerRoleAssignmentUncheckedCreateInput = {
    id: string
    partnerId: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerRoleAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partner?: PartnerUpdateOneRequiredWithoutRoleAssignmentsNestedInput
    role?: PartnerRoleUpdateOneRequiredWithoutPartnersNestedInput
  }

  export type PartnerRoleAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerRoleAssignmentCreateManyInput = {
    id: string
    partnerId: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerRoleAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerRoleAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerChannelCreateInput = {
    id: string
    type: $Enums.ChannelType
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    partner: PartnerCreateNestedOneWithoutChannelsInput
    services?: PartnerServiceProfileCreateNestedManyWithoutChannelInput
  }

  export type PartnerChannelUncheckedCreateInput = {
    id: string
    partnerId: string
    type: $Enums.ChannelType
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: PartnerServiceProfileUncheckedCreateNestedManyWithoutChannelInput
  }

  export type PartnerChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partner?: PartnerUpdateOneRequiredWithoutChannelsNestedInput
    services?: PartnerServiceProfileUpdateManyWithoutChannelNestedInput
  }

  export type PartnerChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: PartnerServiceProfileUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type PartnerChannelCreateManyInput = {
    id: string
    partnerId: string
    type: $Enums.ChannelType
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerLocationCreateInput = {
    id: string
    name: string
    formattedAddress: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutPartnersInput
    partner: PartnerCreateNestedOneWithoutLocationsInput
    services?: PartnerServiceProfileCreateNestedManyWithoutLocationInput
  }

  export type PartnerLocationUncheckedCreateInput = {
    id: string
    partnerId: string
    name: string
    formattedAddress: string
    lat: number
    lng: number
    countryCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: PartnerServiceProfileUncheckedCreateNestedManyWithoutLocationInput
  }

  export type PartnerLocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formattedAddress?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutPartnersNestedInput
    partner?: PartnerUpdateOneRequiredWithoutLocationsNestedInput
    services?: PartnerServiceProfileUpdateManyWithoutLocationNestedInput
  }

  export type PartnerLocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formattedAddress?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    countryCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: PartnerServiceProfileUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type PartnerLocationCreateManyInput = {
    id: string
    partnerId: string
    name: string
    formattedAddress: string
    lat: number
    lng: number
    countryCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerLocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formattedAddress?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerLocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formattedAddress?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    countryCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerServiceProfileCreateInput = {
    id: string
    available?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channel?: PartnerChannelCreateNestedOneWithoutServicesInput
    location?: PartnerLocationCreateNestedOneWithoutServicesInput
    serviceType: ServiceTypeCreateNestedOneWithoutServicesInput
  }

  export type PartnerServiceProfileUncheckedCreateInput = {
    id: string
    channelId?: string | null
    locationId?: string | null
    serviceTypeId: string
    available?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerServiceProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: PartnerChannelUpdateOneWithoutServicesNestedInput
    location?: PartnerLocationUpdateOneWithoutServicesNestedInput
    serviceType?: ServiceTypeUpdateOneRequiredWithoutServicesNestedInput
  }

  export type PartnerServiceProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceTypeId?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerServiceProfileCreateManyInput = {
    id: string
    channelId?: string | null
    locationId?: string | null
    serviceTypeId: string
    available?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerServiceProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerServiceProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceTypeId?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceTypeCreateInput = {
    id: string
    key: string
    label: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: PartnerServiceProfileCreateNestedManyWithoutServiceTypeInput
  }

  export type ServiceTypeUncheckedCreateInput = {
    id: string
    key: string
    label: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: PartnerServiceProfileUncheckedCreateNestedManyWithoutServiceTypeInput
  }

  export type ServiceTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: PartnerServiceProfileUpdateManyWithoutServiceTypeNestedInput
  }

  export type ServiceTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: PartnerServiceProfileUncheckedUpdateManyWithoutServiceTypeNestedInput
  }

  export type ServiceTypeCreateManyInput = {
    id: string
    key: string
    label: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryCreateInput = {
    id: string
    key: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partners?: PartnerProductCategoryCreateNestedManyWithoutProductCategoryInput
    resellPlatforms?: ResellPlatformCategoryCreateNestedManyWithoutProductCategoryInput
  }

  export type ProductCategoryUncheckedCreateInput = {
    id: string
    key: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partners?: PartnerProductCategoryUncheckedCreateNestedManyWithoutProductCategoryInput
    resellPlatforms?: ResellPlatformCategoryUncheckedCreateNestedManyWithoutProductCategoryInput
  }

  export type ProductCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerProductCategoryUpdateManyWithoutProductCategoryNestedInput
    resellPlatforms?: ResellPlatformCategoryUpdateManyWithoutProductCategoryNestedInput
  }

  export type ProductCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerProductCategoryUncheckedUpdateManyWithoutProductCategoryNestedInput
    resellPlatforms?: ResellPlatformCategoryUncheckedUpdateManyWithoutProductCategoryNestedInput
  }

  export type ProductCategoryCreateManyInput = {
    id: string
    key: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerProductCategoryCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partner: PartnerCreateNestedOneWithoutProductCategoriesInput
    productCategory: ProductCategoryCreateNestedOneWithoutPartnersInput
  }

  export type PartnerProductCategoryUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partnerId: string
    productCategoryId: string
  }

  export type PartnerProductCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partner?: PartnerUpdateOneRequiredWithoutProductCategoriesNestedInput
    productCategory?: ProductCategoryUpdateOneRequiredWithoutPartnersNestedInput
  }

  export type PartnerProductCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partnerId?: StringFieldUpdateOperationsInput | string
    productCategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type PartnerProductCategoryCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partnerId: string
    productCategoryId: string
  }

  export type PartnerProductCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerProductCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partnerId?: StringFieldUpdateOperationsInput | string
    productCategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ResellPlatformCreateInput = {
    id: string
    name: string
    url: string
    logo?: string | null
    tagline: string
    description: string
    platformType: $Enums.ResellPlatformType
    createdAt?: Date | string
    updatedAt?: Date | string
    altTagline?: string | null
    canSell?: boolean
    productCategories?: ResellPlatformCategoryCreateNestedManyWithoutResellPlatformInput
    countries?: ResellPlatformCountryCreateNestedManyWithoutResellPlatformInput
  }

  export type ResellPlatformUncheckedCreateInput = {
    id: string
    name: string
    url: string
    logo?: string | null
    tagline: string
    description: string
    platformType: $Enums.ResellPlatformType
    createdAt?: Date | string
    updatedAt?: Date | string
    altTagline?: string | null
    canSell?: boolean
    productCategories?: ResellPlatformCategoryUncheckedCreateNestedManyWithoutResellPlatformInput
    countries?: ResellPlatformCountryUncheckedCreateNestedManyWithoutResellPlatformInput
  }

  export type ResellPlatformUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    platformType?: EnumResellPlatformTypeFieldUpdateOperationsInput | $Enums.ResellPlatformType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    altTagline?: NullableStringFieldUpdateOperationsInput | string | null
    canSell?: BoolFieldUpdateOperationsInput | boolean
    productCategories?: ResellPlatformCategoryUpdateManyWithoutResellPlatformNestedInput
    countries?: ResellPlatformCountryUpdateManyWithoutResellPlatformNestedInput
  }

  export type ResellPlatformUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    platformType?: EnumResellPlatformTypeFieldUpdateOperationsInput | $Enums.ResellPlatformType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    altTagline?: NullableStringFieldUpdateOperationsInput | string | null
    canSell?: BoolFieldUpdateOperationsInput | boolean
    productCategories?: ResellPlatformCategoryUncheckedUpdateManyWithoutResellPlatformNestedInput
    countries?: ResellPlatformCountryUncheckedUpdateManyWithoutResellPlatformNestedInput
  }

  export type ResellPlatformCreateManyInput = {
    id: string
    name: string
    url: string
    logo?: string | null
    tagline: string
    description: string
    platformType: $Enums.ResellPlatformType
    createdAt?: Date | string
    updatedAt?: Date | string
    altTagline?: string | null
    canSell?: boolean
  }

  export type ResellPlatformUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    platformType?: EnumResellPlatformTypeFieldUpdateOperationsInput | $Enums.ResellPlatformType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    altTagline?: NullableStringFieldUpdateOperationsInput | string | null
    canSell?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResellPlatformUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    platformType?: EnumResellPlatformTypeFieldUpdateOperationsInput | $Enums.ResellPlatformType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    altTagline?: NullableStringFieldUpdateOperationsInput | string | null
    canSell?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResellPlatformCategoryCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productCategory: ProductCategoryCreateNestedOneWithoutResellPlatformsInput
    resellPlatform: ResellPlatformCreateNestedOneWithoutProductCategoriesInput
  }

  export type ResellPlatformCategoryUncheckedCreateInput = {
    id: string
    resellPlatformId: string
    productCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResellPlatformCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productCategory?: ProductCategoryUpdateOneRequiredWithoutResellPlatformsNestedInput
    resellPlatform?: ResellPlatformUpdateOneRequiredWithoutProductCategoriesNestedInput
  }

  export type ResellPlatformCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resellPlatformId?: StringFieldUpdateOperationsInput | string
    productCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellPlatformCategoryCreateManyInput = {
    id: string
    resellPlatformId: string
    productCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResellPlatformCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellPlatformCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resellPlatformId?: StringFieldUpdateOperationsInput | string
    productCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellPlatformCountryCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutResellPlatformsInput
    resellPlatform: ResellPlatformCreateNestedOneWithoutCountriesInput
  }

  export type ResellPlatformCountryUncheckedCreateInput = {
    id: string
    countryCode: string
    resellPlatformId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResellPlatformCountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutResellPlatformsNestedInput
    resellPlatform?: ResellPlatformUpdateOneRequiredWithoutCountriesNestedInput
  }

  export type ResellPlatformCountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    resellPlatformId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellPlatformCountryCreateManyInput = {
    id: string
    countryCode: string
    resellPlatformId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResellPlatformCountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellPlatformCountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    resellPlatformId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryCreateInput = {
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partners?: PartnerLocationCreateNestedManyWithoutCountryInput
    resellPlatforms?: ResellPlatformCountryCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partners?: PartnerLocationUncheckedCreateNestedManyWithoutCountryInput
    resellPlatforms?: ResellPlatformCountryUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerLocationUpdateManyWithoutCountryNestedInput
    resellPlatforms?: ResellPlatformCountryUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerLocationUncheckedUpdateManyWithoutCountryNestedInput
    resellPlatforms?: ResellPlatformCountryUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PartnerChannelListRelationFilter = {
    every?: PartnerChannelWhereInput
    some?: PartnerChannelWhereInput
    none?: PartnerChannelWhereInput
  }

  export type PartnerLocationListRelationFilter = {
    every?: PartnerLocationWhereInput
    some?: PartnerLocationWhereInput
    none?: PartnerLocationWhereInput
  }

  export type PartnerProductCategoryListRelationFilter = {
    every?: PartnerProductCategoryWhereInput
    some?: PartnerProductCategoryWhereInput
    none?: PartnerProductCategoryWhereInput
  }

  export type PartnerRoleAssignmentListRelationFilter = {
    every?: PartnerRoleAssignmentWhereInput
    some?: PartnerRoleAssignmentWhereInput
    none?: PartnerRoleAssignmentWhereInput
  }

  export type PartnerChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartnerLocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartnerProductCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartnerRoleAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartnerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PartnerRoleCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerRoleMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerScalarRelationFilter = {
    is?: PartnerWhereInput
    isNot?: PartnerWhereInput
  }

  export type PartnerRoleScalarRelationFilter = {
    is?: PartnerRoleWhereInput
    isNot?: PartnerRoleWhereInput
  }

  export type PartnerRoleAssignmentPartnerIdRoleIdCompoundUniqueInput = {
    partnerId: string
    roleId: string
  }

  export type PartnerRoleAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    partnerId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerRoleAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    partnerId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerRoleAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    partnerId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumChannelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelType | EnumChannelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelTypeFilter<$PrismaModel> | $Enums.ChannelType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PartnerServiceProfileListRelationFilter = {
    every?: PartnerServiceProfileWhereInput
    some?: PartnerServiceProfileWhereInput
    none?: PartnerServiceProfileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PartnerServiceProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartnerChannelCountOrderByAggregateInput = {
    id?: SortOrder
    partnerId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    partnerId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerChannelMinOrderByAggregateInput = {
    id?: SortOrder
    partnerId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumChannelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelType | EnumChannelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChannelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelTypeFilter<$PrismaModel>
    _max?: NestedEnumChannelTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type PartnerLocationCountOrderByAggregateInput = {
    id?: SortOrder
    partnerId?: SortOrder
    name?: SortOrder
    formattedAddress?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    countryCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerLocationAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type PartnerLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    partnerId?: SortOrder
    name?: SortOrder
    formattedAddress?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    countryCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerLocationMinOrderByAggregateInput = {
    id?: SortOrder
    partnerId?: SortOrder
    name?: SortOrder
    formattedAddress?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    countryCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerLocationSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PartnerChannelNullableScalarRelationFilter = {
    is?: PartnerChannelWhereInput | null
    isNot?: PartnerChannelWhereInput | null
  }

  export type PartnerLocationNullableScalarRelationFilter = {
    is?: PartnerLocationWhereInput | null
    isNot?: PartnerLocationWhereInput | null
  }

  export type ServiceTypeScalarRelationFilter = {
    is?: ServiceTypeWhereInput
    isNot?: ServiceTypeWhereInput
  }

  export type PartnerServiceProfileChannelIdLocationIdServiceTypeIdCompoundUniqueInput = {
    channelId: string
    locationId: string
    serviceTypeId: string
  }

  export type PartnerServiceProfileCountOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    locationId?: SortOrder
    serviceTypeId?: SortOrder
    available?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerServiceProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    locationId?: SortOrder
    serviceTypeId?: SortOrder
    available?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerServiceProfileMinOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    locationId?: SortOrder
    serviceTypeId?: SortOrder
    available?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ServiceTypeCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceTypeMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResellPlatformCategoryListRelationFilter = {
    every?: ResellPlatformCategoryWhereInput
    some?: ResellPlatformCategoryWhereInput
    none?: ResellPlatformCategoryWhereInput
  }

  export type ResellPlatformCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductCategoryScalarRelationFilter = {
    is?: ProductCategoryWhereInput
    isNot?: ProductCategoryWhereInput
  }

  export type PartnerProductCategoryPartnerIdProductCategoryIdCompoundUniqueInput = {
    partnerId: string
    productCategoryId: string
  }

  export type PartnerProductCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    partnerId?: SortOrder
    productCategoryId?: SortOrder
  }

  export type PartnerProductCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    partnerId?: SortOrder
    productCategoryId?: SortOrder
  }

  export type PartnerProductCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    partnerId?: SortOrder
    productCategoryId?: SortOrder
  }

  export type EnumResellPlatformTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResellPlatformType | EnumResellPlatformTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResellPlatformType[] | ListEnumResellPlatformTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResellPlatformType[] | ListEnumResellPlatformTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResellPlatformTypeFilter<$PrismaModel> | $Enums.ResellPlatformType
  }

  export type ResellPlatformCountryListRelationFilter = {
    every?: ResellPlatformCountryWhereInput
    some?: ResellPlatformCountryWhereInput
    none?: ResellPlatformCountryWhereInput
  }

  export type ResellPlatformCountryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResellPlatformCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    platformType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    altTagline?: SortOrder
    canSell?: SortOrder
  }

  export type ResellPlatformMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    platformType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    altTagline?: SortOrder
    canSell?: SortOrder
  }

  export type ResellPlatformMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    logo?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    platformType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    altTagline?: SortOrder
    canSell?: SortOrder
  }

  export type EnumResellPlatformTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResellPlatformType | EnumResellPlatformTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResellPlatformType[] | ListEnumResellPlatformTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResellPlatformType[] | ListEnumResellPlatformTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResellPlatformTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResellPlatformType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResellPlatformTypeFilter<$PrismaModel>
    _max?: NestedEnumResellPlatformTypeFilter<$PrismaModel>
  }

  export type ResellPlatformScalarRelationFilter = {
    is?: ResellPlatformWhereInput
    isNot?: ResellPlatformWhereInput
  }

  export type ResellPlatformCategoryResellPlatformIdProductCategoryIdCompoundUniqueInput = {
    resellPlatformId: string
    productCategoryId: string
  }

  export type ResellPlatformCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    resellPlatformId?: SortOrder
    productCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResellPlatformCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    resellPlatformId?: SortOrder
    productCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResellPlatformCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    resellPlatformId?: SortOrder
    productCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResellPlatformCountryResellPlatformIdCountryCodeCompoundUniqueInput = {
    resellPlatformId: string
    countryCode: string
  }

  export type ResellPlatformCountryCountOrderByAggregateInput = {
    id?: SortOrder
    countryCode?: SortOrder
    resellPlatformId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResellPlatformCountryMaxOrderByAggregateInput = {
    id?: SortOrder
    countryCode?: SortOrder
    resellPlatformId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResellPlatformCountryMinOrderByAggregateInput = {
    id?: SortOrder
    countryCode?: SortOrder
    resellPlatformId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerChannelCreateNestedManyWithoutPartnerInput = {
    create?: XOR<PartnerChannelCreateWithoutPartnerInput, PartnerChannelUncheckedCreateWithoutPartnerInput> | PartnerChannelCreateWithoutPartnerInput[] | PartnerChannelUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: PartnerChannelCreateOrConnectWithoutPartnerInput | PartnerChannelCreateOrConnectWithoutPartnerInput[]
    createMany?: PartnerChannelCreateManyPartnerInputEnvelope
    connect?: PartnerChannelWhereUniqueInput | PartnerChannelWhereUniqueInput[]
  }

  export type PartnerLocationCreateNestedManyWithoutPartnerInput = {
    create?: XOR<PartnerLocationCreateWithoutPartnerInput, PartnerLocationUncheckedCreateWithoutPartnerInput> | PartnerLocationCreateWithoutPartnerInput[] | PartnerLocationUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: PartnerLocationCreateOrConnectWithoutPartnerInput | PartnerLocationCreateOrConnectWithoutPartnerInput[]
    createMany?: PartnerLocationCreateManyPartnerInputEnvelope
    connect?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
  }

  export type PartnerProductCategoryCreateNestedManyWithoutPartnerInput = {
    create?: XOR<PartnerProductCategoryCreateWithoutPartnerInput, PartnerProductCategoryUncheckedCreateWithoutPartnerInput> | PartnerProductCategoryCreateWithoutPartnerInput[] | PartnerProductCategoryUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: PartnerProductCategoryCreateOrConnectWithoutPartnerInput | PartnerProductCategoryCreateOrConnectWithoutPartnerInput[]
    createMany?: PartnerProductCategoryCreateManyPartnerInputEnvelope
    connect?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
  }

  export type PartnerRoleAssignmentCreateNestedManyWithoutPartnerInput = {
    create?: XOR<PartnerRoleAssignmentCreateWithoutPartnerInput, PartnerRoleAssignmentUncheckedCreateWithoutPartnerInput> | PartnerRoleAssignmentCreateWithoutPartnerInput[] | PartnerRoleAssignmentUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: PartnerRoleAssignmentCreateOrConnectWithoutPartnerInput | PartnerRoleAssignmentCreateOrConnectWithoutPartnerInput[]
    createMany?: PartnerRoleAssignmentCreateManyPartnerInputEnvelope
    connect?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
  }

  export type PartnerChannelUncheckedCreateNestedManyWithoutPartnerInput = {
    create?: XOR<PartnerChannelCreateWithoutPartnerInput, PartnerChannelUncheckedCreateWithoutPartnerInput> | PartnerChannelCreateWithoutPartnerInput[] | PartnerChannelUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: PartnerChannelCreateOrConnectWithoutPartnerInput | PartnerChannelCreateOrConnectWithoutPartnerInput[]
    createMany?: PartnerChannelCreateManyPartnerInputEnvelope
    connect?: PartnerChannelWhereUniqueInput | PartnerChannelWhereUniqueInput[]
  }

  export type PartnerLocationUncheckedCreateNestedManyWithoutPartnerInput = {
    create?: XOR<PartnerLocationCreateWithoutPartnerInput, PartnerLocationUncheckedCreateWithoutPartnerInput> | PartnerLocationCreateWithoutPartnerInput[] | PartnerLocationUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: PartnerLocationCreateOrConnectWithoutPartnerInput | PartnerLocationCreateOrConnectWithoutPartnerInput[]
    createMany?: PartnerLocationCreateManyPartnerInputEnvelope
    connect?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
  }

  export type PartnerProductCategoryUncheckedCreateNestedManyWithoutPartnerInput = {
    create?: XOR<PartnerProductCategoryCreateWithoutPartnerInput, PartnerProductCategoryUncheckedCreateWithoutPartnerInput> | PartnerProductCategoryCreateWithoutPartnerInput[] | PartnerProductCategoryUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: PartnerProductCategoryCreateOrConnectWithoutPartnerInput | PartnerProductCategoryCreateOrConnectWithoutPartnerInput[]
    createMany?: PartnerProductCategoryCreateManyPartnerInputEnvelope
    connect?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
  }

  export type PartnerRoleAssignmentUncheckedCreateNestedManyWithoutPartnerInput = {
    create?: XOR<PartnerRoleAssignmentCreateWithoutPartnerInput, PartnerRoleAssignmentUncheckedCreateWithoutPartnerInput> | PartnerRoleAssignmentCreateWithoutPartnerInput[] | PartnerRoleAssignmentUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: PartnerRoleAssignmentCreateOrConnectWithoutPartnerInput | PartnerRoleAssignmentCreateOrConnectWithoutPartnerInput[]
    createMany?: PartnerRoleAssignmentCreateManyPartnerInputEnvelope
    connect?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PartnerChannelUpdateManyWithoutPartnerNestedInput = {
    create?: XOR<PartnerChannelCreateWithoutPartnerInput, PartnerChannelUncheckedCreateWithoutPartnerInput> | PartnerChannelCreateWithoutPartnerInput[] | PartnerChannelUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: PartnerChannelCreateOrConnectWithoutPartnerInput | PartnerChannelCreateOrConnectWithoutPartnerInput[]
    upsert?: PartnerChannelUpsertWithWhereUniqueWithoutPartnerInput | PartnerChannelUpsertWithWhereUniqueWithoutPartnerInput[]
    createMany?: PartnerChannelCreateManyPartnerInputEnvelope
    set?: PartnerChannelWhereUniqueInput | PartnerChannelWhereUniqueInput[]
    disconnect?: PartnerChannelWhereUniqueInput | PartnerChannelWhereUniqueInput[]
    delete?: PartnerChannelWhereUniqueInput | PartnerChannelWhereUniqueInput[]
    connect?: PartnerChannelWhereUniqueInput | PartnerChannelWhereUniqueInput[]
    update?: PartnerChannelUpdateWithWhereUniqueWithoutPartnerInput | PartnerChannelUpdateWithWhereUniqueWithoutPartnerInput[]
    updateMany?: PartnerChannelUpdateManyWithWhereWithoutPartnerInput | PartnerChannelUpdateManyWithWhereWithoutPartnerInput[]
    deleteMany?: PartnerChannelScalarWhereInput | PartnerChannelScalarWhereInput[]
  }

  export type PartnerLocationUpdateManyWithoutPartnerNestedInput = {
    create?: XOR<PartnerLocationCreateWithoutPartnerInput, PartnerLocationUncheckedCreateWithoutPartnerInput> | PartnerLocationCreateWithoutPartnerInput[] | PartnerLocationUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: PartnerLocationCreateOrConnectWithoutPartnerInput | PartnerLocationCreateOrConnectWithoutPartnerInput[]
    upsert?: PartnerLocationUpsertWithWhereUniqueWithoutPartnerInput | PartnerLocationUpsertWithWhereUniqueWithoutPartnerInput[]
    createMany?: PartnerLocationCreateManyPartnerInputEnvelope
    set?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
    disconnect?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
    delete?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
    connect?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
    update?: PartnerLocationUpdateWithWhereUniqueWithoutPartnerInput | PartnerLocationUpdateWithWhereUniqueWithoutPartnerInput[]
    updateMany?: PartnerLocationUpdateManyWithWhereWithoutPartnerInput | PartnerLocationUpdateManyWithWhereWithoutPartnerInput[]
    deleteMany?: PartnerLocationScalarWhereInput | PartnerLocationScalarWhereInput[]
  }

  export type PartnerProductCategoryUpdateManyWithoutPartnerNestedInput = {
    create?: XOR<PartnerProductCategoryCreateWithoutPartnerInput, PartnerProductCategoryUncheckedCreateWithoutPartnerInput> | PartnerProductCategoryCreateWithoutPartnerInput[] | PartnerProductCategoryUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: PartnerProductCategoryCreateOrConnectWithoutPartnerInput | PartnerProductCategoryCreateOrConnectWithoutPartnerInput[]
    upsert?: PartnerProductCategoryUpsertWithWhereUniqueWithoutPartnerInput | PartnerProductCategoryUpsertWithWhereUniqueWithoutPartnerInput[]
    createMany?: PartnerProductCategoryCreateManyPartnerInputEnvelope
    set?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
    disconnect?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
    delete?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
    connect?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
    update?: PartnerProductCategoryUpdateWithWhereUniqueWithoutPartnerInput | PartnerProductCategoryUpdateWithWhereUniqueWithoutPartnerInput[]
    updateMany?: PartnerProductCategoryUpdateManyWithWhereWithoutPartnerInput | PartnerProductCategoryUpdateManyWithWhereWithoutPartnerInput[]
    deleteMany?: PartnerProductCategoryScalarWhereInput | PartnerProductCategoryScalarWhereInput[]
  }

  export type PartnerRoleAssignmentUpdateManyWithoutPartnerNestedInput = {
    create?: XOR<PartnerRoleAssignmentCreateWithoutPartnerInput, PartnerRoleAssignmentUncheckedCreateWithoutPartnerInput> | PartnerRoleAssignmentCreateWithoutPartnerInput[] | PartnerRoleAssignmentUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: PartnerRoleAssignmentCreateOrConnectWithoutPartnerInput | PartnerRoleAssignmentCreateOrConnectWithoutPartnerInput[]
    upsert?: PartnerRoleAssignmentUpsertWithWhereUniqueWithoutPartnerInput | PartnerRoleAssignmentUpsertWithWhereUniqueWithoutPartnerInput[]
    createMany?: PartnerRoleAssignmentCreateManyPartnerInputEnvelope
    set?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
    disconnect?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
    delete?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
    connect?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
    update?: PartnerRoleAssignmentUpdateWithWhereUniqueWithoutPartnerInput | PartnerRoleAssignmentUpdateWithWhereUniqueWithoutPartnerInput[]
    updateMany?: PartnerRoleAssignmentUpdateManyWithWhereWithoutPartnerInput | PartnerRoleAssignmentUpdateManyWithWhereWithoutPartnerInput[]
    deleteMany?: PartnerRoleAssignmentScalarWhereInput | PartnerRoleAssignmentScalarWhereInput[]
  }

  export type PartnerChannelUncheckedUpdateManyWithoutPartnerNestedInput = {
    create?: XOR<PartnerChannelCreateWithoutPartnerInput, PartnerChannelUncheckedCreateWithoutPartnerInput> | PartnerChannelCreateWithoutPartnerInput[] | PartnerChannelUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: PartnerChannelCreateOrConnectWithoutPartnerInput | PartnerChannelCreateOrConnectWithoutPartnerInput[]
    upsert?: PartnerChannelUpsertWithWhereUniqueWithoutPartnerInput | PartnerChannelUpsertWithWhereUniqueWithoutPartnerInput[]
    createMany?: PartnerChannelCreateManyPartnerInputEnvelope
    set?: PartnerChannelWhereUniqueInput | PartnerChannelWhereUniqueInput[]
    disconnect?: PartnerChannelWhereUniqueInput | PartnerChannelWhereUniqueInput[]
    delete?: PartnerChannelWhereUniqueInput | PartnerChannelWhereUniqueInput[]
    connect?: PartnerChannelWhereUniqueInput | PartnerChannelWhereUniqueInput[]
    update?: PartnerChannelUpdateWithWhereUniqueWithoutPartnerInput | PartnerChannelUpdateWithWhereUniqueWithoutPartnerInput[]
    updateMany?: PartnerChannelUpdateManyWithWhereWithoutPartnerInput | PartnerChannelUpdateManyWithWhereWithoutPartnerInput[]
    deleteMany?: PartnerChannelScalarWhereInput | PartnerChannelScalarWhereInput[]
  }

  export type PartnerLocationUncheckedUpdateManyWithoutPartnerNestedInput = {
    create?: XOR<PartnerLocationCreateWithoutPartnerInput, PartnerLocationUncheckedCreateWithoutPartnerInput> | PartnerLocationCreateWithoutPartnerInput[] | PartnerLocationUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: PartnerLocationCreateOrConnectWithoutPartnerInput | PartnerLocationCreateOrConnectWithoutPartnerInput[]
    upsert?: PartnerLocationUpsertWithWhereUniqueWithoutPartnerInput | PartnerLocationUpsertWithWhereUniqueWithoutPartnerInput[]
    createMany?: PartnerLocationCreateManyPartnerInputEnvelope
    set?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
    disconnect?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
    delete?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
    connect?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
    update?: PartnerLocationUpdateWithWhereUniqueWithoutPartnerInput | PartnerLocationUpdateWithWhereUniqueWithoutPartnerInput[]
    updateMany?: PartnerLocationUpdateManyWithWhereWithoutPartnerInput | PartnerLocationUpdateManyWithWhereWithoutPartnerInput[]
    deleteMany?: PartnerLocationScalarWhereInput | PartnerLocationScalarWhereInput[]
  }

  export type PartnerProductCategoryUncheckedUpdateManyWithoutPartnerNestedInput = {
    create?: XOR<PartnerProductCategoryCreateWithoutPartnerInput, PartnerProductCategoryUncheckedCreateWithoutPartnerInput> | PartnerProductCategoryCreateWithoutPartnerInput[] | PartnerProductCategoryUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: PartnerProductCategoryCreateOrConnectWithoutPartnerInput | PartnerProductCategoryCreateOrConnectWithoutPartnerInput[]
    upsert?: PartnerProductCategoryUpsertWithWhereUniqueWithoutPartnerInput | PartnerProductCategoryUpsertWithWhereUniqueWithoutPartnerInput[]
    createMany?: PartnerProductCategoryCreateManyPartnerInputEnvelope
    set?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
    disconnect?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
    delete?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
    connect?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
    update?: PartnerProductCategoryUpdateWithWhereUniqueWithoutPartnerInput | PartnerProductCategoryUpdateWithWhereUniqueWithoutPartnerInput[]
    updateMany?: PartnerProductCategoryUpdateManyWithWhereWithoutPartnerInput | PartnerProductCategoryUpdateManyWithWhereWithoutPartnerInput[]
    deleteMany?: PartnerProductCategoryScalarWhereInput | PartnerProductCategoryScalarWhereInput[]
  }

  export type PartnerRoleAssignmentUncheckedUpdateManyWithoutPartnerNestedInput = {
    create?: XOR<PartnerRoleAssignmentCreateWithoutPartnerInput, PartnerRoleAssignmentUncheckedCreateWithoutPartnerInput> | PartnerRoleAssignmentCreateWithoutPartnerInput[] | PartnerRoleAssignmentUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: PartnerRoleAssignmentCreateOrConnectWithoutPartnerInput | PartnerRoleAssignmentCreateOrConnectWithoutPartnerInput[]
    upsert?: PartnerRoleAssignmentUpsertWithWhereUniqueWithoutPartnerInput | PartnerRoleAssignmentUpsertWithWhereUniqueWithoutPartnerInput[]
    createMany?: PartnerRoleAssignmentCreateManyPartnerInputEnvelope
    set?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
    disconnect?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
    delete?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
    connect?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
    update?: PartnerRoleAssignmentUpdateWithWhereUniqueWithoutPartnerInput | PartnerRoleAssignmentUpdateWithWhereUniqueWithoutPartnerInput[]
    updateMany?: PartnerRoleAssignmentUpdateManyWithWhereWithoutPartnerInput | PartnerRoleAssignmentUpdateManyWithWhereWithoutPartnerInput[]
    deleteMany?: PartnerRoleAssignmentScalarWhereInput | PartnerRoleAssignmentScalarWhereInput[]
  }

  export type PartnerRoleAssignmentCreateNestedManyWithoutRoleInput = {
    create?: XOR<PartnerRoleAssignmentCreateWithoutRoleInput, PartnerRoleAssignmentUncheckedCreateWithoutRoleInput> | PartnerRoleAssignmentCreateWithoutRoleInput[] | PartnerRoleAssignmentUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PartnerRoleAssignmentCreateOrConnectWithoutRoleInput | PartnerRoleAssignmentCreateOrConnectWithoutRoleInput[]
    createMany?: PartnerRoleAssignmentCreateManyRoleInputEnvelope
    connect?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
  }

  export type PartnerRoleAssignmentUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<PartnerRoleAssignmentCreateWithoutRoleInput, PartnerRoleAssignmentUncheckedCreateWithoutRoleInput> | PartnerRoleAssignmentCreateWithoutRoleInput[] | PartnerRoleAssignmentUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PartnerRoleAssignmentCreateOrConnectWithoutRoleInput | PartnerRoleAssignmentCreateOrConnectWithoutRoleInput[]
    createMany?: PartnerRoleAssignmentCreateManyRoleInputEnvelope
    connect?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
  }

  export type PartnerRoleAssignmentUpdateManyWithoutRoleNestedInput = {
    create?: XOR<PartnerRoleAssignmentCreateWithoutRoleInput, PartnerRoleAssignmentUncheckedCreateWithoutRoleInput> | PartnerRoleAssignmentCreateWithoutRoleInput[] | PartnerRoleAssignmentUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PartnerRoleAssignmentCreateOrConnectWithoutRoleInput | PartnerRoleAssignmentCreateOrConnectWithoutRoleInput[]
    upsert?: PartnerRoleAssignmentUpsertWithWhereUniqueWithoutRoleInput | PartnerRoleAssignmentUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: PartnerRoleAssignmentCreateManyRoleInputEnvelope
    set?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
    disconnect?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
    delete?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
    connect?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
    update?: PartnerRoleAssignmentUpdateWithWhereUniqueWithoutRoleInput | PartnerRoleAssignmentUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: PartnerRoleAssignmentUpdateManyWithWhereWithoutRoleInput | PartnerRoleAssignmentUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: PartnerRoleAssignmentScalarWhereInput | PartnerRoleAssignmentScalarWhereInput[]
  }

  export type PartnerRoleAssignmentUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<PartnerRoleAssignmentCreateWithoutRoleInput, PartnerRoleAssignmentUncheckedCreateWithoutRoleInput> | PartnerRoleAssignmentCreateWithoutRoleInput[] | PartnerRoleAssignmentUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PartnerRoleAssignmentCreateOrConnectWithoutRoleInput | PartnerRoleAssignmentCreateOrConnectWithoutRoleInput[]
    upsert?: PartnerRoleAssignmentUpsertWithWhereUniqueWithoutRoleInput | PartnerRoleAssignmentUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: PartnerRoleAssignmentCreateManyRoleInputEnvelope
    set?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
    disconnect?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
    delete?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
    connect?: PartnerRoleAssignmentWhereUniqueInput | PartnerRoleAssignmentWhereUniqueInput[]
    update?: PartnerRoleAssignmentUpdateWithWhereUniqueWithoutRoleInput | PartnerRoleAssignmentUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: PartnerRoleAssignmentUpdateManyWithWhereWithoutRoleInput | PartnerRoleAssignmentUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: PartnerRoleAssignmentScalarWhereInput | PartnerRoleAssignmentScalarWhereInput[]
  }

  export type PartnerCreateNestedOneWithoutRoleAssignmentsInput = {
    create?: XOR<PartnerCreateWithoutRoleAssignmentsInput, PartnerUncheckedCreateWithoutRoleAssignmentsInput>
    connectOrCreate?: PartnerCreateOrConnectWithoutRoleAssignmentsInput
    connect?: PartnerWhereUniqueInput
  }

  export type PartnerRoleCreateNestedOneWithoutPartnersInput = {
    create?: XOR<PartnerRoleCreateWithoutPartnersInput, PartnerRoleUncheckedCreateWithoutPartnersInput>
    connectOrCreate?: PartnerRoleCreateOrConnectWithoutPartnersInput
    connect?: PartnerRoleWhereUniqueInput
  }

  export type PartnerUpdateOneRequiredWithoutRoleAssignmentsNestedInput = {
    create?: XOR<PartnerCreateWithoutRoleAssignmentsInput, PartnerUncheckedCreateWithoutRoleAssignmentsInput>
    connectOrCreate?: PartnerCreateOrConnectWithoutRoleAssignmentsInput
    upsert?: PartnerUpsertWithoutRoleAssignmentsInput
    connect?: PartnerWhereUniqueInput
    update?: XOR<XOR<PartnerUpdateToOneWithWhereWithoutRoleAssignmentsInput, PartnerUpdateWithoutRoleAssignmentsInput>, PartnerUncheckedUpdateWithoutRoleAssignmentsInput>
  }

  export type PartnerRoleUpdateOneRequiredWithoutPartnersNestedInput = {
    create?: XOR<PartnerRoleCreateWithoutPartnersInput, PartnerRoleUncheckedCreateWithoutPartnersInput>
    connectOrCreate?: PartnerRoleCreateOrConnectWithoutPartnersInput
    upsert?: PartnerRoleUpsertWithoutPartnersInput
    connect?: PartnerRoleWhereUniqueInput
    update?: XOR<XOR<PartnerRoleUpdateToOneWithWhereWithoutPartnersInput, PartnerRoleUpdateWithoutPartnersInput>, PartnerRoleUncheckedUpdateWithoutPartnersInput>
  }

  export type PartnerCreateNestedOneWithoutChannelsInput = {
    create?: XOR<PartnerCreateWithoutChannelsInput, PartnerUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: PartnerCreateOrConnectWithoutChannelsInput
    connect?: PartnerWhereUniqueInput
  }

  export type PartnerServiceProfileCreateNestedManyWithoutChannelInput = {
    create?: XOR<PartnerServiceProfileCreateWithoutChannelInput, PartnerServiceProfileUncheckedCreateWithoutChannelInput> | PartnerServiceProfileCreateWithoutChannelInput[] | PartnerServiceProfileUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PartnerServiceProfileCreateOrConnectWithoutChannelInput | PartnerServiceProfileCreateOrConnectWithoutChannelInput[]
    createMany?: PartnerServiceProfileCreateManyChannelInputEnvelope
    connect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
  }

  export type PartnerServiceProfileUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<PartnerServiceProfileCreateWithoutChannelInput, PartnerServiceProfileUncheckedCreateWithoutChannelInput> | PartnerServiceProfileCreateWithoutChannelInput[] | PartnerServiceProfileUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PartnerServiceProfileCreateOrConnectWithoutChannelInput | PartnerServiceProfileCreateOrConnectWithoutChannelInput[]
    createMany?: PartnerServiceProfileCreateManyChannelInputEnvelope
    connect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
  }

  export type EnumChannelTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChannelType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PartnerUpdateOneRequiredWithoutChannelsNestedInput = {
    create?: XOR<PartnerCreateWithoutChannelsInput, PartnerUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: PartnerCreateOrConnectWithoutChannelsInput
    upsert?: PartnerUpsertWithoutChannelsInput
    connect?: PartnerWhereUniqueInput
    update?: XOR<XOR<PartnerUpdateToOneWithWhereWithoutChannelsInput, PartnerUpdateWithoutChannelsInput>, PartnerUncheckedUpdateWithoutChannelsInput>
  }

  export type PartnerServiceProfileUpdateManyWithoutChannelNestedInput = {
    create?: XOR<PartnerServiceProfileCreateWithoutChannelInput, PartnerServiceProfileUncheckedCreateWithoutChannelInput> | PartnerServiceProfileCreateWithoutChannelInput[] | PartnerServiceProfileUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PartnerServiceProfileCreateOrConnectWithoutChannelInput | PartnerServiceProfileCreateOrConnectWithoutChannelInput[]
    upsert?: PartnerServiceProfileUpsertWithWhereUniqueWithoutChannelInput | PartnerServiceProfileUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: PartnerServiceProfileCreateManyChannelInputEnvelope
    set?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    disconnect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    delete?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    connect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    update?: PartnerServiceProfileUpdateWithWhereUniqueWithoutChannelInput | PartnerServiceProfileUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: PartnerServiceProfileUpdateManyWithWhereWithoutChannelInput | PartnerServiceProfileUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: PartnerServiceProfileScalarWhereInput | PartnerServiceProfileScalarWhereInput[]
  }

  export type PartnerServiceProfileUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<PartnerServiceProfileCreateWithoutChannelInput, PartnerServiceProfileUncheckedCreateWithoutChannelInput> | PartnerServiceProfileCreateWithoutChannelInput[] | PartnerServiceProfileUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: PartnerServiceProfileCreateOrConnectWithoutChannelInput | PartnerServiceProfileCreateOrConnectWithoutChannelInput[]
    upsert?: PartnerServiceProfileUpsertWithWhereUniqueWithoutChannelInput | PartnerServiceProfileUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: PartnerServiceProfileCreateManyChannelInputEnvelope
    set?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    disconnect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    delete?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    connect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    update?: PartnerServiceProfileUpdateWithWhereUniqueWithoutChannelInput | PartnerServiceProfileUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: PartnerServiceProfileUpdateManyWithWhereWithoutChannelInput | PartnerServiceProfileUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: PartnerServiceProfileScalarWhereInput | PartnerServiceProfileScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutPartnersInput = {
    create?: XOR<CountryCreateWithoutPartnersInput, CountryUncheckedCreateWithoutPartnersInput>
    connectOrCreate?: CountryCreateOrConnectWithoutPartnersInput
    connect?: CountryWhereUniqueInput
  }

  export type PartnerCreateNestedOneWithoutLocationsInput = {
    create?: XOR<PartnerCreateWithoutLocationsInput, PartnerUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: PartnerCreateOrConnectWithoutLocationsInput
    connect?: PartnerWhereUniqueInput
  }

  export type PartnerServiceProfileCreateNestedManyWithoutLocationInput = {
    create?: XOR<PartnerServiceProfileCreateWithoutLocationInput, PartnerServiceProfileUncheckedCreateWithoutLocationInput> | PartnerServiceProfileCreateWithoutLocationInput[] | PartnerServiceProfileUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PartnerServiceProfileCreateOrConnectWithoutLocationInput | PartnerServiceProfileCreateOrConnectWithoutLocationInput[]
    createMany?: PartnerServiceProfileCreateManyLocationInputEnvelope
    connect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
  }

  export type PartnerServiceProfileUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<PartnerServiceProfileCreateWithoutLocationInput, PartnerServiceProfileUncheckedCreateWithoutLocationInput> | PartnerServiceProfileCreateWithoutLocationInput[] | PartnerServiceProfileUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PartnerServiceProfileCreateOrConnectWithoutLocationInput | PartnerServiceProfileCreateOrConnectWithoutLocationInput[]
    createMany?: PartnerServiceProfileCreateManyLocationInputEnvelope
    connect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CountryUpdateOneRequiredWithoutPartnersNestedInput = {
    create?: XOR<CountryCreateWithoutPartnersInput, CountryUncheckedCreateWithoutPartnersInput>
    connectOrCreate?: CountryCreateOrConnectWithoutPartnersInput
    upsert?: CountryUpsertWithoutPartnersInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutPartnersInput, CountryUpdateWithoutPartnersInput>, CountryUncheckedUpdateWithoutPartnersInput>
  }

  export type PartnerUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<PartnerCreateWithoutLocationsInput, PartnerUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: PartnerCreateOrConnectWithoutLocationsInput
    upsert?: PartnerUpsertWithoutLocationsInput
    connect?: PartnerWhereUniqueInput
    update?: XOR<XOR<PartnerUpdateToOneWithWhereWithoutLocationsInput, PartnerUpdateWithoutLocationsInput>, PartnerUncheckedUpdateWithoutLocationsInput>
  }

  export type PartnerServiceProfileUpdateManyWithoutLocationNestedInput = {
    create?: XOR<PartnerServiceProfileCreateWithoutLocationInput, PartnerServiceProfileUncheckedCreateWithoutLocationInput> | PartnerServiceProfileCreateWithoutLocationInput[] | PartnerServiceProfileUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PartnerServiceProfileCreateOrConnectWithoutLocationInput | PartnerServiceProfileCreateOrConnectWithoutLocationInput[]
    upsert?: PartnerServiceProfileUpsertWithWhereUniqueWithoutLocationInput | PartnerServiceProfileUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: PartnerServiceProfileCreateManyLocationInputEnvelope
    set?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    disconnect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    delete?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    connect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    update?: PartnerServiceProfileUpdateWithWhereUniqueWithoutLocationInput | PartnerServiceProfileUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: PartnerServiceProfileUpdateManyWithWhereWithoutLocationInput | PartnerServiceProfileUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: PartnerServiceProfileScalarWhereInput | PartnerServiceProfileScalarWhereInput[]
  }

  export type PartnerServiceProfileUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<PartnerServiceProfileCreateWithoutLocationInput, PartnerServiceProfileUncheckedCreateWithoutLocationInput> | PartnerServiceProfileCreateWithoutLocationInput[] | PartnerServiceProfileUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: PartnerServiceProfileCreateOrConnectWithoutLocationInput | PartnerServiceProfileCreateOrConnectWithoutLocationInput[]
    upsert?: PartnerServiceProfileUpsertWithWhereUniqueWithoutLocationInput | PartnerServiceProfileUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: PartnerServiceProfileCreateManyLocationInputEnvelope
    set?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    disconnect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    delete?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    connect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    update?: PartnerServiceProfileUpdateWithWhereUniqueWithoutLocationInput | PartnerServiceProfileUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: PartnerServiceProfileUpdateManyWithWhereWithoutLocationInput | PartnerServiceProfileUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: PartnerServiceProfileScalarWhereInput | PartnerServiceProfileScalarWhereInput[]
  }

  export type PartnerChannelCreateNestedOneWithoutServicesInput = {
    create?: XOR<PartnerChannelCreateWithoutServicesInput, PartnerChannelUncheckedCreateWithoutServicesInput>
    connectOrCreate?: PartnerChannelCreateOrConnectWithoutServicesInput
    connect?: PartnerChannelWhereUniqueInput
  }

  export type PartnerLocationCreateNestedOneWithoutServicesInput = {
    create?: XOR<PartnerLocationCreateWithoutServicesInput, PartnerLocationUncheckedCreateWithoutServicesInput>
    connectOrCreate?: PartnerLocationCreateOrConnectWithoutServicesInput
    connect?: PartnerLocationWhereUniqueInput
  }

  export type ServiceTypeCreateNestedOneWithoutServicesInput = {
    create?: XOR<ServiceTypeCreateWithoutServicesInput, ServiceTypeUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ServiceTypeCreateOrConnectWithoutServicesInput
    connect?: ServiceTypeWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PartnerChannelUpdateOneWithoutServicesNestedInput = {
    create?: XOR<PartnerChannelCreateWithoutServicesInput, PartnerChannelUncheckedCreateWithoutServicesInput>
    connectOrCreate?: PartnerChannelCreateOrConnectWithoutServicesInput
    upsert?: PartnerChannelUpsertWithoutServicesInput
    disconnect?: PartnerChannelWhereInput | boolean
    delete?: PartnerChannelWhereInput | boolean
    connect?: PartnerChannelWhereUniqueInput
    update?: XOR<XOR<PartnerChannelUpdateToOneWithWhereWithoutServicesInput, PartnerChannelUpdateWithoutServicesInput>, PartnerChannelUncheckedUpdateWithoutServicesInput>
  }

  export type PartnerLocationUpdateOneWithoutServicesNestedInput = {
    create?: XOR<PartnerLocationCreateWithoutServicesInput, PartnerLocationUncheckedCreateWithoutServicesInput>
    connectOrCreate?: PartnerLocationCreateOrConnectWithoutServicesInput
    upsert?: PartnerLocationUpsertWithoutServicesInput
    disconnect?: PartnerLocationWhereInput | boolean
    delete?: PartnerLocationWhereInput | boolean
    connect?: PartnerLocationWhereUniqueInput
    update?: XOR<XOR<PartnerLocationUpdateToOneWithWhereWithoutServicesInput, PartnerLocationUpdateWithoutServicesInput>, PartnerLocationUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceTypeUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<ServiceTypeCreateWithoutServicesInput, ServiceTypeUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ServiceTypeCreateOrConnectWithoutServicesInput
    upsert?: ServiceTypeUpsertWithoutServicesInput
    connect?: ServiceTypeWhereUniqueInput
    update?: XOR<XOR<ServiceTypeUpdateToOneWithWhereWithoutServicesInput, ServiceTypeUpdateWithoutServicesInput>, ServiceTypeUncheckedUpdateWithoutServicesInput>
  }

  export type PartnerServiceProfileCreateNestedManyWithoutServiceTypeInput = {
    create?: XOR<PartnerServiceProfileCreateWithoutServiceTypeInput, PartnerServiceProfileUncheckedCreateWithoutServiceTypeInput> | PartnerServiceProfileCreateWithoutServiceTypeInput[] | PartnerServiceProfileUncheckedCreateWithoutServiceTypeInput[]
    connectOrCreate?: PartnerServiceProfileCreateOrConnectWithoutServiceTypeInput | PartnerServiceProfileCreateOrConnectWithoutServiceTypeInput[]
    createMany?: PartnerServiceProfileCreateManyServiceTypeInputEnvelope
    connect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
  }

  export type PartnerServiceProfileUncheckedCreateNestedManyWithoutServiceTypeInput = {
    create?: XOR<PartnerServiceProfileCreateWithoutServiceTypeInput, PartnerServiceProfileUncheckedCreateWithoutServiceTypeInput> | PartnerServiceProfileCreateWithoutServiceTypeInput[] | PartnerServiceProfileUncheckedCreateWithoutServiceTypeInput[]
    connectOrCreate?: PartnerServiceProfileCreateOrConnectWithoutServiceTypeInput | PartnerServiceProfileCreateOrConnectWithoutServiceTypeInput[]
    createMany?: PartnerServiceProfileCreateManyServiceTypeInputEnvelope
    connect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
  }

  export type PartnerServiceProfileUpdateManyWithoutServiceTypeNestedInput = {
    create?: XOR<PartnerServiceProfileCreateWithoutServiceTypeInput, PartnerServiceProfileUncheckedCreateWithoutServiceTypeInput> | PartnerServiceProfileCreateWithoutServiceTypeInput[] | PartnerServiceProfileUncheckedCreateWithoutServiceTypeInput[]
    connectOrCreate?: PartnerServiceProfileCreateOrConnectWithoutServiceTypeInput | PartnerServiceProfileCreateOrConnectWithoutServiceTypeInput[]
    upsert?: PartnerServiceProfileUpsertWithWhereUniqueWithoutServiceTypeInput | PartnerServiceProfileUpsertWithWhereUniqueWithoutServiceTypeInput[]
    createMany?: PartnerServiceProfileCreateManyServiceTypeInputEnvelope
    set?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    disconnect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    delete?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    connect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    update?: PartnerServiceProfileUpdateWithWhereUniqueWithoutServiceTypeInput | PartnerServiceProfileUpdateWithWhereUniqueWithoutServiceTypeInput[]
    updateMany?: PartnerServiceProfileUpdateManyWithWhereWithoutServiceTypeInput | PartnerServiceProfileUpdateManyWithWhereWithoutServiceTypeInput[]
    deleteMany?: PartnerServiceProfileScalarWhereInput | PartnerServiceProfileScalarWhereInput[]
  }

  export type PartnerServiceProfileUncheckedUpdateManyWithoutServiceTypeNestedInput = {
    create?: XOR<PartnerServiceProfileCreateWithoutServiceTypeInput, PartnerServiceProfileUncheckedCreateWithoutServiceTypeInput> | PartnerServiceProfileCreateWithoutServiceTypeInput[] | PartnerServiceProfileUncheckedCreateWithoutServiceTypeInput[]
    connectOrCreate?: PartnerServiceProfileCreateOrConnectWithoutServiceTypeInput | PartnerServiceProfileCreateOrConnectWithoutServiceTypeInput[]
    upsert?: PartnerServiceProfileUpsertWithWhereUniqueWithoutServiceTypeInput | PartnerServiceProfileUpsertWithWhereUniqueWithoutServiceTypeInput[]
    createMany?: PartnerServiceProfileCreateManyServiceTypeInputEnvelope
    set?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    disconnect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    delete?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    connect?: PartnerServiceProfileWhereUniqueInput | PartnerServiceProfileWhereUniqueInput[]
    update?: PartnerServiceProfileUpdateWithWhereUniqueWithoutServiceTypeInput | PartnerServiceProfileUpdateWithWhereUniqueWithoutServiceTypeInput[]
    updateMany?: PartnerServiceProfileUpdateManyWithWhereWithoutServiceTypeInput | PartnerServiceProfileUpdateManyWithWhereWithoutServiceTypeInput[]
    deleteMany?: PartnerServiceProfileScalarWhereInput | PartnerServiceProfileScalarWhereInput[]
  }

  export type PartnerProductCategoryCreateNestedManyWithoutProductCategoryInput = {
    create?: XOR<PartnerProductCategoryCreateWithoutProductCategoryInput, PartnerProductCategoryUncheckedCreateWithoutProductCategoryInput> | PartnerProductCategoryCreateWithoutProductCategoryInput[] | PartnerProductCategoryUncheckedCreateWithoutProductCategoryInput[]
    connectOrCreate?: PartnerProductCategoryCreateOrConnectWithoutProductCategoryInput | PartnerProductCategoryCreateOrConnectWithoutProductCategoryInput[]
    createMany?: PartnerProductCategoryCreateManyProductCategoryInputEnvelope
    connect?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
  }

  export type ResellPlatformCategoryCreateNestedManyWithoutProductCategoryInput = {
    create?: XOR<ResellPlatformCategoryCreateWithoutProductCategoryInput, ResellPlatformCategoryUncheckedCreateWithoutProductCategoryInput> | ResellPlatformCategoryCreateWithoutProductCategoryInput[] | ResellPlatformCategoryUncheckedCreateWithoutProductCategoryInput[]
    connectOrCreate?: ResellPlatformCategoryCreateOrConnectWithoutProductCategoryInput | ResellPlatformCategoryCreateOrConnectWithoutProductCategoryInput[]
    createMany?: ResellPlatformCategoryCreateManyProductCategoryInputEnvelope
    connect?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
  }

  export type PartnerProductCategoryUncheckedCreateNestedManyWithoutProductCategoryInput = {
    create?: XOR<PartnerProductCategoryCreateWithoutProductCategoryInput, PartnerProductCategoryUncheckedCreateWithoutProductCategoryInput> | PartnerProductCategoryCreateWithoutProductCategoryInput[] | PartnerProductCategoryUncheckedCreateWithoutProductCategoryInput[]
    connectOrCreate?: PartnerProductCategoryCreateOrConnectWithoutProductCategoryInput | PartnerProductCategoryCreateOrConnectWithoutProductCategoryInput[]
    createMany?: PartnerProductCategoryCreateManyProductCategoryInputEnvelope
    connect?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
  }

  export type ResellPlatformCategoryUncheckedCreateNestedManyWithoutProductCategoryInput = {
    create?: XOR<ResellPlatformCategoryCreateWithoutProductCategoryInput, ResellPlatformCategoryUncheckedCreateWithoutProductCategoryInput> | ResellPlatformCategoryCreateWithoutProductCategoryInput[] | ResellPlatformCategoryUncheckedCreateWithoutProductCategoryInput[]
    connectOrCreate?: ResellPlatformCategoryCreateOrConnectWithoutProductCategoryInput | ResellPlatformCategoryCreateOrConnectWithoutProductCategoryInput[]
    createMany?: ResellPlatformCategoryCreateManyProductCategoryInputEnvelope
    connect?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
  }

  export type PartnerProductCategoryUpdateManyWithoutProductCategoryNestedInput = {
    create?: XOR<PartnerProductCategoryCreateWithoutProductCategoryInput, PartnerProductCategoryUncheckedCreateWithoutProductCategoryInput> | PartnerProductCategoryCreateWithoutProductCategoryInput[] | PartnerProductCategoryUncheckedCreateWithoutProductCategoryInput[]
    connectOrCreate?: PartnerProductCategoryCreateOrConnectWithoutProductCategoryInput | PartnerProductCategoryCreateOrConnectWithoutProductCategoryInput[]
    upsert?: PartnerProductCategoryUpsertWithWhereUniqueWithoutProductCategoryInput | PartnerProductCategoryUpsertWithWhereUniqueWithoutProductCategoryInput[]
    createMany?: PartnerProductCategoryCreateManyProductCategoryInputEnvelope
    set?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
    disconnect?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
    delete?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
    connect?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
    update?: PartnerProductCategoryUpdateWithWhereUniqueWithoutProductCategoryInput | PartnerProductCategoryUpdateWithWhereUniqueWithoutProductCategoryInput[]
    updateMany?: PartnerProductCategoryUpdateManyWithWhereWithoutProductCategoryInput | PartnerProductCategoryUpdateManyWithWhereWithoutProductCategoryInput[]
    deleteMany?: PartnerProductCategoryScalarWhereInput | PartnerProductCategoryScalarWhereInput[]
  }

  export type ResellPlatformCategoryUpdateManyWithoutProductCategoryNestedInput = {
    create?: XOR<ResellPlatformCategoryCreateWithoutProductCategoryInput, ResellPlatformCategoryUncheckedCreateWithoutProductCategoryInput> | ResellPlatformCategoryCreateWithoutProductCategoryInput[] | ResellPlatformCategoryUncheckedCreateWithoutProductCategoryInput[]
    connectOrCreate?: ResellPlatformCategoryCreateOrConnectWithoutProductCategoryInput | ResellPlatformCategoryCreateOrConnectWithoutProductCategoryInput[]
    upsert?: ResellPlatformCategoryUpsertWithWhereUniqueWithoutProductCategoryInput | ResellPlatformCategoryUpsertWithWhereUniqueWithoutProductCategoryInput[]
    createMany?: ResellPlatformCategoryCreateManyProductCategoryInputEnvelope
    set?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
    disconnect?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
    delete?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
    connect?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
    update?: ResellPlatformCategoryUpdateWithWhereUniqueWithoutProductCategoryInput | ResellPlatformCategoryUpdateWithWhereUniqueWithoutProductCategoryInput[]
    updateMany?: ResellPlatformCategoryUpdateManyWithWhereWithoutProductCategoryInput | ResellPlatformCategoryUpdateManyWithWhereWithoutProductCategoryInput[]
    deleteMany?: ResellPlatformCategoryScalarWhereInput | ResellPlatformCategoryScalarWhereInput[]
  }

  export type PartnerProductCategoryUncheckedUpdateManyWithoutProductCategoryNestedInput = {
    create?: XOR<PartnerProductCategoryCreateWithoutProductCategoryInput, PartnerProductCategoryUncheckedCreateWithoutProductCategoryInput> | PartnerProductCategoryCreateWithoutProductCategoryInput[] | PartnerProductCategoryUncheckedCreateWithoutProductCategoryInput[]
    connectOrCreate?: PartnerProductCategoryCreateOrConnectWithoutProductCategoryInput | PartnerProductCategoryCreateOrConnectWithoutProductCategoryInput[]
    upsert?: PartnerProductCategoryUpsertWithWhereUniqueWithoutProductCategoryInput | PartnerProductCategoryUpsertWithWhereUniqueWithoutProductCategoryInput[]
    createMany?: PartnerProductCategoryCreateManyProductCategoryInputEnvelope
    set?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
    disconnect?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
    delete?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
    connect?: PartnerProductCategoryWhereUniqueInput | PartnerProductCategoryWhereUniqueInput[]
    update?: PartnerProductCategoryUpdateWithWhereUniqueWithoutProductCategoryInput | PartnerProductCategoryUpdateWithWhereUniqueWithoutProductCategoryInput[]
    updateMany?: PartnerProductCategoryUpdateManyWithWhereWithoutProductCategoryInput | PartnerProductCategoryUpdateManyWithWhereWithoutProductCategoryInput[]
    deleteMany?: PartnerProductCategoryScalarWhereInput | PartnerProductCategoryScalarWhereInput[]
  }

  export type ResellPlatformCategoryUncheckedUpdateManyWithoutProductCategoryNestedInput = {
    create?: XOR<ResellPlatformCategoryCreateWithoutProductCategoryInput, ResellPlatformCategoryUncheckedCreateWithoutProductCategoryInput> | ResellPlatformCategoryCreateWithoutProductCategoryInput[] | ResellPlatformCategoryUncheckedCreateWithoutProductCategoryInput[]
    connectOrCreate?: ResellPlatformCategoryCreateOrConnectWithoutProductCategoryInput | ResellPlatformCategoryCreateOrConnectWithoutProductCategoryInput[]
    upsert?: ResellPlatformCategoryUpsertWithWhereUniqueWithoutProductCategoryInput | ResellPlatformCategoryUpsertWithWhereUniqueWithoutProductCategoryInput[]
    createMany?: ResellPlatformCategoryCreateManyProductCategoryInputEnvelope
    set?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
    disconnect?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
    delete?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
    connect?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
    update?: ResellPlatformCategoryUpdateWithWhereUniqueWithoutProductCategoryInput | ResellPlatformCategoryUpdateWithWhereUniqueWithoutProductCategoryInput[]
    updateMany?: ResellPlatformCategoryUpdateManyWithWhereWithoutProductCategoryInput | ResellPlatformCategoryUpdateManyWithWhereWithoutProductCategoryInput[]
    deleteMany?: ResellPlatformCategoryScalarWhereInput | ResellPlatformCategoryScalarWhereInput[]
  }

  export type PartnerCreateNestedOneWithoutProductCategoriesInput = {
    create?: XOR<PartnerCreateWithoutProductCategoriesInput, PartnerUncheckedCreateWithoutProductCategoriesInput>
    connectOrCreate?: PartnerCreateOrConnectWithoutProductCategoriesInput
    connect?: PartnerWhereUniqueInput
  }

  export type ProductCategoryCreateNestedOneWithoutPartnersInput = {
    create?: XOR<ProductCategoryCreateWithoutPartnersInput, ProductCategoryUncheckedCreateWithoutPartnersInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutPartnersInput
    connect?: ProductCategoryWhereUniqueInput
  }

  export type PartnerUpdateOneRequiredWithoutProductCategoriesNestedInput = {
    create?: XOR<PartnerCreateWithoutProductCategoriesInput, PartnerUncheckedCreateWithoutProductCategoriesInput>
    connectOrCreate?: PartnerCreateOrConnectWithoutProductCategoriesInput
    upsert?: PartnerUpsertWithoutProductCategoriesInput
    connect?: PartnerWhereUniqueInput
    update?: XOR<XOR<PartnerUpdateToOneWithWhereWithoutProductCategoriesInput, PartnerUpdateWithoutProductCategoriesInput>, PartnerUncheckedUpdateWithoutProductCategoriesInput>
  }

  export type ProductCategoryUpdateOneRequiredWithoutPartnersNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutPartnersInput, ProductCategoryUncheckedCreateWithoutPartnersInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutPartnersInput
    upsert?: ProductCategoryUpsertWithoutPartnersInput
    connect?: ProductCategoryWhereUniqueInput
    update?: XOR<XOR<ProductCategoryUpdateToOneWithWhereWithoutPartnersInput, ProductCategoryUpdateWithoutPartnersInput>, ProductCategoryUncheckedUpdateWithoutPartnersInput>
  }

  export type ResellPlatformCategoryCreateNestedManyWithoutResellPlatformInput = {
    create?: XOR<ResellPlatformCategoryCreateWithoutResellPlatformInput, ResellPlatformCategoryUncheckedCreateWithoutResellPlatformInput> | ResellPlatformCategoryCreateWithoutResellPlatformInput[] | ResellPlatformCategoryUncheckedCreateWithoutResellPlatformInput[]
    connectOrCreate?: ResellPlatformCategoryCreateOrConnectWithoutResellPlatformInput | ResellPlatformCategoryCreateOrConnectWithoutResellPlatformInput[]
    createMany?: ResellPlatformCategoryCreateManyResellPlatformInputEnvelope
    connect?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
  }

  export type ResellPlatformCountryCreateNestedManyWithoutResellPlatformInput = {
    create?: XOR<ResellPlatformCountryCreateWithoutResellPlatformInput, ResellPlatformCountryUncheckedCreateWithoutResellPlatformInput> | ResellPlatformCountryCreateWithoutResellPlatformInput[] | ResellPlatformCountryUncheckedCreateWithoutResellPlatformInput[]
    connectOrCreate?: ResellPlatformCountryCreateOrConnectWithoutResellPlatformInput | ResellPlatformCountryCreateOrConnectWithoutResellPlatformInput[]
    createMany?: ResellPlatformCountryCreateManyResellPlatformInputEnvelope
    connect?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
  }

  export type ResellPlatformCategoryUncheckedCreateNestedManyWithoutResellPlatformInput = {
    create?: XOR<ResellPlatformCategoryCreateWithoutResellPlatformInput, ResellPlatformCategoryUncheckedCreateWithoutResellPlatformInput> | ResellPlatformCategoryCreateWithoutResellPlatformInput[] | ResellPlatformCategoryUncheckedCreateWithoutResellPlatformInput[]
    connectOrCreate?: ResellPlatformCategoryCreateOrConnectWithoutResellPlatformInput | ResellPlatformCategoryCreateOrConnectWithoutResellPlatformInput[]
    createMany?: ResellPlatformCategoryCreateManyResellPlatformInputEnvelope
    connect?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
  }

  export type ResellPlatformCountryUncheckedCreateNestedManyWithoutResellPlatformInput = {
    create?: XOR<ResellPlatformCountryCreateWithoutResellPlatformInput, ResellPlatformCountryUncheckedCreateWithoutResellPlatformInput> | ResellPlatformCountryCreateWithoutResellPlatformInput[] | ResellPlatformCountryUncheckedCreateWithoutResellPlatformInput[]
    connectOrCreate?: ResellPlatformCountryCreateOrConnectWithoutResellPlatformInput | ResellPlatformCountryCreateOrConnectWithoutResellPlatformInput[]
    createMany?: ResellPlatformCountryCreateManyResellPlatformInputEnvelope
    connect?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
  }

  export type EnumResellPlatformTypeFieldUpdateOperationsInput = {
    set?: $Enums.ResellPlatformType
  }

  export type ResellPlatformCategoryUpdateManyWithoutResellPlatformNestedInput = {
    create?: XOR<ResellPlatformCategoryCreateWithoutResellPlatformInput, ResellPlatformCategoryUncheckedCreateWithoutResellPlatformInput> | ResellPlatformCategoryCreateWithoutResellPlatformInput[] | ResellPlatformCategoryUncheckedCreateWithoutResellPlatformInput[]
    connectOrCreate?: ResellPlatformCategoryCreateOrConnectWithoutResellPlatformInput | ResellPlatformCategoryCreateOrConnectWithoutResellPlatformInput[]
    upsert?: ResellPlatformCategoryUpsertWithWhereUniqueWithoutResellPlatformInput | ResellPlatformCategoryUpsertWithWhereUniqueWithoutResellPlatformInput[]
    createMany?: ResellPlatformCategoryCreateManyResellPlatformInputEnvelope
    set?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
    disconnect?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
    delete?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
    connect?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
    update?: ResellPlatformCategoryUpdateWithWhereUniqueWithoutResellPlatformInput | ResellPlatformCategoryUpdateWithWhereUniqueWithoutResellPlatformInput[]
    updateMany?: ResellPlatformCategoryUpdateManyWithWhereWithoutResellPlatformInput | ResellPlatformCategoryUpdateManyWithWhereWithoutResellPlatformInput[]
    deleteMany?: ResellPlatformCategoryScalarWhereInput | ResellPlatformCategoryScalarWhereInput[]
  }

  export type ResellPlatformCountryUpdateManyWithoutResellPlatformNestedInput = {
    create?: XOR<ResellPlatformCountryCreateWithoutResellPlatformInput, ResellPlatformCountryUncheckedCreateWithoutResellPlatformInput> | ResellPlatformCountryCreateWithoutResellPlatformInput[] | ResellPlatformCountryUncheckedCreateWithoutResellPlatformInput[]
    connectOrCreate?: ResellPlatformCountryCreateOrConnectWithoutResellPlatformInput | ResellPlatformCountryCreateOrConnectWithoutResellPlatformInput[]
    upsert?: ResellPlatformCountryUpsertWithWhereUniqueWithoutResellPlatformInput | ResellPlatformCountryUpsertWithWhereUniqueWithoutResellPlatformInput[]
    createMany?: ResellPlatformCountryCreateManyResellPlatformInputEnvelope
    set?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
    disconnect?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
    delete?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
    connect?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
    update?: ResellPlatformCountryUpdateWithWhereUniqueWithoutResellPlatformInput | ResellPlatformCountryUpdateWithWhereUniqueWithoutResellPlatformInput[]
    updateMany?: ResellPlatformCountryUpdateManyWithWhereWithoutResellPlatformInput | ResellPlatformCountryUpdateManyWithWhereWithoutResellPlatformInput[]
    deleteMany?: ResellPlatformCountryScalarWhereInput | ResellPlatformCountryScalarWhereInput[]
  }

  export type ResellPlatformCategoryUncheckedUpdateManyWithoutResellPlatformNestedInput = {
    create?: XOR<ResellPlatformCategoryCreateWithoutResellPlatformInput, ResellPlatformCategoryUncheckedCreateWithoutResellPlatformInput> | ResellPlatformCategoryCreateWithoutResellPlatformInput[] | ResellPlatformCategoryUncheckedCreateWithoutResellPlatformInput[]
    connectOrCreate?: ResellPlatformCategoryCreateOrConnectWithoutResellPlatformInput | ResellPlatformCategoryCreateOrConnectWithoutResellPlatformInput[]
    upsert?: ResellPlatformCategoryUpsertWithWhereUniqueWithoutResellPlatformInput | ResellPlatformCategoryUpsertWithWhereUniqueWithoutResellPlatformInput[]
    createMany?: ResellPlatformCategoryCreateManyResellPlatformInputEnvelope
    set?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
    disconnect?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
    delete?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
    connect?: ResellPlatformCategoryWhereUniqueInput | ResellPlatformCategoryWhereUniqueInput[]
    update?: ResellPlatformCategoryUpdateWithWhereUniqueWithoutResellPlatformInput | ResellPlatformCategoryUpdateWithWhereUniqueWithoutResellPlatformInput[]
    updateMany?: ResellPlatformCategoryUpdateManyWithWhereWithoutResellPlatformInput | ResellPlatformCategoryUpdateManyWithWhereWithoutResellPlatformInput[]
    deleteMany?: ResellPlatformCategoryScalarWhereInput | ResellPlatformCategoryScalarWhereInput[]
  }

  export type ResellPlatformCountryUncheckedUpdateManyWithoutResellPlatformNestedInput = {
    create?: XOR<ResellPlatformCountryCreateWithoutResellPlatformInput, ResellPlatformCountryUncheckedCreateWithoutResellPlatformInput> | ResellPlatformCountryCreateWithoutResellPlatformInput[] | ResellPlatformCountryUncheckedCreateWithoutResellPlatformInput[]
    connectOrCreate?: ResellPlatformCountryCreateOrConnectWithoutResellPlatformInput | ResellPlatformCountryCreateOrConnectWithoutResellPlatformInput[]
    upsert?: ResellPlatformCountryUpsertWithWhereUniqueWithoutResellPlatformInput | ResellPlatformCountryUpsertWithWhereUniqueWithoutResellPlatformInput[]
    createMany?: ResellPlatformCountryCreateManyResellPlatformInputEnvelope
    set?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
    disconnect?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
    delete?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
    connect?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
    update?: ResellPlatformCountryUpdateWithWhereUniqueWithoutResellPlatformInput | ResellPlatformCountryUpdateWithWhereUniqueWithoutResellPlatformInput[]
    updateMany?: ResellPlatformCountryUpdateManyWithWhereWithoutResellPlatformInput | ResellPlatformCountryUpdateManyWithWhereWithoutResellPlatformInput[]
    deleteMany?: ResellPlatformCountryScalarWhereInput | ResellPlatformCountryScalarWhereInput[]
  }

  export type ProductCategoryCreateNestedOneWithoutResellPlatformsInput = {
    create?: XOR<ProductCategoryCreateWithoutResellPlatformsInput, ProductCategoryUncheckedCreateWithoutResellPlatformsInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutResellPlatformsInput
    connect?: ProductCategoryWhereUniqueInput
  }

  export type ResellPlatformCreateNestedOneWithoutProductCategoriesInput = {
    create?: XOR<ResellPlatformCreateWithoutProductCategoriesInput, ResellPlatformUncheckedCreateWithoutProductCategoriesInput>
    connectOrCreate?: ResellPlatformCreateOrConnectWithoutProductCategoriesInput
    connect?: ResellPlatformWhereUniqueInput
  }

  export type ProductCategoryUpdateOneRequiredWithoutResellPlatformsNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutResellPlatformsInput, ProductCategoryUncheckedCreateWithoutResellPlatformsInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutResellPlatformsInput
    upsert?: ProductCategoryUpsertWithoutResellPlatformsInput
    connect?: ProductCategoryWhereUniqueInput
    update?: XOR<XOR<ProductCategoryUpdateToOneWithWhereWithoutResellPlatformsInput, ProductCategoryUpdateWithoutResellPlatformsInput>, ProductCategoryUncheckedUpdateWithoutResellPlatformsInput>
  }

  export type ResellPlatformUpdateOneRequiredWithoutProductCategoriesNestedInput = {
    create?: XOR<ResellPlatformCreateWithoutProductCategoriesInput, ResellPlatformUncheckedCreateWithoutProductCategoriesInput>
    connectOrCreate?: ResellPlatformCreateOrConnectWithoutProductCategoriesInput
    upsert?: ResellPlatformUpsertWithoutProductCategoriesInput
    connect?: ResellPlatformWhereUniqueInput
    update?: XOR<XOR<ResellPlatformUpdateToOneWithWhereWithoutProductCategoriesInput, ResellPlatformUpdateWithoutProductCategoriesInput>, ResellPlatformUncheckedUpdateWithoutProductCategoriesInput>
  }

  export type CountryCreateNestedOneWithoutResellPlatformsInput = {
    create?: XOR<CountryCreateWithoutResellPlatformsInput, CountryUncheckedCreateWithoutResellPlatformsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutResellPlatformsInput
    connect?: CountryWhereUniqueInput
  }

  export type ResellPlatformCreateNestedOneWithoutCountriesInput = {
    create?: XOR<ResellPlatformCreateWithoutCountriesInput, ResellPlatformUncheckedCreateWithoutCountriesInput>
    connectOrCreate?: ResellPlatformCreateOrConnectWithoutCountriesInput
    connect?: ResellPlatformWhereUniqueInput
  }

  export type CountryUpdateOneRequiredWithoutResellPlatformsNestedInput = {
    create?: XOR<CountryCreateWithoutResellPlatformsInput, CountryUncheckedCreateWithoutResellPlatformsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutResellPlatformsInput
    upsert?: CountryUpsertWithoutResellPlatformsInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutResellPlatformsInput, CountryUpdateWithoutResellPlatformsInput>, CountryUncheckedUpdateWithoutResellPlatformsInput>
  }

  export type ResellPlatformUpdateOneRequiredWithoutCountriesNestedInput = {
    create?: XOR<ResellPlatformCreateWithoutCountriesInput, ResellPlatformUncheckedCreateWithoutCountriesInput>
    connectOrCreate?: ResellPlatformCreateOrConnectWithoutCountriesInput
    upsert?: ResellPlatformUpsertWithoutCountriesInput
    connect?: ResellPlatformWhereUniqueInput
    update?: XOR<XOR<ResellPlatformUpdateToOneWithWhereWithoutCountriesInput, ResellPlatformUpdateWithoutCountriesInput>, ResellPlatformUncheckedUpdateWithoutCountriesInput>
  }

  export type PartnerLocationCreateNestedManyWithoutCountryInput = {
    create?: XOR<PartnerLocationCreateWithoutCountryInput, PartnerLocationUncheckedCreateWithoutCountryInput> | PartnerLocationCreateWithoutCountryInput[] | PartnerLocationUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: PartnerLocationCreateOrConnectWithoutCountryInput | PartnerLocationCreateOrConnectWithoutCountryInput[]
    createMany?: PartnerLocationCreateManyCountryInputEnvelope
    connect?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
  }

  export type ResellPlatformCountryCreateNestedManyWithoutCountryInput = {
    create?: XOR<ResellPlatformCountryCreateWithoutCountryInput, ResellPlatformCountryUncheckedCreateWithoutCountryInput> | ResellPlatformCountryCreateWithoutCountryInput[] | ResellPlatformCountryUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ResellPlatformCountryCreateOrConnectWithoutCountryInput | ResellPlatformCountryCreateOrConnectWithoutCountryInput[]
    createMany?: ResellPlatformCountryCreateManyCountryInputEnvelope
    connect?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
  }

  export type PartnerLocationUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<PartnerLocationCreateWithoutCountryInput, PartnerLocationUncheckedCreateWithoutCountryInput> | PartnerLocationCreateWithoutCountryInput[] | PartnerLocationUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: PartnerLocationCreateOrConnectWithoutCountryInput | PartnerLocationCreateOrConnectWithoutCountryInput[]
    createMany?: PartnerLocationCreateManyCountryInputEnvelope
    connect?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
  }

  export type ResellPlatformCountryUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<ResellPlatformCountryCreateWithoutCountryInput, ResellPlatformCountryUncheckedCreateWithoutCountryInput> | ResellPlatformCountryCreateWithoutCountryInput[] | ResellPlatformCountryUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ResellPlatformCountryCreateOrConnectWithoutCountryInput | ResellPlatformCountryCreateOrConnectWithoutCountryInput[]
    createMany?: ResellPlatformCountryCreateManyCountryInputEnvelope
    connect?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
  }

  export type PartnerLocationUpdateManyWithoutCountryNestedInput = {
    create?: XOR<PartnerLocationCreateWithoutCountryInput, PartnerLocationUncheckedCreateWithoutCountryInput> | PartnerLocationCreateWithoutCountryInput[] | PartnerLocationUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: PartnerLocationCreateOrConnectWithoutCountryInput | PartnerLocationCreateOrConnectWithoutCountryInput[]
    upsert?: PartnerLocationUpsertWithWhereUniqueWithoutCountryInput | PartnerLocationUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: PartnerLocationCreateManyCountryInputEnvelope
    set?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
    disconnect?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
    delete?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
    connect?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
    update?: PartnerLocationUpdateWithWhereUniqueWithoutCountryInput | PartnerLocationUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: PartnerLocationUpdateManyWithWhereWithoutCountryInput | PartnerLocationUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: PartnerLocationScalarWhereInput | PartnerLocationScalarWhereInput[]
  }

  export type ResellPlatformCountryUpdateManyWithoutCountryNestedInput = {
    create?: XOR<ResellPlatformCountryCreateWithoutCountryInput, ResellPlatformCountryUncheckedCreateWithoutCountryInput> | ResellPlatformCountryCreateWithoutCountryInput[] | ResellPlatformCountryUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ResellPlatformCountryCreateOrConnectWithoutCountryInput | ResellPlatformCountryCreateOrConnectWithoutCountryInput[]
    upsert?: ResellPlatformCountryUpsertWithWhereUniqueWithoutCountryInput | ResellPlatformCountryUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: ResellPlatformCountryCreateManyCountryInputEnvelope
    set?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
    disconnect?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
    delete?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
    connect?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
    update?: ResellPlatformCountryUpdateWithWhereUniqueWithoutCountryInput | ResellPlatformCountryUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: ResellPlatformCountryUpdateManyWithWhereWithoutCountryInput | ResellPlatformCountryUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: ResellPlatformCountryScalarWhereInput | ResellPlatformCountryScalarWhereInput[]
  }

  export type PartnerLocationUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<PartnerLocationCreateWithoutCountryInput, PartnerLocationUncheckedCreateWithoutCountryInput> | PartnerLocationCreateWithoutCountryInput[] | PartnerLocationUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: PartnerLocationCreateOrConnectWithoutCountryInput | PartnerLocationCreateOrConnectWithoutCountryInput[]
    upsert?: PartnerLocationUpsertWithWhereUniqueWithoutCountryInput | PartnerLocationUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: PartnerLocationCreateManyCountryInputEnvelope
    set?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
    disconnect?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
    delete?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
    connect?: PartnerLocationWhereUniqueInput | PartnerLocationWhereUniqueInput[]
    update?: PartnerLocationUpdateWithWhereUniqueWithoutCountryInput | PartnerLocationUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: PartnerLocationUpdateManyWithWhereWithoutCountryInput | PartnerLocationUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: PartnerLocationScalarWhereInput | PartnerLocationScalarWhereInput[]
  }

  export type ResellPlatformCountryUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<ResellPlatformCountryCreateWithoutCountryInput, ResellPlatformCountryUncheckedCreateWithoutCountryInput> | ResellPlatformCountryCreateWithoutCountryInput[] | ResellPlatformCountryUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ResellPlatformCountryCreateOrConnectWithoutCountryInput | ResellPlatformCountryCreateOrConnectWithoutCountryInput[]
    upsert?: ResellPlatformCountryUpsertWithWhereUniqueWithoutCountryInput | ResellPlatformCountryUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: ResellPlatformCountryCreateManyCountryInputEnvelope
    set?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
    disconnect?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
    delete?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
    connect?: ResellPlatformCountryWhereUniqueInput | ResellPlatformCountryWhereUniqueInput[]
    update?: ResellPlatformCountryUpdateWithWhereUniqueWithoutCountryInput | ResellPlatformCountryUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: ResellPlatformCountryUpdateManyWithWhereWithoutCountryInput | ResellPlatformCountryUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: ResellPlatformCountryScalarWhereInput | ResellPlatformCountryScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumChannelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelType | EnumChannelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelTypeFilter<$PrismaModel> | $Enums.ChannelType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumChannelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelType | EnumChannelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChannelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelTypeFilter<$PrismaModel>
    _max?: NestedEnumChannelTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumResellPlatformTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResellPlatformType | EnumResellPlatformTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResellPlatformType[] | ListEnumResellPlatformTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResellPlatformType[] | ListEnumResellPlatformTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResellPlatformTypeFilter<$PrismaModel> | $Enums.ResellPlatformType
  }

  export type NestedEnumResellPlatformTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResellPlatformType | EnumResellPlatformTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResellPlatformType[] | ListEnumResellPlatformTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResellPlatformType[] | ListEnumResellPlatformTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResellPlatformTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResellPlatformType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResellPlatformTypeFilter<$PrismaModel>
    _max?: NestedEnumResellPlatformTypeFilter<$PrismaModel>
  }

  export type PartnerChannelCreateWithoutPartnerInput = {
    id: string
    type: $Enums.ChannelType
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: PartnerServiceProfileCreateNestedManyWithoutChannelInput
  }

  export type PartnerChannelUncheckedCreateWithoutPartnerInput = {
    id: string
    type: $Enums.ChannelType
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: PartnerServiceProfileUncheckedCreateNestedManyWithoutChannelInput
  }

  export type PartnerChannelCreateOrConnectWithoutPartnerInput = {
    where: PartnerChannelWhereUniqueInput
    create: XOR<PartnerChannelCreateWithoutPartnerInput, PartnerChannelUncheckedCreateWithoutPartnerInput>
  }

  export type PartnerChannelCreateManyPartnerInputEnvelope = {
    data: PartnerChannelCreateManyPartnerInput | PartnerChannelCreateManyPartnerInput[]
    skipDuplicates?: boolean
  }

  export type PartnerLocationCreateWithoutPartnerInput = {
    id: string
    name: string
    formattedAddress: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutPartnersInput
    services?: PartnerServiceProfileCreateNestedManyWithoutLocationInput
  }

  export type PartnerLocationUncheckedCreateWithoutPartnerInput = {
    id: string
    name: string
    formattedAddress: string
    lat: number
    lng: number
    countryCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: PartnerServiceProfileUncheckedCreateNestedManyWithoutLocationInput
  }

  export type PartnerLocationCreateOrConnectWithoutPartnerInput = {
    where: PartnerLocationWhereUniqueInput
    create: XOR<PartnerLocationCreateWithoutPartnerInput, PartnerLocationUncheckedCreateWithoutPartnerInput>
  }

  export type PartnerLocationCreateManyPartnerInputEnvelope = {
    data: PartnerLocationCreateManyPartnerInput | PartnerLocationCreateManyPartnerInput[]
    skipDuplicates?: boolean
  }

  export type PartnerProductCategoryCreateWithoutPartnerInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productCategory: ProductCategoryCreateNestedOneWithoutPartnersInput
  }

  export type PartnerProductCategoryUncheckedCreateWithoutPartnerInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productCategoryId: string
  }

  export type PartnerProductCategoryCreateOrConnectWithoutPartnerInput = {
    where: PartnerProductCategoryWhereUniqueInput
    create: XOR<PartnerProductCategoryCreateWithoutPartnerInput, PartnerProductCategoryUncheckedCreateWithoutPartnerInput>
  }

  export type PartnerProductCategoryCreateManyPartnerInputEnvelope = {
    data: PartnerProductCategoryCreateManyPartnerInput | PartnerProductCategoryCreateManyPartnerInput[]
    skipDuplicates?: boolean
  }

  export type PartnerRoleAssignmentCreateWithoutPartnerInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: PartnerRoleCreateNestedOneWithoutPartnersInput
  }

  export type PartnerRoleAssignmentUncheckedCreateWithoutPartnerInput = {
    id: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerRoleAssignmentCreateOrConnectWithoutPartnerInput = {
    where: PartnerRoleAssignmentWhereUniqueInput
    create: XOR<PartnerRoleAssignmentCreateWithoutPartnerInput, PartnerRoleAssignmentUncheckedCreateWithoutPartnerInput>
  }

  export type PartnerRoleAssignmentCreateManyPartnerInputEnvelope = {
    data: PartnerRoleAssignmentCreateManyPartnerInput | PartnerRoleAssignmentCreateManyPartnerInput[]
    skipDuplicates?: boolean
  }

  export type PartnerChannelUpsertWithWhereUniqueWithoutPartnerInput = {
    where: PartnerChannelWhereUniqueInput
    update: XOR<PartnerChannelUpdateWithoutPartnerInput, PartnerChannelUncheckedUpdateWithoutPartnerInput>
    create: XOR<PartnerChannelCreateWithoutPartnerInput, PartnerChannelUncheckedCreateWithoutPartnerInput>
  }

  export type PartnerChannelUpdateWithWhereUniqueWithoutPartnerInput = {
    where: PartnerChannelWhereUniqueInput
    data: XOR<PartnerChannelUpdateWithoutPartnerInput, PartnerChannelUncheckedUpdateWithoutPartnerInput>
  }

  export type PartnerChannelUpdateManyWithWhereWithoutPartnerInput = {
    where: PartnerChannelScalarWhereInput
    data: XOR<PartnerChannelUpdateManyMutationInput, PartnerChannelUncheckedUpdateManyWithoutPartnerInput>
  }

  export type PartnerChannelScalarWhereInput = {
    AND?: PartnerChannelScalarWhereInput | PartnerChannelScalarWhereInput[]
    OR?: PartnerChannelScalarWhereInput[]
    NOT?: PartnerChannelScalarWhereInput | PartnerChannelScalarWhereInput[]
    id?: StringFilter<"PartnerChannel"> | string
    partnerId?: StringFilter<"PartnerChannel"> | string
    type?: EnumChannelTypeFilter<"PartnerChannel"> | $Enums.ChannelType
    url?: StringNullableFilter<"PartnerChannel"> | string | null
    createdAt?: DateTimeFilter<"PartnerChannel"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerChannel"> | Date | string
  }

  export type PartnerLocationUpsertWithWhereUniqueWithoutPartnerInput = {
    where: PartnerLocationWhereUniqueInput
    update: XOR<PartnerLocationUpdateWithoutPartnerInput, PartnerLocationUncheckedUpdateWithoutPartnerInput>
    create: XOR<PartnerLocationCreateWithoutPartnerInput, PartnerLocationUncheckedCreateWithoutPartnerInput>
  }

  export type PartnerLocationUpdateWithWhereUniqueWithoutPartnerInput = {
    where: PartnerLocationWhereUniqueInput
    data: XOR<PartnerLocationUpdateWithoutPartnerInput, PartnerLocationUncheckedUpdateWithoutPartnerInput>
  }

  export type PartnerLocationUpdateManyWithWhereWithoutPartnerInput = {
    where: PartnerLocationScalarWhereInput
    data: XOR<PartnerLocationUpdateManyMutationInput, PartnerLocationUncheckedUpdateManyWithoutPartnerInput>
  }

  export type PartnerLocationScalarWhereInput = {
    AND?: PartnerLocationScalarWhereInput | PartnerLocationScalarWhereInput[]
    OR?: PartnerLocationScalarWhereInput[]
    NOT?: PartnerLocationScalarWhereInput | PartnerLocationScalarWhereInput[]
    id?: StringFilter<"PartnerLocation"> | string
    partnerId?: StringFilter<"PartnerLocation"> | string
    name?: StringFilter<"PartnerLocation"> | string
    formattedAddress?: StringFilter<"PartnerLocation"> | string
    lat?: FloatFilter<"PartnerLocation"> | number
    lng?: FloatFilter<"PartnerLocation"> | number
    countryCode?: StringFilter<"PartnerLocation"> | string
    createdAt?: DateTimeFilter<"PartnerLocation"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerLocation"> | Date | string
  }

  export type PartnerProductCategoryUpsertWithWhereUniqueWithoutPartnerInput = {
    where: PartnerProductCategoryWhereUniqueInput
    update: XOR<PartnerProductCategoryUpdateWithoutPartnerInput, PartnerProductCategoryUncheckedUpdateWithoutPartnerInput>
    create: XOR<PartnerProductCategoryCreateWithoutPartnerInput, PartnerProductCategoryUncheckedCreateWithoutPartnerInput>
  }

  export type PartnerProductCategoryUpdateWithWhereUniqueWithoutPartnerInput = {
    where: PartnerProductCategoryWhereUniqueInput
    data: XOR<PartnerProductCategoryUpdateWithoutPartnerInput, PartnerProductCategoryUncheckedUpdateWithoutPartnerInput>
  }

  export type PartnerProductCategoryUpdateManyWithWhereWithoutPartnerInput = {
    where: PartnerProductCategoryScalarWhereInput
    data: XOR<PartnerProductCategoryUpdateManyMutationInput, PartnerProductCategoryUncheckedUpdateManyWithoutPartnerInput>
  }

  export type PartnerProductCategoryScalarWhereInput = {
    AND?: PartnerProductCategoryScalarWhereInput | PartnerProductCategoryScalarWhereInput[]
    OR?: PartnerProductCategoryScalarWhereInput[]
    NOT?: PartnerProductCategoryScalarWhereInput | PartnerProductCategoryScalarWhereInput[]
    id?: StringFilter<"PartnerProductCategory"> | string
    createdAt?: DateTimeFilter<"PartnerProductCategory"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerProductCategory"> | Date | string
    partnerId?: StringFilter<"PartnerProductCategory"> | string
    productCategoryId?: StringFilter<"PartnerProductCategory"> | string
  }

  export type PartnerRoleAssignmentUpsertWithWhereUniqueWithoutPartnerInput = {
    where: PartnerRoleAssignmentWhereUniqueInput
    update: XOR<PartnerRoleAssignmentUpdateWithoutPartnerInput, PartnerRoleAssignmentUncheckedUpdateWithoutPartnerInput>
    create: XOR<PartnerRoleAssignmentCreateWithoutPartnerInput, PartnerRoleAssignmentUncheckedCreateWithoutPartnerInput>
  }

  export type PartnerRoleAssignmentUpdateWithWhereUniqueWithoutPartnerInput = {
    where: PartnerRoleAssignmentWhereUniqueInput
    data: XOR<PartnerRoleAssignmentUpdateWithoutPartnerInput, PartnerRoleAssignmentUncheckedUpdateWithoutPartnerInput>
  }

  export type PartnerRoleAssignmentUpdateManyWithWhereWithoutPartnerInput = {
    where: PartnerRoleAssignmentScalarWhereInput
    data: XOR<PartnerRoleAssignmentUpdateManyMutationInput, PartnerRoleAssignmentUncheckedUpdateManyWithoutPartnerInput>
  }

  export type PartnerRoleAssignmentScalarWhereInput = {
    AND?: PartnerRoleAssignmentScalarWhereInput | PartnerRoleAssignmentScalarWhereInput[]
    OR?: PartnerRoleAssignmentScalarWhereInput[]
    NOT?: PartnerRoleAssignmentScalarWhereInput | PartnerRoleAssignmentScalarWhereInput[]
    id?: StringFilter<"PartnerRoleAssignment"> | string
    partnerId?: StringFilter<"PartnerRoleAssignment"> | string
    roleId?: StringFilter<"PartnerRoleAssignment"> | string
    createdAt?: DateTimeFilter<"PartnerRoleAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerRoleAssignment"> | Date | string
  }

  export type PartnerRoleAssignmentCreateWithoutRoleInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partner: PartnerCreateNestedOneWithoutRoleAssignmentsInput
  }

  export type PartnerRoleAssignmentUncheckedCreateWithoutRoleInput = {
    id: string
    partnerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerRoleAssignmentCreateOrConnectWithoutRoleInput = {
    where: PartnerRoleAssignmentWhereUniqueInput
    create: XOR<PartnerRoleAssignmentCreateWithoutRoleInput, PartnerRoleAssignmentUncheckedCreateWithoutRoleInput>
  }

  export type PartnerRoleAssignmentCreateManyRoleInputEnvelope = {
    data: PartnerRoleAssignmentCreateManyRoleInput | PartnerRoleAssignmentCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type PartnerRoleAssignmentUpsertWithWhereUniqueWithoutRoleInput = {
    where: PartnerRoleAssignmentWhereUniqueInput
    update: XOR<PartnerRoleAssignmentUpdateWithoutRoleInput, PartnerRoleAssignmentUncheckedUpdateWithoutRoleInput>
    create: XOR<PartnerRoleAssignmentCreateWithoutRoleInput, PartnerRoleAssignmentUncheckedCreateWithoutRoleInput>
  }

  export type PartnerRoleAssignmentUpdateWithWhereUniqueWithoutRoleInput = {
    where: PartnerRoleAssignmentWhereUniqueInput
    data: XOR<PartnerRoleAssignmentUpdateWithoutRoleInput, PartnerRoleAssignmentUncheckedUpdateWithoutRoleInput>
  }

  export type PartnerRoleAssignmentUpdateManyWithWhereWithoutRoleInput = {
    where: PartnerRoleAssignmentScalarWhereInput
    data: XOR<PartnerRoleAssignmentUpdateManyMutationInput, PartnerRoleAssignmentUncheckedUpdateManyWithoutRoleInput>
  }

  export type PartnerCreateWithoutRoleAssignmentsInput = {
    id: string
    name: string
    url: string
    logo: string
    tagline: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: PartnerChannelCreateNestedManyWithoutPartnerInput
    locations?: PartnerLocationCreateNestedManyWithoutPartnerInput
    productCategories?: PartnerProductCategoryCreateNestedManyWithoutPartnerInput
  }

  export type PartnerUncheckedCreateWithoutRoleAssignmentsInput = {
    id: string
    name: string
    url: string
    logo: string
    tagline: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: PartnerChannelUncheckedCreateNestedManyWithoutPartnerInput
    locations?: PartnerLocationUncheckedCreateNestedManyWithoutPartnerInput
    productCategories?: PartnerProductCategoryUncheckedCreateNestedManyWithoutPartnerInput
  }

  export type PartnerCreateOrConnectWithoutRoleAssignmentsInput = {
    where: PartnerWhereUniqueInput
    create: XOR<PartnerCreateWithoutRoleAssignmentsInput, PartnerUncheckedCreateWithoutRoleAssignmentsInput>
  }

  export type PartnerRoleCreateWithoutPartnersInput = {
    id: string
    key: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerRoleUncheckedCreateWithoutPartnersInput = {
    id: string
    key: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerRoleCreateOrConnectWithoutPartnersInput = {
    where: PartnerRoleWhereUniqueInput
    create: XOR<PartnerRoleCreateWithoutPartnersInput, PartnerRoleUncheckedCreateWithoutPartnersInput>
  }

  export type PartnerUpsertWithoutRoleAssignmentsInput = {
    update: XOR<PartnerUpdateWithoutRoleAssignmentsInput, PartnerUncheckedUpdateWithoutRoleAssignmentsInput>
    create: XOR<PartnerCreateWithoutRoleAssignmentsInput, PartnerUncheckedCreateWithoutRoleAssignmentsInput>
    where?: PartnerWhereInput
  }

  export type PartnerUpdateToOneWithWhereWithoutRoleAssignmentsInput = {
    where?: PartnerWhereInput
    data: XOR<PartnerUpdateWithoutRoleAssignmentsInput, PartnerUncheckedUpdateWithoutRoleAssignmentsInput>
  }

  export type PartnerUpdateWithoutRoleAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: PartnerChannelUpdateManyWithoutPartnerNestedInput
    locations?: PartnerLocationUpdateManyWithoutPartnerNestedInput
    productCategories?: PartnerProductCategoryUpdateManyWithoutPartnerNestedInput
  }

  export type PartnerUncheckedUpdateWithoutRoleAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: PartnerChannelUncheckedUpdateManyWithoutPartnerNestedInput
    locations?: PartnerLocationUncheckedUpdateManyWithoutPartnerNestedInput
    productCategories?: PartnerProductCategoryUncheckedUpdateManyWithoutPartnerNestedInput
  }

  export type PartnerRoleUpsertWithoutPartnersInput = {
    update: XOR<PartnerRoleUpdateWithoutPartnersInput, PartnerRoleUncheckedUpdateWithoutPartnersInput>
    create: XOR<PartnerRoleCreateWithoutPartnersInput, PartnerRoleUncheckedCreateWithoutPartnersInput>
    where?: PartnerRoleWhereInput
  }

  export type PartnerRoleUpdateToOneWithWhereWithoutPartnersInput = {
    where?: PartnerRoleWhereInput
    data: XOR<PartnerRoleUpdateWithoutPartnersInput, PartnerRoleUncheckedUpdateWithoutPartnersInput>
  }

  export type PartnerRoleUpdateWithoutPartnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerRoleUncheckedUpdateWithoutPartnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerCreateWithoutChannelsInput = {
    id: string
    name: string
    url: string
    logo: string
    tagline: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: PartnerLocationCreateNestedManyWithoutPartnerInput
    productCategories?: PartnerProductCategoryCreateNestedManyWithoutPartnerInput
    roleAssignments?: PartnerRoleAssignmentCreateNestedManyWithoutPartnerInput
  }

  export type PartnerUncheckedCreateWithoutChannelsInput = {
    id: string
    name: string
    url: string
    logo: string
    tagline: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: PartnerLocationUncheckedCreateNestedManyWithoutPartnerInput
    productCategories?: PartnerProductCategoryUncheckedCreateNestedManyWithoutPartnerInput
    roleAssignments?: PartnerRoleAssignmentUncheckedCreateNestedManyWithoutPartnerInput
  }

  export type PartnerCreateOrConnectWithoutChannelsInput = {
    where: PartnerWhereUniqueInput
    create: XOR<PartnerCreateWithoutChannelsInput, PartnerUncheckedCreateWithoutChannelsInput>
  }

  export type PartnerServiceProfileCreateWithoutChannelInput = {
    id: string
    available?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: PartnerLocationCreateNestedOneWithoutServicesInput
    serviceType: ServiceTypeCreateNestedOneWithoutServicesInput
  }

  export type PartnerServiceProfileUncheckedCreateWithoutChannelInput = {
    id: string
    locationId?: string | null
    serviceTypeId: string
    available?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerServiceProfileCreateOrConnectWithoutChannelInput = {
    where: PartnerServiceProfileWhereUniqueInput
    create: XOR<PartnerServiceProfileCreateWithoutChannelInput, PartnerServiceProfileUncheckedCreateWithoutChannelInput>
  }

  export type PartnerServiceProfileCreateManyChannelInputEnvelope = {
    data: PartnerServiceProfileCreateManyChannelInput | PartnerServiceProfileCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type PartnerUpsertWithoutChannelsInput = {
    update: XOR<PartnerUpdateWithoutChannelsInput, PartnerUncheckedUpdateWithoutChannelsInput>
    create: XOR<PartnerCreateWithoutChannelsInput, PartnerUncheckedCreateWithoutChannelsInput>
    where?: PartnerWhereInput
  }

  export type PartnerUpdateToOneWithWhereWithoutChannelsInput = {
    where?: PartnerWhereInput
    data: XOR<PartnerUpdateWithoutChannelsInput, PartnerUncheckedUpdateWithoutChannelsInput>
  }

  export type PartnerUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: PartnerLocationUpdateManyWithoutPartnerNestedInput
    productCategories?: PartnerProductCategoryUpdateManyWithoutPartnerNestedInput
    roleAssignments?: PartnerRoleAssignmentUpdateManyWithoutPartnerNestedInput
  }

  export type PartnerUncheckedUpdateWithoutChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: PartnerLocationUncheckedUpdateManyWithoutPartnerNestedInput
    productCategories?: PartnerProductCategoryUncheckedUpdateManyWithoutPartnerNestedInput
    roleAssignments?: PartnerRoleAssignmentUncheckedUpdateManyWithoutPartnerNestedInput
  }

  export type PartnerServiceProfileUpsertWithWhereUniqueWithoutChannelInput = {
    where: PartnerServiceProfileWhereUniqueInput
    update: XOR<PartnerServiceProfileUpdateWithoutChannelInput, PartnerServiceProfileUncheckedUpdateWithoutChannelInput>
    create: XOR<PartnerServiceProfileCreateWithoutChannelInput, PartnerServiceProfileUncheckedCreateWithoutChannelInput>
  }

  export type PartnerServiceProfileUpdateWithWhereUniqueWithoutChannelInput = {
    where: PartnerServiceProfileWhereUniqueInput
    data: XOR<PartnerServiceProfileUpdateWithoutChannelInput, PartnerServiceProfileUncheckedUpdateWithoutChannelInput>
  }

  export type PartnerServiceProfileUpdateManyWithWhereWithoutChannelInput = {
    where: PartnerServiceProfileScalarWhereInput
    data: XOR<PartnerServiceProfileUpdateManyMutationInput, PartnerServiceProfileUncheckedUpdateManyWithoutChannelInput>
  }

  export type PartnerServiceProfileScalarWhereInput = {
    AND?: PartnerServiceProfileScalarWhereInput | PartnerServiceProfileScalarWhereInput[]
    OR?: PartnerServiceProfileScalarWhereInput[]
    NOT?: PartnerServiceProfileScalarWhereInput | PartnerServiceProfileScalarWhereInput[]
    id?: StringFilter<"PartnerServiceProfile"> | string
    channelId?: StringNullableFilter<"PartnerServiceProfile"> | string | null
    locationId?: StringNullableFilter<"PartnerServiceProfile"> | string | null
    serviceTypeId?: StringFilter<"PartnerServiceProfile"> | string
    available?: BoolFilter<"PartnerServiceProfile"> | boolean
    notes?: StringNullableFilter<"PartnerServiceProfile"> | string | null
    createdAt?: DateTimeFilter<"PartnerServiceProfile"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerServiceProfile"> | Date | string
  }

  export type CountryCreateWithoutPartnersInput = {
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resellPlatforms?: ResellPlatformCountryCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutPartnersInput = {
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resellPlatforms?: ResellPlatformCountryUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutPartnersInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutPartnersInput, CountryUncheckedCreateWithoutPartnersInput>
  }

  export type PartnerCreateWithoutLocationsInput = {
    id: string
    name: string
    url: string
    logo: string
    tagline: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: PartnerChannelCreateNestedManyWithoutPartnerInput
    productCategories?: PartnerProductCategoryCreateNestedManyWithoutPartnerInput
    roleAssignments?: PartnerRoleAssignmentCreateNestedManyWithoutPartnerInput
  }

  export type PartnerUncheckedCreateWithoutLocationsInput = {
    id: string
    name: string
    url: string
    logo: string
    tagline: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: PartnerChannelUncheckedCreateNestedManyWithoutPartnerInput
    productCategories?: PartnerProductCategoryUncheckedCreateNestedManyWithoutPartnerInput
    roleAssignments?: PartnerRoleAssignmentUncheckedCreateNestedManyWithoutPartnerInput
  }

  export type PartnerCreateOrConnectWithoutLocationsInput = {
    where: PartnerWhereUniqueInput
    create: XOR<PartnerCreateWithoutLocationsInput, PartnerUncheckedCreateWithoutLocationsInput>
  }

  export type PartnerServiceProfileCreateWithoutLocationInput = {
    id: string
    available?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channel?: PartnerChannelCreateNestedOneWithoutServicesInput
    serviceType: ServiceTypeCreateNestedOneWithoutServicesInput
  }

  export type PartnerServiceProfileUncheckedCreateWithoutLocationInput = {
    id: string
    channelId?: string | null
    serviceTypeId: string
    available?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerServiceProfileCreateOrConnectWithoutLocationInput = {
    where: PartnerServiceProfileWhereUniqueInput
    create: XOR<PartnerServiceProfileCreateWithoutLocationInput, PartnerServiceProfileUncheckedCreateWithoutLocationInput>
  }

  export type PartnerServiceProfileCreateManyLocationInputEnvelope = {
    data: PartnerServiceProfileCreateManyLocationInput | PartnerServiceProfileCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutPartnersInput = {
    update: XOR<CountryUpdateWithoutPartnersInput, CountryUncheckedUpdateWithoutPartnersInput>
    create: XOR<CountryCreateWithoutPartnersInput, CountryUncheckedCreateWithoutPartnersInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutPartnersInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutPartnersInput, CountryUncheckedUpdateWithoutPartnersInput>
  }

  export type CountryUpdateWithoutPartnersInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resellPlatforms?: ResellPlatformCountryUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutPartnersInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resellPlatforms?: ResellPlatformCountryUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type PartnerUpsertWithoutLocationsInput = {
    update: XOR<PartnerUpdateWithoutLocationsInput, PartnerUncheckedUpdateWithoutLocationsInput>
    create: XOR<PartnerCreateWithoutLocationsInput, PartnerUncheckedCreateWithoutLocationsInput>
    where?: PartnerWhereInput
  }

  export type PartnerUpdateToOneWithWhereWithoutLocationsInput = {
    where?: PartnerWhereInput
    data: XOR<PartnerUpdateWithoutLocationsInput, PartnerUncheckedUpdateWithoutLocationsInput>
  }

  export type PartnerUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: PartnerChannelUpdateManyWithoutPartnerNestedInput
    productCategories?: PartnerProductCategoryUpdateManyWithoutPartnerNestedInput
    roleAssignments?: PartnerRoleAssignmentUpdateManyWithoutPartnerNestedInput
  }

  export type PartnerUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: PartnerChannelUncheckedUpdateManyWithoutPartnerNestedInput
    productCategories?: PartnerProductCategoryUncheckedUpdateManyWithoutPartnerNestedInput
    roleAssignments?: PartnerRoleAssignmentUncheckedUpdateManyWithoutPartnerNestedInput
  }

  export type PartnerServiceProfileUpsertWithWhereUniqueWithoutLocationInput = {
    where: PartnerServiceProfileWhereUniqueInput
    update: XOR<PartnerServiceProfileUpdateWithoutLocationInput, PartnerServiceProfileUncheckedUpdateWithoutLocationInput>
    create: XOR<PartnerServiceProfileCreateWithoutLocationInput, PartnerServiceProfileUncheckedCreateWithoutLocationInput>
  }

  export type PartnerServiceProfileUpdateWithWhereUniqueWithoutLocationInput = {
    where: PartnerServiceProfileWhereUniqueInput
    data: XOR<PartnerServiceProfileUpdateWithoutLocationInput, PartnerServiceProfileUncheckedUpdateWithoutLocationInput>
  }

  export type PartnerServiceProfileUpdateManyWithWhereWithoutLocationInput = {
    where: PartnerServiceProfileScalarWhereInput
    data: XOR<PartnerServiceProfileUpdateManyMutationInput, PartnerServiceProfileUncheckedUpdateManyWithoutLocationInput>
  }

  export type PartnerChannelCreateWithoutServicesInput = {
    id: string
    type: $Enums.ChannelType
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    partner: PartnerCreateNestedOneWithoutChannelsInput
  }

  export type PartnerChannelUncheckedCreateWithoutServicesInput = {
    id: string
    partnerId: string
    type: $Enums.ChannelType
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerChannelCreateOrConnectWithoutServicesInput = {
    where: PartnerChannelWhereUniqueInput
    create: XOR<PartnerChannelCreateWithoutServicesInput, PartnerChannelUncheckedCreateWithoutServicesInput>
  }

  export type PartnerLocationCreateWithoutServicesInput = {
    id: string
    name: string
    formattedAddress: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutPartnersInput
    partner: PartnerCreateNestedOneWithoutLocationsInput
  }

  export type PartnerLocationUncheckedCreateWithoutServicesInput = {
    id: string
    partnerId: string
    name: string
    formattedAddress: string
    lat: number
    lng: number
    countryCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerLocationCreateOrConnectWithoutServicesInput = {
    where: PartnerLocationWhereUniqueInput
    create: XOR<PartnerLocationCreateWithoutServicesInput, PartnerLocationUncheckedCreateWithoutServicesInput>
  }

  export type ServiceTypeCreateWithoutServicesInput = {
    id: string
    key: string
    label: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceTypeUncheckedCreateWithoutServicesInput = {
    id: string
    key: string
    label: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceTypeCreateOrConnectWithoutServicesInput = {
    where: ServiceTypeWhereUniqueInput
    create: XOR<ServiceTypeCreateWithoutServicesInput, ServiceTypeUncheckedCreateWithoutServicesInput>
  }

  export type PartnerChannelUpsertWithoutServicesInput = {
    update: XOR<PartnerChannelUpdateWithoutServicesInput, PartnerChannelUncheckedUpdateWithoutServicesInput>
    create: XOR<PartnerChannelCreateWithoutServicesInput, PartnerChannelUncheckedCreateWithoutServicesInput>
    where?: PartnerChannelWhereInput
  }

  export type PartnerChannelUpdateToOneWithWhereWithoutServicesInput = {
    where?: PartnerChannelWhereInput
    data: XOR<PartnerChannelUpdateWithoutServicesInput, PartnerChannelUncheckedUpdateWithoutServicesInput>
  }

  export type PartnerChannelUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partner?: PartnerUpdateOneRequiredWithoutChannelsNestedInput
  }

  export type PartnerChannelUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerLocationUpsertWithoutServicesInput = {
    update: XOR<PartnerLocationUpdateWithoutServicesInput, PartnerLocationUncheckedUpdateWithoutServicesInput>
    create: XOR<PartnerLocationCreateWithoutServicesInput, PartnerLocationUncheckedCreateWithoutServicesInput>
    where?: PartnerLocationWhereInput
  }

  export type PartnerLocationUpdateToOneWithWhereWithoutServicesInput = {
    where?: PartnerLocationWhereInput
    data: XOR<PartnerLocationUpdateWithoutServicesInput, PartnerLocationUncheckedUpdateWithoutServicesInput>
  }

  export type PartnerLocationUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formattedAddress?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutPartnersNestedInput
    partner?: PartnerUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type PartnerLocationUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formattedAddress?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    countryCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceTypeUpsertWithoutServicesInput = {
    update: XOR<ServiceTypeUpdateWithoutServicesInput, ServiceTypeUncheckedUpdateWithoutServicesInput>
    create: XOR<ServiceTypeCreateWithoutServicesInput, ServiceTypeUncheckedCreateWithoutServicesInput>
    where?: ServiceTypeWhereInput
  }

  export type ServiceTypeUpdateToOneWithWhereWithoutServicesInput = {
    where?: ServiceTypeWhereInput
    data: XOR<ServiceTypeUpdateWithoutServicesInput, ServiceTypeUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceTypeUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceTypeUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerServiceProfileCreateWithoutServiceTypeInput = {
    id: string
    available?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    channel?: PartnerChannelCreateNestedOneWithoutServicesInput
    location?: PartnerLocationCreateNestedOneWithoutServicesInput
  }

  export type PartnerServiceProfileUncheckedCreateWithoutServiceTypeInput = {
    id: string
    channelId?: string | null
    locationId?: string | null
    available?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerServiceProfileCreateOrConnectWithoutServiceTypeInput = {
    where: PartnerServiceProfileWhereUniqueInput
    create: XOR<PartnerServiceProfileCreateWithoutServiceTypeInput, PartnerServiceProfileUncheckedCreateWithoutServiceTypeInput>
  }

  export type PartnerServiceProfileCreateManyServiceTypeInputEnvelope = {
    data: PartnerServiceProfileCreateManyServiceTypeInput | PartnerServiceProfileCreateManyServiceTypeInput[]
    skipDuplicates?: boolean
  }

  export type PartnerServiceProfileUpsertWithWhereUniqueWithoutServiceTypeInput = {
    where: PartnerServiceProfileWhereUniqueInput
    update: XOR<PartnerServiceProfileUpdateWithoutServiceTypeInput, PartnerServiceProfileUncheckedUpdateWithoutServiceTypeInput>
    create: XOR<PartnerServiceProfileCreateWithoutServiceTypeInput, PartnerServiceProfileUncheckedCreateWithoutServiceTypeInput>
  }

  export type PartnerServiceProfileUpdateWithWhereUniqueWithoutServiceTypeInput = {
    where: PartnerServiceProfileWhereUniqueInput
    data: XOR<PartnerServiceProfileUpdateWithoutServiceTypeInput, PartnerServiceProfileUncheckedUpdateWithoutServiceTypeInput>
  }

  export type PartnerServiceProfileUpdateManyWithWhereWithoutServiceTypeInput = {
    where: PartnerServiceProfileScalarWhereInput
    data: XOR<PartnerServiceProfileUpdateManyMutationInput, PartnerServiceProfileUncheckedUpdateManyWithoutServiceTypeInput>
  }

  export type PartnerProductCategoryCreateWithoutProductCategoryInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partner: PartnerCreateNestedOneWithoutProductCategoriesInput
  }

  export type PartnerProductCategoryUncheckedCreateWithoutProductCategoryInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partnerId: string
  }

  export type PartnerProductCategoryCreateOrConnectWithoutProductCategoryInput = {
    where: PartnerProductCategoryWhereUniqueInput
    create: XOR<PartnerProductCategoryCreateWithoutProductCategoryInput, PartnerProductCategoryUncheckedCreateWithoutProductCategoryInput>
  }

  export type PartnerProductCategoryCreateManyProductCategoryInputEnvelope = {
    data: PartnerProductCategoryCreateManyProductCategoryInput | PartnerProductCategoryCreateManyProductCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ResellPlatformCategoryCreateWithoutProductCategoryInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resellPlatform: ResellPlatformCreateNestedOneWithoutProductCategoriesInput
  }

  export type ResellPlatformCategoryUncheckedCreateWithoutProductCategoryInput = {
    id: string
    resellPlatformId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResellPlatformCategoryCreateOrConnectWithoutProductCategoryInput = {
    where: ResellPlatformCategoryWhereUniqueInput
    create: XOR<ResellPlatformCategoryCreateWithoutProductCategoryInput, ResellPlatformCategoryUncheckedCreateWithoutProductCategoryInput>
  }

  export type ResellPlatformCategoryCreateManyProductCategoryInputEnvelope = {
    data: ResellPlatformCategoryCreateManyProductCategoryInput | ResellPlatformCategoryCreateManyProductCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PartnerProductCategoryUpsertWithWhereUniqueWithoutProductCategoryInput = {
    where: PartnerProductCategoryWhereUniqueInput
    update: XOR<PartnerProductCategoryUpdateWithoutProductCategoryInput, PartnerProductCategoryUncheckedUpdateWithoutProductCategoryInput>
    create: XOR<PartnerProductCategoryCreateWithoutProductCategoryInput, PartnerProductCategoryUncheckedCreateWithoutProductCategoryInput>
  }

  export type PartnerProductCategoryUpdateWithWhereUniqueWithoutProductCategoryInput = {
    where: PartnerProductCategoryWhereUniqueInput
    data: XOR<PartnerProductCategoryUpdateWithoutProductCategoryInput, PartnerProductCategoryUncheckedUpdateWithoutProductCategoryInput>
  }

  export type PartnerProductCategoryUpdateManyWithWhereWithoutProductCategoryInput = {
    where: PartnerProductCategoryScalarWhereInput
    data: XOR<PartnerProductCategoryUpdateManyMutationInput, PartnerProductCategoryUncheckedUpdateManyWithoutProductCategoryInput>
  }

  export type ResellPlatformCategoryUpsertWithWhereUniqueWithoutProductCategoryInput = {
    where: ResellPlatformCategoryWhereUniqueInput
    update: XOR<ResellPlatformCategoryUpdateWithoutProductCategoryInput, ResellPlatformCategoryUncheckedUpdateWithoutProductCategoryInput>
    create: XOR<ResellPlatformCategoryCreateWithoutProductCategoryInput, ResellPlatformCategoryUncheckedCreateWithoutProductCategoryInput>
  }

  export type ResellPlatformCategoryUpdateWithWhereUniqueWithoutProductCategoryInput = {
    where: ResellPlatformCategoryWhereUniqueInput
    data: XOR<ResellPlatformCategoryUpdateWithoutProductCategoryInput, ResellPlatformCategoryUncheckedUpdateWithoutProductCategoryInput>
  }

  export type ResellPlatformCategoryUpdateManyWithWhereWithoutProductCategoryInput = {
    where: ResellPlatformCategoryScalarWhereInput
    data: XOR<ResellPlatformCategoryUpdateManyMutationInput, ResellPlatformCategoryUncheckedUpdateManyWithoutProductCategoryInput>
  }

  export type ResellPlatformCategoryScalarWhereInput = {
    AND?: ResellPlatformCategoryScalarWhereInput | ResellPlatformCategoryScalarWhereInput[]
    OR?: ResellPlatformCategoryScalarWhereInput[]
    NOT?: ResellPlatformCategoryScalarWhereInput | ResellPlatformCategoryScalarWhereInput[]
    id?: StringFilter<"ResellPlatformCategory"> | string
    resellPlatformId?: StringFilter<"ResellPlatformCategory"> | string
    productCategoryId?: StringFilter<"ResellPlatformCategory"> | string
    createdAt?: DateTimeFilter<"ResellPlatformCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ResellPlatformCategory"> | Date | string
  }

  export type PartnerCreateWithoutProductCategoriesInput = {
    id: string
    name: string
    url: string
    logo: string
    tagline: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: PartnerChannelCreateNestedManyWithoutPartnerInput
    locations?: PartnerLocationCreateNestedManyWithoutPartnerInput
    roleAssignments?: PartnerRoleAssignmentCreateNestedManyWithoutPartnerInput
  }

  export type PartnerUncheckedCreateWithoutProductCategoriesInput = {
    id: string
    name: string
    url: string
    logo: string
    tagline: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: PartnerChannelUncheckedCreateNestedManyWithoutPartnerInput
    locations?: PartnerLocationUncheckedCreateNestedManyWithoutPartnerInput
    roleAssignments?: PartnerRoleAssignmentUncheckedCreateNestedManyWithoutPartnerInput
  }

  export type PartnerCreateOrConnectWithoutProductCategoriesInput = {
    where: PartnerWhereUniqueInput
    create: XOR<PartnerCreateWithoutProductCategoriesInput, PartnerUncheckedCreateWithoutProductCategoriesInput>
  }

  export type ProductCategoryCreateWithoutPartnersInput = {
    id: string
    key: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resellPlatforms?: ResellPlatformCategoryCreateNestedManyWithoutProductCategoryInput
  }

  export type ProductCategoryUncheckedCreateWithoutPartnersInput = {
    id: string
    key: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resellPlatforms?: ResellPlatformCategoryUncheckedCreateNestedManyWithoutProductCategoryInput
  }

  export type ProductCategoryCreateOrConnectWithoutPartnersInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutPartnersInput, ProductCategoryUncheckedCreateWithoutPartnersInput>
  }

  export type PartnerUpsertWithoutProductCategoriesInput = {
    update: XOR<PartnerUpdateWithoutProductCategoriesInput, PartnerUncheckedUpdateWithoutProductCategoriesInput>
    create: XOR<PartnerCreateWithoutProductCategoriesInput, PartnerUncheckedCreateWithoutProductCategoriesInput>
    where?: PartnerWhereInput
  }

  export type PartnerUpdateToOneWithWhereWithoutProductCategoriesInput = {
    where?: PartnerWhereInput
    data: XOR<PartnerUpdateWithoutProductCategoriesInput, PartnerUncheckedUpdateWithoutProductCategoriesInput>
  }

  export type PartnerUpdateWithoutProductCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: PartnerChannelUpdateManyWithoutPartnerNestedInput
    locations?: PartnerLocationUpdateManyWithoutPartnerNestedInput
    roleAssignments?: PartnerRoleAssignmentUpdateManyWithoutPartnerNestedInput
  }

  export type PartnerUncheckedUpdateWithoutProductCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: PartnerChannelUncheckedUpdateManyWithoutPartnerNestedInput
    locations?: PartnerLocationUncheckedUpdateManyWithoutPartnerNestedInput
    roleAssignments?: PartnerRoleAssignmentUncheckedUpdateManyWithoutPartnerNestedInput
  }

  export type ProductCategoryUpsertWithoutPartnersInput = {
    update: XOR<ProductCategoryUpdateWithoutPartnersInput, ProductCategoryUncheckedUpdateWithoutPartnersInput>
    create: XOR<ProductCategoryCreateWithoutPartnersInput, ProductCategoryUncheckedCreateWithoutPartnersInput>
    where?: ProductCategoryWhereInput
  }

  export type ProductCategoryUpdateToOneWithWhereWithoutPartnersInput = {
    where?: ProductCategoryWhereInput
    data: XOR<ProductCategoryUpdateWithoutPartnersInput, ProductCategoryUncheckedUpdateWithoutPartnersInput>
  }

  export type ProductCategoryUpdateWithoutPartnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resellPlatforms?: ResellPlatformCategoryUpdateManyWithoutProductCategoryNestedInput
  }

  export type ProductCategoryUncheckedUpdateWithoutPartnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resellPlatforms?: ResellPlatformCategoryUncheckedUpdateManyWithoutProductCategoryNestedInput
  }

  export type ResellPlatformCategoryCreateWithoutResellPlatformInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productCategory: ProductCategoryCreateNestedOneWithoutResellPlatformsInput
  }

  export type ResellPlatformCategoryUncheckedCreateWithoutResellPlatformInput = {
    id: string
    productCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResellPlatformCategoryCreateOrConnectWithoutResellPlatformInput = {
    where: ResellPlatformCategoryWhereUniqueInput
    create: XOR<ResellPlatformCategoryCreateWithoutResellPlatformInput, ResellPlatformCategoryUncheckedCreateWithoutResellPlatformInput>
  }

  export type ResellPlatformCategoryCreateManyResellPlatformInputEnvelope = {
    data: ResellPlatformCategoryCreateManyResellPlatformInput | ResellPlatformCategoryCreateManyResellPlatformInput[]
    skipDuplicates?: boolean
  }

  export type ResellPlatformCountryCreateWithoutResellPlatformInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutResellPlatformsInput
  }

  export type ResellPlatformCountryUncheckedCreateWithoutResellPlatformInput = {
    id: string
    countryCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResellPlatformCountryCreateOrConnectWithoutResellPlatformInput = {
    where: ResellPlatformCountryWhereUniqueInput
    create: XOR<ResellPlatformCountryCreateWithoutResellPlatformInput, ResellPlatformCountryUncheckedCreateWithoutResellPlatformInput>
  }

  export type ResellPlatformCountryCreateManyResellPlatformInputEnvelope = {
    data: ResellPlatformCountryCreateManyResellPlatformInput | ResellPlatformCountryCreateManyResellPlatformInput[]
    skipDuplicates?: boolean
  }

  export type ResellPlatformCategoryUpsertWithWhereUniqueWithoutResellPlatformInput = {
    where: ResellPlatformCategoryWhereUniqueInput
    update: XOR<ResellPlatformCategoryUpdateWithoutResellPlatformInput, ResellPlatformCategoryUncheckedUpdateWithoutResellPlatformInput>
    create: XOR<ResellPlatformCategoryCreateWithoutResellPlatformInput, ResellPlatformCategoryUncheckedCreateWithoutResellPlatformInput>
  }

  export type ResellPlatformCategoryUpdateWithWhereUniqueWithoutResellPlatformInput = {
    where: ResellPlatformCategoryWhereUniqueInput
    data: XOR<ResellPlatformCategoryUpdateWithoutResellPlatformInput, ResellPlatformCategoryUncheckedUpdateWithoutResellPlatformInput>
  }

  export type ResellPlatformCategoryUpdateManyWithWhereWithoutResellPlatformInput = {
    where: ResellPlatformCategoryScalarWhereInput
    data: XOR<ResellPlatformCategoryUpdateManyMutationInput, ResellPlatformCategoryUncheckedUpdateManyWithoutResellPlatformInput>
  }

  export type ResellPlatformCountryUpsertWithWhereUniqueWithoutResellPlatformInput = {
    where: ResellPlatformCountryWhereUniqueInput
    update: XOR<ResellPlatformCountryUpdateWithoutResellPlatformInput, ResellPlatformCountryUncheckedUpdateWithoutResellPlatformInput>
    create: XOR<ResellPlatformCountryCreateWithoutResellPlatformInput, ResellPlatformCountryUncheckedCreateWithoutResellPlatformInput>
  }

  export type ResellPlatformCountryUpdateWithWhereUniqueWithoutResellPlatformInput = {
    where: ResellPlatformCountryWhereUniqueInput
    data: XOR<ResellPlatformCountryUpdateWithoutResellPlatformInput, ResellPlatformCountryUncheckedUpdateWithoutResellPlatformInput>
  }

  export type ResellPlatformCountryUpdateManyWithWhereWithoutResellPlatformInput = {
    where: ResellPlatformCountryScalarWhereInput
    data: XOR<ResellPlatformCountryUpdateManyMutationInput, ResellPlatformCountryUncheckedUpdateManyWithoutResellPlatformInput>
  }

  export type ResellPlatformCountryScalarWhereInput = {
    AND?: ResellPlatformCountryScalarWhereInput | ResellPlatformCountryScalarWhereInput[]
    OR?: ResellPlatformCountryScalarWhereInput[]
    NOT?: ResellPlatformCountryScalarWhereInput | ResellPlatformCountryScalarWhereInput[]
    id?: StringFilter<"ResellPlatformCountry"> | string
    countryCode?: StringFilter<"ResellPlatformCountry"> | string
    resellPlatformId?: StringFilter<"ResellPlatformCountry"> | string
    createdAt?: DateTimeFilter<"ResellPlatformCountry"> | Date | string
    updatedAt?: DateTimeFilter<"ResellPlatformCountry"> | Date | string
  }

  export type ProductCategoryCreateWithoutResellPlatformsInput = {
    id: string
    key: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partners?: PartnerProductCategoryCreateNestedManyWithoutProductCategoryInput
  }

  export type ProductCategoryUncheckedCreateWithoutResellPlatformsInput = {
    id: string
    key: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partners?: PartnerProductCategoryUncheckedCreateNestedManyWithoutProductCategoryInput
  }

  export type ProductCategoryCreateOrConnectWithoutResellPlatformsInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutResellPlatformsInput, ProductCategoryUncheckedCreateWithoutResellPlatformsInput>
  }

  export type ResellPlatformCreateWithoutProductCategoriesInput = {
    id: string
    name: string
    url: string
    logo?: string | null
    tagline: string
    description: string
    platformType: $Enums.ResellPlatformType
    createdAt?: Date | string
    updatedAt?: Date | string
    altTagline?: string | null
    canSell?: boolean
    countries?: ResellPlatformCountryCreateNestedManyWithoutResellPlatformInput
  }

  export type ResellPlatformUncheckedCreateWithoutProductCategoriesInput = {
    id: string
    name: string
    url: string
    logo?: string | null
    tagline: string
    description: string
    platformType: $Enums.ResellPlatformType
    createdAt?: Date | string
    updatedAt?: Date | string
    altTagline?: string | null
    canSell?: boolean
    countries?: ResellPlatformCountryUncheckedCreateNestedManyWithoutResellPlatformInput
  }

  export type ResellPlatformCreateOrConnectWithoutProductCategoriesInput = {
    where: ResellPlatformWhereUniqueInput
    create: XOR<ResellPlatformCreateWithoutProductCategoriesInput, ResellPlatformUncheckedCreateWithoutProductCategoriesInput>
  }

  export type ProductCategoryUpsertWithoutResellPlatformsInput = {
    update: XOR<ProductCategoryUpdateWithoutResellPlatformsInput, ProductCategoryUncheckedUpdateWithoutResellPlatformsInput>
    create: XOR<ProductCategoryCreateWithoutResellPlatformsInput, ProductCategoryUncheckedCreateWithoutResellPlatformsInput>
    where?: ProductCategoryWhereInput
  }

  export type ProductCategoryUpdateToOneWithWhereWithoutResellPlatformsInput = {
    where?: ProductCategoryWhereInput
    data: XOR<ProductCategoryUpdateWithoutResellPlatformsInput, ProductCategoryUncheckedUpdateWithoutResellPlatformsInput>
  }

  export type ProductCategoryUpdateWithoutResellPlatformsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerProductCategoryUpdateManyWithoutProductCategoryNestedInput
  }

  export type ProductCategoryUncheckedUpdateWithoutResellPlatformsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerProductCategoryUncheckedUpdateManyWithoutProductCategoryNestedInput
  }

  export type ResellPlatformUpsertWithoutProductCategoriesInput = {
    update: XOR<ResellPlatformUpdateWithoutProductCategoriesInput, ResellPlatformUncheckedUpdateWithoutProductCategoriesInput>
    create: XOR<ResellPlatformCreateWithoutProductCategoriesInput, ResellPlatformUncheckedCreateWithoutProductCategoriesInput>
    where?: ResellPlatformWhereInput
  }

  export type ResellPlatformUpdateToOneWithWhereWithoutProductCategoriesInput = {
    where?: ResellPlatformWhereInput
    data: XOR<ResellPlatformUpdateWithoutProductCategoriesInput, ResellPlatformUncheckedUpdateWithoutProductCategoriesInput>
  }

  export type ResellPlatformUpdateWithoutProductCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    platformType?: EnumResellPlatformTypeFieldUpdateOperationsInput | $Enums.ResellPlatformType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    altTagline?: NullableStringFieldUpdateOperationsInput | string | null
    canSell?: BoolFieldUpdateOperationsInput | boolean
    countries?: ResellPlatformCountryUpdateManyWithoutResellPlatformNestedInput
  }

  export type ResellPlatformUncheckedUpdateWithoutProductCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    platformType?: EnumResellPlatformTypeFieldUpdateOperationsInput | $Enums.ResellPlatformType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    altTagline?: NullableStringFieldUpdateOperationsInput | string | null
    canSell?: BoolFieldUpdateOperationsInput | boolean
    countries?: ResellPlatformCountryUncheckedUpdateManyWithoutResellPlatformNestedInput
  }

  export type CountryCreateWithoutResellPlatformsInput = {
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partners?: PartnerLocationCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutResellPlatformsInput = {
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partners?: PartnerLocationUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutResellPlatformsInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutResellPlatformsInput, CountryUncheckedCreateWithoutResellPlatformsInput>
  }

  export type ResellPlatformCreateWithoutCountriesInput = {
    id: string
    name: string
    url: string
    logo?: string | null
    tagline: string
    description: string
    platformType: $Enums.ResellPlatformType
    createdAt?: Date | string
    updatedAt?: Date | string
    altTagline?: string | null
    canSell?: boolean
    productCategories?: ResellPlatformCategoryCreateNestedManyWithoutResellPlatformInput
  }

  export type ResellPlatformUncheckedCreateWithoutCountriesInput = {
    id: string
    name: string
    url: string
    logo?: string | null
    tagline: string
    description: string
    platformType: $Enums.ResellPlatformType
    createdAt?: Date | string
    updatedAt?: Date | string
    altTagline?: string | null
    canSell?: boolean
    productCategories?: ResellPlatformCategoryUncheckedCreateNestedManyWithoutResellPlatformInput
  }

  export type ResellPlatformCreateOrConnectWithoutCountriesInput = {
    where: ResellPlatformWhereUniqueInput
    create: XOR<ResellPlatformCreateWithoutCountriesInput, ResellPlatformUncheckedCreateWithoutCountriesInput>
  }

  export type CountryUpsertWithoutResellPlatformsInput = {
    update: XOR<CountryUpdateWithoutResellPlatformsInput, CountryUncheckedUpdateWithoutResellPlatformsInput>
    create: XOR<CountryCreateWithoutResellPlatformsInput, CountryUncheckedCreateWithoutResellPlatformsInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutResellPlatformsInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutResellPlatformsInput, CountryUncheckedUpdateWithoutResellPlatformsInput>
  }

  export type CountryUpdateWithoutResellPlatformsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerLocationUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutResellPlatformsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerLocationUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type ResellPlatformUpsertWithoutCountriesInput = {
    update: XOR<ResellPlatformUpdateWithoutCountriesInput, ResellPlatformUncheckedUpdateWithoutCountriesInput>
    create: XOR<ResellPlatformCreateWithoutCountriesInput, ResellPlatformUncheckedCreateWithoutCountriesInput>
    where?: ResellPlatformWhereInput
  }

  export type ResellPlatformUpdateToOneWithWhereWithoutCountriesInput = {
    where?: ResellPlatformWhereInput
    data: XOR<ResellPlatformUpdateWithoutCountriesInput, ResellPlatformUncheckedUpdateWithoutCountriesInput>
  }

  export type ResellPlatformUpdateWithoutCountriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    platformType?: EnumResellPlatformTypeFieldUpdateOperationsInput | $Enums.ResellPlatformType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    altTagline?: NullableStringFieldUpdateOperationsInput | string | null
    canSell?: BoolFieldUpdateOperationsInput | boolean
    productCategories?: ResellPlatformCategoryUpdateManyWithoutResellPlatformNestedInput
  }

  export type ResellPlatformUncheckedUpdateWithoutCountriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    platformType?: EnumResellPlatformTypeFieldUpdateOperationsInput | $Enums.ResellPlatformType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    altTagline?: NullableStringFieldUpdateOperationsInput | string | null
    canSell?: BoolFieldUpdateOperationsInput | boolean
    productCategories?: ResellPlatformCategoryUncheckedUpdateManyWithoutResellPlatformNestedInput
  }

  export type PartnerLocationCreateWithoutCountryInput = {
    id: string
    name: string
    formattedAddress: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    partner: PartnerCreateNestedOneWithoutLocationsInput
    services?: PartnerServiceProfileCreateNestedManyWithoutLocationInput
  }

  export type PartnerLocationUncheckedCreateWithoutCountryInput = {
    id: string
    partnerId: string
    name: string
    formattedAddress: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: PartnerServiceProfileUncheckedCreateNestedManyWithoutLocationInput
  }

  export type PartnerLocationCreateOrConnectWithoutCountryInput = {
    where: PartnerLocationWhereUniqueInput
    create: XOR<PartnerLocationCreateWithoutCountryInput, PartnerLocationUncheckedCreateWithoutCountryInput>
  }

  export type PartnerLocationCreateManyCountryInputEnvelope = {
    data: PartnerLocationCreateManyCountryInput | PartnerLocationCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type ResellPlatformCountryCreateWithoutCountryInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resellPlatform: ResellPlatformCreateNestedOneWithoutCountriesInput
  }

  export type ResellPlatformCountryUncheckedCreateWithoutCountryInput = {
    id: string
    resellPlatformId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResellPlatformCountryCreateOrConnectWithoutCountryInput = {
    where: ResellPlatformCountryWhereUniqueInput
    create: XOR<ResellPlatformCountryCreateWithoutCountryInput, ResellPlatformCountryUncheckedCreateWithoutCountryInput>
  }

  export type ResellPlatformCountryCreateManyCountryInputEnvelope = {
    data: ResellPlatformCountryCreateManyCountryInput | ResellPlatformCountryCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type PartnerLocationUpsertWithWhereUniqueWithoutCountryInput = {
    where: PartnerLocationWhereUniqueInput
    update: XOR<PartnerLocationUpdateWithoutCountryInput, PartnerLocationUncheckedUpdateWithoutCountryInput>
    create: XOR<PartnerLocationCreateWithoutCountryInput, PartnerLocationUncheckedCreateWithoutCountryInput>
  }

  export type PartnerLocationUpdateWithWhereUniqueWithoutCountryInput = {
    where: PartnerLocationWhereUniqueInput
    data: XOR<PartnerLocationUpdateWithoutCountryInput, PartnerLocationUncheckedUpdateWithoutCountryInput>
  }

  export type PartnerLocationUpdateManyWithWhereWithoutCountryInput = {
    where: PartnerLocationScalarWhereInput
    data: XOR<PartnerLocationUpdateManyMutationInput, PartnerLocationUncheckedUpdateManyWithoutCountryInput>
  }

  export type ResellPlatformCountryUpsertWithWhereUniqueWithoutCountryInput = {
    where: ResellPlatformCountryWhereUniqueInput
    update: XOR<ResellPlatformCountryUpdateWithoutCountryInput, ResellPlatformCountryUncheckedUpdateWithoutCountryInput>
    create: XOR<ResellPlatformCountryCreateWithoutCountryInput, ResellPlatformCountryUncheckedCreateWithoutCountryInput>
  }

  export type ResellPlatformCountryUpdateWithWhereUniqueWithoutCountryInput = {
    where: ResellPlatformCountryWhereUniqueInput
    data: XOR<ResellPlatformCountryUpdateWithoutCountryInput, ResellPlatformCountryUncheckedUpdateWithoutCountryInput>
  }

  export type ResellPlatformCountryUpdateManyWithWhereWithoutCountryInput = {
    where: ResellPlatformCountryScalarWhereInput
    data: XOR<ResellPlatformCountryUpdateManyMutationInput, ResellPlatformCountryUncheckedUpdateManyWithoutCountryInput>
  }

  export type PartnerChannelCreateManyPartnerInput = {
    id: string
    type: $Enums.ChannelType
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerLocationCreateManyPartnerInput = {
    id: string
    name: string
    formattedAddress: string
    lat: number
    lng: number
    countryCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerProductCategoryCreateManyPartnerInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productCategoryId: string
  }

  export type PartnerRoleAssignmentCreateManyPartnerInput = {
    id: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerChannelUpdateWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: PartnerServiceProfileUpdateManyWithoutChannelNestedInput
  }

  export type PartnerChannelUncheckedUpdateWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: PartnerServiceProfileUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type PartnerChannelUncheckedUpdateManyWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerLocationUpdateWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formattedAddress?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutPartnersNestedInput
    services?: PartnerServiceProfileUpdateManyWithoutLocationNestedInput
  }

  export type PartnerLocationUncheckedUpdateWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formattedAddress?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    countryCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: PartnerServiceProfileUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type PartnerLocationUncheckedUpdateManyWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formattedAddress?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    countryCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerProductCategoryUpdateWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productCategory?: ProductCategoryUpdateOneRequiredWithoutPartnersNestedInput
  }

  export type PartnerProductCategoryUncheckedUpdateWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productCategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type PartnerProductCategoryUncheckedUpdateManyWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productCategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type PartnerRoleAssignmentUpdateWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: PartnerRoleUpdateOneRequiredWithoutPartnersNestedInput
  }

  export type PartnerRoleAssignmentUncheckedUpdateWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerRoleAssignmentUncheckedUpdateManyWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerRoleAssignmentCreateManyRoleInput = {
    id: string
    partnerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerRoleAssignmentUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partner?: PartnerUpdateOneRequiredWithoutRoleAssignmentsNestedInput
  }

  export type PartnerRoleAssignmentUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerRoleAssignmentUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerServiceProfileCreateManyChannelInput = {
    id: string
    locationId?: string | null
    serviceTypeId: string
    available?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerServiceProfileUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: PartnerLocationUpdateOneWithoutServicesNestedInput
    serviceType?: ServiceTypeUpdateOneRequiredWithoutServicesNestedInput
  }

  export type PartnerServiceProfileUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceTypeId?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerServiceProfileUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceTypeId?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerServiceProfileCreateManyLocationInput = {
    id: string
    channelId?: string | null
    serviceTypeId: string
    available?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerServiceProfileUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: PartnerChannelUpdateOneWithoutServicesNestedInput
    serviceType?: ServiceTypeUpdateOneRequiredWithoutServicesNestedInput
  }

  export type PartnerServiceProfileUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceTypeId?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerServiceProfileUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceTypeId?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerServiceProfileCreateManyServiceTypeInput = {
    id: string
    channelId?: string | null
    locationId?: string | null
    available?: boolean
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerServiceProfileUpdateWithoutServiceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    available?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: PartnerChannelUpdateOneWithoutServicesNestedInput
    location?: PartnerLocationUpdateOneWithoutServicesNestedInput
  }

  export type PartnerServiceProfileUncheckedUpdateWithoutServiceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerServiceProfileUncheckedUpdateManyWithoutServiceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    available?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerProductCategoryCreateManyProductCategoryInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    partnerId: string
  }

  export type ResellPlatformCategoryCreateManyProductCategoryInput = {
    id: string
    resellPlatformId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerProductCategoryUpdateWithoutProductCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partner?: PartnerUpdateOneRequiredWithoutProductCategoriesNestedInput
  }

  export type PartnerProductCategoryUncheckedUpdateWithoutProductCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partnerId?: StringFieldUpdateOperationsInput | string
  }

  export type PartnerProductCategoryUncheckedUpdateManyWithoutProductCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partnerId?: StringFieldUpdateOperationsInput | string
  }

  export type ResellPlatformCategoryUpdateWithoutProductCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resellPlatform?: ResellPlatformUpdateOneRequiredWithoutProductCategoriesNestedInput
  }

  export type ResellPlatformCategoryUncheckedUpdateWithoutProductCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    resellPlatformId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellPlatformCategoryUncheckedUpdateManyWithoutProductCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    resellPlatformId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellPlatformCategoryCreateManyResellPlatformInput = {
    id: string
    productCategoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResellPlatformCountryCreateManyResellPlatformInput = {
    id: string
    countryCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResellPlatformCategoryUpdateWithoutResellPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productCategory?: ProductCategoryUpdateOneRequiredWithoutResellPlatformsNestedInput
  }

  export type ResellPlatformCategoryUncheckedUpdateWithoutResellPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    productCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellPlatformCategoryUncheckedUpdateManyWithoutResellPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    productCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellPlatformCountryUpdateWithoutResellPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutResellPlatformsNestedInput
  }

  export type ResellPlatformCountryUncheckedUpdateWithoutResellPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellPlatformCountryUncheckedUpdateManyWithoutResellPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerLocationCreateManyCountryInput = {
    id: string
    partnerId: string
    name: string
    formattedAddress: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResellPlatformCountryCreateManyCountryInput = {
    id: string
    resellPlatformId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerLocationUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formattedAddress?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partner?: PartnerUpdateOneRequiredWithoutLocationsNestedInput
    services?: PartnerServiceProfileUpdateManyWithoutLocationNestedInput
  }

  export type PartnerLocationUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formattedAddress?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: PartnerServiceProfileUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type PartnerLocationUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    formattedAddress?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellPlatformCountryUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resellPlatform?: ResellPlatformUpdateOneRequiredWithoutCountriesNestedInput
  }

  export type ResellPlatformCountryUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    resellPlatformId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResellPlatformCountryUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    resellPlatformId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}