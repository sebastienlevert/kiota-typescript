import {BaseItemItemRequestBuilderGetQueryParameters} from './baseItemItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BaseItemItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: BaseItemItemRequestBuilderGetQueryParameters;
}
