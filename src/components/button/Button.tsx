import { ComponentPropsWithoutRef } from 'react';
import { StyledButton, StyledSpinner } from './Button.styles';

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
  isLoading?: boolean;
}
function Button({ children, isLoading, ...otherProps }: IButtonProps) {
  return (
    <StyledButton type="submit" {...otherProps} disabled={isLoading}>
      {isLoading ? <StyledSpinner /> : children}
    </StyledButton>
  );
}
export default Button;
