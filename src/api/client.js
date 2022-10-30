import axios from 'axios';

const token = process.env.REACT_APP_GITHUB_API_TOKEN;

export const client = axios.create();
client.defaults.headers.common.Authorization = `Bearer ${token}`;
