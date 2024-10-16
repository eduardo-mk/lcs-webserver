import { useEffect, useState } from 'react';
import ProgressBar from '../../components/progress-bar';
import SpinnerModalEntireScreen from '../spinner-modal/spinner-modal';

type BookingFlowProps = {
  children: React.ReactNode;
  loading?: boolean;
};

function BookingFlow({ children, loading = false }: BookingFlowProps) {
  const [showSpinner, setshowSpinner] = useState(false);
  useEffect(() => {
    let timerID: NodeJS.Timeout;
    if (loading) setshowSpinner(true);
    else {
      timerID = setTimeout(() => {
        setshowSpinner(false);
      }, 500);
    }
    return () => clearTimeout(timerID);
  }, [loading]);

  return (
    <>
      <ProgressBar />
      <section className="section-booking">
        {showSpinner ? (
          <SpinnerModalEntireScreen blurBackground={true} />
        ) : (
          children
        )}
      </section>
    </>
  );
}

export default BookingFlow;
