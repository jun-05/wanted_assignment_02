import React, { createContext, useReducer, useContext } from 'react';
import { apis } from '../api/api';

const initialState = {
  bodyTxt: {
    loading: false,
    data: null,
    error: null,
  },
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = data => ({
  loading: false,
  data,
  error: null,
});

const error = error => ({
  loading: false,
  data: null,
  error: error,
});

function markdownReducer(state, action) {
  switch (action.type) {
    case 'POST_BODYTXT':
      return {
        ...state,
        bodyTxt: loadingState,
      };
    case 'POST_BODYTXT_SUCCESS':
      return {
        ...state,
        bodyTxt: success(action.data),
      };
    case 'POST_BODYTXT_ERROR':
      return {
        ...state,
        bodyTxt: error(action.error),
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

// State 용 Context 와 Dispatch 용 Context 따로 만들어주기
const IssuesStateContext = createContext(null);
const IssuesDispatchContext = createContext(null);

// 위에서 선언한 두가지 Context 들의 Provider 로 감싸주는 컴포넌트
export function MarkdownProvider({ children }) {
  const [state, dispatch] = useReducer(markdownReducer, initialState);
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

export async function postRenderMarkdown(dispatch, text) {
  dispatch({ type: 'POST_BODYTXT' });
  try {
    const response = await apis.post_render_markdown(text);
    dispatch({ type: 'POST_BODYTXT_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'POST_BODYTXT_ERROR', error: e });
  }
}
