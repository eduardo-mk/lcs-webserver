import style from './Button.module.scss';

const ButtonWhite = (props) => {
  // const customClass = props.className
  //   ? `btn ${props.className}` // Core
  //   : style.classic; // Default
  return (
    <button
      disabled={props.disabled}
      className={`rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonWhite;
