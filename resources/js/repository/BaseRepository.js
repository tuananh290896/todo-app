import axios from 'axios';
import router from '../router';
import { GUARD_PRIVATE } from '@constants';

class BaseRepository {
  constructor(baseUrl, guard = GUARD_PRIVATE) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${window.localStorage.getItem('access_token')}`
      },
      timeout: 100000
    });

    // Add a request interceptor
    this.axiosInstance.interceptors.request.use(function (config) {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    }, function (error) {
      return Promise.reject(error);
    });

    if(guard === GUARD_PRIVATE){
      // Add a response interceptor
      this.axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
          if (error.response.status === 401) {
            localStorage.removeItem('access_token');
            if(router.history.current.path != '/login'){
              router.push(
                { 
                  path: '/login',
                  query: { next_url: router.history.current.fullPath } 
                }
              );
            }
          }
          return Promise.reject(error);
        }
      );
    }
  }

  /* Handle response */
  processError = (err) => {
    throw err.response && err.response.data?.error;
  };
  
  responseBody = (res) => res.data;

  /* Method Query */
  query = (url, method, ...config) => {
    return this.axiosInstance.request({
      url,
      method,
      ...config
    }).then(this.responseBody).catch(this.processError)
  }

  /* Method GET */
  get = (url, params = {}) =>
    this.axiosInstance.get(url, { params: params }).then(this.responseBody).catch(this.processError)

  /* Method POST */
  post = (url, data) =>
    this.axiosInstance.post(url, data).then(this.responseBody).catch(this.processError);

  /* Method PUT */
  put = (url, data) =>
    this.axiosInstance.put(url, data).then(this.responseBody).catch(this.processError)

  /* Method DELELE */
  delete = (url) => this.axiosInstance.delete(url).then(this.responseBody).catch(this.processError)

  /* Method GET */
  postWithFile = (url, data) =>
    this.axiosInstance
      .post(url, data, { headers: { "Content-Type": "multipart/form-data" } })
      .then(this.responseBody);
}

export default BaseRepository;