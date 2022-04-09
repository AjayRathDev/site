import { createGlobalStyle } from 'styled-components';


// import myImage from '../styles/i';

// /* ... */

// const HeaderImage = styled.div`
//   background-image: url(${myImage});
// `;
// const img= img1` {
//   border-radius: 50%;
// }`
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  * {
      margin: 0;
      padding: 0;
  }
`;
 
export default GlobalStyle;