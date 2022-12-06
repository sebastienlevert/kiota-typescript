import {DeviceEnrollmentConfigurationsRequestBuilderGetQueryParameters} from './deviceEnrollmentConfigurationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceEnrollmentConfigurationsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DeviceEnrollmentConfigurationsRequestBuilderGetQueryParameters;
}
