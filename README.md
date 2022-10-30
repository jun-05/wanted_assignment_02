## commit msg 규칙

### 1. 커밋 유형 지정하기

⭐ feat : 새로운 기능에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 그 외 자잘한 수정에 대한 커밋

⚒ refactor :  코드 리팩토링에 대한 커밋

🎨 style : 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋

---

1.  이슈 목록 화면

    - 이슈 목록 가져오기 API 활용

      ```
        const getPageList = useCallback(async pageNumber => {
      try {
        setIsLoading(true);
        const response = await instance.get(`/issues?sort=comments&page=${pageNumber}`);
        if (response.data.length === 0) {
          setIsNoMore(true);
        }
        setIssueList(prev => [...prev, ...response.data]);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
      }, []);
      ```

    - Context API를 활용한 API를 연동 하여 깃허브 이슈 목록을 요청
    - useCallback을 활용하여 함수를 메모리제이션 (useEffect 사용시에 불필요한 재랜더링을 줄임)

    ***

    - open 상태의 이슈 중 코멘트가 많은 순으로 정렬

      ```
      const response = await instance.get(`/issues?sort=comments&page=${pageNumber}`);
      ```

    - 요청 url 쿼리 파리미터로 comments가 높은 순으로 정렬

    ***

    - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시

      ```
       <IssueDetailContainer>
        <DetailTitleBox>
          <img src={issueDetail?.user.avatar_url} alt="" />
          <DetailTitle>
            {issueDetail?.title}
            <span>
              작성자: {issueDetail?.name} 작성일: {date}
            </span>
          </DetailTitle>
          <CommentsBox>
            <p>
              comments<span>{issueDetail?.comments} </span>{' '}
            </p>
          </CommentsBox>
        </DetailTitleBox>
        <BodyMarkDown>
          <MarkDown markdown={issueDetail?.body} />{' '}
        </BodyMarkDown>
      </IssueDetailContainer>

      ```

    ***

    - 다섯번째 셀에는 광고 이미지 출력

      ```
                  {index === 4 && (
                    <AdLink href="https://www.wanted.co.kr/">
                      <img src={Wanted} alt="" />
                    </AdLink>
                  )}
      ```

    ![스크린샷 2022-10-30 오후 7 43 45](https://user-images.githubusercontent.com/104307213/198874539-b8c7c7ae-4809-467f-9289-f0707394ac96.png)

    - 요청 받은 데이터의 4번째 인덱스에 이미지 광고 이미지 위치
    - 광고 이미지 클릭시 [https://www.wanted.co.kr/](https://www.wanted.co.kr/) 로 이동

    ***

    - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

      ```
        const handleObserver = useCallback(
      (entries, observer) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading) {
          observer.unobserve(bottomLoader.current);
          if (isNoMore) {
            observer.disconnect();
            return;
          }
          nextPageList();
        }
      },
      [isLoading, isNoMore, nextPageList]
      );
      ```

- Intersection Observer API를 사용한 무한 스크롤

  ***

2.  이슈 상세 화면

    ![스크린샷 2022-10-30 오후 7 44 18](https://user-images.githubusercontent.com/104307213/198874549-62323070-2ee9-4c12-9fff-01bec86a5eac.png)

    - 이슈의 상세 내용 표시
    - ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

3.  공통 헤더

    ![스크린샷 2022-10-30 오후 7 44 45](https://user-images.githubusercontent.com/104307213/198874558-d29690a5-c88d-471b-8d0c-8a0bb5bdb11b.png)

    - 두 페이지는 공통 헤더를 공유합니다.
    - 헤더에는 Organization Name / Repository Name이 표시됩니다.(요청한 데이터의 주소의 유저/레포지토리를 context api 헤더 상태 함수에 저장 )

    ```
      const issueHeader = issueList[0]?.repository_url.split('https://api.github.com/repos/').join('');

       useEffect(() => {
    setHeader(issueHeader);
    }, [issueHeader]);

    ```

    ***

4.  에러화면

```
  isError ? (
      <ErrorMessage>
        <SpinnerBox>
          <img src={Spinner} alt="" />
        </SpinnerBox>{' '}
        서버를 확인해 주세요
      </ErrorMessage>
```

- context api 요청시 서버의 문제가 있을때 화면 구현

  ***

### 요구 사항

- 필수 요구 사항

  [x] 이슈 목록 및 상세 화면 기능 구현
  [x] Context API를 활용한 API 연동
  [x] 데이터 요청 중 로딩 표시
  [x] 에러 화면 구현
  [x] 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
  [x] 반응형 웹 구현(UI는 데스크톱, 모바일에서 보았을 때 모두 읽기 편하게 구현)
