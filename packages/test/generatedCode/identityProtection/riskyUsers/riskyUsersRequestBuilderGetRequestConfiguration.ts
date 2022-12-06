import {RiskyUsersRequestBuilderGetQueryParameters} from './riskyUsersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RiskyUsersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: RiskyUsersRequestBuilderGetQueryParameters;
}
