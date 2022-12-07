import {LinkedResourcesRequestBuilderGetQueryParameters} from './linkedResourcesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LinkedResourcesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: LinkedResourcesRequestBuilderGetQueryParameters;
}