import { Api } from './RootApi';

const endpoint = 'events';

export class EventsApi {
  api: Api;

  constructor(rootApi: Api) {
    this.api = rootApi;
  }

  triggerEvent = (event: AppEvent) => {
    this.api.post<AppEvent>(endpoint, event);
  };
}
