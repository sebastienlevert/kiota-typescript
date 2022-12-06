import {ManagedAppPoliciesRequestBuilderGetQueryParameters} from './managedAppPoliciesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedAppPoliciesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ManagedAppPoliciesRequestBuilderGetQueryParameters;
}
