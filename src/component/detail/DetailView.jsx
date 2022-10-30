import React from 'react';
import { marked } from 'marked';
import tw from 'tailwind-styled-components';
import { convertDate } from './../../utils/convertDate';

const DetailView = ({ issueItem, Loading }) => {
  const { created_at, body, user, title, comments, number } = issueItem;
  const markdown = marked(body);

  return (
    <DetailWrapper>
      <div className="flex flex-col  items-end text-2xl mt-10 w-[578px] pb-4 border-b-2">
        <div>
          #{number} <b>TITLE: </b>
          {title}
        </div>

        <div className="font-sans text-sm">comments:{comments}</div>
        <div className="mt-2 text-sm">{convertDate(created_at)}</div>
        <div className="flex flex-col items-center">
          <img
            className="mt-10 h-10 w-10 rounded-full"
            src={user.avatar_url}
            alt={user.login}
          ></img>
          <div className=" text-xl">{user.login} </div>
        </div>
      </div>

      <article className="prose prose-stone">
        {<div dangerouslySetInnerHTML={{ __html: markdown }}></div>}
      </article>
    </DetailWrapper>
  );
};
const DetailWrapper = tw.div`
flex
flex-col
justify-center
items-center
`;

export default DetailView;
