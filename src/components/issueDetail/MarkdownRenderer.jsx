import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import { useIssueContext } from "../../contexts/IssueContext";


const MarkdownRenderer = () => {
  const { issueDetail } = useIssueContext();

  const CodeBlock = (props) => {
    return (
      <Pre>
        <code>
          {props.children}
        </code>
      </Pre>
    ) 
  }
  return (
    <DivMarkdown>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{ code: CodeBlock }}
      >
        {issueDetail.body}
      </ReactMarkdown>
    </DivMarkdown>
  );
}

const DivMarkdown = styled.div`
  @media (max-width: 720px) {
    font-size: 0.8em;
  }
`;

const Pre = styled.pre`
  background-color: #e5eaee;
  padding: 2rem;
  line-height: 1.5rem;
  margin: 2rem auto;
  white-space: pre-wrap;

  @media (max-width: 720px) {
    padding: 0.5rem;
  }

  code {

  }
`;

export default MarkdownRenderer;