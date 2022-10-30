import React, { useCallback, useEffect, useState } from 'react';
import Loading from '../../component/common/Loading';
import IsuueList from '../../component/main/IsuueList';
import { useIssueDispatch, useIssueState } from '../../context/IssueContext';
import ErrorPage from '../../pages/ErrorPage';
import { getIssues } from '../../reducer/issue/issueAction';

const IssueContainer = () => {
  const { issues } = useIssueState();
  const dispatch = useIssueDispatch();
  const { loading, data, error } = issues;
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 1 && !data) {
      getIssues(dispatch, page);
    }
  }, [dispatch, page, data]);

  useEffect(() => {
    if (page !== 1) {
      getIssues(dispatch, page);
    }
  }, [dispatch, page]);

  const onChnagePage = useCallback(() => {
    setPage(prev => prev + 1);
  }, []);

  if (error !== null) return <ErrorPage message={error.response.status} />;
  if (!data) return <Loading />;

  return <IsuueList data={data} loading={loading} onChangePage={onChnagePage} />;
};

export default IssueContainer;
