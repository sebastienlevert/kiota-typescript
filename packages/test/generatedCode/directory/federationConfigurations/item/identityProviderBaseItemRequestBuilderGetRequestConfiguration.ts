import {IdentityProviderBaseItemRequestBuilderGetQueryParameters} from './identityProviderBaseItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IdentityProviderBaseItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: IdentityProviderBaseItemRequestBuilderGetQueryParameters;
}
