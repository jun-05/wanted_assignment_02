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
s`;

export const ArticleCommon = css`
  padding: 0.8em 1em;
  @media (max-width: 720px) {
    padding: 0.6em 0;
  }
  border-bottom: 1px solid #a8a8a8;
  box-sizing: border-box;
`;

export const ArticleIssue = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${ArticleCommon}
  
  div.contents {
    width: 80%;
    div {
      padding: 0.5em 0;
    }
    p {
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 1em;
    }
    .title p {
      @media (max-width: 720px) {
        font-size: 0.9em;
      }
    }
    .info p {
      @media (max-width: 720px) {
        font-size: 0.75em;
      }
    }
    .info span {
      font-weight: bold;
    }
  }

  div.comment {
    text-align: center;
  }

  @media (max-width: 720px) {
    div.contents {
      width: 65%;
    }
    div.comment {
      span {
        font-size: 0.7em;
      }
    }
  }

  img {
    width: 100px;

    @media (max-width: 720px) {
      width: 50px;
    }
  }
`;

export const ArticleCursor = css`
  cursor: pointer;
`;