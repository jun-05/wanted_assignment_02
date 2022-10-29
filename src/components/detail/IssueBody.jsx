import React, { useEffect } from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import {
  postRenderMarkdown,
  useIssuesDispatch,
  useIssuesState,
} from '../../context/MarkdownContext';

const IssueBody = ({ body }) => {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const { data: bodyTxt, loading, error } = state.bodyTxt;
  const txtElement = parse(String(bodyTxt));
  useEffect(() => {
    postRenderMarkdown(dispatch, body);
    return () => {};
  }, []);

  if (loading) return <div>로딩중..</div>;
  else if (error) return <div>에러가 발생했습니다</div>;
  else if (bodyTxt) return <Wrapper>{txtElement}</Wrapper>;
};

const Wrapper = styled.div`
  padding: 0.3rem 0.5rem;
`;

export default IssueBody;
