import {ServiceHealthItemRequestBuilderGetQueryParameters} from './serviceHealthItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ServiceHealthItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ServiceHealthItemRequestBuilderGetQueryParameters;
}
