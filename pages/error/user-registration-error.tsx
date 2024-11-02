import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dogPensative from '../../public/images/dog-pensative.png';
import { userInfoAssociatedContent } from '../../content';

const UserRegistrationError: React.FC = () => {
  return (
    <div className="user-info__page">
      <section className="user-info">
        <div className="user-info__error">
          <div className="user-info__error-image--wrapper">
            <Image
              src={dogPensative}
              alt="Pensative dog"
              style={{
                width: 'auto',
                height: '45rem',
              }}
              sizes="100vw"
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
    </div>
  );
};

export default UserRegistrationError;
