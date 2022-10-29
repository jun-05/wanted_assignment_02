import { useState, useCallback, createContext } from 'react';
import axios from 'axios';

export const IssueContext = createContext();

const GIT_ACCESSTOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GIT_URL = process.env.REACT_APP_GITHUB_URL;

const instance = axios.create({
  baseUrl: GIT_URL,
  headers: {
    Authorization: `Bearer ${GIT_ACCESSTOKEN}`,
  },
});

const ContextProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [issueList, setIssueList] = useState([]);
  const [issueDetail, setIssueDetail] = useState(null);
  const [isNoMore, setIsNoMore] = useState(false);
  const [isError, setIsError] = useState(false);
  const getPageList = pageNum => Promise.resolve();
  const getNextPageList = () => {};
  const pageNum = 0;

  const getIssueDetail = useCallback(async id => {
    try {
      setIsLoading(true);
      const response = await instance.get(`/issues/${id}`);
      setIssueDetail(response.data);
    } catch (err) {
      console.log(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const nextPageList = () => {
    if (!isNoMore) {
      getPageList(pageNum + 1);
      setPage(pageNum + 1);
    }
  };

  const getListPageNum = useCallback(async pageNum => {
    try {
      setIsLoading(true);
      const response = await instance.get(`/issues?sort=comments&page=${pageNum}`);
      if (response.data.length === 0) {
        setIsNoMore(true);
      }
      setIssueList(prev => [...prev, ...response.data]);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value = {
    isLoading,
    issueList,
    page,
    getNextPageList,
    getListPageNum,
    getPageList,
    nextPageList,
    getIssueDetail,
    issueDetail,
    isError,
  };

  return <IssueContext.Provider value={value}>{children}</IssueContext.Provider>;
};

export default ContextProvider;
