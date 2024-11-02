import { useEffect } from 'react';
import BookingFlow from '../../../compositions/booking';
import { useRouter } from 'next/router';
import { useDispatchContext } from '../../../reducers/booking/context';
import { userInfoAssociatedContent } from '../../../content';
import { signIn, useSession } from 'next-auth/react';
import UserInfoConfirmation from '../../../compositions/user-info-sections/user-info-confirmation';
import { useScrollToTheTopOfThePage } from '../../../misc/useScrollTop';
import ButtonAuthGoogle from '../../../components/button_auth_google/button_auth_google';
import { registerUserApi } from '../../../services/register-user';
import useFormGoNextStep from '../../../misc/useFormGoNextStep';

const NEXT_PAGE = '/booking/plans';

function UserInfo({ userIsBooking }) {
  const dispatch = useDispatchContext();
  const router = useRouter();
  const { data: session } = useSession();
  const goNextStep = useFormGoNextStep();
  // Set progress bar step
  useEffect(() => {
    dispatch({ type: 'current_step_inside_form/update', payload: 0 });
  }, [dispatch]);

  useScrollToTheTopOfThePage();

  const userDataConfirmation = async () => {
    const userData = {
      firstName: session.user.firstName,
      lastName: session.user.lastName,
      email: session.user.email,
      password: '',
      userRegistrationId: '',
      email_confirmation_code: '',
      email_verified: session.user.email_verified,
    };

    dispatch({
      type: 'user_data/validation',
      payload: true,
    });
    dispatch({
      type: 'user_data/update',
      payload: userData,
    });
    await registerUserApi(userData, dispatch);
    // dispatch({ type: 'current_step_inside_form/update', payload: 1 });
    // router.push(NEXT_PAGE);
    goNextStep(NEXT_PAGE);
  };

  // if (userRegistrationServiceApiOk === false) return <UserRegistrationError />;

  return (
    <BookingFlow>
      <div className="bg-teal-50 mt-8 sm:rounded-lg p-5 ring-1 ring-neutral-200">
        <div className="px-4 py-5 sm:p-6">
          {session ? (
            <UserInfoConfirmation
              name={session.user.name}
              email={session.user.email}
              userDataConfirmation={userDataConfirmation}
            />
          ) : (
            <div className="mt-2 min-h-[8rem] text-sm text-neutral-950">
              <p>{userInfoAssociatedContent['contact-info-instruction']}</p>
              <div className="h-24 flex flex-row justify-center items-center mt-6">
                <ButtonAuthGoogle
                  message={'Acceso con Google'}
                  onClickCallback={async () => {
                    await signIn('google', {
                      callbackUrl: '/booking/user-info',
                      redirect: true,
                    });
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </BookingFlow>
  );
}

export default UserInfo;
