import React from 'react';
import { convertDate } from '../utils/convertDate';
import { useNavigate } from 'react-router-dom';
import { useIssueContext } from '../contexts/IssueContext';
import { Article } from '../styles/issues';

const IssueItem = ({ issue }) => {
  const navigate = useNavigate();
  const { setIssueDetail } = useIssueContext();

  const create_date = convertDate(issue.created_at);
  const onIssueClick = () => {
    setIssueDetail(issue);
    navigate(`/${issue.number}`);
  };

  return (
    <Article onClick={onIssueClick}>
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

export default IssueItem;
