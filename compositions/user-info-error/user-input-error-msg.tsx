import React from 'react';
import { userInfoAssociatedContent } from '../../content';

interface UserInputErrorMsgProps {
  displayErrorBanner: boolean;
}

const UserInputErrorMsg: React.FC<UserInputErrorMsgProps> = ({
  displayErrorBanner,
}) => {
  if (!displayErrorBanner) {
    return null;
  }

  return (
    <div className="user-info__input-error">
      {displayErrorBanner ? (
        <p className="user-info__input-error-msg">
          {userInfoAssociatedContent['user-info-not-valiud-form-error-msg']}
        </p>
      ) : null}
    </div>
  );
};

export default UserInputErrorMsg;
