export default function createAsyncDispatcher(type, promiseFn) {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_FAILURE`;
  async function actionHandler(dispatch, ...rest) {
    dispatch({ type });
    try {
      const payload = await promiseFn(...rest);
      dispatch({
        type: SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        error: error,
      });
    }
  }
  return actionHandler;
}

//소스출처 :https://github.com/velopert/react-tutorial/blob/master/integrate-api/05-using-with-context.md#asyncactionutilsjs-1
