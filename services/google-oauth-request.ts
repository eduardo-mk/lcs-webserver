import { Dispatch } from 'react';
import { googleOAuthRequestUrl } from './urls';
import { serverDataHandler } from './api';

export async function googleOauthRequestUrl(dispatch: Dispatch<any>) {
  dispatch({ type: 'api/loading', payload: true });
  fetch(googleOAuthRequestUrl, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  })
    .then(serverDataHandler)
    .then((data) => {
      // return true
      console.log('Google url:', data.url);
      if (typeof data.url !== 'string') return;

      // Redirect
      window.location.href = data.url;
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
