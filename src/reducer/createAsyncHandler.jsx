import { asyncState } from './asyncState';

export function createAsyncHandler(type, key, list = false) {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_FAILURE`;
  function handler(state, action) {
    switch (action.type) {
      case type:
        if (list) {
          return {
            ...state,
            [key]: asyncState.load(state[key]),
          };
        }

        return {
          ...state,
          [key]: asyncState.load(),
        };

      case SUCCESS:
        if (list) {
          return {
            ...state,
            [key]: asyncState.listSuccess(state[key], action.payload),
          };
        }
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

//참조 코드소스 :https://github.com/velopert/react-tutorial/blob/master/integrate-api/05-using-with-context.md#asyncactionutilsjs-1
