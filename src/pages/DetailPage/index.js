import { getDetailPageData } from '../../api/getData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import * as Styled from './style';
import DetailPageComponent from '../../components/DetailPageComponent';

const DetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [detailPageData, setDetailPageData] = useState();
  const { number } = useParams();
  useEffect(() => {
    getDetailPageData(number)
      .then(res => {
        setDetailPageData(res);
      })
      .then(() => {
        setIsLoading();
      });
  }, [number]);

  return (
    <Styled.PageContainer>
      {isLoading ? <Loading /> : <DetailPageComponent detailPageData={detailPageData} />}
    </Styled.PageContainer>
  );
};

export default DetailPage;
