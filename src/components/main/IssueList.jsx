import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getIssues, useIssuesDispatch, useIssuesState } from '../../context/IssuesContext';
import Issue from './Issue';

const IssueList = () => {
  const navigate = useNavigate();
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();

  const { data: issues, loading, error } = state.issues;

  useEffect(() => {
    getIssues(dispatch);
    return () => {};
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <Wrapper>
      <ItemList>
        {issues &&
          issues.map((issue, idx) => {
            if (idx + 1 !== 5) {
              return <>{issue && <Issue issue={issue} key={issue.id} />}</>;
            } else {
              return (
                <>
                  {
                    <AdImg
                      src={
                        'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100'
                      }
                      onClick={() =>
                        navigate('/redirect', { state: { url: 'https://www.wanted.co.kr/ ' } })
                      }
                    />
                  }
                </>
              );
            }
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

const AdImg = styled.img`
  margin: 0 auto;
  cursor: pointer;
  width: 90%;
  height: 5rem;
  object-fit: contain;
`;

export default IssueList;
