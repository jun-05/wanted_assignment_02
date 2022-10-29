import { asyncState } from './asyncState';

export function createAsyncHandler(type, key) {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;
  function handler(state, action) {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: asyncState.load,
        };
      case SUCCESS:
        return {
          ...state,
          [key]: asyncState.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: asyncState.failure(action.error),
        };
      default:
        return state;
    }
  }

  return handler;
}

//소스출처 :https://github.com/velopert/react-tutorial/blob/master/integrate-api/05-using-with-context.md#asyncactionutilsjs-1
