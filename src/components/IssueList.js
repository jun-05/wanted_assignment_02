import React, { useContext, useEffect } from 'react';
import { IssueContext } from '../context/contextApi';
import styled from 'styled-components';
import IssueItem from './IssueItem';
import Wanted from '../assets/wantedlogo.png';
import Spinner from '../assets/Spinner.gif';

function IssueList() {
  const { issueList, getPageList, isLoading } = useContext(IssueContext);

  useEffect(() => {
    getPageList();
  }, []);

  console.log(issueList);

  return (
    <IssueListContainer>
      {isLoading ? (
        <SpinnerBox>
          <img src={Spinner} alt="" />
        </SpinnerBox>
      ) : (
        <>
          {issueList?.map((issue, index) => {
            return (
              <fragment key={index}>
                {index === 4 && (
                  <AdLink href="https://www.wanted.co.kr/">
                    <img src={Wanted} alt="" />
                  </AdLink>
                )}
                <IssueItem issue={issue} />
              </fragment>
            );
          })}
        </>
      )}
    </IssueListContainer>
  );
}

export default IssueList;

const IssueListContainer = styled.div`
  margin: auto;
  margin-top: 100px;
  max-width: 800px;
`;

const AdLink = styled.a`
  img {
    padding: 50px 0px;
    margin: auto;
    display: block;
  }
`;

const SpinnerBox = styled.div`
  text-align: center;
  width: 100%;

  img {
    margin-top: 150px;
  }
`;
