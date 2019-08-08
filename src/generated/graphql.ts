import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
};

export type Admin = {
  __typename?: "Admin";
  id: Scalars["ID"];
  email: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  privilege: Privilege;
  created: Scalars["DateTime"];
  updated: Scalars["DateTime"];
  deleted?: Maybe<Scalars["DateTime"]>;
};

export type AuthPayload = {
  __typename?: "AuthPayload";
  token: Scalars["String"];
  user: User;
};

export enum Currency {
  Usd = "USD",
  Krw = "KRW"
}

export type CustomService = {
  __typename?: "CustomService";
  id: Scalars["ID"];
  name: Scalars["String"];
  price: Scalars["Float"];
  currency?: Maybe<Currency>;
  periodUnit?: Maybe<Scalars["Int"]>;
  periodType?: Maybe<PeriodType>;
  startBillingDate?: Maybe<Scalars["Date"]>;
  endBillingDate?: Maybe<Scalars["Date"]>;
  alertDate?: Maybe<Scalars["Date"]>;
  memo?: Maybe<Scalars["String"]>;
  subOption?: Maybe<SubOption>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
};

export enum Gender {
  Male = "MALE",
  Female = "FEMALE"
}

export type Mutation = {
  __typename?: "Mutation";
  signInAdmin?: Maybe<Admin>;
  signUp: AuthPayload;
  signInGoogle?: Maybe<AuthPayload>;
  signInFacebook?: Maybe<AuthPayload>;
  addPushToken?: Maybe<Notification>;
  createService: Service;
  updateService: Service;
  deleteService: Service;
  createProduct: Product;
  updateProduct: Product;
  deleteProduct: Product;
};

export type MutationSignInAdminArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationSignUpArgs = {
  user: UserCreateInput;
};

export type MutationSignInGoogleArgs = {
  socialUser: SocialUserCreateInput;
};

export type MutationSignInFacebookArgs = {
  socialUser: SocialUserCreateInput;
};

export type MutationAddPushTokenArgs = {
  notification: NotificationCreateInput;
};

export type MutationCreateServiceArgs = {
  service: ServiceCreateInput;
  subOption?: Maybe<SubOptionCreateInput>;
};

export type MutationUpdateServiceArgs = {
  id: Scalars["ID"];
  service: ServiceCreateInput;
  subOption?: Maybe<SubOptionCreateInput>;
};

export type MutationDeleteServiceArgs = {
  id: Scalars["ID"];
};

export type MutationCreateProductArgs = {
  product: ProductCreateInput;
  subOption?: Maybe<SubOptionCreateInput>;
};

export type MutationUpdateProductArgs = {
  id: Scalars["ID"];
  product: ProductCreateInput;
  subOption?: Maybe<SubOptionCreateInput>;
};

export type MutationDeleteProductArgs = {
  id: Scalars["ID"];
};

export type Notification = {
  __typename?: "Notification";
  id: Scalars["ID"];
  token: Scalars["String"];
  device?: Maybe<Scalars["String"]>;
  os?: Maybe<Scalars["String"]>;
  created: Scalars["DateTime"];
  updated: Scalars["DateTime"];
};

export type NotificationCreateInput = {
  userId: Scalars["ID"];
  token: Scalars["String"];
  device?: Maybe<Scalars["String"]>;
  os?: Maybe<Scalars["String"]>;
};

export enum PeriodType {
  Year = "YEAR",
  Month = "MONTH",
  Day = "DAY"
}

export enum Privilege {
  Admin = "ADMIN",
  Member = "MEMBER",
  Viewer = "VIEWER"
}

export type Product = {
  __typename?: "Product";
  id: Scalars["ID"];
  name: Scalars["String"];
  category?: Maybe<Scalars["String"]>;
  price: Scalars["Float"];
  currency?: Maybe<Currency>;
  periodUnit?: Maybe<Scalars["Int"]>;
  periodType?: Maybe<PeriodType>;
  directLink?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  userProducts?: Maybe<Array<Maybe<UserProduct>>>;
  subOption?: Maybe<SubOption>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
};

export type ProductCreateInput = {
  serviceId: Scalars["ID"];
  name: Scalars["String"];
  category?: Maybe<Scalars["String"]>;
  price: Scalars["Float"];
  currency?: Maybe<Currency>;
  periodUnit?: Maybe<Scalars["Int"]>;
  periodType?: Maybe<PeriodType>;
  directLink?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  subOptionId?: Maybe<Scalars["ID"]>;
};

export type Query = {
  __typename?: "Query";
  user: User;
  users: Array<User>;
  service: Service;
  services: Array<Service>;
  product: Product;
  products: Array<Product>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type QueryServiceArgs = {
  id: Scalars["ID"];
};

export type Review = {
  __typename?: "Review";
  id: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  rating: Scalars["Float"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type Service = {
  __typename?: "Service";
  id: Scalars["ID"];
  name: Scalars["String"];
  category?: Maybe<Scalars["String"]>;
  thumbnail: Scalars["String"];
  image: Scalars["String"];
  homepage?: Maybe<Scalars["String"]>;
  iosAppStoreUrl?: Maybe<Scalars["String"]>;
  androidPlayStoreUrl?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  products?: Maybe<Array<Maybe<Product>>>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  subOption?: Maybe<SubOption>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
};

export type ServiceCreateInput = {
  name: Scalars["String"];
  category?: Maybe<Scalars["String"]>;
  thumbnail: Scalars["String"];
  image: Scalars["String"];
  homepage?: Maybe<Scalars["String"]>;
  iosAppStoreUrl?: Maybe<Scalars["String"]>;
  androidPlayStoreUrl?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
};

export type SocialUserCreateInput = {
  social: Scalars["String"];
  email?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  photo?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  nickname?: Maybe<Scalars["String"]>;
  birthday?: Maybe<Scalars["Date"]>;
  gender?: Maybe<Gender>;
  phone?: Maybe<Scalars["String"]>;
};

export type SubOption = {
  __typename?: "SubOption";
  id: Scalars["ID"];
  pricePlan?: Maybe<Scalars["Float"]>;
  pricePlanCurreny?: Maybe<Scalars["String"]>;
  promotion?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type SubOptionCreateInput = {
  pricePlan?: Maybe<Scalars["Float"]>;
  pricePlanCurreny?: Maybe<Scalars["String"]>;
  promotion?: Maybe<Scalars["String"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  userAdded?: Maybe<User>;
  serviceAdded?: Maybe<Service>;
  serviceUpdated?: Maybe<Service>;
  serviceDestroyed?: Maybe<Service>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  nickname?: Maybe<Scalars["String"]>;
  photo?: Maybe<Scalars["String"]>;
  birthday?: Maybe<Scalars["Date"]>;
  gender?: Maybe<Gender>;
  phone?: Maybe<Scalars["String"]>;
  social?: Maybe<Scalars["String"]>;
  verified?: Maybe<Scalars["Boolean"]>;
  notifications?: Maybe<Array<Maybe<Notification>>>;
  customServices?: Maybe<Array<Maybe<CustomService>>>;
  userProducts?: Maybe<Array<Maybe<UserProduct>>>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  created: Scalars["DateTime"];
  updated: Scalars["DateTime"];
  deleted?: Maybe<Scalars["DateTime"]>;
};

export type UserCreateInput = {
  email?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  nickname?: Maybe<Scalars["String"]>;
  birthday?: Maybe<Scalars["Date"]>;
  gender?: Maybe<Gender>;
  phone?: Maybe<Scalars["String"]>;
};

export type UserProduct = {
  __typename?: "UserProduct";
  id: Scalars["ID"];
  startBillingDate?: Maybe<Scalars["Date"]>;
  endBillingDate?: Maybe<Scalars["Date"]>;
  alertDate?: Maybe<Scalars["Date"]>;
  memo?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  User: ResolverTypeWrapper<User>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Date: ResolverTypeWrapper<Scalars["Date"]>;
  Gender: Gender;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Notification: ResolverTypeWrapper<Notification>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  CustomService: ResolverTypeWrapper<CustomService>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  Currency: Currency;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  PeriodType: PeriodType;
  SubOption: ResolverTypeWrapper<SubOption>;
  UserProduct: ResolverTypeWrapper<UserProduct>;
  Review: ResolverTypeWrapper<Review>;
  Service: ResolverTypeWrapper<Service>;
  Product: ResolverTypeWrapper<Product>;
  Mutation: ResolverTypeWrapper<{}>;
  Admin: ResolverTypeWrapper<Admin>;
  Privilege: Privilege;
  UserCreateInput: UserCreateInput;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  SocialUserCreateInput: SocialUserCreateInput;
  NotificationCreateInput: NotificationCreateInput;
  ServiceCreateInput: ServiceCreateInput;
  SubOptionCreateInput: SubOptionCreateInput;
  ProductCreateInput: ProductCreateInput;
  Subscription: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  ID: Scalars["ID"];
  User: User;
  String: Scalars["String"];
  Date: Scalars["Date"];
  Gender: Gender;
  Boolean: Scalars["Boolean"];
  Notification: Notification;
  DateTime: Scalars["DateTime"];
  CustomService: CustomService;
  Float: Scalars["Float"];
  Currency: Currency;
  Int: Scalars["Int"];
  PeriodType: PeriodType;
  SubOption: SubOption;
  UserProduct: UserProduct;
  Review: Review;
  Service: Service;
  Product: Product;
  Mutation: {};
  Admin: Admin;
  Privilege: Privilege;
  UserCreateInput: UserCreateInput;
  AuthPayload: AuthPayload;
  SocialUserCreateInput: SocialUserCreateInput;
  NotificationCreateInput: NotificationCreateInput;
  ServiceCreateInput: ServiceCreateInput;
  SubOptionCreateInput: SubOptionCreateInput;
  ProductCreateInput: ProductCreateInput;
  Subscription: {};
};

export type AdminResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Admin"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  privilege?: Resolver<ResolversTypes["Privilege"], ParentType, ContextType>;
  created?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  deleted?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
};

export type AuthPayloadResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["AuthPayload"]
> = {
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
};

export type CustomServiceResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["CustomService"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  price?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  currency?: Resolver<
    Maybe<ResolversTypes["Currency"]>,
    ParentType,
    ContextType
  >;
  periodUnit?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  periodType?: Resolver<
    Maybe<ResolversTypes["PeriodType"]>,
    ParentType,
    ContextType
  >;
  startBillingDate?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  endBillingDate?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  alertDate?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  subOption?: Resolver<
    Maybe<ResolversTypes["SubOption"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  deletedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
};

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type MutationResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Mutation"]
> = {
  signInAdmin?: Resolver<
    Maybe<ResolversTypes["Admin"]>,
    ParentType,
    ContextType,
    MutationSignInAdminArgs
  >;
  signUp?: Resolver<
    ResolversTypes["AuthPayload"],
    ParentType,
    ContextType,
    MutationSignUpArgs
  >;
  signInGoogle?: Resolver<
    Maybe<ResolversTypes["AuthPayload"]>,
    ParentType,
    ContextType,
    MutationSignInGoogleArgs
  >;
  signInFacebook?: Resolver<
    Maybe<ResolversTypes["AuthPayload"]>,
    ParentType,
    ContextType,
    MutationSignInFacebookArgs
  >;
  addPushToken?: Resolver<
    Maybe<ResolversTypes["Notification"]>,
    ParentType,
    ContextType,
    MutationAddPushTokenArgs
  >;
  createService?: Resolver<
    ResolversTypes["Service"],
    ParentType,
    ContextType,
    MutationCreateServiceArgs
  >;
  updateService?: Resolver<
    ResolversTypes["Service"],
    ParentType,
    ContextType,
    MutationUpdateServiceArgs
  >;
  deleteService?: Resolver<
    ResolversTypes["Service"],
    ParentType,
    ContextType,
    MutationDeleteServiceArgs
  >;
  createProduct?: Resolver<
    ResolversTypes["Product"],
    ParentType,
    ContextType,
    MutationCreateProductArgs
  >;
  updateProduct?: Resolver<
    ResolversTypes["Product"],
    ParentType,
    ContextType,
    MutationUpdateProductArgs
  >;
  deleteProduct?: Resolver<
    ResolversTypes["Product"],
    ParentType,
    ContextType,
    MutationDeleteProductArgs
  >;
};

export type NotificationResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Notification"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  device?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  os?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
};

export type ProductResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Product"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  currency?: Resolver<
    Maybe<ResolversTypes["Currency"]>,
    ParentType,
    ContextType
  >;
  periodUnit?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  periodType?: Resolver<
    Maybe<ResolversTypes["PeriodType"]>,
    ParentType,
    ContextType
  >;
  directLink?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  memo?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  userProducts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserProduct"]>>>,
    ParentType,
    ContextType
  >;
  subOption?: Resolver<
    Maybe<ResolversTypes["SubOption"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  deletedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Query"]
> = {
  user?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    QueryUserArgs
  >;
  users?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  service?: Resolver<
    ResolversTypes["Service"],
    ParentType,
    ContextType,
    QueryServiceArgs
  >;
  services?: Resolver<
    Array<ResolversTypes["Service"]>,
    ParentType,
    ContextType
  >;
  product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
  products?: Resolver<
    Array<ResolversTypes["Product"]>,
    ParentType,
    ContextType
  >;
};

export type ReviewResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Review"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  rating?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
};

export type ServiceResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Service"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  homepage?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  iosAppStoreUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  androidPlayStoreUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  memo?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  products?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
    ParentType,
    ContextType
  >;
  reviews?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Review"]>>>,
    ParentType,
    ContextType
  >;
  subOption?: Resolver<
    Maybe<ResolversTypes["SubOption"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  deletedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
};

export type SubOptionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["SubOption"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  pricePlan?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  pricePlanCurreny?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  promotion?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["Subscription"]
> = {
  userAdded?: SubscriptionResolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  serviceAdded?: SubscriptionResolver<
    Maybe<ResolversTypes["Service"]>,
    ParentType,
    ContextType
  >;
  serviceUpdated?: SubscriptionResolver<
    Maybe<ResolversTypes["Service"]>,
    ParentType,
    ContextType
  >;
  serviceDestroyed?: SubscriptionResolver<
    Maybe<ResolversTypes["Service"]>,
    ParentType,
    ContextType
  >;
};

export type UserResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["User"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  nickname?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  birthday?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes["Gender"]>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  social?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  verified?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  notifications?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Notification"]>>>,
    ParentType,
    ContextType
  >;
  customServices?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["CustomService"]>>>,
    ParentType,
    ContextType
  >;
  userProducts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserProduct"]>>>,
    ParentType,
    ContextType
  >;
  reviews?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Review"]>>>,
    ParentType,
    ContextType
  >;
  created?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  deleted?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
};

export type UserProductResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes["UserProduct"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  startBillingDate?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  endBillingDate?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  alertDate?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  deletedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = any> = {
  Admin?: AdminResolvers<ContextType>;
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  CustomService?: CustomServiceResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  SubOption?: SubOptionResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserProduct?: UserProductResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
