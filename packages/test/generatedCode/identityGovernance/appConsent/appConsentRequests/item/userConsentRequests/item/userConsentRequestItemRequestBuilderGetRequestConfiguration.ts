import {UserConsentRequestItemRequestBuilderGetQueryParameters} from './userConsentRequestItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserConsentRequestItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: UserConsentRequestItemRequestBuilderGetQueryParameters;
}
