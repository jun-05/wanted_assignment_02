import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = ({ organName, repoName }) => {
  return (
    <Wrapper>
      <Title to="/">
        <h1>
          {organName} / {repoName}
        </h1>
      </Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 6rem;
  background-color: ${({ theme }) => theme.mainColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Link)`
  margin: 1rem 2rem -1rem 2rem;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 900;
  color: ${({ theme }) => theme.white};
`;

export default Header;
