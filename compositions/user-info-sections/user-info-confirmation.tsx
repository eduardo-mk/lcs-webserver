import Link from 'next/link';
import Button from '../../components/button-white';
import SimpleTable from '../../components/simple-table';
import { signOut, useSession } from 'next-auth/react';

const UserInfoConfirmation: React.FC<UserInfoConfirmationProps> = ({
  email,
  name,
  userDataConfirmation,
}) => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="sm:flex sm:items-top">
          <div className="sm:flex-auto ">
            <h1 className="text-lg font-semibold leading-6 text-neutral-800">
              Tienes una sesión activa
            </h1>
            <p className="mt-2 text-sm text-neutral-800">
              ¿Podrías confirmar que los datos capturados son correctos?
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block w-40 rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              onClick={userDataConfirmation}
            >
              Si, son correctos
            </button>
            <button
              type="button"
              className="block w-40 mt-3 rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              onClick={() => signOut()}
            >
              No, son incorrectos
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t-2 ring-neutral-100">
        <dl className="divide-y divide-neutral-200">
          <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-neutral-800">
              Nombre
            </dt>
            <dd className="mt-1 text-sm leading-6 text-neutral-800 sm:col-span-2 sm:mt-0">
              {name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-neutral-800">
              Correo Electrónico
            </dt>
            <dd className="mt-1 text-sm leading-6 text-neutral-800 sm:col-span-2 sm:mt-0">
              {email}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

interface UserInfoConfirmationProps {
  email: string;
  name: string;
  userDataConfirmation: () => void;
}
export default UserInfoConfirmation;
