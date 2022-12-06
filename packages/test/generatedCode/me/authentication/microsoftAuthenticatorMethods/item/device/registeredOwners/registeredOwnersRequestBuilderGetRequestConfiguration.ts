import {RegisteredOwnersRequestBuilderGetQueryParameters} from './registeredOwnersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RegisteredOwnersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: RegisteredOwnersRequestBuilderGetQueryParameters;
}
