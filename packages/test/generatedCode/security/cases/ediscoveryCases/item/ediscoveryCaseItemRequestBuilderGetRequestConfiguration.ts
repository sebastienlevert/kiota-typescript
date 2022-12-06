import {EdiscoveryCaseItemRequestBuilderGetQueryParameters} from './ediscoveryCaseItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EdiscoveryCaseItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: EdiscoveryCaseItemRequestBuilderGetQueryParameters;
}
