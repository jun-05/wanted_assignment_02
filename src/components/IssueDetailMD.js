import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

function IssueDetailMD({ issueDetail }) {
  const year = new Date(issueDetail?.created_at).getFullYear() + '년';
  const month = new Date(issueDetail?.created_at).getMonth() + 1 + '월';
  const day = new Date(issueDetail?.created_at).getDate() + '일';
  const date = `${year}  ${month}  ${day}`;

  return (
    <IssueDetailContainer>
      <DetailTitleBox>
        <img src={issueDetail?.user.avatar_url} alt="" />
        <DetailTitle>
          {issueDetail?.title}
          <span>
            작성자: {issueDetail?.name} 작성일: {date}
          </span>
        </DetailTitle>
        <CommentsBox>
          <p>
            comments<span>{issueDetail?.comments} </span>{' '}
          </p>
        </CommentsBox>
      </DetailTitleBox>
      <BodyMarkDown>
        <ReactMarkdown>{issueDetail?.body}</ReactMarkdown>
      </BodyMarkDown>
    </IssueDetailContainer>
  );
}

export default IssueDetailMD;

const IssueDetailContainer = styled.div`
  width: 100%;
  margin: auto;
  max-width: 800px;
  margin-top: 85px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
`;

const DetailTitleBox = styled.div`
  width: 100%;
  padding: 10px 10px;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
  }
`;

const DetailTitle = styled.p`
  font-size: 1.5rem;
  padding: 0px 8px;
  span {
    margin-top: 5px;
    font-size: 1rem;
    display: block;
  }
`;

const CommentsBox = styled.div`
  text-align: center;
  span {
    display: block;
  }
`;

const BodyMarkDown = styled.div`
  padding: 10px;
  font-size: 1.5rem;
`;
