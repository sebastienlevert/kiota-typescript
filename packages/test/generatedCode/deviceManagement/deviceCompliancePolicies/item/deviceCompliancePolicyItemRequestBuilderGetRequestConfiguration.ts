import {DeviceCompliancePolicyItemRequestBuilderGetQueryParameters} from './deviceCompliancePolicyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DeviceCompliancePolicyItemRequestBuilderGetQueryParameters;
}
