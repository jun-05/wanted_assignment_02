import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { useParams } from 'react-router-dom';
import { useIssueDispatch, useIssueState } from './../../context/IssueContext';
import { getIssue } from '../../reducer/issue/issueAction';

const DetailView = () => {
  const param = useParams();
  const { issueNumber } = param;
  const { issue } = useIssueState();
  const dispatch = useIssueDispatch();

  useEffect(() => {
    getIssue(dispatch, issueNumber);
  }, [dispatch, issueNumber]);

  console.log(issue);

  return <DetailViewBlock>{issueNumber}</DetailViewBlock>;
};
const DetailViewBlock = tw.div``;

export default DetailView;
