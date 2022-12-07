import { UserItemRequestBuilder } from '../userItemRequestBuilder'
import { ISettingsRequestBuilder, SettingsRequestBuilder } from './settingsRequestBuilder'

export * from './settingsRequestBuilderPatchRequestConfiguration'
export * from './settingsRequestBuilderDeleteRequestConfiguration'
export * from './settingsRequestBuilderGetRequestConfiguration'
export * from './settingsRequestBuilderGetQueryParameters'


declare module "../userItemRequestBuilder" {
    interface UserItemRequestBuilder {
        settings: ISettingsRequestBuilder
    }

}

Reflect.defineProperty(UserItemRequestBuilder.prototype, "settings", {
    configurable: true,
    enumerable: true,
    get: function (this: UserItemRequestBuilder) {
        return this.create(SettingsRequestBuilder);
    },
});