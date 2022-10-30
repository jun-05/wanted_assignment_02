import React, { useCallback, useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Loading from './../common/Loading';
import AdBlock from '../common/AdBlock';
import IssueCard from './IssueCard';

const IsuueList = ({ data, loading, onChangePage }) => {
  const [target, setTarget] = useState(null);
  const onHandleObserver = useCallback(
    entries => {
      const target = entries[0];
      if (target.isIntersecting) {
        onChangePage();
      }
    },
    [onChangePage]
  );

  useEffect(() => {
    const option = {
      threshold: 0,
    };
    const observer = new IntersectionObserver(onHandleObserver, option);

    if (target) {
      observer.observe(target);
    }

    return () => {
      observer && observer.disconnect();
    };
  }, [target, onHandleObserver]);

  return (
    <IsuueListBlock>
      {loading && <Loading />}
      {data?.map((issueItem, index) =>
        (index + 1) % 5 === 0 ? (
          <>
            <AdBlock key={`ad_${index}`} />
            <IssueCard issueItem={issueItem} key={`issue_${index}`} />
          </>
        ) : (
          <IssueCard issueItem={issueItem} key={`issue_${index}`} />
        )
      )}
      <div ref={setTarget} />
    </IsuueListBlock>
  );
};
const IsuueListBlock = tw.div`
mx-auto 
bg-white 
dark:bg-gray-800 
rounded 
w-full
[&:first-child]:mt-8
`;

export default IsuueList;
