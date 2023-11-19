import BookingFlow from '../../../compositions/booking';
import { useRouter } from 'next/router';
import Plan from '../../../components/plan-card';
import { MouseEvent, useEffect } from 'react';
import { usePlans, useScheduleAppointment } from '../../../graphql/hooks';
import {
  useDispatchContext,
  useStateContext,
} from '../../../reducers/booking/context';

const NEXT_PAGE = '/test-booking/user-info';

function Plans() {
  const state = useStateContext();
  const dispatch = useDispatchContext();

  const router = useRouter();
  const { plans, error, loading } = usePlans(3, 0);

  useEffect(() => {
    dispatch({ type: 'current_step_inside_form/update', payload: 0 });
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
        {JSON.stringify(error)}
      </div>
    );
  }

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (Array.isArray(plans)) {
    return (
      <BookingFlow>
        <section className="small-cards">
          {plans.map((info) => {
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
}

export default Plans;
