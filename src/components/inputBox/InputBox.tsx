import { ComponentPropsWithoutRef } from 'react';
import { StyledInput } from './InputBox.styles';

interface IInputBoxProps extends ComponentPropsWithoutRef<'input'> {}
function InputBox({ ...otherProps }: IInputBoxProps) {
  return <StyledInput {...otherProps} />;
}
export default InputBox;
