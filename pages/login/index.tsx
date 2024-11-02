// import { signIn, signOut, useSession } from 'next-auth/react';
// import { useDispatchContext } from '../../reducers/booking/context';
// import { googleOauthRequestUrl } from '../../services/google-oauth-request';

// function Login() {
//   const { data: session } = useSession();
//   if (session) {
//     return (
//       <section className="login__section">
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </section>
//     );
//   }
//   return (
//     <section className="login__section">
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </section>
//   );
// const dispatch = useDispatchContext();

// async function auth() {
//   await googleOauthRequestUrl(dispatch);
// }

// return (
//   <section className="login__section">
//     <h1>Login page</h1>
// <button className="gsi-material-button" onClick={auth}>
//   <div className="gsi-material-button-state"></div>
//   <div className="gsi-material-button-content-wrapper">
//     <div className="gsi-material-button-icon">
//       <svg
//         version="1.1"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 48 48"
//         xmlnsXlink="http://www.w3.org/1999/xlink"
//         style={{ display: 'block' }}
//       >
//         <path
//           fill="#EA4335"
//           d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
//         ></path>
//         <path
//           fill="#4285F4"
//           d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
//         ></path>
//         <path
//           fill="#FBBC05"
//           d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
//         ></path>
//         <path
//           fill="#34A853"
//           d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
//         ></path>
//         <path fill="none" d="M0 0h48v48H0z"></path>
//       </svg>
//     </div>
//     <span className="gsi-material-button-contents">
//       Sign in with Google
//     </span>
//     <span style={{ display: 'none' }}>Sign in with Google</span>
//   </div>
// </button>
//   </section>
// );
// }

import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
// import Button from '../../components/button';
import { googleAuthConfig } from '../../services/google-oauth-config';
import ButtonAuthGoogle from '../../components/button_auth_google/button_auth_google';
import { redirect, RedirectType } from 'next/navigation';
import { useRouter } from 'next/router';
import Button from '../../components/button-white';
import Image from 'next/image';

export default function Login({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: session } = useSession();
  const router = useRouter();
  const signingOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();
    // router.push('/');
    await signOut({ callbackUrl: '/', redirect: true });
  };

  const signingIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();
    // router.push('/');
    await signIn('google', {
      callbackUrl: '/',
      redirect: true,
    });
  };

  return (
    <>
      <div className="overflow-hidden bg-white shadow">
        <div className="min-h-screen flex items-center mt-52 flex-col">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-[1097/845] w-[30rem] sm:w-[30rem] md:w-[50rem] lg:w-[68.5625rem] bg-gradient-to-tr from-[#bd5353] to-[#f0a4b1] opacity-40"
            />
            <div
              style={{
                clipPath:
                  'polygon(13% 22%, 67% 21%, 11% 65%, 67% 69%, 36% 63%, 31% 31%, 21% 93%, 92% 47%, 34% 6%, 0% 35%, 87% 91%)',
              }}
              className="aspect-[1097/845] w-[30rem] sm:w-[30rem] md:w-[50rem] lg:w-[68.5625rem] bg-gradient-to-br from-[#66bd53] to-[#a4f0a6] opacity-40"
            />
          </div>
          <div className="p-8 max-w-md">
            <div className="flex flex-row align-middle justify-center space-x-3">
              <h2 className="text-2xl font-bold text-center mb-6">
                Iniciar sesión
              </h2>
              <Image
                className="h-[3rem] w-auto text-neutral-100 pb-4"
                src="/logo/veronica-isotipo.svg"
                alt="logo"
                width={50}
                height={50}
                priority={true}
              />
            </div>

            <div className="flex flex-col space-y-4">
              {/* {JSON.stringify(session)} */}
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
            </div>
            <p className="pt-4 text-sm">
              Necesitamos un correo electronico válido y tu nombre, solo
              usaremos esa información para mandarte un formulario de salud
              previo a la cita y los comprobantes de pago. No lo usaremos para
              enviar publicidad, visita nuestras políticas de privacidad.
            </p>
          </div>
        </div>

        <div className="px-4 py-4 sm:px-6">
          {/* Content goes here */}
          {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
        </div>
      </div>
    </>
  );
  // return (
  //   <section className="login__section">
  //     {JSON.stringify(session)}
  //     {session ? (
  //       <ButtonAuthGoogle
  //         onClickCallback={signingOut}
  //         message={'Cerrar sesión con Google'}
  //       />
  //     ) : (
  //       <ButtonAuthGoogle
  //         message={'Acceso con Google'}
  //         onClickCallback={signingIn}
  //       />
  //     )}
  //   </section>
  // );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(
    context.req,
    context.res,
    googleAuthConfig
  );

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  // if (session) {
  //   return { redirect: { destination: '/' } };
  // }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
