import { asyncState } from '../asyncState';
import { createAsyncHandler } from '../createAsyncHandler';

export const initialState = {
  issues: asyncState.initial,
  issue: asyncState.initial,
};

const issuesHandler = createAsyncHandler('GET_ISSUES', 'issues');
const issueHandler = createAsyncHandler('GET_ISSUE', 'issue');

export function issueReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ISSUES':
    case 'GET_ISSUES_SUCCESS':
    case 'GET_ISSUES_FAILURE':
      return issuesHandler(state, action);
    case 'GET_ISSUE':
    case 'GET_ISSUE_SUCCESS':
    case 'GET_ISSUE_FAILURE':
      return issueHandler(state, action);
    default:
      throw new Error('지원되지 않는 타입입니다.');
  }
}
