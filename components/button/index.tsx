import style from './Button.module.scss';

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={`${style.classic} ${props.disabled ? style.disabled : ''} `}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
