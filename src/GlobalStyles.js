import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html{
font-size: 62.5%;
font-family: 'Nanum Gothic Coding', monospace;
}

body * {
	background-color: transparent;
	letter-spacing: -0.5px;
  
}

`;
