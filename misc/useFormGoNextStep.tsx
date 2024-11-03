import { useRouter } from 'next/router';
import { useStateContext } from '../reducers/booking/context';
import { useEffect } from 'react';

/**
 * Custom hook that redirects to the homepage when the page is reloaded.
 * It also prevents back navigation from taking the user back to the previous page.
 *
 */
function useFormGoNextStep(): (url: string) => void {
  const { pathname, push } = useRouter();
  const {
    userDataIsValid,
    dayAndTimeIsValid,
    planSelectionIsValid,
    confirmData,
  } = useStateContext();

  return (next_page: string) => {
    // if (noChecks) {
    //   console.log(
    //     `useFormGoNextStep : no checks : current path : ${pathname} : next page : ${next_page}`
    //   );
    //   push(next_page);
    // }

    console.log(
      `useFormGoNextStep : current path : ${pathname} : next page : ${next_page}`
    );
    switch (pathname) {
      case '/booking/user-info':
        console.log('Safe Redirection : User info');
        push(next_page);
        break;
      case '/booking/plans':
        console.log('Safe Redirection : Plans');
        console.log('User data is valid:', userDataIsValid);
        if (userDataIsValid) push(next_page);

        break;
      case '/booking/day-time':
        console.log('Safe Redirection : Day time');
        console.log('User data is valid:', userDataIsValid);
        console.log('User plan selection valid:', planSelectionIsValid);
        if (userDataIsValid && planSelectionIsValid) push(next_page);

        break;
      case '/booking/review':
        console.log('Safe Redirection : Review');
        console.log('User data is valid:', userDataIsValid);
        console.log('User plan selection valid:', planSelectionIsValid);
        console.log('User day and time valid', dayAndTimeIsValid);
        if (userDataIsValid && planSelectionIsValid && dayAndTimeIsValid)
          push(next_page);

        break;
      case '/booking/payment':
        console.log('Safe Redirection : Review');
        console.log('User data is valid:', userDataIsValid);
        console.log('User plan selection valid:', planSelectionIsValid);
        console.log('User day and time valid', dayAndTimeIsValid);
        console.log('User confirmed the data', confirmData);
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

export default useFormGoNextStep;
