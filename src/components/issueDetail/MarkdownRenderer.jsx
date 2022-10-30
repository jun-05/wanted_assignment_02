import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'
import styled from 'styled-components';
import { useIssueContext } from '../../contexts/IssueContext';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const MarkdownRenderer = () => {
  const syntaxTheme = oneLight;

  const MarkdownComponents = {
    code({ node, inline, className, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      const hasMeta = node?.data?.meta;

      const applyHighlights = applyHighlights => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/;
          const metadata = node.data.meta?.replace(/\s/g, '');
          const strlineNumbers = RE?.test(metadata) ? RE?.exec(metadata)[1] : '0';
          const highlight = strlineNumbers;
          const data: string = highlight.includes(applyHighlights) ? 'highlight' : null;
          return { data };
        } else {
          return {};
        }
      };
      
      return match ? (
        <SyntaxHighlighter
          style={syntaxTheme}
          language={match[1]}
          PreTag="div"
          className="codeStyle"
          showLineNumbers={true}
          wrapLines={hasMeta ? true : false}
          useInlineStyles={true}
          lineProps={applyHighlights}
          {...props}
        />
      ) : (
        <Span>
          <code className={className} {...props} />
        </Span>
      );
    },
  };

  const { issueDetail } = useIssueContext();
  return (
    <DivMarkdown>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={MarkdownComponents}>
        {issueDetail.body}
      </ReactMarkdown>
    </DivMarkdown>
  );
};

const DivMarkdown = styled.div`
  padding: 0.5em;
  line-height: 1.5;

  @media (max-width: 720px) {
    font-size: 0.8em;
  }

  blockquote {
    color: #474747;
    margin: 0;
    padding: 0 1em;
    border-left: 0.25em #21262d solid;

    h2 {
      border-bottom: 1px solid #21262d;
    }
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    white-space: break-spaces;
  }
  pre {
    border-radius: 3px;
    background-color: #d3d6d9;
    padding: 1rem;
    overflow: auto;
  
    @media (max-width: 720px) {
      padding: 0.5rem;
    }
  }
`;

const Span = styled.span`
  border-radius: 3px;
  padding: 2px 5px;
  background-color: #d9d9d9;
`;

export default MarkdownRenderer;
