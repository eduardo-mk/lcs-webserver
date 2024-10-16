import style from './Button.module.scss';

const Button = (props) => {
  const customClass = props.className
    ? `btn ${props.className}` // Core
    : style.classic; // Default
  return (
    <button
      disabled={props.disabled}
      className={`${customClass} ${props.disabled ? style.disabled : ''} `}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
