import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IssueContext } from '../context/contextApi';

function Heading() {
  const { headerTitle, issueList, setHeader } = useContext(IssueContext);
  const navigate = useNavigate();
  const issueHeader = issueList[0]?.repository_url.split('https://api.github.com/repos/').join('');

  useEffect(() => {
    setHeader(issueHeader);
  }, [issueHeader]);

  return <HeaderTitleContainer onClick={() => navigate('/')}> {headerTitle} </HeaderTitleContainer>;
}

export default Heading;

const HeaderTitleContainer = styled.div`
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 2rem;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
