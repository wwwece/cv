import { makeAutoObservable, runInAction } from 'mobx';
import { Api } from '../api/RootApi';
import { getWindowDimensions } from '../utils';
import { RootStore } from './RootStore';

export class UiStore {
  rootStore: RootStore;
  api: Api;

  colorTheme: ColorTheme = 'bw';
  windowDimensions = getWindowDimensions();
  introCompleted: boolean = false;

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
  }

  setIntroCompleted = (value: boolean) => (this.introCompleted = value);

  toggleColorTheme = () =>
    (this.colorTheme = this.colorTheme === 'bw' ? 'color' : 'bw');
}
