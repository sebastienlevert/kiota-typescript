import {VppTokenItemRequestBuilderGetQueryParameters} from './vppTokenItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface VppTokenItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: VppTokenItemRequestBuilderGetQueryParameters;
}
