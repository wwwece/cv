import { Api } from '../api/RootApi';
import { UiStore } from './UiStore';

export class RootStore {
  api: Api;
  uiStore: UiStore;

  constructor() {
    const api = new Api();

    this.api = api;
    this.uiStore = new UiStore(this, api);
  }
}
