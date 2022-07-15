import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import { defaultBackground, whiteColor } from '../../constants/colors';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${defaultBackground};
    color: ${whiteColor};
  }
`;
export default GlobalStyle;
