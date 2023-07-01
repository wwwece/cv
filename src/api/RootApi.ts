import BaseApi from './BaseApi';
import { ApiConfig } from './config';
import { EventsApi } from './EventsApi';
import { PagesApi } from './PagesApi';

export class Api extends BaseApi {
  pages: PagesApi;
  events: EventsApi;

  constructor(config?: ApiConfig) {
    super(config);

    this.pages = new PagesApi(this);
    this.events = new EventsApi(this);
  }
}
