import React from 'react';
import styled from 'styled-components';
import { ArticleCommon } from '../styles/common';
// import styled, { keyframes } from 'styled-components';
// import { useIssueContext } from '../contexts/IssueContext';

const AdvertItem = () => {
  return (
    <Article>
      <a href="https://www.wanted.co.kr/" target="_blank" rel="noreferrer">
        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" alt="원티드 - 나다운 일의 시작"/>
      </a>
    </Article>
  );
};
const Article = styled.article`
  ${ArticleCommon}
  text-align: center;
`;
export default AdvertItem;
