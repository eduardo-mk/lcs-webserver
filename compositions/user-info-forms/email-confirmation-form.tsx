import React from 'react';
import { InputCodeConfirmation } from '../../components/input-code-confirmation';
import { useDispatchContext } from '../../reducers/booking/context';

const EmailConfirmationForm: React.FC<EmailConfirmationFormProps> = ({
  isRegistrationFinalized,
}) => {
  const dispatch = useDispatchContext();

  const keyUpHandler = (code: string) => {
    dispatch({
      type: 'user_data/update',
      payload: { email_confirmation_code: code },
    });
  };

  return (
    <form className="user-info__form-email-confirmation">
      <InputCodeConfirmation
        onConfirmationCodeKeyUp={keyUpHandler}
        disabled={!isRegistrationFinalized}
      />
    </form>
  );
};

interface EmailConfirmationFormProps {
  isRegistrationFinalized: boolean;
}

export default EmailConfirmationForm;
