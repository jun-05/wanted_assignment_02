import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Heading({ headerTitle }) {
  const navigate = useNavigate();

  return (
    <HeaderTitleContainer onClick={() => navigate('/')}>
      <p>{headerTitle} </p>
    </HeaderTitleContainer>
  );
}

export default Heading;

const HeaderTitleContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  padding: 10px 0px;
  cursor: pointer;
  p {
    font-size: 2rem;
  }
`;
