import { createContext, useContext, useState } from 'react';

const IssueContext = createContext({
  issueList: [],
  isLoading: false,
  hasMore: false,
  pageNum: 1,
  issueDetail: {},
  setIssueList: () => {},
  setIsLoading: () => {},
  setHasMore: () => {},
  setPageNum: () => {},
  setIssueDetail: () => {},
});

export const IssueProvider = ({ children }) => {
  const [issueList, setIssueList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [issueDetail, setIssueDetail] = useState({});

  const value = {
    issueList,
    isLoading,
    hasMore,
    pageNum,
    issueDetail,
    setIssueList,
    setIsLoading,
    setHasMore,
    setPageNum,
    setIssueDetail
  }
  return <IssueContext.Provider value={value}>{children}</IssueContext.Provider>;
};

export const useIssueContext = () => {
  return useContext(IssueContext);
};