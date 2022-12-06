import {TermStoreRequestBuilderGetQueryParameters} from './termStoreRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TermStoreRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TermStoreRequestBuilderGetQueryParameters;
}
