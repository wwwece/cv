import { EntityApi } from './EntityApi';
import { Api } from './RootApi';

type Entity = Page;
const endpoint = 'pages';

export class PagesApi extends EntityApi<Entity> {
  rootApi: Api;

  constructor(rootApi: Api) {
    super(rootApi, endpoint);
    this.rootApi = rootApi;
  }

  getPage = this.getOneEntity;
  getPages = this.getAllEntities;
}
