import {CreatedObjectsRequestBuilderGetQueryParameters} from './createdObjectsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CreatedObjectsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: CreatedObjectsRequestBuilderGetQueryParameters;
}
