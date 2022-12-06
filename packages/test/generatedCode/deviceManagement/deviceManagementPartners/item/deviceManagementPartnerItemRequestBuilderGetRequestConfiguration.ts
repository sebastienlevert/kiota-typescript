import {DeviceManagementPartnerItemRequestBuilderGetQueryParameters} from './deviceManagementPartnerItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceManagementPartnerItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DeviceManagementPartnerItemRequestBuilderGetQueryParameters;
}
