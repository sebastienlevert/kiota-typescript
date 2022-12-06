import {BaseTypesRequestBuilderGetQueryParameters} from './baseTypesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BaseTypesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: BaseTypesRequestBuilderGetQueryParameters;
}
