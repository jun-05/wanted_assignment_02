import React, { createContext, useReducer, useContext } from 'react';
import { apis } from '../api/api';
import { errors, loadingState, success } from './contextState';

const initialState = {
  issues: {
    loading: false,
    data: null,
    error: null,
  },
  issue: {
    loading: false,
    data: null,
    error: null,
  },
};

function issuesReducer(state, action) {
  switch (action.type) {
    case 'GET_ISSUES':
      return {
        ...state,
        issues: loadingState,
      };
    case 'GET_ISSUES_SUCCESS':
      return {
        ...state,
        issues: success(action.data),
      };
    case 'GET_ISSUES_ERROR':
      return {
        ...state,
        issues: errors(action.error),
      };
    case 'GET_ISSUE':
      return {
        ...state,
        issue: loadingState,
      };
    case 'GET_ISSUE_SUCCESS':
      return {
        ...state,
        issue: success(action.data),
      };
    case 'GET_ISSUE_ERROR':
      return {
        ...state,
        issue: errors(action.error),
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const IssuesStateContext = createContext(null);
const IssuesDispatchContext = createContext(null);

// 두가지 Context 들의 Provider 로 감싸주는 컴포넌트
// 최상위 컴포넌트에서 사용
export function IssuesProvider({ children }) {
  const [state, dispatch] = useReducer(issuesReducer, initialState);
  return (
    <IssuesStateContext.Provider value={state}>
      <IssuesDispatchContext.Provider value={dispatch}>{children}</IssuesDispatchContext.Provider>
    </IssuesStateContext.Provider>
  );
}

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useIssuesState() {
  const state = useContext(IssuesStateContext);
  if (!state) {
    throw new Error('Cannot find issuesProvider');
  }
  return state;
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useIssuesDispatch() {
  const dispatch = useContext(IssuesDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find issuesProvider');
  }
  return dispatch;
}

export async function getIssues(dispatch) {
  dispatch({ type: 'GET_ISSUES' });
  try {
    const response = await apis.get_issues();
    dispatch({ type: 'GET_ISSUES_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_ISSUES_ERROR', error: e });
  }
}

export async function getIssue(dispatch, issue_number) {
  dispatch({ type: 'GET_ISSUE' });
  try {
    const response = await apis.get_an_issue(issue_number);
    dispatch({ type: 'GET_ISSUE_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_ISSUE_ERROR', error: e });
  }
}
