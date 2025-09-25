import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-family: Arial, sans-serif;
    font-size: 62.5%;
  }

  body{
    width: 100%;
    height: 100vh;
    background-color: blue;
  }

  h1{
    color: #FFFFFF;
  }
`;