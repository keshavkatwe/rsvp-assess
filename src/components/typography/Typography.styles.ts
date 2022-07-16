import styled from 'styled-components';

export const StyledTypography = styled.h1<{
  fontSize: string;
  color: string;
  margin: string;
  align?: 'left' | 'right' | 'center';
}>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.align};
  font-weight: 400;
  display: inline-block;
  width: 100%;
`;
