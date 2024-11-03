import { useRouter } from 'next/router';
import { useStateContext } from '../reducers/booking/context';
import { useEffect } from 'react';

/**
 * Custom hook that redirects to the homepage when the page is reloaded.
 * It also prevents back navigation from taking the user back to the previous page.
 *
 */
function useSafeRedirectionBooking(): (url: string) => void {
  const { pathname, push } = useRouter();
  const {
    userDataIsValid,
    dayAndTimeIsValid,
    planSelectionIsValid,
    confirmData,
  } = useStateContext();

  return (next_page: string) => {
    switch (pathname) {
      case '/booking/user-info':
        push(next_page);
        break;
      case '/booking/plans':
        console.log('Prevent Reload Booking : Plans');
        console.log('User data is valid:', userDataIsValid);
        if (userDataIsValid) push(next_page);
        break;
      case '/booking/day-time':
        console.log('Prevent Reload Booking : Day time');
        // console.log('User data is valid:', userDataIsValid);
        // console.log('User plan selection valid:', planSelectionIsValid);
        if (userDataIsValid && planSelectionIsValid) push(next_page);
        break;
      case '/booking/review':
        console.log('Prevent Reload Booking : Review');
        // console.log('User data is valid:', userDataIsValid);
        // console.log('User plan selection valid:', planSelectionIsValid);
        // console.log('User day and time valid', dayAndTimeIsValid);
        if (userDataIsValid && planSelectionIsValid && dayAndTimeIsValid)
          push(next_page);
        break;
      case '/booking/payment':
        console.log('Prevent Reload Booking : Review');
        // console.log('User data is valid:', userDataIsValid);
        // console.log('User plan selection valid:', planSelectionIsValid);
        // console.log('User day and time valid', dayAndTimeIsValid);
        // console.log('User confirmed the data', confirmData);
        if (
          userDataIsValid &&
          planSelectionIsValid &&
          dayAndTimeIsValid &&
          confirmData
        )
          push(next_page);
        break;

      default:
        break;
    }
    return;
  };
}

export default useSafeRedirectionBooking;
