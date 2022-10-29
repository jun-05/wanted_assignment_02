import { instance } from '../utils/axios';

export const IssuesService = {
  get: (per_page, page) => {
    const config = {
      params: { sort: 'comments', per_page, page }
    };
    return instance.get('/repos/angular/angular-cli/issues', config);
  },
};
