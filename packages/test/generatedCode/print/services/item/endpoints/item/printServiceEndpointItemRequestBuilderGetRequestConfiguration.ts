import {PrintServiceEndpointItemRequestBuilderGetQueryParameters} from './printServiceEndpointItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrintServiceEndpointItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: PrintServiceEndpointItemRequestBuilderGetQueryParameters;
}
