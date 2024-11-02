import { useEffect } from 'react';

export const InputCodeConfirmation: React.FC<InputCodeConfirmationArgs> = ({
  onConfirmationCodeKeyUp,
  disabled,
}) => {
  useEffect(() => {
    const inputElements =
      document.querySelectorAll<HTMLInputElement>('input.code-input');

    inputElements.forEach((ele, index) => {
      ele.addEventListener('keydown', (e: KeyboardEvent) => {
        if (
          e.key === 'Backspace' &&
          (e.target as HTMLInputElement).value === ''
        ) {
          const prevInput = inputElements[Math.max(0, index - 1)];
          if (prevInput) prevInput.focus();
        }
      });

      ele.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement;
        const [first, ...rest] = target.value;
        target.value = first ?? '';

        const lastInputBox = index === inputElements.length - 1;
        const didInsertContent = first !== undefined;

        if (didInsertContent && !lastInputBox) {
          const nextInput = inputElements[index + 1];
          if (nextInput) {
            nextInput.focus();
            nextInput.value = rest.join('');
            nextInput.dispatchEvent(new Event('input'));
          }
        }
      });
    });

    return () => {
      inputElements.forEach((ele, index) => {
        ele.removeEventListener('keydown', () => {});
        ele.removeEventListener('input', () => {});
      });
    };
  }, []);

  const registerCodeDigit: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    let currentValue = [];
    document
      .querySelectorAll<HTMLInputElement>('input.code-input')
      .forEach((element) => {
        currentValue.push(element.value);
      });
    onConfirmationCodeKeyUp(currentValue.join(''));
  };
  return (
    <>
      <legend className="code-title">Código de confirmación</legend>
      <fieldset className="number-code">
        <div>
          <input
            disabled={disabled}
            name="code-1"
            className="code-input"
            required
            onKeyUp={registerCodeDigit}
          />
          <input
            disabled={disabled}
            name="code-2"
            className="code-input"
            required
            onKeyUp={registerCodeDigit}
          />
          <input
            disabled={disabled}
            name="code-3"
            className="code-input"
            required
            onKeyUp={registerCodeDigit}
          />
          <input
            disabled={disabled}
            name="code-4"
            className="code-input"
            required
            onKeyUp={registerCodeDigit}
          />
        </div>
      </fieldset>
    </>
  );
};

interface InputCodeConfirmationArgs {
  onConfirmationCodeKeyUp: (currentInputValue: string) => void;
  disabled?: boolean;
}
