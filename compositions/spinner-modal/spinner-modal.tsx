import { useStateContext } from '../../reducers/booking/context';

interface SpinnerModalEntireScreenProps {
  blurBackground: boolean;
}

const SpinnerModalEntireScreen: React.FC<SpinnerModalEntireScreenProps> = ({
  blurBackground,
}) => {
  const { apiLoading } = useStateContext();

  if (apiLoading) {
    return (
      <div
        className={`loader__wrapper${blurBackground ? ' blur_background' : ''}`}
      >
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return null;
};

export default SpinnerModalEntireScreen;
