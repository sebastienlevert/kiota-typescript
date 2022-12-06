import {PasswordAuthenticationMethodItemRequestBuilderGetQueryParameters} from './passwordAuthenticationMethodItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PasswordAuthenticationMethodItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: PasswordAuthenticationMethodItemRequestBuilderGetQueryParameters;
}
