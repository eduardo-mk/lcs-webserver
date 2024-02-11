import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface Appointment {
  __typename?: 'Appointment';
  created_at: Scalars['String'];
  day_of_appt?: Maybe<Scalars['String']>;
  duration: Scalars['String'];
  during_range?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  patient_id?: Maybe<Scalars['Int']>;
  service_id?: Maybe<Scalars['String']>;
  status: AppointmentStatus;
  time_of_appt?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
}

export interface AppointmentStatus {
  __typename?: 'AppointmentStatus';
  id: Scalars['String'];
  name: Scalars['String'];
}

export interface AppointmentsAvailable {
  __typename?: 'AppointmentsAvailable';
  days: Array<Scalars['String']>;
}

export interface Mutation {
  __typename?: 'Mutation';
  scheduleAppointment: StandardResponse;
}


export interface Mutation_ScheduleAppointmentArgs {
  data: ScheduleAppointmentArgs;
}

export interface Patient {
  __typename?: 'Patient';
  email: Scalars['String'];
  id: Scalars['String'];
  lastname: Scalars['String'];
  name: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
}

export interface PaymentTransaction {
  __typename?: 'PaymentTransaction';
  appointment_id: Scalars['String'];
  email_notification_code: Scalars['String'];
  email_notification_sent: Scalars['String'];
  id: Scalars['String'];
  payment_intent_id: Scalars['String'];
}

export interface PlanSubList {
  __typename?: 'PlanSubList';
  items: Array<Service>;
  totalCount: Scalars['Int'];
}

export interface Query {
  __typename?: 'Query';
  availableAppointments?: Maybe<AppointmentsAvailable>;
  availableAppointmentsHours?: Maybe<TimeAvailable>;
  patientById?: Maybe<Patient>;
  plans?: Maybe<PlanSubList>;
}


export interface Query_AvailableAppointmentsHoursArgs {
  daySelected: Scalars['String'];
  timeZone: Scalars['String'];
}


export interface Query_PatientByIdArgs {
  id: Scalars['String'];
}


export interface Query_PlansArgs {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}

export interface Reservation {
  __typename?: 'Reservation';
  during: Scalars['String'];
}

export interface ScheduleAppointmentArgs {
  day_of_appt: Scalars['String'];
  duration_in_min: Scalars['String'];
  location?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  patient_id: Scalars['String'];
  payment_intent_id: Scalars['String'];
  service_id: Scalars['String'];
  status?: InputMaybe<Scalars['String']>;
  time_of_appt: Scalars['String'];
}

export interface Service {
  __typename?: 'Service';
  currency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  details: Array<Scalars['String']>;
  duration_in_min: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['String'];
}

export interface StandardResponse {
  __typename?: 'StandardResponse';
  msg: Scalars['String'];
  status: Scalars['String'];
}

export interface TimeAvailable {
  __typename?: 'TimeAvailable';
  hours: Array<Scalars['String']>;
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Appointment: ResolverTypeWrapper<Appointment>;
  AppointmentStatus: ResolverTypeWrapper<AppointmentStatus>;
  AppointmentsAvailable: ResolverTypeWrapper<AppointmentsAvailable>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Patient: ResolverTypeWrapper<Patient>;
  PaymentTransaction: ResolverTypeWrapper<PaymentTransaction>;
  PlanSubList: ResolverTypeWrapper<PlanSubList>;
  Query: ResolverTypeWrapper<{}>;
  Reservation: ResolverTypeWrapper<Reservation>;
  ScheduleAppointmentArgs: ScheduleAppointmentArgs;
  Service: ResolverTypeWrapper<Service>;
  StandardResponse: ResolverTypeWrapper<StandardResponse>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TimeAvailable: ResolverTypeWrapper<TimeAvailable>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Appointment: Appointment;
  AppointmentStatus: AppointmentStatus;
  AppointmentsAvailable: AppointmentsAvailable;
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  Mutation: {};
  Patient: Patient;
  PaymentTransaction: PaymentTransaction;
  PlanSubList: PlanSubList;
  Query: {};
  Reservation: Reservation;
  ScheduleAppointmentArgs: ScheduleAppointmentArgs;
  Service: Service;
  StandardResponse: StandardResponse;
  String: Scalars['String'];
  TimeAvailable: TimeAvailable;
};

export type AppointmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Appointment'] = ResolversParentTypes['Appointment']> = {
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  day_of_appt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  during_range?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  patient_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  service_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['AppointmentStatus'], ParentType, ContextType>;
  time_of_appt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppointmentStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppointmentStatus'] = ResolversParentTypes['AppointmentStatus']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppointmentsAvailableResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppointmentsAvailable'] = ResolversParentTypes['AppointmentsAvailable']> = {
  days?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  scheduleAppointment?: Resolver<ResolversTypes['StandardResponse'], ParentType, ContextType, RequireFields<Mutation_ScheduleAppointmentArgs, 'data'>>;
};

export type PatientResolvers<ContextType = any, ParentType extends ResolversParentTypes['Patient'] = ResolversParentTypes['Patient']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentTransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentTransaction'] = ResolversParentTypes['PaymentTransaction']> = {
  appointment_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email_notification_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email_notification_sent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payment_intent_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanSubListResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanSubList'] = ResolversParentTypes['PlanSubList']> = {
  items?: Resolver<Array<ResolversTypes['Service']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  availableAppointments?: Resolver<Maybe<ResolversTypes['AppointmentsAvailable']>, ParentType, ContextType>;
  availableAppointmentsHours?: Resolver<Maybe<ResolversTypes['TimeAvailable']>, ParentType, ContextType, RequireFields<Query_AvailableAppointmentsHoursArgs, 'daySelected' | 'timeZone'>>;
  patientById?: Resolver<Maybe<ResolversTypes['Patient']>, ParentType, ContextType, RequireFields<Query_PatientByIdArgs, 'id'>>;
  plans?: Resolver<Maybe<ResolversTypes['PlanSubList']>, ParentType, ContextType, RequireFields<Query_PlansArgs, 'limit' | 'offset'>>;
};

export type ReservationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reservation'] = ResolversParentTypes['Reservation']> = {
  during?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Service'] = ResolversParentTypes['Service']> = {
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  duration_in_min?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StandardResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['StandardResponse'] = ResolversParentTypes['StandardResponse']> = {
  msg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimeAvailableResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimeAvailable'] = ResolversParentTypes['TimeAvailable']> = {
  hours?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Appointment?: AppointmentResolvers<ContextType>;
  AppointmentStatus?: AppointmentStatusResolvers<ContextType>;
  AppointmentsAvailable?: AppointmentsAvailableResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Patient?: PatientResolvers<ContextType>;
  PaymentTransaction?: PaymentTransactionResolvers<ContextType>;
  PlanSubList?: PlanSubListResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Reservation?: ReservationResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  StandardResponse?: StandardResponseResolvers<ContextType>;
  TimeAvailable?: TimeAvailableResolvers<ContextType>;
};

