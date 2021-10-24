import Axios from 'axios';
import React from 'react'



const http = Axios.create({
    baseURL: 'http://192.168.23.190/monitoring/api',
    timeout: 5000,
    headers: {
      "Content-Type": "application/json;test",
      "test": "test value"
    },
  });
  http.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  http.interceptors.response.use(
    (config) => {
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  export default http;