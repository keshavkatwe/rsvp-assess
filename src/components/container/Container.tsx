import { ReactNode } from 'react';
import { ContainerStyles } from './Container.styles';
import { secondaryBackground, transparent } from '../../constants/colors';

interface IContainerProps {
  children: ReactNode;
  padding?: string;
  backgroundColor?: 'secondaryBackground' | 'transparent';
  borderRadius?: number[];
  height?: string;
}

const backgroundColors = {
  secondaryBackground,
  transparent,
};

function Container({
  children,
  padding = '20px',
  backgroundColor = 'transparent',
  borderRadius = [0],
  height,
}: IContainerProps) {
  return (
    <ContainerStyles
      backgroundColor={backgroundColors[backgroundColor]}
      padding={padding}
      borderRadius={borderRadius.map((item) => `${item}px`).join(' ')}
      height={height}
    >
      {children}
    </ContainerStyles>
  );
}
export default Container;
