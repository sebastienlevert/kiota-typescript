import {TermStoresRequestBuilderGetQueryParameters} from './termStoresRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TermStoresRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TermStoresRequestBuilderGetQueryParameters;
}
