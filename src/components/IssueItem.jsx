import React from 'react';
import styled from 'styled-components';
import { ArticleCommon } from '../styles/common';
import { convertDate } from '../utils/convertDate';
import { useNavigate } from 'react-router-dom';
import { useIssueContext } from '../contexts/IssueContext';

const IssueItem = ({ issue }) => {
  const navigate = useNavigate();
  const { setDetailIssue } = useIssueContext();
  
  const create_date = convertDate(issue.created_at);
  const onIssueClick = () => {
    setDetailIssue(issue);
    navigate(`/${issue.number}`);
  };

  return (
    <Article onClick={onIssueClick}>
    {/* <Article> */}
      <div className='contents'>
        <div className="title">
          <p>
            #{issue.number} {issue.title}
          </p>
        </div>
        <div className="info">
          <p>작성자: <span>{issue.user.login}</span>, 작성일: {create_date}</p>
        </div>
      </div>
      <div className='comment'>
        <span>코멘트: {issue.comments}</span>
      </div>
    </Article>
  );
};


const Article = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${ArticleCommon}

  div.contents {
    width: 80%;
    div {
      padding: 0.5em 0;
    }
    p {
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 1em;
    }
    .title p {
      @media (max-width: 720px) {
        font-size: 0.9em;
      }
    }
    .info p {
      font-size: 0.8em;
      @media (max-width: 720px) {
        font-size: 0.75em;
      }
    }
    .info span {
      font-weight: bold;
    }
  }

  div.comment {
    span {
      font-size: 0.7em;
    }
  }
`;

export default IssueItem;
