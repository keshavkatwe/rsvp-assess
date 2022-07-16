import { ReactNode } from 'react';
import { StyledTypography } from './typography.styles';
import { defaultTextColor, textColor2 } from '../../constants/colors';

type ITypographySizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface ITypographyProps {
  variant?: ITypographySizes;
  color?: 'defaultTextColor' | 'textColor2';
  margin?: number[];
  align?: 'left' | 'right' | 'center';
  children: ReactNode;
}
function Typography({
  variant = 'h4',
  color = 'defaultTextColor',
  margin = [0],
  children,
  align,
  ...otherProps
}: ITypographyProps) {
  const sizes = {
    h1: '22px',
    h2: '20px',
    h3: '18px',
    h4: '14px',
    h5: '12px',
  };
  const colors = {
    defaultTextColor,
    textColor2,
  };
  return (
    <StyledTypography
      fontSize={sizes[variant]}
      color={colors[color]}
      margin={margin?.map((item) => `${item}px`).join(' ')}
      align={align}
      {...otherProps}
    >
      {children}
    </StyledTypography>
  );
}
export default Typography;
