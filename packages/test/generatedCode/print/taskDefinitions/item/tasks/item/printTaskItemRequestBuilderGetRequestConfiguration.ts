import {PrintTaskItemRequestBuilderGetQueryParameters} from './printTaskItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrintTaskItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: PrintTaskItemRequestBuilderGetQueryParameters;
}
