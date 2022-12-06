import {ExternalItemItemRequestBuilderGetQueryParameters} from './externalItemItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExternalItemItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ExternalItemItemRequestBuilderGetQueryParameters;
}
