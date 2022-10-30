import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyle>
      <h1>
        Angular / Angular-cli
      </h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  text-align: center;
  padding: 1em 0;
`;
export default Header;
