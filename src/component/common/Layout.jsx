import React from 'react';
import GlobalBackground from './GlobalBackground';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <GlobalBackground>
        <Header />
        <main>
          <Outlet />
        </main>
      </GlobalBackground>
    </>
  );
};

export default Layout;
