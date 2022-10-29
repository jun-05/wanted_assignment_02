import React from 'react';
import styled from 'styled-components';

const Issue = ({ issue }) => {
  return (
    <Wrapper>
      <ContentsWrapper>
        <TitleWrapper>
          # {issue.number} {issue.title}
        </TitleWrapper>
        <WriterInfoWrapper>
          작성자 : {issue.user.login}, 작성일 : {issue.created_at}
        </WriterInfoWrapper>
      </ContentsWrapper>
      <CommentsWrapper>코멘트: {issue.comments}</CommentsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-overflow: ellipsis;
  padding: 0.1rem;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  cursor: pointer;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.5rem;
  padding-bottom: 0.6rem;
  @media (min-width: 1280px) {
    /* Desktop */
    width: 50rem;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    /* Tablet */
    width: 31rem;
  }
  @media (max-width: 767px) {
    /* Mobile */
    width: 34rem;
  }
`;

const TitleWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const WriterInfoWrapper = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export default Issue;
