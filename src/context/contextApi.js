import { useState, useCallback, createContext } from 'react';
import axios from 'axios';

export const IssueContext = createContext({
  isLoading: false,
  getPageList: () => Promise.resolve(),
  nextPageList: () => {},
  issueList: [],
  getIssueDetail: id => {},
  issueDetail: undefined,
  page: 0,
  headerTitle: '',
  setHeader: () => {},
  isNoMore: false,
  isError: false,
});

const GIT_ACCESSTOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GIT_URL = process.env.REACT_APP_GITHUB_URL;

const instance = axios.create({
  baseURL: GIT_URL,
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
  const [headerTitle, setHeaderTitle] = useState('');

  const setHeader = useCallback(async issueHeader => {
    try {
      setHeaderTitle(issueHeader);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getIssueDetail = useCallback(async id => {
    console.log(id);
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
      getPageList(page + 1);
      setPage(page + 1);
    }
  };

  const getPageList = useCallback(
    async pageNumber => {
      try {
        setIsLoading(true);
        const response = await instance.get(`/issues?sort=comments&page=${pageNumber}`);
        setIssueList(prev => [...prev, ...response.data]);
        if (response.data.length === 0) {
          setIsNoMore(true);
        }
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [setIssueList]
  );

  const value = {
    isLoading,
    issueList,
    page,
    getPageList,
    nextPageList,
    getIssueDetail,
    issueDetail,
    isNoMore,
    isError,
    setHeader,
    headerTitle,
  };

  return <IssueContext.Provider value={value}>{children}</IssueContext.Provider>;
};

export default ContextProvider;
