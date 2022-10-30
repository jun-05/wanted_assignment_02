import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import IssuesPage from '../pages/Issues';
import DetailsPage from '../pages/IssueDetail';
import NotFoundPage from '../pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redirect to="/issues" />} />
        <Route path="/issues" element={<IssuesPage />} />
        <Route path="/issues/:id" element={<DetailsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const Redirect = ({ to }) => <Navigate to={to} />;

export default Router;