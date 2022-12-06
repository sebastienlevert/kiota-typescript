import {UserActivityItemRequestBuilderGetQueryParameters} from './userActivityItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserActivityItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: UserActivityItemRequestBuilderGetQueryParameters;
}
