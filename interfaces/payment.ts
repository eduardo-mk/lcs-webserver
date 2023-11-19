import { Service } from '../graphql/codegen_auto_generated';

export interface PlanSelection {
  id: string;
  name: string;
  price: number;
  details: any[];
  description: string;
  currency: string;
  duration_hours: string;
  duration_minutes: string;
}

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string | undefined;
  userRegistrationId: string;
}

export interface DayAndTime {
  date: Date;
  time: string;
}

export interface BookingState {
  clientSecret: string | null;
  currentStep: number;
  planSelection: Service;
  planSelectionIsValid: boolean;
  userData: UserData;
  userDataIsValid: boolean;
  dayAndTime: DayAndTime;
  dayAndTimeIsValid: boolean;
  confirmData: boolean;
  userRegistrationServiceApiOk: boolean;
}
