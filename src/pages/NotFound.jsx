import React from 'react';
import styled from 'styled-components';
import ErrorRenderer from '../components/issueDetail/ErrorRenderer';

const NotFoundPage = () => {
  return (
    <>
      <ErrorHeader>Error 404 Not Found</ErrorHeader>
      <ErrorRenderer />
    </>
  );
};

const ErrorHeader = styled.header`
  text-align: center;
  font-size: 2em;
  margin: 2em 0;
`;

export default NotFoundPage;
