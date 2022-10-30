export const asyncState = {
  initial: {
    loading: false,
    data: null,
    error: null,
  },
  load: (state = null) => {
    return {
      loading: true,
      data: state ? state.data : null,
      error: null,
    };
  },
  success: payload => {
    return {
      loading: false,
      data: payload,
      error: null,
    };
  },
  listSuccess: (state, payload) => {
    return {
      loading: false,
      data: state.data ? state.data.concat(payload) : payload,
      error: null,
    };
  },

  failure: error => {
    return {
      loading: false,
      data: null,
      error: error,
    };
  },
};
