import ButtonAuthGoogle from '../../components/button_auth_google/button_auth_google';
import { signIn, signOut, useSession } from 'next-auth/react';
import ButtonAuthEmail from '../../components/button_auth_email/button_auth_email';
import { useRouter } from 'next/router';

const UserInfoAuthProviders: React.FC<UserSimpleRegistrationProps> = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const signingIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await signIn('google', {
      callbackUrl: '/booking/user-info',
      redirect: true,
    });
  };

  const signingOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await signOut({ callbackUrl: '/booking/user-info', redirect: true });
  };

  return (
    <section className="user-info__auth-providers">
      {session ? (
        <ButtonAuthGoogle
          onClickCallback={signingOut}
          message={'Cerrar sesión con Google'}
        />
      ) : (
        <ButtonAuthGoogle
          message={'Acceso con Google'}
          onClickCallback={signingIn}
        />
      )}
      <ButtonAuthEmail
        message={'Acceso con correo'}
        onClickCallback={() => router.push('/login-email')}
      />
    </section>
  );
};

interface UserSimpleRegistrationProps {}

export default UserInfoAuthProviders;
