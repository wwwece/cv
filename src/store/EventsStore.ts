import { makeAutoObservable } from 'mobx';
import { Api } from '../api/RootApi';
import { RootStore } from './RootStore';
import { Storage } from '../utils/storage';

export class EventsStore {
  rootStore: RootStore;
  api: Api;

  sessionID: string;

  constructor(rootStore: RootStore, api: Api) {
    makeAutoObservable(this, { rootStore: false, api: false });

    this.api = api;

    this.rootStore = rootStore;

    const storageSessionID = Storage.read({ key: 'sessionID' });
    const sessionID = storageSessionID ?? new Date().getTime().toString();

    if (!storageSessionID) {
      Storage.write({ key: 'sessionID', value: sessionID });
    }

    this.sessionID = sessionID;
  }

  triggerEvent = (eventType: AppEventType, event?: Partial<AppEvent>) => {
    const payload: AppEvent = {
      event: eventType,
      sessionID: this.sessionID,
      timestamp: new Date().toISOString(),
      origin: window.location.origin,
      screenWidth: this.rootStore.uiStore.windowDimensions.width,
      screenHeight: this.rootStore.uiStore.windowDimensions.height,
      colorTheme: this.rootStore.uiStore.colorTheme,
      // Employer could be added here, but we want collect only anonymous data
      // employer: this.rootStore.uiStore.employer,
      ...event,
    };

    this.api.events.triggerEvent(payload);
  };
}
