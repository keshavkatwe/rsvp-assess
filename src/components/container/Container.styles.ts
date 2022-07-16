import styled from 'styled-components';

export const ContainerStyles = styled.div<{
  backgroundColor: string;
  borderRadius: string;
  padding: string;
  height?: string;
  margin?: string;
}>`
  background: ${(props) => props.backgroundColor};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
  ${(props) =>
    props.height &&
    `
  height: ${props.height};
  `}
`;
