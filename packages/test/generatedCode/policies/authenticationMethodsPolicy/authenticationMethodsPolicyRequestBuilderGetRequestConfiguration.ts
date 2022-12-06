import {AuthenticationMethodsPolicyRequestBuilderGetQueryParameters} from './authenticationMethodsPolicyRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodsPolicyRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AuthenticationMethodsPolicyRequestBuilderGetQueryParameters;
}
