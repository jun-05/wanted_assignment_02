import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getIssues, useIssuesDispatch, useIssuesState } from '../../context/IssuesContext';
import Issue from './Issue';

const IssueList = () => {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();

  const { data: issues, loading, error } = state.issues;

  useEffect(() => {
    getIssues(dispatch);
    console.log(issues);
    return () => {};
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <Wrapper>
      <ItemList>
        {issues &&
          issues.map(issue => {
            return <>{issue && <Issue issue={issue} key={issue.id} />}</>;
          })}
      </ItemList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgb(255, 255, 255);
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
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

const ItemList = styled.div`
  width: 100%;
  min-height: 18rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  column-gap: 1rem;
  row-gap: 1rem;
  margin-bottom: 1rem;
`;

export default IssueList;
