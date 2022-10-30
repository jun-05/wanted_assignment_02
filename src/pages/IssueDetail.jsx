import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IssuesService } from '../api/issues';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';
import { useIssueContext } from '../contexts/IssueContext';
import ErrorRenderer from '../components/ErrorRenderer';
import { Main } from '../styles/issues';
import DetailItem from '../components/DetailItem';

const DetailsPage = () => {
  const { id } = useParams();
  const { issueDetail, setIssueDetail } = useIssueContext();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getIssueData = async () => {
    try {
      const response = await IssuesService.getIssue(id);
      setIssueDetail(response.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    if (!Object.keys(issueDetail).length) getIssueData();
    else setIsLoading(false);
  }, []);

  return (
    <>
      <Header />
      <Main>
        {isLoading ? (
          <LoadingSpinner />
        ) : 
          isError ? (
            <ErrorRenderer />
          ) : (
            <DetailItem />
          )}
      </Main>
    </>
  );
};

export default DetailsPage;
