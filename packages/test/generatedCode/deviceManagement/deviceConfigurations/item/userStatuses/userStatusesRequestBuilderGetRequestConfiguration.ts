import {UserStatusesRequestBuilderGetQueryParameters} from './userStatusesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserStatusesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: UserStatusesRequestBuilderGetQueryParameters;
}
