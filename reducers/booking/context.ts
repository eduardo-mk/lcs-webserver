import React, { useContext } from 'react';
import { BookingState } from './reducer';

export const DispatchContext = React.createContext(null);
export const StateContext = React.createContext(null);

export const useStateContext = () => {
  return useContext<BookingState>(StateContext);
};
export const useDispatchContext = () => {
  return useContext(DispatchContext);
};
