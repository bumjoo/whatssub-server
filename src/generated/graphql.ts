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
  signUp: AuthPayload;
  signInGoogle?: Maybe<AuthPayload>;
  signInFacebook?: Maybe<AuthPayload>;
  addPushToken?: Maybe<Notification>;
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
  token: Scalars["String"];
  userId: Scalars["String"];
  device: Scalars["String"];
  os?: Maybe<Scalars["String"]>;
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

export enum PeriodType {
  Year = "YEAR",
  Month = "MONTH",
  Day = "DAY"
}

export type Query = {
  __typename?: "Query";
  user: User;
  users: Array<User>;
};

export type QueryUserArgs = {
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

export type Subscription = {
  __typename?: "Subscription";
  userAdded?: Maybe<User>;
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
  Mutation: ResolverTypeWrapper<{}>;
  UserCreateInput: UserCreateInput;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  SocialUserCreateInput: SocialUserCreateInput;
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
  Mutation: {};
  UserCreateInput: UserCreateInput;
  AuthPayload: AuthPayload;
  SocialUserCreateInput: SocialUserCreateInput;
  Subscription: {};
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
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  CustomService?: CustomServiceResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
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
