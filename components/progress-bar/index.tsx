import ProgressStepBar from '../_framework/progress-step-bar';
import { bookingRelatedData } from './cms';
import { useStateContext } from '../../reducers/booking/context';

export default function ProgressBar() {
  const state = useStateContext();
  return (
    <ProgressStepBar
      steps={bookingRelatedData['booking-progress-bar-steps']}
      onClick={undefined}
      currentStepIndex={state.currentStep}
    />
  );
}
