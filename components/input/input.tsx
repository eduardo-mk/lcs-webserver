// import styles from './Input.module.scss';
// const invalidTag = `input-classic--invalid`;

interface InputProps {
  isValid: boolean;
  name: string;
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const disabled = props.disabled ? 'disabled' : '';
  const invalid = props.isValid ? '' : 'input-classic--invalid';
  return (
    <div className={`input-classic ${disabled} ${invalid}`}>
      <label htmlFor={props.id}>
        {props.label}
        {disabled ? (
          <span style={{ color: 'lime' }}> &#10004;&#xfe0e;</span>
        ) : null}
      </label>
      <input
        name={props.name}
        disabled={props.disabled}
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
