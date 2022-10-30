import * as Styled from './style';
import ReactMarkdown from 'react-markdown';

const DetailPageComponent = ({ detailPageData }) => {
  const markdown = detailPageData.body;

  return (
    <>
      <Styled.ItemContainer>
        <Styled.UserAvaterImg src={`${detailPageData.user.avatar_url}`} alt="avatar" />
        <Styled.ItemDetails>
          <Styled.IssueContainerHeader>
            <>#{detailPageData.number}</>
            <Styled.IssueTitle>{detailPageData.title}</Styled.IssueTitle>
          </Styled.IssueContainerHeader>
          <Styled.IssueListUserName>{detailPageData.user.login}</Styled.IssueListUserName>
          <Styled.CreatedAt>{detailPageData.Created_at}</Styled.CreatedAt>
        </Styled.ItemDetails>
        <Styled.CommentCounter>코멘트:{detailPageData.comments}</Styled.CommentCounter>
      </Styled.ItemContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  );
};

export default DetailPageComponent;
