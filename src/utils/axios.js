import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 5000,
});

instance.interceptors.request.use(
  config => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    config.headers.Authorization = `token ${token}`;
    config.headers.accept = 'application/vnd.github+json';
    return config;
  },
  error => {
    return Promise.reject(error.response);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.response);
  }
);

export default instance;
