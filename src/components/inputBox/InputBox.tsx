import { ComponentPropsWithoutRef } from 'react';
import { StyledInput } from './InputBox.styles';
import Typography from '../typography/Typography';
import {
  secondaryBackground,
  secondaryBackground3,
} from '../../constants/colors';

interface IInputBoxProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  color?: 'primary' | 'dark';
}
function InputBox({ label, color = 'primary', ...otherProps }: IInputBoxProps) {
  const colors = {
    primary: secondaryBackground3,
    dark: secondaryBackground,
  };
  return (
    <>
      {label && (
        <Typography variant="h3" margin={[0, 0, 10, 0]}>
          {label}
        </Typography>
      )}

      <StyledInput {...otherProps} background={colors[color]} />
    </>
  );
}
export default InputBox;
