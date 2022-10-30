import { createContext, useContext, useState } from 'react';

const IssueContext = createContext({
  issueList: [],
  isLoading: false,
  hasMore: false,
  pageNum: 1,
  detailIssue: {},
  setIssueList: () => {},
  setIsLoading: () => {},
  setHasMore: () => {},
  setPageNum: () => {},
  setDetailIssue: () => {},
});

export const IssueProvider = ({ children }) => {
  const [issueList, setIssueList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [detailIssue, setDetailIssue] = useState({});

  const value = {
    issueList,
    isLoading,
    hasMore,
    pageNum,
    detailIssue,
    setIssueList,
    setIsLoading,
    setHasMore,
    setPageNum,
    setDetailIssue
  }
  return <IssueContext.Provider value={value}>{children}</IssueContext.Provider>;
};

export const useIssueContext = () => {
  return useContext(IssueContext);
};