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
    <section className="user-info__session-data">
      <p className="medium-text">Datos capturados:</p>
      <SimpleTable
        data={[
          { title: 'Paciente', value: name },
          { title: 'Correo', value: email },
        ]}
      />
      <p className="medium-text">¿Esta información es correcta?</p>
      {/* <Link href="/booking/plans" className="btn btn--white btn--animated">
        Son correctos
      </Link> */}
      <Button
        disabled={false}
        className="btn--white"
        type="button"
        onClick={userDataConfirmation}
      >
        SI, ES CORRECTA
      </Button>
      <Button
        disabled={false}
        className="btn--white"
        type="button"
        onClick={signOut}
      >
        NO, ES INCORRECTA
      </Button>
    </section>
  );
};

interface UserInfoConfirmationProps {
  email: string;
  name: string;
  userDataConfirmation: () => void;
}
export default UserInfoConfirmation;
