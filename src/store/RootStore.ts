import { Api } from '../api/RootApi';
import { EventsStore } from './EventsStore';
import { PagesStore } from './PagesStore';
import { UiStore } from './UiStore';

export class RootStore {
  api: Api;
  uiStore: UiStore;
  pagesStore: PagesStore;
  eventsStore: EventsStore;

  constructor() {
    const api = new Api();

    this.api = api;
    this.uiStore = new UiStore(this, api);
    this.pagesStore = new PagesStore(this, api);
    this.eventsStore = new EventsStore(this, api);
  }
}
