import { ComponentPropsWithoutRef } from 'react';
import { StyledInput } from './InputBox.styles';
import Typography from '../typography/Typography';

interface IInputBoxProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
}
function InputBox({ label, ...otherProps }: IInputBoxProps) {
  return (
    <>
      {label && (
        <Typography variant="h3" margin={[0, 0, 10, 0]}>
          {label}
        </Typography>
      )}

      <StyledInput {...otherProps} />
    </>
  );
}
export default InputBox;
