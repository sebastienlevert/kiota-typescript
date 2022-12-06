import {AuthenticationMethodConfigurationsRequestBuilderGetQueryParameters} from './authenticationMethodConfigurationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodConfigurationsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AuthenticationMethodConfigurationsRequestBuilderGetQueryParameters;
}
