import { useRouter } from 'next/router';
import { useDispatchContext } from '../reducers/booking/context';
import { useCallback } from 'react';

const useRedirectIfPageIs = (currentPage: string, redirectionPage: string) => {
  const { pathname, push } = useRouter();
  const dispatch = useDispatchContext();
  return useCallback(async () => {
    if (currentPage === pathname) {
      await push(redirectionPage);
      dispatch({
        type: 'reset',
      });
    }
  }, [currentPage, pathname, redirectionPage, dispatch, push]);
};

export default useRedirectIfPageIs;
