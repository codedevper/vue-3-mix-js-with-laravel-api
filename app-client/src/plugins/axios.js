import axios from "axios";
import router from "../router";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.withCredentials = true;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  const locale = localStorage.getItem("locale");

  if (locale) {
    config.headers.common["Accept-Language"] = locale;
  }

  return config;
}, function (error) {
  // Do something with request error
  console.log(error);
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  switch (error.response.status) {
    case 401:
      router.push({
        name: "error-401",
        props: {
          error: {
            message: error.response.data.message,
            status: error.status,
          },
        },
      });
      break;
    case 403:
    case 404:
      router.push({
        name: "error-404",
        props: {
          error: {
            message: error.response.data.message,
            status: error.status,
          },
        },
      });
      break;
    case 500:
      router.push({
        name: "error-500",
        props: {
          error: {
            message: error.response.data.message,
            status: error.status,
          },
        },
      });
      break;
    case 409:
      router.push({
        name: "accounts-resend-verification-email",
        props: {
          error: {
            message: error.response.data.message,
            status: error.status,
          },
        },
      });
      break;
    case 422:
    default:
      console.log(error.response.data);
  }
  return Promise.reject(error);
});

export default axios; // export axios instance to be imported in your app
