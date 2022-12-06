import {SubscriptionItemRequestBuilderGetQueryParameters} from './subscriptionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SubscriptionItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SubscriptionItemRequestBuilderGetQueryParameters;
}
