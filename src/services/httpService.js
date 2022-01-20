import axios, { AxiosResponse } from 'axios';
const baseUrl = 'http://localhost:5000/posts';
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 15000,
});

instance.interceptors.request.use(function (config) {
  return {
    ...config,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}` || '',
      'Content-Type': 'application/json',
    },
  };
});

const responseBody = (response) => response.data;

const requests = {
  get: (url) => instance.get(url).then(responseBody),
  post: (url, body) => instance.post(url, body).then(responseBody),
  put: (url, body) => instance.put(url, body).then(responseBody),
  delete: (url) => instance.delete(url).then(responseBody),
};

export default requests;