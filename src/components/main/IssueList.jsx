import React from 'react';
import styled from 'styled-components';
// import Issue from './Issue';

const IssueList = () => {
  return (
    <Wrapper>
      <ItemList>
        이슈리스트
        {/* {issueList &&
          issueList.map(issue => {
            return (
              <>
                {issue && (
                  <Issue
                    issue={issue}
                    key={issue.id}
                  />
                )}
              </>
            );
          })} */}
      </ItemList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgb(255, 255, 255);
  margin: 0px 2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 1280px) {
    /* Desktop */
    width: 40%;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    /* Tablet */
    width: 50%;
  }
  @media (max-width: 767px) {
    /* Mobile */
    width: 60%;
  }
`;

const ItemList = styled.div`
  width: 100%;
  min-height: 18rem;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.5rem;
  column-gap: 1rem;
  row-gap: 1rem;
  margin-bottom: 1rem;
`;

export default IssueList;
