export const asyncState = {
  initial: {
    loading: false,
    data: null,
    error: null,
  },
  load: {
    loading: true,
    data: null,
    error: null,
  },
  success: payload => {
    return {
      loading: false,
      data: payload,
      error: null,
    };
  },
  failure: error => {
    return {
      loading: false,
      data: null,
      error,
    };
  },
};
