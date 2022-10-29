import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_HTTPS_URI,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  function (config) {
    config.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_ACESS_TOKEN}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.data.statusCode) {
      switch (error.response.data.statusCode) {
        case 400:
        case 301:
        case 403:
        case 422:
          alert(error.response.data.message);
          break;
        default:
          return;
      }
    }
    return Promise.reject(error);
  }
);
