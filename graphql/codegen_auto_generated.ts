import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Appointment = {
  __typename?: 'Appointment';
  created_at: Scalars['String'];
  day_of_appt: Scalars['String'];
  duration: Scalars['String'];
  during_range: Scalars['String'];
  id: Scalars['String'];
  patient: Patient;
  service: Service;
  time_of_appt: Scalars['String'];
  updated_at: Scalars['String'];
};

export type AppointmentsAvailable = {
  __typename?: 'AppointmentsAvailable';
  days: Array<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  scheduleAppointment: StandardResponse;
};

export type MutationScheduleAppointmentArgs = {
  data: ScheduleAppointmentArgs;
};

export type Patient = {
  __typename?: 'Patient';
  created_at: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  lastname: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  salt: Scalars['String'];
  updated_at: Scalars['String'];
};

export type PaymentTransaction = {
  __typename?: 'PaymentTransaction';
  appointment_id: Scalars['Int'];
  created_at: Scalars['String'];
  id: Scalars['Int'];
  info: Scalars['String'];
  patient: Patient;
  price: Scalars['Float'];
  service: Service;
  successful: Scalars['Boolean'];
};

export type PlanSubList = {
  __typename?: 'PlanSubList';
  items: Array<Service>;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  availableAppointments?: Maybe<AppointmentsAvailable>;
  availableAppointmentsHours?: Maybe<TimeAvailable>;
  plans?: Maybe<PlanSubList>;
};

export type QueryAvailableAppointmentsHoursArgs = {
  daySelected: Scalars['String'];
};

export type QueryPlansArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Reservation = {
  __typename?: 'Reservation';
  during: Scalars['String'];
};

export type ScheduleAppointmentArgs = {
  service_id: Scalars['String'];
  day_of_appt: Scalars['String'];
  duration_in_min: Scalars['String'];
  location?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  patient_id: Scalars['String'];
  payment_intent_id: Scalars['String'];
  status?: InputMaybe<Scalars['String']>;
  time_of_appt: Scalars['String'];
};

export type Service = {
  __typename?: 'Service';
  active: Scalars['Boolean'];
  currency: Scalars['String'];
  default_price: Scalars['Float'];
  description: Scalars['String'];
  id: Scalars['String'];
  images: Array<Scalars['String']>;
  metadata: ServiceStripeMetadata;
  name: Scalars['String'];
};

export type ServiceStripeMetadata = {
  __typename?: 'ServiceStripeMetadata';
  duration_in_min: Scalars['String'];
  more_details: Scalars['String'];
};

export type StandardResponse = {
  __typename?: 'StandardResponse';
  msg: Scalars['String'];
  status: Scalars['String'];
};

export type TimeAvailable = {
  __typename?: 'TimeAvailable';
  hours: Array<Scalars['String']>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Appointment: ResolverTypeWrapper<Appointment>;
  AppointmentsAvailable: ResolverTypeWrapper<AppointmentsAvailable>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Patient: ResolverTypeWrapper<Patient>;
  PaymentTransaction: ResolverTypeWrapper<PaymentTransaction>;
  PlanSubList: ResolverTypeWrapper<PlanSubList>;
  Query: ResolverTypeWrapper<{}>;
  Reservation: ResolverTypeWrapper<Reservation>;
  ScheduleAppointmentArgs: ScheduleAppointmentArgs;
  Service: ResolverTypeWrapper<Service>;
  ServiceStripeMetadata: ResolverTypeWrapper<ServiceStripeMetadata>;
  StandardResponse: ResolverTypeWrapper<StandardResponse>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TimeAvailable: ResolverTypeWrapper<TimeAvailable>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Appointment: Appointment;
  AppointmentsAvailable: AppointmentsAvailable;
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Mutation: {};
  Patient: Patient;
  PaymentTransaction: PaymentTransaction;
  PlanSubList: PlanSubList;
  Query: {};
  Reservation: Reservation;
  ScheduleAppointmentArgs: ScheduleAppointmentArgs;
  Service: Service;
  ServiceStripeMetadata: ServiceStripeMetadata;
  StandardResponse: StandardResponse;
  String: Scalars['String'];
  TimeAvailable: TimeAvailable;
};

export type AppointmentResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Appointment'] = ResolversParentTypes['Appointment'],
> = {
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  day_of_appt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  during_range?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  patient?: Resolver<ResolversTypes['Patient'], ParentType, ContextType>;
  service?: Resolver<ResolversTypes['Service'], ParentType, ContextType>;
  time_of_appt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppointmentsAvailableResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['AppointmentsAvailable'] = ResolversParentTypes['AppointmentsAvailable'],
> = {
  days?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  scheduleAppointment?: Resolver<
    ResolversTypes['StandardResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationScheduleAppointmentArgs, 'data'>
  >;
};

export type PatientResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Patient'] = ResolversParentTypes['Patient'],
> = {
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  salt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentTransactionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PaymentTransaction'] = ResolversParentTypes['PaymentTransaction'],
> = {
  appointment_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  info?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  patient?: Resolver<ResolversTypes['Patient'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  service?: Resolver<ResolversTypes['Service'], ParentType, ContextType>;
  successful?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanSubListResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['PlanSubList'] = ResolversParentTypes['PlanSubList'],
> = {
  items?: Resolver<Array<ResolversTypes['Service']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  availableAppointments?: Resolver<
    Maybe<ResolversTypes['AppointmentsAvailable']>,
    ParentType,
    ContextType
  >;
  availableAppointmentsHours?: Resolver<
    Maybe<ResolversTypes['TimeAvailable']>,
    ParentType,
    ContextType,
    RequireFields<QueryAvailableAppointmentsHoursArgs, 'daySelected'>
  >;
  plans?: Resolver<
    Maybe<ResolversTypes['PlanSubList']>,
    ParentType,
    ContextType,
    Partial<QueryPlansArgs>
  >;
};

export type ReservationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Reservation'] = ResolversParentTypes['Reservation'],
> = {
  during?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Service'] = ResolversParentTypes['Service'],
> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  default_price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<
    ResolversTypes['ServiceStripeMetadata'],
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceStripeMetadataResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ServiceStripeMetadata'] = ResolversParentTypes['ServiceStripeMetadata'],
> = {
  duration_in_min?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  more_details?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StandardResponseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['StandardResponse'] = ResolversParentTypes['StandardResponse'],
> = {
  msg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimeAvailableResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['TimeAvailable'] = ResolversParentTypes['TimeAvailable'],
> = {
  hours?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Appointment?: AppointmentResolvers<ContextType>;
  AppointmentsAvailable?: AppointmentsAvailableResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Patient?: PatientResolvers<ContextType>;
  PaymentTransaction?: PaymentTransactionResolvers<ContextType>;
  PlanSubList?: PlanSubListResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Reservation?: ReservationResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  ServiceStripeMetadata?: ServiceStripeMetadataResolvers<ContextType>;
  StandardResponse?: StandardResponseResolvers<ContextType>;
  TimeAvailable?: TimeAvailableResolvers<ContextType>;
};
