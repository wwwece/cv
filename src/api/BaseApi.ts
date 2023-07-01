// import { ApisauceInstance, create, ApiResponse } from 'apisauce';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiConfig, API_CONFIG } from './config';

type AxiosConfig = AxiosRequestConfig<any> | undefined;

export abstract class BaseApi {
  private api: AxiosInstance;

  constructor(config: ApiConfig = API_CONFIG) {
    this.api = axios.create({
      ...config,
      headers: {
        Accept: 'application/json',
      },
    });
  }

  /**
   * Make GET reguest.
   *
   * @param endpoint API endpoint
   * @param config Axios config.
   * @returns either success (requested data) or error response
   */
  async get<T>(endpoint: string, config?: AxiosConfig) {
    try {
      const response = await this.api.get(endpoint, config);
      return this.handleSuccessResponse<T>(response);
    } catch (error: any) {
      return this.handleErrorResponse(error.response as AxiosResponse);
    }
  }

  /**
   * Make POST reguest.
   *
   * @param endpoint API endpoint
   * @param data Data to be sent
   * @param config Axios config.
   * @returns either success or error response
   */
  async post<T>(endpoint: string, data: T, config?: AxiosConfig) {
    try {
      const response = await this.api.post(endpoint, data, config);
      return this.handleSuccessResponse<T>(response);
    } catch (error: any) {
      return this.handleErrorResponse(error.response as AxiosResponse);
    }
  }

  // TODO: Add similar methods for POST, PUT, PATCH & DELETE

  private handleSuccessResponse<T>(response: AxiosResponse): Api.Success<T> {
    return {
      status: 'ok',
      data: response.data as T,
    };
  }

  private handleErrorResponse(response: AxiosResponse): Api.Problem {
    return {
      status: 'error',
      code: response.status,
      data: response.data,
    };
  }
}

export default BaseApi;
