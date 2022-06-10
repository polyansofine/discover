import axios from 'axios';
import Idx from 'idx';

const AxiosInstance = axios.create({
  baseURL: `https://api.discovershurooq.ae/`,
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json',
  },
  // milliseconds  seconds  minutes
  timeout: 1000 * 60 * 2,
});
// Add a request interceptor
AxiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Add a response interceptor
AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (Idx(error, (_) => _.response.data)) {
      const errorDetail = {
        code: error.response.status,
        message: error.response.data.message,
        title: error.response.data.title,
      };

      return Promise.reject(errorDetail);
    }

    return Promise.reject(error);
  }
);

export default AxiosInstance;