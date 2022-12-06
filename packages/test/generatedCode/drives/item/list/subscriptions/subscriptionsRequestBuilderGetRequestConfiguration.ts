import {SubscriptionsRequestBuilderGetQueryParameters} from './subscriptionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SubscriptionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SubscriptionsRequestBuilderGetQueryParameters;
}
