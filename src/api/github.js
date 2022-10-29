import { client } from './client';

const DEFAULT_GIT_HUB_REPOP_API = 'https://api.github.com/repos';
const VIEW_TYPE = 'state=open&sort=comments&direction=desc';
const PER_PAGE = '10';

const githubAPI = {
  getIssueList: async page => {
    const IssueList = client.get(
      `${DEFAULT_GIT_HUB_REPOP_API}/angular/angular-cli/issues?${VIEW_TYPE}&page=${page}&per_page=${PER_PAGE}`,
      {
        headers: {
          'Content-Type': 'application/vnd.github+json',
        },
      }
    );

    return IssueList;
  },
  getIssue: async issueNumber => {
    const IssueItem = client.get(
      `${DEFAULT_GIT_HUB_REPOP_API}/angular/angular-cli/issues/${issueNumber}`,
      {
        headers: {
          'Content-Type': 'application/vnd.github+json',
        },
      }
    );

    return IssueItem;
  },
};

export default githubAPI;
