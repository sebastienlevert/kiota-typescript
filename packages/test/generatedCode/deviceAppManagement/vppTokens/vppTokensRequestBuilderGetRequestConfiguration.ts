import {VppTokensRequestBuilderGetQueryParameters} from './vppTokensRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface VppTokensRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: VppTokensRequestBuilderGetQueryParameters;
}
