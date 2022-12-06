import {DeviceConfigurationStateItemRequestBuilderGetQueryParameters} from './deviceConfigurationStateItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationStateItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DeviceConfigurationStateItemRequestBuilderGetQueryParameters;
}
