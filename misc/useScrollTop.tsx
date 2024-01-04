import { useEffect } from 'react';

export const useScrollToTheTopOfThePage = () => {
  useEffect(() => {
    window.scrollBy(0, -window.innerHeight);
    window.scrollBy({
      top: -100,
    });
  }, []);
};
