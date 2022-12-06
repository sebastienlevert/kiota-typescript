import {UserConsentRequestsRequestBuilderGetQueryParameters} from './userConsentRequestsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserConsentRequestsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: UserConsentRequestsRequestBuilderGetQueryParameters;
}
