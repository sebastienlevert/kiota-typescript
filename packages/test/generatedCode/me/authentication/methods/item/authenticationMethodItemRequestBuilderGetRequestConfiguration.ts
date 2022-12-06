import {AuthenticationMethodItemRequestBuilderGetQueryParameters} from './authenticationMethodItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AuthenticationMethodItemRequestBuilderGetQueryParameters;
}
