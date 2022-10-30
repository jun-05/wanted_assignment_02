import React from "react";
import styled from "styled-components";
import errorImage from '../assets/404.png';
import errorImage_mobile from '../assets/404_mobile.png';


const ErrorRenderer = () => {
//  
  return (
    <DivNotfound />
  )
}

const DivNotfound = styled.div`
  height: 20em;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${errorImage});

  @media (max-width: 720px) {
    background-image: url(${errorImage_mobile});
  }
`;

export default ErrorRenderer;