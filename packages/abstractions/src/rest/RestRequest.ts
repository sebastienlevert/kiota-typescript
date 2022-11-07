export interface RestRequest {
  get(...args: []): unknown;
  post(...args: []): unknown;
  patch(...args: []): unknown;
  delete(...args: []): unknown;
}
