import { client } from './client';

const DEFAULT_GIT_HUB_REPOP_API = 'https://api.github.com/repos';
const VIEW_TYPE = 'state=open&sort=comments&direction=desc';
const PER_PAGE = '6';

const githubAPI = {
  getIssueList: async page => {
    const response = await client.get(
      `${DEFAULT_GIT_HUB_REPOP_API}/angular/angular-cli/issues?${VIEW_TYPE}&page=${page}&per_page=${PER_PAGE}`,
      {
        headers: {
          'Content-Type': 'application/vnd.github+json',
        },
      }
    );
    return response.data;
  },
  getIssue: async issueNumber => {
    const response = await client.get(
      `${DEFAULT_GIT_HUB_REPOP_API}/angular/angular-cli/issues/${issueNumber}`,
      {
        headers: {
          'Content-Type': 'application/vnd.github+json',
        },
      }
    );

    return response.data;
  },
};

export default githubAPI;
