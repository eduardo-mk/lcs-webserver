import { useRouter } from 'next/router';
import UserEmailConfirmationSection from '../../compositions/user-info-sections/user-email-confirmation-section';
import UserRegistrationSection from '../../compositions/user-info-sections/user-registration-data-section';
import {
  useDispatchContext,
  useStateContext,
} from '../../reducers/booking/context';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import {
  validateBasicDataForm,
  validateConfirmationCodeForm,
} from '../../misc';
import { registerUserApi } from '../../services/register-user';
import { confirmEmailApi } from '../../services/confirm-email';

const NEXT_PAGE = '/booking/user-info';

const RegistrationByEmail = () => {
  const { userData, userDataIsValid, emailConfirmationIsValid } =
    useStateContext();

  const [emailConfirmationDone, setEmailConfirmationDone] = useState(false);
  const [userRegistrationDone, setUserRegistrationDone] = useState(false);
  const dispatch = useDispatchContext();
  const router = useRouter();
  const { data: session } = useSession();

  const userDataConfirmation = () => router.push(NEXT_PAGE);

  function userRegistrationHandler() {
    if (validateBasicDataForm(userData)) {
      dispatch({
        type: 'user_data/validation',
        payload: true,
      });
      registerUserApi(userData, dispatch);
    }
  }

  function codeConfirmationHandler() {
    if (validateConfirmationCodeForm(userData)) {
      confirmEmailApi(userData, dispatch);
    }
  }

  useEffect(() => {
    dispatch({ type: 'current_step_inside_form/update', payload: 0 });
  }, [dispatch]);

  useEffect(() => {
    if (userDataIsValid !== undefined) {
      dispatch({
        type: 'user_data/validation',
        payload: validateBasicDataForm(userData),
      });
    }
    if (userDataIsValid === true) {
      setUserRegistrationDone(true);
    }
    if (userDataIsValid === true && emailConfirmationIsValid === true) {
      setEmailConfirmationDone(true);
      dispatch({ type: 'current_step_inside_form/update', payload: 1 });
      router.push(NEXT_PAGE);
    }
  }, [userDataIsValid, emailConfirmationIsValid, userData, router, dispatch]);

  return (
    <section className="login-email__wrapper">
      <UserRegistrationSection
        isRegistrationFinalized={userRegistrationDone}
        userDataRegistrationCompletionHandler={userRegistrationHandler}
      />
      <UserEmailConfirmationSection
        isRegistrationFinalized={userRegistrationDone}
        userEmailCodeRegistrationDone={emailConfirmationDone}
        userEmailCodeRegistrationHandler={codeConfirmationHandler}
      />
    </section>
  );
};

export default RegistrationByEmail;
