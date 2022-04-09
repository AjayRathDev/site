import { createGlobalStyle } from 'styled-components';
import 'typeface-source-code-pro';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Source Code Pro;
  }
  * {
      margin: 0;
      padding: 0;
  }
`;
 
export default GlobalStyle;