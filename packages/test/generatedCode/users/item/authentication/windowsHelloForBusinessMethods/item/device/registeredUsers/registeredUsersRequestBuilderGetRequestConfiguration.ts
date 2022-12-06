import {RegisteredUsersRequestBuilderGetQueryParameters} from './registeredUsersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RegisteredUsersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: RegisteredUsersRequestBuilderGetQueryParameters;
}
