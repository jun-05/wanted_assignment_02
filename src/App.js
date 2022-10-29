import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IssueListPage from './pages/IssueListPage';
import IssueDetailPage from './pages/IssueDetailPage';
import Heading from './components/Heading';

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<IssueListPage />} />
        <Route path="/:nuber" element={<IssueDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
