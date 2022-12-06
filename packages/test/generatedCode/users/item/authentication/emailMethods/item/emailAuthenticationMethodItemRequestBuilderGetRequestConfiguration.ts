import {EmailAuthenticationMethodItemRequestBuilderGetQueryParameters} from './emailAuthenticationMethodItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EmailAuthenticationMethodItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: EmailAuthenticationMethodItemRequestBuilderGetQueryParameters;
}
