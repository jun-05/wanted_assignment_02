import React, { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import IssueListPage from './pages/IssueListPage';
import IssueDetailPage from './pages/IssueDetailPage';
import NotFound from './pages/NotFound';
import Heading from './components/Heading';
import { IssueContext } from './context/contextApi';

function App() {
  const { headerTitle, issueList, setHeader, getPageList } = useContext(IssueContext);

  const issueHeader = issueList[0]?.repository_url.split('https://api.github.com/repos/').join('');

  useEffect(() => {
    setHeader(issueHeader);
  }, []);

  useEffect(() => {
    getPageList();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Heading headerTitle={headerTitle} />
      <Routes>
        <Route path="/" element={<IssueListPage />} />
        <Route path="/issue/:id" element={<IssueDetailPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
