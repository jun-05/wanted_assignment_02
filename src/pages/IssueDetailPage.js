import React, { useContext } from 'react';
import { IssueContext } from '../context/contextApi';
import { useParams } from 'react-router-dom';
import IssueDetailMD from '../components/IssueDetailMD';
import { useEffect } from 'react';

function IssueDetailPage() {
  const { issueDetail, getIssueDetail } = useContext(IssueContext);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getIssueDetail(id);
    }
  }, [id]);

  console.log(issueDetail);

  return (
    <div>
      <IssueDetailMD issueDetail={issueDetail} />
    </div>
  );
}

export default IssueDetailPage;
