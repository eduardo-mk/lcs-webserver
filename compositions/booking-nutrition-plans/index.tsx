import Plan from '../../components/plan-card';
import { useState } from 'react';
import { usePlans } from '../../graphql/hooks';

function Plans({ clickHandler }) {
  const [selection, setSelection] = useState(undefined);
  const { plans, error, loading } = usePlans(3, 0);

  function selectionHandler(event) {
    const planID = event.target.dataset.id;
    setSelection(planID);
    clickHandler(event, plans);
  }

  if (error) return <h1>Error while trying to load plans</h1>;
  if (loading)
    return <h1 style={{ marginTop: '50px', zIndex: '10000' }}>Loading...</h1>;

  if (Array.isArray(plans)) {
    return (
      <section className="small-cards">
        {plans.map((info) => {
          return (
            <Plan
              key={info.id}
              info={info}
              selectedPlan={selection}
              clickHandler={selectionHandler}
            />
          );
        })}
      </section>
    );
  }
}

export default Plans;
