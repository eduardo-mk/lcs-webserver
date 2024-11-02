import React from 'react';
import FirstNameInput from '../../components/input-first-name/input-first-name';
import LastNameInput from '../../components/input-lastname/input-lastname';
import EmailInput from '../../components/input-email/input-email';

interface BasicInfoFormProps {
  disabled: boolean;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ disabled }) => {
  return (
    <form className="user-info__form-info-basic">
      <FirstNameInput disabled={disabled} />
      <LastNameInput disabled={disabled} />
      <EmailInput disabled={disabled} />
    </form>
  );
};

export default BasicInfoForm;
