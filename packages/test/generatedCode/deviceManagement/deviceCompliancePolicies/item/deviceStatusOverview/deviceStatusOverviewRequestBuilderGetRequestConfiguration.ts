import {DeviceStatusOverviewRequestBuilderGetQueryParameters} from './deviceStatusOverviewRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceStatusOverviewRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DeviceStatusOverviewRequestBuilderGetQueryParameters;
}
