import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Todo = ({ issue }) => {
  // const initialState = {};
  const [issueItem, setIssueItem] = useState(initialState);

  useEffect(() => {
    setIssueItem(issue);
  }, []);

  return <Wrapper>{issueItem}</Wrapper>;
};

const Wrapper = styled.div``;

export default Todo;
