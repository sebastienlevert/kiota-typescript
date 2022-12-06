import {SubscribedSkuItemRequestBuilderGetQueryParameters} from './subscribedSkuItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SubscribedSkuItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SubscribedSkuItemRequestBuilderGetQueryParameters;
}
