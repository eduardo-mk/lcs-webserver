import { useState } from 'react';
import Input from '../input/input';
import { validateLastName } from '../../misc';
import {
  useDispatchContext,
  useStateContext,
} from '../../reducers/booking/context';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface LastNameInputProps {
  disabled: boolean;
}

function LastNameInput({ disabled }: LastNameInputProps) {
  const { userData } = useStateContext();
  const dispatch = useDispatchContext();
  const [lastnameIsValid, setLastnameIsValid] = useState(true);

  function lastNameHandler(event: InputChangeEvent) {
    setLastnameIsValid(validateLastName(event.target.value.length));
    dispatch({
      type: 'user_data/update',
      payload: { lastName: event.target.value },
    });
  }

  function onBlurLastnameChecks(event: InputChangeEvent) {
    setLastnameIsValid(validateLastName(event.target.value.length));
  }

  return (
    <Input
      disabled={disabled}
      onChange={lastNameHandler}
      onBlur={onBlurLastnameChecks}
      isValid={lastnameIsValid}
      value={userData.lastName}
      type="text"
      label="Apellido"
      name="Last-name"
      id="Last-name"
    />
  );
}

export default LastNameInput;
