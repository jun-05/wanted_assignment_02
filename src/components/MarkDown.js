import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

function MarkDown({ markdown }) {
  function BlockQuote(children) {
    return <BlockQuoteStyle>{children.children} </BlockQuoteStyle>;
  }

  const CodeBlock = props => {
    return (
      <Pre>
        <code>{props.children}</code>
      </Pre>
    );
  };
  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{ code: CodeBlock, BlockQuote: BlockQuote }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default MarkDown;

const Pre = styled.pre`
  background-color: #e5eaee;
  padding: 2rem;
  box-sizing: border-box;
  overflow: hidden;
  margin: 2rem auto;
`;

const BlockQuoteStyle = styled.blockquote`
  padding: 1rem;
  border: 1px dashed black;
`;
