import { Dispatch, useEffect, useState } from 'react';
import Button from '../../../components/button';
import Input from '../../../components/input';
import BookingFlow from '../../../compositions/booking';
import {
  validateLastName,
  validateEmail,
  validateFirstName,
  validateEntireForm,
} from '../../../misc';
import { useRouter } from 'next/router';
import { userInfoAssociatedContent } from '../../../content';
import {
  useDispatchContext,
  useStateContext,
} from '../../../reducers/booking/context';
import { UserData } from '../../../interfaces/payment';
import Image from 'next/image';
import dogPensative from '../../../public/images/dog-pensative.png';
import Link from 'next/link';
const NEXT_PAGE = '/booking/day-time';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

function registerUser(userData: UserData, dispatch: Dispatch<any>) {
  const { firstName, lastName, email, password } = userData;

  fetch('/api/register-user', {
    method: 'POST',
    body: JSON.stringify({ name: firstName, lastName, email, password }), // body data type must match "Content-Type" header
  })
    .then(async (rawData) => {
      const data = await rawData.json();
      if (data.error) {
        dispatch({ type: 'user_data/registration-service-ok', payload: false });
      } else {
        dispatch({ type: 'user_data/validation', payload: true });
        dispatch({
          type: 'user_data/update',
          payload: {
            firstName,
            lastName,
            email,
            userRegistrationId: data.payload.id,
          },
        });
        dispatch({ type: 'user_data/registration-service-ok', payload: true });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function UserInfo() {
  const { userData, userDataIsValid, userRegistrationServiceApiOk } =
    useStateContext();
  const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  const [lastNameIsValid, setLastNameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const dispatch = useDispatchContext();
  const router = useRouter();

  useEffect(() => {
    if (userDataIsValid !== undefined) validateEntireForm(userData, dispatch);
    if (userDataIsValid === true && userRegistrationServiceApiOk === true) {
      dispatch({ type: 'current_step_inside_form/update', payload: 2 });
      router.push(NEXT_PAGE);
    }
  }, [
    userDataIsValid,
    userRegistrationServiceApiOk,
    userData,
    router,
    dispatch,
  ]);

  function onBlurNameHandlerChecks(event: InputChangeEvent) {
    setFirstNameIsValid(validateFirstName(event.target.value.length));
  }
  function onBlurLastnameChecks(event: InputChangeEvent) {
    setLastNameIsValid(validateLastName(event.target.value.length));
  }
  function onBlurEmailChecks(event: InputChangeEvent) {
    setEmailIsValid(validateEmail(event.target.value));
  }

  function firstNameHandler(event: InputChangeEvent) {
    setFirstNameIsValid(validateFirstName(event.target.value.length));
    dispatch({
      type: 'user_data/update',
      payload: { firstName: event.target.value },
    });
  }
  function lastNameHandler(event: InputChangeEvent) {
    setLastNameIsValid(validateLastName(event.target.value.length));
    dispatch({
      type: 'user_data/update',
      payload: { lastName: event.target.value },
    });
  }
  function emailHandler(event: InputChangeEvent) {
    setEmailIsValid(validateEmail(event.target.value));
    dispatch({
      type: 'user_data/update',
      payload: { email: event.target.value },
    });
  }

  function onCompletionHandler() {
    if (validateEntireForm(userData, dispatch)) {
      console.table(userData);
      registerUser(userData, dispatch);
    }
  }

  let displayErrorBanner =
    userDataIsValid !== undefined && userDataIsValid === false;

  if (userRegistrationServiceApiOk === false) {
    return (
      <section className="user-data">
        <div className="user-data__error">
          <div className="user-data__error-image--wrapper">
            <Image
              src={dogPensative}
              alt="Person on a tour"
              style={{
                width: '100%',
                height: 'auto',
              }}
              sizes="100vw"
              // height={200}
              // width={300}
              className="story__img"
            />
          </div>
          <p>{userInfoAssociatedContent['user-info-can-not-be-registered']}</p>
          <Link href="/" className="btn btn--white btn--animated">
            {' '}
            {'Volver a inicio'}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <BookingFlow>
      <section className="user-data">
        <h1 className="section-booking__header">Información de Contacto</h1>
        <div className="user-data__contact-basic">
          <form>
            <Input
              onChange={firstNameHandler}
              onBlur={onBlurNameHandlerChecks}
              isValid={firstNameIsValid}
              value={userData.firstName}
              type="text"
              label="Nombre"
              name="first-name"
              id="first-name"
            />
            <Input
              onChange={lastNameHandler}
              onBlur={onBlurLastnameChecks}
              isValid={lastNameIsValid}
              value={userData.lastName}
              type="text"
              label="Apellido"
              name="Last-name"
              id="Last-name"
            />

            <Input
              onChange={emailHandler}
              onBlur={onBlurEmailChecks}
              isValid={emailIsValid}
              value={userData.email}
              type="email"
              label="e-mail"
              name="email"
              id="email"
            />
          </form>
        </div>
        <Button
          className="btn--classic"
          type="button"
          onClick={onCompletionHandler}
        >
          Registrar
        </Button>
        {displayErrorBanner ? (
          <label className="user-data__btn-invalid-msg">
            {userInfoAssociatedContent['user-info-not-valiud-form-error-msg']}
          </label>
        ) : null}
        <p className="disclaimer">
          {userInfoAssociatedContent['user-info-footer-disclaimer']}
        </p>
      </section>
    </BookingFlow>
  );
}

export default UserInfo;
