import styled from 'styled-components';
import { ControlCss } from '../inputBox/InputBox.styles';
import { primaryColor, whiteColor } from '../../constants/colors';

export const StyledButton = styled.button`
  ${ControlCss}
  background-color: ${primaryColor};
  color: ${whiteColor};
`;
