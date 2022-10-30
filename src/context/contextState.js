export const loadingState = {
  loading: true,
  data: null,
  error: null,
};

export const success = data => ({
  loading: false,
  data,
  error: null,
});

export const errors = error => ({
  loading: false,
  data: null,
  error: error,
});
