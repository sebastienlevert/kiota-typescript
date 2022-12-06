import {DeviceAppManagementRequestBuilderGetQueryParameters} from './deviceAppManagementRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceAppManagementRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DeviceAppManagementRequestBuilderGetQueryParameters;
}
