import { ComponentPropsWithoutRef } from 'react';
import { StyledIcon } from './Icon.styles';

interface IIconProps extends ComponentPropsWithoutRef<'img'> {}
function Icon({ ...otherProps }: IIconProps) {
  return <StyledIcon {...otherProps} />;
}
export default Icon;
