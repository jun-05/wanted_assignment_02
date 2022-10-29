import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
* {
	box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
	background-color: #5D5FEF;
  font-family: 'Nanum Gothic Coding', monospace;
}
body * {
	background-color: transparent;
	letter-spacing: -0.5px;
}
h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 1.8rem;
  padding: 1rem 0;
}
h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  padding: 1rem 0;
}
h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  padding: 1rem 0;
}
span {
  font-size: 1rem;
}
p {
  display: block;
  padding: 1rem 0;
  letter-spacing: 0.02rem;
  line-height: 1.3rem;
}
a {
	text-decoration: underline;
  color: blue;
  cursor: pointer;
}
`;
export default GlobalStyle;
