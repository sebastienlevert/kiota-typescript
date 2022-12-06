import {ExternalConnectionItemRequestBuilderGetQueryParameters} from './externalConnectionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExternalConnectionItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ExternalConnectionItemRequestBuilderGetQueryParameters;
}
