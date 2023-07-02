import { AxiosRequestConfig } from 'axios';

const URL = {
  local: 'http://localhost:1337',
  prod: `https://toni-weckroth-api-v2.onrender.com`,
};

export interface ApiConfig extends AxiosRequestConfig<any> {}

export const API_CONFIG: AxiosRequestConfig<any> = {
  // NOTE: Heroku's CRA app's NODE_ENV is always 'development' so use always prod url as default
  baseURL: process.env.NODE_ENV === 'development' ? URL.local : URL.prod,

  timeout: 180000, // 3 minutes (sometimes it takes a while for API to start up)
};
