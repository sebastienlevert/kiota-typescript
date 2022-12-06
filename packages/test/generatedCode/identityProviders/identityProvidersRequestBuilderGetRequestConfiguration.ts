import {IdentityProvidersRequestBuilderGetQueryParameters} from './identityProvidersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IdentityProvidersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: IdentityProvidersRequestBuilderGetQueryParameters;
}
