import { useRouter } from 'next/router';
import { useEffect } from 'react';

type PopStateEvent = Event & { state: any };

const usePreventBackNavigation = (redirectPath: string) => {
  const router = useRouter();

  useEffect(() => {
    history.replaceState(
      null,
      document.title,
      window.location.pathname + window.location.search
    );
  }, []);

  useEffect(() => {
    const handleBackNavigation = (event: PopStateEvent) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      router.push(redirectPath); // Redirect to the specified path
    };

    // Add listener for back button navigation
    window.addEventListener('popstate', handleBackNavigation);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('popstate', handleBackNavigation);
    };
  }, [router, redirectPath]);
};

export default usePreventBackNavigation;
