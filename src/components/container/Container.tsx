import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { ContainerStyles } from './Container.styles';
import {
  secondaryBackground,
  secondaryBackground2,
  transparent,
} from '../../constants/colors';

interface IContainerProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  padding?: string;
  backgroundColor?:
    | 'secondaryBackground'
    | 'transparent'
    | 'secondaryBackground2';
  borderRadius?: number[];
  height?: string;
  margin?: number[];
}

const backgroundColors = {
  secondaryBackground,
  transparent,
  secondaryBackground2,
};

function Container({
  children,
  padding = '20px',
  backgroundColor = 'transparent',
  borderRadius = [0],
  height,
  margin,
  ...otherProps
}: IContainerProps) {
  return (
    <ContainerStyles
      backgroundColor={backgroundColors[backgroundColor]}
      padding={padding}
      borderRadius={borderRadius.map((item) => `${item}px`).join(' ')}
      height={height}
      margin={margin?.map((value) => `${value}px`).join(' ')}
      {...otherProps}
    >
      {children}
    </ContainerStyles>
  );
}
export default Container;
