import {AuthorizationPolicyRequestBuilderGetQueryParameters} from './authorizationPolicyRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthorizationPolicyRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AuthorizationPolicyRequestBuilderGetQueryParameters;
}
