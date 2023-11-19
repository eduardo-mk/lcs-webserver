import { useReducer } from 'react';
import { StateContext, DispatchContext } from '../../reducers/booking/context';
import {
  bookingReducer,
  initialBookingState,
} from '../../reducers/booking/reducer';

export function BookingContextWrapper({ children }) {
  const [state, dispatch] = useReducer(bookingReducer, initialBookingState);
  return (
    <>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </StateContext.Provider>
    </>
  );
}
