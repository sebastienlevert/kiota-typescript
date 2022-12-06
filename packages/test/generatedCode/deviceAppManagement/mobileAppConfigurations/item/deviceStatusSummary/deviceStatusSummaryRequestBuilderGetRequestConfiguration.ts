import {DeviceStatusSummaryRequestBuilderGetQueryParameters} from './deviceStatusSummaryRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceStatusSummaryRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DeviceStatusSummaryRequestBuilderGetQueryParameters;
}
