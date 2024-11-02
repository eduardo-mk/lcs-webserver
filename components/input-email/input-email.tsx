import { Dispatch, useState } from 'react';
import Input from '../input/input';
import { validateEmail } from '../../misc';
import {
  useDispatchContext,
  useStateContext,
} from '../../reducers/booking/context';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

function EmailInput({ disabled }) {
  const { userData } = useStateContext();
  const dispatch = useDispatchContext();
  const [emailIsValid, setEmailIsValid] = useState(true);

  function emailHandler(event: InputChangeEvent) {
    setEmailIsValid(validateEmail(event.target.value));
    dispatch({
      type: 'user_data/update',
      payload: { email: event.target.value },
    });
  }

  function onBlurEmailChecks(event: InputChangeEvent) {
    setEmailIsValid(validateEmail(event.target.value));
  }

  return (
    <Input
      disabled={disabled}
      onChange={emailHandler}
      onBlur={onBlurEmailChecks}
      isValid={emailIsValid}
      value={userData.email}
      type="email"
      label="e-mail"
      name="email"
      id="email"
    />
  );
}

export default EmailInput;
