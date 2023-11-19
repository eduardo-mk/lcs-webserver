import styles from './Input.module.scss';
const invalidTag = `input-classic--invalid`;

const Input = (props) => {
  return (
    <div
      className={`${styles['input-classic']} input-classic ${
        props.isValid ? '' : styles['input-classic--invalid']
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        autoComplete="off"
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
