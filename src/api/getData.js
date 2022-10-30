import { get } from './http';

export const getIssueList = async () => {
  const issueData = await get({
    url: '/angular/angular-cli/issues',
    data: 'sort=comments&state=open&per_page=7',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });

  return issueData.data;
};

export const getDetailPageData = async number => {
  const detailPageData = await get({
    url: '/angular/angular-cli/issues',
    data: `${number}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });

  return detailPageData.data;
};
