export interface RestRequest {
  get?: () => Promise<unknown>;
  post?: () => Promise<unknown>;
  patch?: () => Promise<unknown>;
  delete?: () => Promise<unknown>;
}
