import styled from 'styled-components';

interface IFlexBoxProps {
  display?: 'flex' | 'inline-flex';
  flexGrow?: number;
  direction?: 'row' | 'column';
  justifyContent?: 'space-between';
  isFullHeight?: boolean;
  width?: string;
}

const FlexBox = styled.div<IFlexBoxProps>`
  display: ${(props) => props.display};
  flex-grow: ${(props) => props.flexGrow};
  flex-direction: ${(props) => props.direction};
  ${(props) =>
    props.isFullHeight &&
    `
  height: 100vh;
  `}
  ${(props) =>
    props.width &&
    `
  width: ${props.width};
  `}

  ${(props) =>
    props.justifyContent &&
    `
  justify-content: ${props.justifyContent};
  `}
`;
export default FlexBox;
