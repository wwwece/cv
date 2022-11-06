import { AxiosRequestConfig } from 'axios';

const URL = {
  local: 'http://localhost:1337',
  prod: `https://toniweckroth-api.herokuapp.com/`,
};

export interface ApiConfig extends AxiosRequestConfig<any> {}

export const API_CONFIG: AxiosRequestConfig<any> = {
  baseURL: process.env.NODE_ENV === 'development' ? URL.local : URL.prod,
  timeout: 60000,
};
