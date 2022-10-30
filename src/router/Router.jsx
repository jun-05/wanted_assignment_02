import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';
import Layout from '../components/elements/Layout';
import Redirect from './Redirect';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/issue/:issueNum" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
