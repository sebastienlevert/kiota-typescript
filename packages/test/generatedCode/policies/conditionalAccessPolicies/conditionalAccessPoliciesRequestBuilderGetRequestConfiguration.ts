import {ConditionalAccessPoliciesRequestBuilderGetQueryParameters} from './conditionalAccessPoliciesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessPoliciesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ConditionalAccessPoliciesRequestBuilderGetQueryParameters;
}
