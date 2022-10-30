import React from 'react';
import { convertDate } from '../utils/convertDate';
import { useIssueContext } from '../contexts/IssueContext';
import { ArticleDetail } from '../styles/issues';
import MarkdownRenderer from '../components/MarkdownRenderer';

const DetailItem = ({ issue }) => {
  const { issueDetail } = useIssueContext();

  const create_date = convertDate(issueDetail.created_at);
  return (
    <div>
      <ArticleDetail>
        <div><img src={issueDetail.user.avatar_url} alt="avatar"/></div>
        <div className='contents'>
          <div className="title">
            <p>
              #{issueDetail.number} {issueDetail.title}
            </p>
          </div>
          <div className="info">
            <p>작성자: <span>{issueDetail.user.login}</span>, 작성일: {create_date}</p>
          </div>
        </div>
        <div className='comment'>
          <span>코멘트: {issueDetail.comments}</span>
        </div>
      </ArticleDetail>
      <MarkdownRenderer />
    </div>
  );
};

export default DetailItem;
