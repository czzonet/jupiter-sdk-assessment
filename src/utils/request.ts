import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: "", // api 的 base_url
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    console.log("response err: " + error); // for debug
    // Message({
    //   message: `服务器错误`,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error);
  }
);

export default service;
