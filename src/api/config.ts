import { AxiosRequestConfig } from 'axios';

const URL = {
  local: 'http://localhost:1337',
  prod: `https://toni-weckroth-api.onrender.com/`,
};

export interface ApiConfig extends AxiosRequestConfig<any> {}

export const API_CONFIG: AxiosRequestConfig<any> = {
  // NOTE: Heroku's CRA app's NODE_ENV is always 'development' so use always prod url as default
  // baseURL: process.env.NODE_ENV === 'development' ? URL.local : URL.prod,
  baseURL: URL.prod,

  timeout: 60000,
};
