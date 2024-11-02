import { Dispatch } from 'react';
import { UserData } from '../reducers/booking/reducer';
import { emailConfirmationUrl } from './urls';
import { serverDataHandler } from './api';

export async function confirmEmailApi(
  userData: UserData,
  dispatch: Dispatch<any>
) {
  dispatch({ type: 'api/loading', payload: true });
  fetch(emailConfirmationUrl, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(userData),
  })
    .then(serverDataHandler)
    .then((data) => {
      // return true
      console.log('Data from fetch??', data);
      const failure = data.status !== 'Failure';
      dispatch({
        type: 'user_data/email-confirmation',
        payload: true,
      });
      setTimeout(() => {
        dispatch({ type: 'api/loading', payload: false });
      }, 800);
    })
    .catch((e) => {
      console.error('Register users failed');
      console.error(e);
      dispatch({ type: 'api/error', payload: true });
      setTimeout(() => {
        dispatch({ type: 'api/loading', payload: false });
      }, 800);
    });
}
