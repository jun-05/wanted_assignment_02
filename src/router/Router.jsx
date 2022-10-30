import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IssuesPage from '../pages/Issues';
import DetailsPage from '../pages/IssueDetail';
import NotFoundPage from '../pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IssuesPage />} />
        <Route path="/:id" element={<DetailsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;