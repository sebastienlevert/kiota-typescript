import {EdiscoveryCasesRequestBuilderGetQueryParameters} from './ediscoveryCasesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EdiscoveryCasesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: EdiscoveryCasesRequestBuilderGetQueryParameters;
}
