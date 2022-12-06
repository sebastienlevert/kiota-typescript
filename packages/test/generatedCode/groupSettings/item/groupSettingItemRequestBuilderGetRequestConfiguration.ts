import {GroupSettingItemRequestBuilderGetQueryParameters} from './groupSettingItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface GroupSettingItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: GroupSettingItemRequestBuilderGetQueryParameters;
}
