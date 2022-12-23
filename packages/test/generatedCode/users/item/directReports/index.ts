import { RequestAdapter } from "@microsoft/kiota-abstractions";
import { ApiClient } from "../../../apiClient";
import { UserItemRequestBuilder } from "../userItemRequestBuilder";
import { DirectReportsRequestBuilder } from "./directReportsRequestBuilder";

export * from "./directReportsRequestBuilderGetQueryParameters";
export * from "./directReportsRequestBuilderGetRequestConfiguration";

declare module "../userItemRequestBuilder" {
  interface UserItemRequestBuilder {
    readonly directReports: DirectReportsRequestBuilder;
    readonly pathParameters: Record<string, unknown>;
    readonly requestAdapter: RequestAdapter;
  }
}

Reflect.defineProperty(ApiClient.prototype, "directReports", {
  configurable: true,
  enumerable: true,
  get: function (this: UserItemRequestBuilder) {
    return new DirectReportsRequestBuilder(
      this.pathParameters,
      this.requestAdapter
    );
  },
});
