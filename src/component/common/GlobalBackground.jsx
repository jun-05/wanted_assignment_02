import React from 'react';
import tw from 'tailwind-styled-components';

const GlobalBackground = ({ children }) => {
  return <GlobalBackgroundWrapper>{children}</GlobalBackgroundWrapper>;
};

const GlobalBackgroundWrapper = tw.div`
w-screen 
min-h-screen 
h-auto 
bg-slate-100
`;

export default GlobalBackground;
