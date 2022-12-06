import {SubmittedResourcesRequestBuilderGetQueryParameters} from './submittedResourcesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SubmittedResourcesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SubmittedResourcesRequestBuilderGetQueryParameters;
}
