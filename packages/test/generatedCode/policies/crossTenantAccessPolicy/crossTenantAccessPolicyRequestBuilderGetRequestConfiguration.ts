import {CrossTenantAccessPolicyRequestBuilderGetQueryParameters} from './crossTenantAccessPolicyRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CrossTenantAccessPolicyRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: CrossTenantAccessPolicyRequestBuilderGetQueryParameters;
}
