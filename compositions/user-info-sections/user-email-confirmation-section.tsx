import React from 'react';
import StepDescription from '../../components/input-instruction/input-instruction';
import EmailConfirmationForm from '../user-info-forms/email-confirmation-form';
import Button from '../../components/button-white';
import { userInfoAssociatedContent } from '../../content';

const UserEmailConfirmationSection: React.FC<
  UserEmailConfirmationSectionProps
> = ({
  userEmailCodeRegistrationHandler,
  userEmailCodeRegistrationDone,
  isRegistrationFinalized,
}) => {
  return (
    <section
      className={`user-info__section${!isRegistrationFinalized ? ' disabled' : ''}`}
    >
      <StepDescription
        step={`2) ${userInfoAssociatedContent['step-2']}`}
        content={`${userInfoAssociatedContent['step-2-explanation']}`}
      />
      <EmailConfirmationForm
        isRegistrationFinalized={isRegistrationFinalized}
      />
      <Button
        disabled={userEmailCodeRegistrationDone || !isRegistrationFinalized}
        className="btn--white"
        type="button"
        onClick={userEmailCodeRegistrationHandler}
      >
        CONFIRMAR
      </Button>
    </section>
  );
};

interface UserEmailConfirmationSectionProps {
  isRegistrationFinalized: boolean;
  userEmailCodeRegistrationDone: boolean;
  userEmailCodeRegistrationHandler: (currentInputValue: string) => void;
}

export default UserEmailConfirmationSection;
