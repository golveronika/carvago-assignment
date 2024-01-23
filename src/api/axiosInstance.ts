import axios from 'axios';
import {BASE_URL} from '../constants/configs';
import {clearLocalStorage, getFromLocalStorage} from '../utils/localStorage';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const axiosInstanceNoAuth = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getFromLocalStorage('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)

);

axiosInstance.interceptors.response.use((response) => response, 
(error) =>  {
  clearLocalStorage();
  return Promise.reject(error)
});

export default axiosInstance;
