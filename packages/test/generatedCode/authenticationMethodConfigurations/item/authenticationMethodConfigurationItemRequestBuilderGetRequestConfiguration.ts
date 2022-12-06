import {AuthenticationMethodConfigurationItemRequestBuilderGetQueryParameters} from './authenticationMethodConfigurationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodConfigurationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AuthenticationMethodConfigurationItemRequestBuilderGetQueryParameters;
}
