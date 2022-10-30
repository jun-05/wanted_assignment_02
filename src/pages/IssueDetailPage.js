import React, { useContext } from 'react';
import styled from 'styled-components';
import { IssueContext } from '../context/contextApi';
import { useParams } from 'react-router-dom';
import IssueDetail from '../components/IssueDetail';
import { useEffect } from 'react';
import Spinner from '../assets/Spinner.gif';

function IssueDetailPage() {
  const { issueDetail, getIssueDetail, isLoading, isError } = useContext(IssueContext);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getIssueDetail(id);
    }
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <SpinnerBox>
          <img src={Spinner} alt="" />
        </SpinnerBox>
      ) : (
        <IssueDetail issueDetail={issueDetail} />
      )}

      {isError && (
        <ErrorMessage>
          <SpinnerBox>
            <img src={Spinner} alt="" />
          </SpinnerBox>{' '}
          서버를 확인해 주세요
        </ErrorMessage>
      )}
    </div>
  );
}

export default IssueDetailPage;

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
