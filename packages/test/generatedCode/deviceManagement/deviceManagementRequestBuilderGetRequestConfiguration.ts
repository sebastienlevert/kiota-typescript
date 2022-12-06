import {DeviceManagementRequestBuilderGetQueryParameters} from './deviceManagementRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceManagementRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DeviceManagementRequestBuilderGetQueryParameters;
}
