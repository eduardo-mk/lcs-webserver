interface ActionGeneric {
  payload: any;
  type: string;
}

export const initialBookingState: BookingState = {
  clientSecret: null,
  currentStep: 0,
  planSelection: {
    id: '',
    name: '',
    price: 999,
    details: [],
    description: '',
    currency: '',
    duration_hours: '',
    duration_in_min: '',
    duration_minutes: '',
  },
  planSelectionIsValid: false,
  userData: {
    firstName: '',
    lastname: '',
    email: '',
    password: '',
    userRegistrationId: '',
    email_confirmation_code: '',
    email_verified: false,
  },
  userDataIsValid: undefined,
  emailConfirmationIsValid: undefined,
  dayAndTime: {
    date: new Date(),
    day: '',
    time: '',
    timeZone: '',
  },
  apiLoading: undefined,
  apiError: undefined,
  dayAndTimeIsValid: false,
  confirmData: false,
  inBookingFlow: false,
};

export const bookingReducer = (state: BookingState, action: ActionGeneric) => {
  switch (action.type) {
    case 'api/loading':
      return { ...state, apiLoading: action.payload };

    case 'api/error':
      return { ...state, apiError: action.payload };

    case 'reset':
      return { ...state, ...initialBookingState };

    case 'page_flow/booking':
      return { ...state, inBookingFlow: Boolean(action.payload) };

    case 'stripe/metadata':
      return { ...state, clientSecret: action.payload };

    case 'current_step_inside_form/update':
      return { ...state, currentStep: action.payload };

    case 'plan_selection/update':
      return { ...state, planSelection: action.payload };

    case 'plan_selection/validation':
      return { ...state, planSelectionIsValid: action.payload };

    case 'user_data/update':
      return { ...state, userData: { ...state.userData, ...action.payload } };

    case 'user_data/validation':
      return { ...state, userDataIsValid: action.payload };

    case 'user_data/email-confirmation':
      return { ...state, emailConfirmationIsValid: action.payload };

    case 'day_and_time/update':
      return { ...state, dayAndTime: action.payload };

    case 'day_and_time/validation':
      return { ...state, dayAndTimeIsValid: action.payload };

    case 'user/confirmation':
      return { ...state, confirmData: action.payload };

    default:
      return state;
  }
};

export interface PlanSelection {
  id: string;
  name: string;
  price: number;
  details: string[];
  description: string;
  currency: string;
  duration_hours: string;
  duration_in_min: string;
  duration_minutes: string;
}

export interface UserData {
  firstName: string;
  lastname: string;
  email: string;
  password: string;
  userRegistrationId: string;
  email_confirmation_code: string;
  email_verified: boolean;
}

export interface DayAndTime {
  date: Date;
  day: string;
  time: string;
  timeZone: string;
}

export interface BookingState {
  clientSecret: null | string;
  currentStep: number;
  planSelection: PlanSelection;
  planSelectionIsValid: boolean;
  userData: UserData;
  userDataIsValid: boolean;
  emailConfirmationIsValid: boolean;
  apiLoading: boolean;
  apiError: boolean;
  dayAndTime: DayAndTime;
  dayAndTimeIsValid: boolean;
  confirmData: boolean;
  inBookingFlow: boolean;
}
