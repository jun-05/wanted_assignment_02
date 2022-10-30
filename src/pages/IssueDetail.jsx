import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IssuesService } from '../api/issues';
import Header from '../components/Header';
// import { convertDate } from '../utils/convertDate';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';

const DetailsPage = () => {
  const { id } = useParams();
  // const { detailIssue } = useIssueContext();
  const [issue, setIssue] = useState({});

  const getIssueData = async () => {
    try {
      const response = await IssuesService.getIssue(id);
      console.log(response)
      setIssue(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getIssueData();
  }, []);
  console.log(issue);
  // const create_date = convertDate(issue.created_at);
  return (
    <>
      <Header />
      <main>
        {/* <div>{issue.number}</div>
        <div>{issue.title}</div>
        <div>{issue.user.login}</div>
        <div>{create_date}</div>
        <div>{issue.comments}</div> */}
          {/* <div>{issue.title}</div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {issue.body}
          </ReactMarkdown> */}
      </main>
    </>
  );
};

export default DetailsPage;
