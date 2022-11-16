import { makeAutoObservable, runInAction } from 'mobx';
import { Api } from '../api/RootApi';
import { getWindowDimensions } from '../utils';
import { Storage } from '../utils/storage';
import { RootStore } from './RootStore';

export class UiStore {
  rootStore: RootStore;
  api: Api;

  colorTheme: ColorTheme = 'bw';
  windowDimensions = getWindowDimensions();
  introCompleted: boolean = false;
  employer?: string;

  constructor(rootStore: RootStore, api: Api) {
    makeAutoObservable(this, {
      rootStore: false,
      api: false,
    });

    this.api = api;
    this.rootStore = rootStore;

    window.onresize = () => {
      runInAction(() => {
        this.windowDimensions = getWindowDimensions();
      });
    };

    this.initializeEmployer();
  }

  setIntroCompleted = (value: boolean) => (this.introCompleted = value);

  toggleColorTheme = () =>
    (this.colorTheme = this.colorTheme === 'bw' ? 'color' : 'bw');

  initializeEmployer = () => {
    const params = new URLSearchParams(window.location.search);
    const employerFromQuery = params.get('employer');
    const employer = employerFromQuery ?? Storage.read({ key: 'employer' });

    if (employer) this.setEmployer(employer);

    if (employerFromQuery) {
      // Clean search params from URL
      params.delete('employer');
      window.history.pushState({}, document.title, window.location.pathname);
    }
  };

  setEmployer = (employer?: string) => {
    Storage.write({ key: 'employer', value: employer });
    this.employer = employer;
  };
}
