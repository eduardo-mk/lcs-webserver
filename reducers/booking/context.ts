import React, { useContext } from 'react'
import { BookingState, ActionGeneric } from './reducer'

type BookingDispatch = React.Dispatch<ActionGeneric>


export const DispatchContext = React.createContext<BookingDispatch | null>(null)
export const StateContext = React.createContext<BookingState | null>(null)

// Custom hooks with proper typing and null checks
export const useStateContext = () => {
  const context = useContext(StateContext)
  if (context === null) {
    throw new Error('useStateContext must be used within a StateContext.Provider')
  }
  return context
}

export const useDispatchContext = () => {
  const context = useContext(DispatchContext)
  if (context === null) {
    throw new Error('useDispatchContext must be used within a DispatchContext.Provider')
  }
  return context
}
