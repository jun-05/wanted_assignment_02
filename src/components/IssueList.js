import React, { useContext, useEffect, useCallback, useRef } from 'react';
import { IssueContext } from '../context/contextApi';
import styled from 'styled-components';
import IssueItem from './IssueItem';
import Wanted from '../assets/wantedlogo.png';
import Spinner from '../assets/Spinner.gif';

function IssueList() {
  const { issueList, isLoading, isError, nextPageList, isNoMore } = useContext(IssueContext);

  const bottomLoader = useRef(null);

  const handleObserver = useCallback(
    (entries, observer) => {
      const target = entries[0];
      if (target.isIntersecting && !isLoading) {
        observer.unobserve(bottomLoader.current);
        if (isNoMore) {
          observer.disconnect();
          return;
        }
        nextPageList();
      }
    },
    [isLoading, isNoMore, nextPageList]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (bottomLoader.current) {
      observer.observe(bottomLoader.current);
    }
    return () => {
      observer && observer.disconnect();
    };
  }, [handleObserver]);

  return (
    <IssueListContainer>
      {isError ? (
        <ErrorMessage>
          <SpinnerBox>
            <img src={Spinner} alt="" />
          </SpinnerBox>{' '}
          서버를 확인해 주세요
        </ErrorMessage>
      ) : (
        <>
          {issueList?.map((issue, index) => {
            return (
              <IssueListMap key={index}>
                {index === 4 && (
                  <AdLink href="https://www.wanted.co.kr" target="_blank" rel="noreferrer">
                    <img src={Wanted} alt="원티드 로고 이미지" />
                  </AdLink>
                )}
                <IssueItem issue={issue} />
              </IssueListMap>
            );
          })}
        </>
      )}
      <div ref={bottomLoader}>
        {isLoading && (
          <SpinnerBox>
            <img src={Spinner} alt="" />
          </SpinnerBox>
        )}
      </div>
    </IssueListContainer>
  );
}

export default IssueList;

const IssueListContainer = styled.div`
  margin: auto;
  margin-top: 100px;
  max-width: 800px;
`;

const IssueListMap = styled.div``;
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
const ErrorMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
`;
