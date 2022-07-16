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
`;

export const StyledInput = styled.input`
  ${ControlCss}
`;
