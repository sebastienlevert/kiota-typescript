import {IntendedPoliciesRequestBuilderGetQueryParameters} from './intendedPoliciesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IntendedPoliciesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: IntendedPoliciesRequestBuilderGetQueryParameters;
}
