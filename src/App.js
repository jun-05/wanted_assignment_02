import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import IssueListPage from './pages/IssueListPage';
import IssueDetailPage from './pages/IssueDetailPage';
import NotFound from './pages/NotFound';
import Heading from './components/Heading';

function App() {
  return (
    <>
      <GlobalStyle />
      <Heading />
      <Routes>
        <Route path="/" element={<IssueListPage />} />
        <Route path="/issue/:id" element={<IssueDetailPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
