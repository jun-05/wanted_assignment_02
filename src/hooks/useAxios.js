import { useEffect, useCallback } from 'react';
import { IssuesService } from '../api/issues';
import { useIssueContext } from '../contexts/IssueContext';

const useAxios = () => {
  const { setIssueList, pageNum, setIsLoading, setHasMore } = useIssueContext();
  // const parsingData = ({number, title, user: {login}, created_at, comments}) => ({number, title, login, created_at, comments});

  const getIssues = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await IssuesService.getIssueList(pageNum);
      setIssueList(prev => [...prev, ...response.data]);
      setHasMore(response.data.length > 0);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  }, [pageNum]);

  useEffect(() => {
    getIssues();
  }, [getIssues, pageNum]);
};

export default useAxios;
