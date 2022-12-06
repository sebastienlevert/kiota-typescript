import {AllowedMembersRequestBuilderGetQueryParameters} from './allowedMembersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AllowedMembersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AllowedMembersRequestBuilderGetQueryParameters;
}
