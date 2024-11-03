import { useEffect, useState } from 'react';
import ProgressBar from '../../components/progress-bar';
import SpinnerModalEntireScreen from '../spinner-modal/spinner-modal';
import { useRouter } from 'next/router';
// import useRedirectOnReload from '../../misc/usePreventReloadBookingFlow';

type BookingFlowProps = {
  children: React.ReactNode;
  loading?: boolean;
};

function BookingFlow({ children }: BookingFlowProps) {
  const loading = false;
  const [showSpinner, setshowSpinner] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(true);
  const router = useRouter();
  // useRedirectOnReload();

  useEffect(() => {}, [router]);

  const specificPaths = [
    '/booking/user-info',
    '/booking/plans',
    '/booking/day-time',
    '/booking/review',
    '/booking/payment',
    '/payment/success',
  ];
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
    <div className="md:bg-gradient-to-l from-rose-100 via-lime-50 to-rose-100 max-w-4xl rounded-md container mx-auto min-h-[60rem] sm:px-6 lg:py-8 mt-20 mb-10 ">
      <section className="mx-auto max-w-4xl px-4">
        <h2 className="text-center text-2xl font-bold py-4">Citas en línea</h2>
        {/* <p className="mt-4 mb-10 text-center text-lg">
          Apartar una cita es muy fácil, solo necesitas completar los siguientes
          pasos.
        </p> */}
        {specificPaths.includes(router.pathname) ? <ProgressBar /> : null}
        <div className="container">
          {showSpinner ? (
            <SpinnerModalEntireScreen blurBackground={true} />
          ) : (
            children
          )}
        </div>
      </section>
    </div>
  );
}

export default BookingFlow;
