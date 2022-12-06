import {EntitlementManagementRequestBuilderGetQueryParameters} from './entitlementManagementRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EntitlementManagementRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: EntitlementManagementRequestBuilderGetQueryParameters;
}
