import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function IssueItem({ issue }) {
  const year = new Date(issue.created_at).getFullYear() + '년';
  const month = new Date(issue.created_at).getMonth() + '월';
  const day = new Date(issue.created_at).getDate() + '일';
  const date = `${year}  ${month}  ${day}`;

  const navigate = useNavigate();

  return (
    <IssueItemContainer onClick={() => navigate(`issue/${issue.number}`)}>
      <TitleLeftBox>
        <IssueTitle>
          #{issue.number} {issue.title}
        </IssueTitle>
        <UserInfo>
          작성자: {issue.user.login}, 작성일: {date}
        </UserInfo>
      </TitleLeftBox>
      <Comments>
        <p> comments </p>
        <p>{issue.comments} </p>
      </Comments>
    </IssueItemContainer>
  );
}

export default IssueItem;

const IssueItemContainer = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-bottom: 5px;
  padding: 50px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const TitleLeftBox = styled.div`
  width: 85%;
`;

const IssueTitle = styled.p`
  font-size: 1.7rem;
`;

const UserInfo = styled.p`
  font-size: 1rem;
  margin-top: 10px;
`;

const Comments = styled.div`
  text-align: center;
  width: 10%;
  margin-right: 10px;
`;
