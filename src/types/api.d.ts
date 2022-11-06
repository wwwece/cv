declare namespace Api {
  type FetchingState = 'NOT_FETCHED' | 'FETCHING' | 'FETCHED' | 'ERROR';

  interface Success<T> {
    status: 'ok' | 'error';
    data: T;
  }

  interface Problem {
    status: 'error';
    code: number;
    data: any;
  }

  interface GetEntityBySlug {
    slug: string;
  }
}
