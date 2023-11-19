interface ActionGeneric {
  payload: any;
  type: string;
}

export const bookingReducer = (state: BookingState, action: ActionGeneric) => {
  switch (action.type) {
    case 'stripe/metadata':
      return { ...state, clientSecret: action.payload };

    case 'current_step_inside_form/update':
      return { ...state, currentStep: action.payload };

    case 'plan_selection/update':
      return { ...state, planSelection: action.payload };

    case 'plan_selection/validation':
      return { ...state, planSelectionIsValid: action.payload };

    case 'user_data/update':
      return {
        ...state,
        userData: { ...state.userData, ...action.payload },
      };
    case 'user_data/validation':
      return { ...state, userDataIsValid: action.payload };

    case 'user_data/registration-service-ok':
      return { ...state, userRegistrationServiceApiOk: action.payload };

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

interface PlanSelection {
  id: string;
  name: string;
  price: number;
  details: string[];
  description: string;
  currency: string;
  duration_hours: string;
  duration_minutes: string;
}

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  userRegistrationId: string;
}

interface DayAndTime {
  day: string;
  time: string;
}

interface BookingState {
  clientSecret: null | string;
  currentStep: number;
  planSelection: PlanSelection;
  planSelectionIsValid: boolean;
  userData: UserData;
  userDataIsValid: boolean;
  userRegistrationServiceApiOk: boolean;
  dayAndTime: DayAndTime;
  dayAndTimeIsValid: boolean;
  confirmData: boolean;
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
    duration_minutes: '',
  },
  planSelectionIsValid: false,
  userData: {
    firstName: '',
    lastName: '',
    email: '',
    userRegistrationId: '',
  },
  userDataIsValid: undefined,
  dayAndTime: {
    day: '',
    time: '',
  },
  userRegistrationServiceApiOk: undefined,
  dayAndTimeIsValid: false,
  confirmData: false,
};
