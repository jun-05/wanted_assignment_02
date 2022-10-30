import React, { useContext } from 'react';
import { IssueContext } from '../context/contextApi';
import IssueList from '../components/IssueList';
import styled from 'styled-components';

function IssueListPage() {
  const { issueList } = useContext(IssueContext);

  return (
    <IssueListPageContainer>
      <IssueList issues={issueList} />
    </IssueListPageContainer>
  );
}

export default IssueListPage;

const IssueListPageContainer = styled.div`
  padding: 0px 10px;
`;
