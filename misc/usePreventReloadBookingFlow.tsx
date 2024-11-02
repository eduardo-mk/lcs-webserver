import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStateContext } from '../reducers/booking/context';

const SAFE_START_URL = '/';

function detectPageReload() {
  // Check for the Performance API support
  if (performance && performance.getEntriesByType) {
    const entries = performance.getEntriesByType('navigation');

    if (entries.length > 0) {
      // For modern browsers (including the latest Chrome and Safari)
      for (const entry of entries) {
        if ('type' in entry && entry.type === 'reload') {
          return true; // Detected a page reload
        }
      }
    } else {
      // Fallback for older browsers or if no navigation entries are present
      // This might involve checking the history length or other means
      return (
        window.performance.navigation.type ===
        window.performance.navigation.TYPE_RELOAD
      );
    }
  }

  // If the Performance API is not supported, return false
  return false;
}

/**
 * Custom hook that redirects to the homepage when the page is reloaded.
 * It also prevents back navigation from taking the user back to the previous page.
 *
 * @returns {void}
 */
function usePreventReloadBooking(): void {
  const { pathname, push } = useRouter();
  const {
    userDataIsValid,
    dayAndTimeIsValid,
    planSelectionIsValid,
    confirmData,
  } = useStateContext();

  useEffect(() => {
    // const isReload = detectPageReload();
    // console.log(`usePrevenReloadBooking : isReload : ${isReload}`);
    // if (isReload) return;

    switch (pathname) {
      case '/booking/user-info':
        if (!userDataIsValid) push(SAFE_START_URL);
        break;
      case '/booking/plans':
        // console.log('Prevent Reload Booking : Plans');
        // console.log('User data is valid:', userDataIsValid);
        if (!userDataIsValid) push(SAFE_START_URL);
        break;
      case '/booking/day-time':
        // console.log('Prevent Reload Booking : Day time');
        // console.log('User data is valid:', userDataIsValid);
        // console.log('User plan selection valid:', planSelectionIsValid);
        if (!(userDataIsValid && planSelectionIsValid)) push(SAFE_START_URL);
        break;
      case '/booking/review':
        // console.log('Prevent Reload Booking : Review');
        // console.log('User data is valid:', userDataIsValid);
        // console.log('User plan selection valid:', planSelectionIsValid);
        // console.log('User day and time valid', dayAndTimeIsValid);
        if (!(userDataIsValid && planSelectionIsValid && dayAndTimeIsValid))
          push(SAFE_START_URL);
        break;
      case '/booking/payment':
        // console.log('Prevent Reload Booking : Review');
        // console.log('User data is valid:', userDataIsValid);
        // console.log('User plan selection valid:', planSelectionIsValid);
        // console.log('User day and time valid', dayAndTimeIsValid);
        // console.log('User confirmed the data', confirmData);
        if (
          !(
            userDataIsValid &&
            planSelectionIsValid &&
            dayAndTimeIsValid &&
            confirmData
          )
        )
          push(SAFE_START_URL);
        break;

      default:
        break;
    }
  }, [
    pathname,
    userDataIsValid,
    planSelectionIsValid,
    dayAndTimeIsValid,
    confirmData,
    push,
  ]);
}

export default usePreventReloadBooking;
