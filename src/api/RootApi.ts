import BaseApi from './BaseApi';
import { ApiConfig } from './config';
import { PagesApi } from './PagesApi';

export class Api extends BaseApi {
  pages: PagesApi;

  constructor(config?: ApiConfig) {
    super(config);

    this.pages = new PagesApi(this);
  }
}
