import {FollowedSitesRequestBuilderGetQueryParameters} from './followedSitesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface FollowedSitesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: FollowedSitesRequestBuilderGetQueryParameters;
}
