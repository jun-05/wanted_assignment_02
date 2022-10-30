import { get } from './http';

export const getIssueList = async page => {
  const issueData = await get({
    url: '/angular/angular-cli/issues',
    data: `sort=comments&state=open&per_page=10&page=${page}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });

  return issueData.data;
};

export const getDetailPageData = async number => {
  const detailPageData = await get({
    url: `/angular/angular-cli/issues/${number}`,
    data: {},
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });

  return detailPageData.data;
};
