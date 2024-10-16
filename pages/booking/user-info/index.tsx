import { useEffect } from 'react';
import BookingFlow from '../../../compositions/booking';

import { useRouter } from 'next/router';
import { useDispatchContext } from '../../../reducers/booking/context';
import { userInfoAssociatedContent } from '../../../content';
import UserInfoAuthProviders from '../../../compositions/user-info-sections/user-info-auth-providers';
import { useSession } from 'next-auth/react';

import UserInfoConfirmation from '../../../compositions/user-info-sections/user-info-confirmation';
import { useScrollToTheTopOfThePage } from '../../../misc/useScrollTop';

const NEXT_PAGE = '/booking/plans';

function UserInfo({ userIsBooking }) {
  const dispatch = useDispatchContext();
  const router = useRouter();
  const { data: session } = useSession();

  const userDataConfirmation = () => router.push(NEXT_PAGE);

  useEffect(() => {
    dispatch({ type: 'current_step_inside_form/update', payload: 0 });
  }, [dispatch]);

  useScrollToTheTopOfThePage();
  // if (userRegistrationServiceApiOk === false) return <UserRegistrationError />;

  return (
    <BookingFlow>
      <div className="user-info__page">
        <div className="user-info">
          <h1 className="section-booking__header">Contacto</h1>
          <p className="section-booking__description medium-text">
            {userInfoAssociatedContent['contact-info-instruction']}
          </p>
          <UserInfoAuthProviders />
          {session ? (
            <UserInfoConfirmation
              name={session.user.name}
              email={session.user.email}
              userDataConfirmation={userDataConfirmation}
            />
          ) : null}
        </div>
      </div>
    </BookingFlow>
  );
}

export default UserInfo;
