import {
  useDispatchContext,
  useStateContext,
} from '../../../reducers/booking/context';
import Button from '../../../components/button';
import { useEffect } from 'react';
import BookingFlow from '../../../compositions/booking';
import { useRouter } from 'next/router';
import { reviewApplicationContent, translate_24_to_12 } from '../../../content';
const NEXT_PAGE = '/test-booking/payment';

function LastCheck() {
  const state = useStateContext();
  const router = useRouter();
  const { userData, planSelection, dayAndTime } = state;
  const dispatch = useDispatchContext();

  useEffect(() => {
    dispatch({ type: 'current_step_inside_form/update', payload: 3 });
  }, [dispatch]);

  const { name } = planSelection;
  const { firstName, lastName, email } = userData;
  const { date, time } = dayAndTime;
  let dayFormated = '';

  if (date && date.toLocaleDateString !== undefined) {
    dayFormated = date.toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  function confirmationHandler() {
    dispatch({ type: 'user/confirmation', payload: true });
    dispatch({ type: 'current_step_inside_form/update', payload: 4 });
    router.push(NEXT_PAGE);
  }

  console.log('Recieved time', time, translate_24_to_12[time]);
  return (
    <BookingFlow>
      <section className="last-check">
        <div className="last-check__plan plan">
          <span className="plan__tag">
            {reviewApplicationContent['plan-selection']}
          </span>
          <div className="plan__name">{name}</div>
        </div>
        <div className="last-check__your-info your-info">
          <span className="your-info__first-name-tag">
            {reviewApplicationContent['your-info-name']}
          </span>
          <div className="your-info__first-name">{firstName}</div>
          <span className="your-info__last-name-tag">
            {reviewApplicationContent['your-info-lastname']}
          </span>
          <div className="your-info__last-name">{lastName}</div>
          <span className="your-info__email-tag">
            {reviewApplicationContent['your-info-email']}
          </span>
          <div className="your-info__email">{email}</div>
        </div>
        <div className="last-check__day-time day-time">
          <span className="day-time__day-tag">
            {reviewApplicationContent['day']}
          </span>
          <div className="day-time__day-selection">{dayFormated}</div>
          <span className="day-time__time-tag">
            {reviewApplicationContent['time']}
          </span>
          <div className="day-time__time-selection">{time}</div>
        </div>
        <div>
          <ul>
            <li>
              <p>
                {
                  reviewApplicationContent[
                    'banner-suggestion-user-review-options'
                  ]
                }
              </p>
            </li>
            <li>
              <p>
                {reviewApplicationContent['banner-disclosure-personal-info']}
              </p>
            </li>
            <li>
              <p>{reviewApplicationContent['banner-notice-next-steps']}</p>
            </li>
            <li>
              <p>{reviewApplicationContent['banner-time-zone']}</p>
            </li>
          </ul>
        </div>
        <Button onClick={confirmationHandler}>Confirmar</Button>
      </section>
    </BookingFlow>
  );
}

export default LastCheck;
