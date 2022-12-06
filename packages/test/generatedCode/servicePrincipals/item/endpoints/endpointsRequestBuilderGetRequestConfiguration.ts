import {EndpointsRequestBuilderGetQueryParameters} from './endpointsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EndpointsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: EndpointsRequestBuilderGetQueryParameters;
}
