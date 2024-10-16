import BookingFlow from '../../../compositions/booking';
import { useRouter } from 'next/router';
import Plan from '../../../components/plan-card';
import { MouseEvent, useEffect } from 'react';
import { usePlans } from '../../../graphql/hooks';
import {
  useDispatchContext,
  useStateContext,
} from '../../../reducers/booking/context';
import { useScrollToTheTopOfThePage } from '../../../misc/useScrollTop';

const NEXT_PAGE = '/booking/day-time';

function Plans() {
  useScrollToTheTopOfThePage();
  const state = useStateContext();
  const dispatch = useDispatchContext();

  const router = useRouter();
  const { plans, error, loading } = usePlans(4, 0);

  useEffect(() => {
    if (loading) dispatch({ type: 'api/loading', payload: true });
    else {
      setTimeout(() => {
        dispatch({ type: 'api/loading', payload: false });
      }, 800);
    }
  }, [loading, dispatch]);

  useEffect(() => {
    dispatch({ type: 'current_step_inside_form/update', payload: 1 });
  }, [dispatch]);

  function selectionHandler(event: MouseEvent) {
    const planIdFormClickedElement = (event.target as HTMLElement).dataset.id;
    const planSelected = plans.find(({ id }) => {
      return id === planIdFormClickedElement;
    });
    dispatch({ type: 'plan_selection/update', payload: planSelected });
    dispatch({ type: 'plan_selection/validation', payload: true });
    dispatch({ type: 'current_step_inside_form/update', payload: 1 });
    router.push(NEXT_PAGE);
  }

  if (error) {
    return (
      <div
        style={{
          marginTop: '50px',
          zIndex: '10000',
          height: '400px',
          backgroundColor: 'black',
        }}
      >
        {JSON.stringify({ plans, error, loading })}
      </div>
    );
  }

  return (
    <BookingFlow loading={loading}>
      <section className="small-cards">
        <h1 className="section-booking__header">
          Selecciona un plan nutricional
        </h1>
        {Array.isArray(plans) &&
          plans.map((info) => {
            return (
              <Plan
                key={info.id}
                info={info}
                selectedPlan={state.planSelection?.id}
                clickHandler={selectionHandler}
              />
            );
          })}
      </section>
    </BookingFlow>
  );
}

export default Plans;
