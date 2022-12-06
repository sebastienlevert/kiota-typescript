import {PhoneAuthenticationMethodItemRequestBuilderGetQueryParameters} from './phoneAuthenticationMethodItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PhoneAuthenticationMethodItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: PhoneAuthenticationMethodItemRequestBuilderGetQueryParameters;
}
