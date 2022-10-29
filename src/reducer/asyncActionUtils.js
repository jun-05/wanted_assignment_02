export default function createAsyncDispatcher(type, promiseFn) {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;
  async function actionHandler(dispatch, ...rest) {
    dispatch({ type });
    try {
      const payload = await promiseFn(...rest);
      dispatch({
        type: SUCCESS,
        payload,
      });
    } catch (e) {
      dispatch({
        type: ERROR,
        error: e,
      });
    }
  }
  return actionHandler;
}

//소스출처 :https://github.com/velopert/react-tutorial/blob/master/integrate-api/05-using-with-context.md#asyncactionutilsjs-1
