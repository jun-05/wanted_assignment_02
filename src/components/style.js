import styled from 'styled-components';

//IssueList Components
export const ItemContainer = styled.div`
  border-bottom: 1px solid black;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const ItemDetails = styled.div`
  flex-basis: 70%;
`;

export const IssueContainerHeader = styled.div`
  display: flex;
`;
export const IssueTitle = styled.div`
  margin-left: 1em;
  font-weight: bolder;
  margin-bottom: 1.2em;
`;
export const IssueListUserName = styled.div`
  color: purple;
`;
export const UserAvaterImg = styled.img`
  width: 4em;
  height: 4em;
  margin: auto 0;
`;

export const CreatedAt = styled.div``;
export const CommentCounter = styled.div`
  flex-basis: 15%;
  text-align: end;
`;

//DetailPage Components

export const IssueNum = styled.div``;
export const Issuetitle = styled.div``;
export const DetailPageUserName = styled.div``;
export const Comments = styled.div``;
export const UserProfileImg = styled.div``;
export const Contents = styled.div``;
