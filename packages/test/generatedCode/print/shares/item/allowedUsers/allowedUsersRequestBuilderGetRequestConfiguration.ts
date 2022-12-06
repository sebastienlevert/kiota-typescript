import {AllowedUsersRequestBuilderGetQueryParameters} from './allowedUsersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AllowedUsersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AllowedUsersRequestBuilderGetQueryParameters;
}
