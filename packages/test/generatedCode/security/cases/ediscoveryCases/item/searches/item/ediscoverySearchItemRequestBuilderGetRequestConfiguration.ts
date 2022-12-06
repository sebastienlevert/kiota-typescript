import {EdiscoverySearchItemRequestBuilderGetQueryParameters} from './ediscoverySearchItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EdiscoverySearchItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: EdiscoverySearchItemRequestBuilderGetQueryParameters;
}
