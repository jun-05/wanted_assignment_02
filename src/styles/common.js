import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Nanum Gothic';
  }
  div#root {
    height: 100%;
  }
  body {
    background: #fafafa;
  }
  p {
    margin: 0;
  }
  @font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 400;
    src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.eot);
    src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.eot?#iefix) format('embedded-opentype'),
         url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.woff) format('woff'),
         url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 700;
    src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.eot);
    src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.eot?#iefix) format('embedded-opentype'),
        url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.woff) format('woff'),
        url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.ttf) format('truetype');
  }
`;

export const CommonStyle = css`
  width: 80%;
  margin: 0 auto;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // padding-bottom: 10%;

  // h1 {
  //   text-align: center;
  //   font-size: 1.5em;
  // }
s`;

export const ArticleCommon = css`
  padding: 0.8em 1em;
  margin: 0.5em 0;
  border-bottom: 1px solid #a8a8a8;
`;