import styled from 'styled-components';
import { ArticleCursor, ArticleIssue } from './common';

export const Main = styled.main`
  width: 60%;
  height: 100%;
  margin: 0 auto;
  
  @media (max-width: 720px) {
    width: 100%;
  }
`;
export const Article = styled.article`
  ${ArticleIssue}
  ${ArticleCursor}
`;

export const ArticleDetail = styled.article`
  ${ArticleIssue}
`;