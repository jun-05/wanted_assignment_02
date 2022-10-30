import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import { useIssueContext } from '../../contexts/IssueContext';

const MarkdownRenderer = () => {
  const { issueDetail } = useIssueContext();

  const CodeBlock = props => {
    return props.inline ? (
      <Span>
        <code>{props.children}</code>
      </Span>
    ) : (
      <Pre>
        <code>{props.children}</code>
      </Pre>
    );
  };
  return (
    <DivMarkdown>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ code: CodeBlock }}>
        {issueDetail.body}
      </ReactMarkdown>
    </DivMarkdown>
  );
};

const DivMarkdown = styled.div`
  @media (max-width: 720px) {
    font-size: 0.8em;
  }
`;

const Pre = styled.pre`
  background-color: #d3d6d9;
  padding: 2rem;
  line-height: 1.5rem;
  margin: 2rem auto;
  white-space: pre-wrap;

  @media (max-width: 720px) {
    padding: 0.5rem;
  }
`;
const Span = styled.span`
  background-color: #e5eaee;
  line-height: 1.5rem;
  white-space: pre-wrap;
`;

export default MarkdownRenderer;
