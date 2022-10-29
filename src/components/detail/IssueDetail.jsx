import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getIssue, useIssuesDispatch, useIssuesState } from '../../context/IssuesContext';
import { getCurDate } from '../../utils/date';
import IssueBody from './IssueBody';

const IssueDetail = () => {
  const { issueNum } = useParams();
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();

  const { data: issue, loading, error } = state.issue;

  useEffect(() => {
    getIssue(dispatch, issueNum);
    return () => {};
  }, []);

  if (loading) return <div>로딩중..</div>;
  else if (error) return <div>에러가 발생했습니다</div>;
  else if (issue)
    return (
      <Wrapper>
        <InfoWrapper>
          <UserProfile>
            <UserImg src={issue.user.avatar_url} />
          </UserProfile>
          <ContentsWrapper>
            <TitleWrapper>
              # {issueNum} {issue.title}
            </TitleWrapper>
            <WriterInfoWrapper>
              작성자 : {issue.user.login}, 작성일 : {getCurDate(issue.created_at)}
            </WriterInfoWrapper>
          </ContentsWrapper>
          <CommentsWrapper>코멘트: {issue.comments}</CommentsWrapper>
        </InfoWrapper>
        <IssueBody body={issue.body} />
      </Wrapper>
    );
};

const Wrapper = styled.div`
  background-color: rgb(255, 255, 255);
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  min-height: 45rem;
  @media (min-width: 1280px) {
    /* Desktop */
    width: 60rem;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    /* Tablet */
    width: 50rem;
  }
  @media (max-width: 767px) {
    /* Mobile */
    width: 40rem;
  }
`;

const InfoWrapper = styled.div`
  padding: 0.5rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  display: flex;
  flex-direction: row;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 0.5rem 0rem 0.5rem;
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
    width: 28rem;
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

const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  gap: 1.5rem;
  cursor: pointer;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const UserImg = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: contain;
`;

export default IssueDetail;
