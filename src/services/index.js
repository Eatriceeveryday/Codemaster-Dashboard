import axios from 'axios';

export const service = axios.create({
  baseURL: 'https://eduapi.dv.harrymahardhika.com/api/',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

service.interceptors.request.use(
  async config => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      console.log(accessToken);
      if (accessToken) {
        config.headers.Authorization = 'Bearer ' + accessToken;
      }

      return config;
    } catch (errorConfig) {
      return Promise.reject(errorConfig);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(async response => {
  return response.data;
});

export { default as useAuth } from './useAuth';
export { default as useStudent } from './useStudent';
