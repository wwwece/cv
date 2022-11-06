import { action, makeObservable, observable, runInAction } from 'mobx';
import { Api } from '../api/RootApi';
import { RootStore } from './RootStore';

type Entity = Page | undefined;

export class PagesStore {
  rootStore: RootStore;
  api: Api;

  page: Entity;
  pages: Entity[] = [];
  fetchingState: Api.FetchingState = 'NOT_FETCHED';

  constructor(rootStore: RootStore, api: Api) {
    this.rootStore = rootStore;
    this.api = api;

    makeObservable(this, {
      rootStore: false,
      api: false,
      fetchingState: observable,
      page: observable,
      pages: observable,
      getPage: action,
    });
  }

  getPage = async ({ slug }: Api.GetEntityBySlug) => {
    const pageInStore = this.pages.find((page) => page?.slug === slug);

    if (pageInStore) {
      this.page = pageInStore;
      this.fetchingState = 'FETCHED';
      return;
    }

    if (['FETCHING'].includes(this.fetchingState)) return;

    try {
      this.fetchingState = 'FETCHING';
      const response = await this.api.pages.getOneEntity({ slug });
      if (response.status === 'ok') {
        runInAction(() => {
          const pageFromApi = response.data;
          this.pages = [...this.pages, pageFromApi];
          this.page = pageFromApi;
          this.fetchingState = 'FETCHED';
        });
      } else {
        throw response.data;
      }
    } catch (error) {
      runInAction(() => {
        this.fetchingState = 'ERROR';
        console.log('error', error);
      });
    }
  };
}
