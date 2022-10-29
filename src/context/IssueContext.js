import { createContext, useContext, useReducer } from 'react';
import { initialState as issueInitialState, issueReducer } from '../reducer/issue/issueReducer';

const IssueStateContext = createContext(null);
const IssueDispatchContext = createContext(null);

export function IssueProvider({ children }) {
  const [state, dispatch] = useReducer(issueReducer, issueInitialState);

  return (
    <IssueStateContext.Provider value={state}>
      <IssueDispatchContext.Provider value={dispatch}>{children}</IssueDispatchContext.Provider>
    </IssueStateContext.Provider>
  );
}

export function useIssueDispatch() {
  const dispatch = useContext(IssueDispatchContext);

  return dispatch;
}

export function useIssueState() {
  const context = useContext(IssueStateContext);

  return context;
}
