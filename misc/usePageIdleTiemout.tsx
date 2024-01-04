import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

interface UsePageIdleTimeoutProps {
  timeout: number;
  onTimeout: () => void;
}

const usePageIdleTimeout = ({ timeout, onTimeout }: UsePageIdleTimeoutProps) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handlePageChange = () => {
      // Clear the timer when the page changes
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };

    const handleIdleTimeout = () => {
      // Execute the onTimeout callback if provided
      if (onTimeout) {
        onTimeout();
      }
    };

    // Set up a timeout when the component mounts
    timerRef.current = setTimeout(handleIdleTimeout, timeout);

    // Attach event listener for page change
    router.events.on('routeChangeStart', handlePageChange);

    // Cleanup function to clear the timer and remove event listener on component unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      router.events.off('routeChangeStart', handlePageChange);
    };
  }, [timeout, onTimeout, router]);
};

export default usePageIdleTimeout;