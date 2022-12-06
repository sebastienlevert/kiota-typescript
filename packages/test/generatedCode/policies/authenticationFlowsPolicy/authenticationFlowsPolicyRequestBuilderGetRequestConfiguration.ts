import {AuthenticationFlowsPolicyRequestBuilderGetQueryParameters} from './authenticationFlowsPolicyRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthenticationFlowsPolicyRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AuthenticationFlowsPolicyRequestBuilderGetQueryParameters;
}
