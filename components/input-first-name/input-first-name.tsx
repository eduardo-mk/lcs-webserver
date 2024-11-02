import { Dispatch, useState } from 'react';
import Input from '../input/input';
import { validateFirstName } from '../../misc';
import {
  useDispatchContext,
  useStateContext,
} from '../../reducers/booking/context';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

function FirstNameInput({ disabled }) {
  const { userData } = useStateContext();
  const dispatch = useDispatchContext();
  const [firstNameIsValid, setFirstNameIsValid] = useState(true);

  function firstNameHandler(event: InputChangeEvent) {
    setFirstNameIsValid(validateFirstName(event.target.value.length));
    dispatch({
      type: 'user_data/update',
      payload: { firstName: event.target.value },
    });
  }

  function onBlurNameHandlerChecks(event: InputChangeEvent) {
    setFirstNameIsValid(validateFirstName(event.target.value.length));
  }

  return (
    <Input
      disabled={disabled}
      onChange={firstNameHandler}
      onBlur={onBlurNameHandlerChecks}
      isValid={firstNameIsValid}
      value={userData.firstName}
      type="text"
      label="Nombre"
      name="first-name"
      id="first-name"
    />
  );
}

export default FirstNameInput;
