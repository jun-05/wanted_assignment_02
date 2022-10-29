import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { IssuesService } from '../api/issues';

const IssuesPage = () => {
  let page = 1;
  const [issueList, setIssueList] = useState([]);
  const preventRef = useRef(true);
  const obsRef = useRef(null);

  const getIssues = async (per_page) => {
    try {
      const response = await IssuesService.get(per_page, page);
      setIssueList(prev => [...prev, ...response.data]);
      preventRef.current = true;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getIssues(10);
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  });

  const obsHandler = entries => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      page = page + 1;
      getIssues(2);
    }
  };

  return (
    <main>
      {issueList.map((issue, index) => (
        <div>{issue.title}</div>
      ))}
      <div ref={obsRef}></div>
    </main>
  );
};

export default IssuesPage;
