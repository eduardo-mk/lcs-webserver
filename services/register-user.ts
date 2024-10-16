import { Dispatch } from 'react';
import { UserData } from '../reducers/booking/reducer';
import { registerUserUrl } from './urls';
import { serverDataHandler } from './api';

export async function registerUserApi(
  userData: UserData,
  dispatch: Dispatch<any>
) {
  // dispatch({ type: 'api/loading', payload: true });
  return fetch(registerUserUrl, {
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
      console.log('Register user', data);
      dispatch({
        type: 'user_data/update',
        payload: {
          userRegistrationId: data.payload.id,
        },
      });
      return registerUserUrl;
      // setTimeout(() => {
      //   dispatch({ type: 'api/loading', payload: false });
      // }, 800);
    })
    .catch((e) => {
      console.error('Register users failed');
      console.error(JSON.stringify(e));
      dispatch({ type: 'api/error', payload: true });
      dispatch({ type: 'api/loading', payload: false });
      return {
        error: `Something went wrong ${registerUserUrl} ${JSON.stringify(userData)}`,
      };
    });
}
