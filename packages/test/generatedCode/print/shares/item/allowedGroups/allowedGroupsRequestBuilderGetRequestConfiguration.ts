import {AllowedGroupsRequestBuilderGetQueryParameters} from './allowedGroupsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AllowedGroupsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AllowedGroupsRequestBuilderGetQueryParameters;
}
