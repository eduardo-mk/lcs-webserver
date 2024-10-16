import ProgressStepBar from '../_framework/progress-step-bar';
import { useStateContext } from '../../reducers/booking/context';
import { booking_progress_bar_steps } from '../../content';

export default function ProgressBar() {
  const state = useStateContext();
  return (
    <ProgressStepBar
      steps={booking_progress_bar_steps}
      onClick={undefined}
      currentStepIndex={state.currentStep}
    />
  );
}
