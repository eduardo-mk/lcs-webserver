import ProgressStepBar from '../_framework/progress-step-bar/index';
import { useStateContext } from '../../reducers/booking/context';
import { booking_progress_bar_steps } from '../../content';
import { SyntheticEvent } from 'react';
import useFormRedirectToStep from '../../misc/useFormRedirectToStep';

export default function ProgressBar() {
  const state = useStateContext();
  const redirectToStep = useFormRedirectToStep();
  function onClickHandler(e: SyntheticEvent) {
    e.preventDefault();
    e.stopPropagation();
    // console.log('Clicked circle', e.currentTarget.dataset.stepHref);

    const stepHref = (e.currentTarget as HTMLAnchorElement).dataset.stepHref;

    console.log(stepHref);
    redirectToStep(stepHref);
  }
  return (
    <ProgressStepBar
      initialSteps={booking_progress_bar_steps}
      onClick={onClickHandler}
      currentStepIndex={state.currentStep}
    />
  );
}
