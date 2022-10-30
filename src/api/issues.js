import Request from '../utils/axios';

export const IssuesService = {
  getIssueList: (page) => {
    const config = {
      params: { sort: 'comments', per_page: 10, page }
    };
    return Request.get('/repos/angular/angular-cli/issues', config);
  },
  getIssue: (issue_num) => {
    return Request.get(`/repos/angular/angular-cli/issues/${issue_num}`);
  },
};
