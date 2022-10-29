import axios from 'axios';

// const pickItem = ({number, title, user: {login}, user: {avatar_url}, created_at, comments, body}) => ({number, title, login, avatar_url, created_at, comments, body});

// const convertResponse = ({data, status}) => {
//   const pickData = data.map((item) => {
//     return pickItem(item);
//   })
//   return {
//     status,
//     data: pickData
//   };
// };
// const convertError = () => {
// };

export const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 5000,
});

instance.interceptors.request.use(
  config => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    config.headers.Authorization = `token ${token}`;
    // isLoading
    return config;
  },
  error => {
    // isLoading End
    return Promise.reject(error.response)
  },
);

instance.interceptors.response.use(
  response => {
    return response;
    // return convertResponse(response);
  },
  error => {
    return Promise.reject(error.response)
  },
);