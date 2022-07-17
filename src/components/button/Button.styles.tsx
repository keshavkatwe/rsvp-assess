import styled from 'styled-components';
import { ControlCss } from '../inputBox/InputBox.styles';
import { primaryColor, whiteColor } from '../../constants/colors';

export const StyledButton = styled.button`
  ${ControlCss}
  background-color: ${primaryColor};
  color: ${whiteColor};

  &:disabled {
    background-color: #f6690785;
  }
`;

const size = '32px';

export const StyledSpinner = styled.div`
  border: 6px solid #7f7f7f;
  border-top: 6px solid #ffffff;
  border-radius: 50%;
  width: ${size};
  height: ${size};
  animation: spin 2s linear infinite;
  display: inline-block;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
