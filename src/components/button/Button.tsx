import { ComponentPropsWithoutRef } from 'react';

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {}
function Button({ children, ...otherProps }: IButtonProps) {
  return (
    <button type="submit" {...otherProps}>
      {children}
    </button>
  );
}
export default Button;
