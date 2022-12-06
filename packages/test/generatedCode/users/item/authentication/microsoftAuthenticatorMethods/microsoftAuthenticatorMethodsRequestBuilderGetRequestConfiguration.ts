import {MicrosoftAuthenticatorMethodsRequestBuilderGetQueryParameters} from './microsoftAuthenticatorMethodsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorMethodsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: MicrosoftAuthenticatorMethodsRequestBuilderGetQueryParameters;
}
