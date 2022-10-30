import * as Styled from './style';
import { useNavigate } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';

const IssueList = props => {
  // const markdown = props.contents;
  const navigate = useNavigate();
  const onChangePage = () => {
    navigate(`/detail/${props.number}`);
  };
  return (
    <>
      <Styled.ItemContainer onClick={onChangePage}>
        <Styled.UserAvaterImg src={`${props.user.avatar_url}`} alt="avatar" />
        <Styled.ItemDetails>
          <Styled.IssueContainerHeader>
            <>#{props.number}</>
            <Styled.IssueTitle>{props.title}</Styled.IssueTitle>
          </Styled.IssueContainerHeader>
          <Styled.IssueListUserName>{props.user.login}</Styled.IssueListUserName>
          <Styled.CreatedAt>{props.Created_at}</Styled.CreatedAt>
        </Styled.ItemDetails>
        <Styled.CommentCounter>코멘트:{props.comments}</Styled.CommentCounter>
      </Styled.ItemContainer>
    </>
  );
};

export default IssueList;
