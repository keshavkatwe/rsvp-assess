import styled, { css } from 'styled-components';
import { textColor3 } from '../../constants/colors';

export const ControlCss = css`
  width: 100%;
  background-color: #27263d;
  border: 0;
  border-radius: 20px;
  outline: none;
  padding: 0 16px;
  color: ${textColor3};
  font-weight: 500;
  font-size: 20px;
  height: 50px;

  ::placeholder {
    font-weight: 400;
  }
`;

export const StyledInput = styled.input<{ background: string }>`
  ${ControlCss}
  background: ${(props) => props.background}
`;
