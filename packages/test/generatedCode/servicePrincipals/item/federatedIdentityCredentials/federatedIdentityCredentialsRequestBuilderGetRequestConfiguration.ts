import {FederatedIdentityCredentialsRequestBuilderGetQueryParameters} from './federatedIdentityCredentialsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface FederatedIdentityCredentialsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: FederatedIdentityCredentialsRequestBuilderGetQueryParameters;
}
