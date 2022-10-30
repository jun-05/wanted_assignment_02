import React from 'react';
import styled from 'styled-components';
import NotFoundImage from '../assets/notfound.jpeg';

function ErrorRender() {
  return (
    <ErrorLayout>
      <ErrorImage />
      <Text> 잘못된 경로 입니다...</Text>
    </ErrorLayout>
  );
}

export default ErrorRender;
const ErrorLayout = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 500px;
  background-color: #ddd;
  margin: auto;
`;

const ErrorImage = styled.div`
  margin-top: 80px;
  height: 100%;
  width: 100%;
  background-image: url(${NotFoundImage});
  background-repeat: no-repeat;

  background-size: cover;
`;

const Text = styled.p`
  margin-top: 20px;
  font-size: 3rem;
  text-align: center;
`;
