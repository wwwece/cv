import { Api } from './RootApi';

/**
 * Abstract Entity API
 *
 * Provides some basic requests.
 */
export abstract class EntityApi<Entity> {
  protected api: Api;
  protected targetEndpoint: string;

  constructor(rootApi: Api, targetEndpoint: string) {
    this.api = rootApi;
    this.targetEndpoint = targetEndpoint;
  }

  async getOneEntity({ slug }: Api.GetEntityBySlug) {
    return await this.api.get<Entity>(`${this.targetEndpoint}/${slug}`);
  }

  async getAllEntities() {
    return await this.api.get<Entity[]>(this.targetEndpoint);
  }

  // TODO: Add similar methods for POST, PUT, PATCH & DELETE.
}
