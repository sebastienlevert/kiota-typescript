import {IdentityProviderItemRequestBuilderGetQueryParameters} from './identityProviderItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IdentityProviderItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: IdentityProviderItemRequestBuilderGetQueryParameters;
}
