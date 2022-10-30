import React from 'react';
import tw from 'tailwind-styled-components';

const AdBlock = () => {
  return (
    <AdBlockBlock href="https://www.wanted.co.kr/">
      <PictureBlock>
        <source srcSet="../../img/wanted.webp" type="image/webp" />
        <img src="../../img/wanted.png" alt="wanted" />
      </PictureBlock>
    </AdBlockBlock>
  );
};
const AdBlockBlock = tw.a`
h-full 
w-full
`;

const PictureBlock = tw.picture`
flex
justify-center
items-center
mx-4
md:mx-8
mb-4
border
rounded-md
`;

export default AdBlock;
