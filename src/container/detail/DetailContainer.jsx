import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../component/common/Loading';
import { useIssueDispatch, useIssueState } from '../../context/IssueContext';
import ErrorPage from '../../pages/ErrorPage';
import { getIssue } from '../../reducer/issue/issueAction';
import DetailView from './../../component/detail/DetailView';

const DetailContainer = () => {
  const param = useParams();
  const { issueNumber } = param;
  const { issue } = useIssueState();
  const dispatch = useIssueDispatch();
  const { loading, data, error } = issue;

  useEffect(() => {
    getIssue(dispatch, issueNumber);
  }, [dispatch, issueNumber]);

  if (!data || loading) return <Loading />;
  if (error || isNaN(issueNumber)) return <ErrorPage />;
  return <DetailView issueItem={data} loading={loading} />;
};

export default DetailContainer;
