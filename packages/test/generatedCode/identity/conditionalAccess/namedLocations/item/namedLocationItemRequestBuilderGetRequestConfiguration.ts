import {NamedLocationItemRequestBuilderGetQueryParameters} from './namedLocationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface NamedLocationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: NamedLocationItemRequestBuilderGetQueryParameters;
}
