import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';

const Header = () => {
  return (
    <HeaderStyle>
      <h1>
        <Link to="/">
          <LogoIcon width={30} height={30} />
        </Link>
        Angular / Angular-cli
      </h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;

  width: 60%;
  margin: 0 auto;
  h1 a {
    vertical-align: middle;
    margin: 0 0.3em;
  }

  @media (max-width: 720px) {
    width: 100%;

    h1 {
      font-size: 1.6em;
    }
  }
`;
export default Header;
