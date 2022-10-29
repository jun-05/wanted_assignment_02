import createAsyncDispatcher from '../asyncActionUtils';
import githubAPI from './../../api/github';

export const getIssues = createAsyncDispatcher('GET_ISSUES', githubAPI.getIssueList);
export const getIssue = createAsyncDispatcher('GET_ISSUE', githubAPI.getIssue);
