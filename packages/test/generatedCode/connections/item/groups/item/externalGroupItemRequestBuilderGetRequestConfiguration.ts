import {ExternalGroupItemRequestBuilderGetQueryParameters} from './externalGroupItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExternalGroupItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ExternalGroupItemRequestBuilderGetQueryParameters;
}
