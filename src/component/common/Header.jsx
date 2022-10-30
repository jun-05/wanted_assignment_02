import React from 'react';
import tw from 'tailwind-styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderItem>Wanted-07-team-9 / wanted_assignment_02(june)</HeaderItem>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = tw.div`
w-full 
h-10 
md:h-14 
bg-slate-100
`;
const HeaderContainer = tw.div`
flex 
h-full 
items-center 
justify-center 
text-xl 
md:text-2xl
`;

const HeaderItem = tw.div``;

export default Header;
