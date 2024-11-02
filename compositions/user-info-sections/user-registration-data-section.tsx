import React from 'react';
import StepDescription from '../../components/input-instruction/input-instruction';
import BasicInfoForm from '../user-info-forms/basic-information-form';
import Button from '../../components/button-white';
import UserInputErrorMsg from '../user-info-error/user-input-error-msg';
import { userInfoAssociatedContent } from '../../content';
import { useStateContext } from '../../reducers/booking/context';

const UserRegistrationSection: React.FC<UserRegistrationSectionProps> = ({
  isRegistrationFinalized,
  userDataRegistrationCompletionHandler,
}) => {
  const { userDataIsValid } = useStateContext();

  let displayErrorBanner =
    userDataIsValid !== undefined && userDataIsValid === false;

  return (
    <section
      className={`user-info__section${isRegistrationFinalized ? ' disabled' : ''}`}
    >
      <StepDescription
        step={`1) ${userInfoAssociatedContent['step-1']}`}
        content={userInfoAssociatedContent['user-info-footer-disclaimer']}
      />

      <BasicInfoForm disabled={isRegistrationFinalized} />
      <Button
        disabled={isRegistrationFinalized}
        className="btn--classic"
        type="button"
        onClick={userDataRegistrationCompletionHandler}
      >
        {isRegistrationFinalized
          ? userInfoAssociatedContent['registration-done-button']
          : userInfoAssociatedContent['registration-button']}
      </Button>

      <UserInputErrorMsg displayErrorBanner={displayErrorBanner} />
    </section>
  );
};

interface UserRegistrationSectionProps {
  isRegistrationFinalized: boolean;
  userDataRegistrationCompletionHandler: () => void;
}

export default UserRegistrationSection;
