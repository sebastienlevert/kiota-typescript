import {ApplicationsRequestBuilderGetQueryParameters} from './applicationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ApplicationsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ApplicationsRequestBuilderGetQueryParameters;
}
