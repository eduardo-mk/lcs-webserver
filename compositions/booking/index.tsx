import ProgressBar from '../../components/progress-bar';

function BookingFlow({ children }) {
  return (
    <>
      <ProgressBar />
      <section className="section-booking">{children}</section>
    </>
  );
}

export default BookingFlow;
