import { memo, useEffect, useState } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
// import fetch from 'node-fetch'
//
async function registerUser(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function validateLastName(value) {
  return value > 1;
}

function validateFirstName(value) {
  return value > 1;
}

const validateEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

function UserInfo({ onUserDataCompletion }) {
  const [firstName, setFirstName] = useState('');
  const [firstNameIsValid, setFirstNameIsValid] = useState(true);

  const [lastName, setLastName] = useState('');
  const [lastNameIsValid, setLastNameIsValid] = useState(true);

  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true);

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const isFormValidEnough =
      firstNameIsValid && lastNameIsValid && emailIsValid;
    setFormIsValid(isFormValidEnough);
  }, [
    firstName,
    emailIsValid,
    firstNameIsValid,
    lastName,
    lastNameIsValid,
    email,
  ]);

  function firstNameHandler(event) {
    setFirstName(event.target.value);
  }

  function onBlurNameHandlerChecks(event) {
    setFirstNameIsValid(validateFirstName(event.target.value.length));
  }

  function lastNameHandler(event) {
    setLastName(event.target.value);
  }
  function onBlurLastnameChecks(event) {
    setLastNameIsValid(validateLastName(event.target.value.length));
  }

  function emailHandler(event) {
    setEmail(event.target.value);
  }
  function onBlurEmailChecks(event) {
    setEmailIsValid(validateEmail(event.target.value));
  }

  function onCompletionHandler() {
    const firstNameIsValid = validateFirstName(firstName.length);
    const lastNameIsValid = validateLastName(lastName.length);
    const emailIsValid = validateEmail(email);

    const valid = firstNameIsValid && lastNameIsValid && emailIsValid;
    setFormIsValid(valid);
    if (valid) {
      fetch('api/register-user', {
        method: 'POST',
        body: JSON.stringify({ name: firstName, lastName, email }), // body data type must match "Content-Type" header
      }).then(async (rawData) => {
        const data = await rawData.json();
        onUserDataCompletion({
          firstName,
          lastName,
          email,
          formIsValid: valid,
          userRegistrationId: data.payload.id,
        });
      });
    }
  }

  return (
    <section className="user-data">
      <div className="user-data__contact-basic">
        <form>
          <Input
            onChange={firstNameHandler}
            onBlur={onBlurNameHandlerChecks}
            isValid={firstNameIsValid}
            value={firstName}
            type="text"
            label="First name"
            name="first-name"
            id="first-name"
          />
          <Input
            onChange={lastNameHandler}
            onBlur={onBlurLastnameChecks}
            isValid={lastNameIsValid}
            value={lastName}
            type="text"
            label="Last name"
            name="Last-name"
            id="Last-name"
          />

          <Input
            onChange={emailHandler}
            onBlur={onBlurEmailChecks}
            isValid={emailIsValid}
            value={email}
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
        Done
      </Button>
      {formIsValid ? null : (
        <label className="user-data__btn-invalid-msg">
          Please check your answers
        </label>
      )}
      <p className="disclaimer">
        La informacion sera utilizada para mandarle un cuestionario de salud. Le
        recomendamos contestar dicho cuestionario antes de la consulta para
        aprovechar mejor el tiempo.
      </p>
    </section>
  );
}

export default memo(UserInfo);
