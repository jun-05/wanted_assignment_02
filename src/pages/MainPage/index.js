import { useState, useEffect } from 'react';
import { getIssueList } from '../../api/getData';
import Loading from '../../components/Loading';
import IssueList from '../../components/IssueList';
import AdsBox from '../../components/AdsBox';
import * as Styled from './style';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [issueDataArr, setIssueDataArr] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      getIssueList(1)
        .then(res => {
          setIssueDataArr(res);
        })
        .then(() => {
          setIsLoading(false);
        });
    } catch (e) {
      console.log(e.message);
      navigate('/');
    }
  }, []);

  return (
    <>
      <Styled.PageContainer>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div>
              {issueDataArr.map((el, idx) => {
                if (idx < 4) {
                  return (
                    <IssueList
                      key={el.id}
                      number={el.number}
                      title={el.title}
                      user={el.user}
                      created_at={el.created_at}
                      comments={el.comments}
                    />
                  );
                }
              })}
            </div>
            <AdsBox />
            <div>
              {issueDataArr.map((el, idx) => {
                if (idx >= 4) {
                  return (
                    <IssueList
                      key={el.id}
                      number={el.number}
                      title={el.title}
                      user={el.user}
                      created_at={el.created_at}
                      comments={el.comments}
                    />
                  );
                }
              })}
            </div>
          </>
        )}
      </Styled.PageContainer>
    </>
  );
};

export default MainPage;
