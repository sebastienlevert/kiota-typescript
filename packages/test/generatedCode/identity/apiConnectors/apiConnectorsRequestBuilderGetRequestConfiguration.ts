import {ApiConnectorsRequestBuilderGetQueryParameters} from './apiConnectorsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ApiConnectorsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ApiConnectorsRequestBuilderGetQueryParameters;
}
