export * from './outlookRequestBuilderGetRequestConfiguration'
export * from './outlookRequestBuilderGetQueryParameters'

import { UserItemRequestBuilder } from "../userItemRequestBuilder";
import { IOutlookRequestBuilder, OutlookRequestBuilder } from './outlookRequestBuilder';

declare module "../userItemRequestBuilder" {
    interface UserItemRequestBuilder {
        outlook: IOutlookRequestBuilder
    }

}

Reflect.defineProperty(UserItemRequestBuilder.prototype, "outlook", {
    configurable: true,
    enumerable: true,
    get: function (this: UserItemRequestBuilder) {
        return this.create(OutlookRequestBuilder);
    },
});