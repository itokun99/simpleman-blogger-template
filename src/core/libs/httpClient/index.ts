import axios from 'axios';

// instance of xhr / fetch call it "fetcher"
export const httpClient = axios.create({
  timeout: 60000
});

// implement interceptor
// TODO: enhance this if needed in future
httpClient.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

httpClient.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    return Promise.reject(err);
  }
);
