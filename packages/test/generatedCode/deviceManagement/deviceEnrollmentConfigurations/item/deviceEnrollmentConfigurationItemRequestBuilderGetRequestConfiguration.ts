import {DeviceEnrollmentConfigurationItemRequestBuilderGetQueryParameters} from './deviceEnrollmentConfigurationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentConfigurationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DeviceEnrollmentConfigurationItemRequestBuilderGetQueryParameters;
}
