import { ComponentPropsWithoutRef } from 'react';
import { StyledButton } from './Button.styles';

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {}
function Button({ children, ...otherProps }: IButtonProps) {
  return (
    <StyledButton type="submit" {...otherProps}>
      {children}
    </StyledButton>
  );
}
export default Button;
