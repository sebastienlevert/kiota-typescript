import {ConditionalAccessPolicyItemRequestBuilderGetQueryParameters} from './conditionalAccessPolicyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessPolicyItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ConditionalAccessPolicyItemRequestBuilderGetQueryParameters;
}
