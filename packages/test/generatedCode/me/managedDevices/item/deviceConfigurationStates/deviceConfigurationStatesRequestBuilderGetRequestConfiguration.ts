import {DeviceConfigurationStatesRequestBuilderGetQueryParameters} from './deviceConfigurationStatesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationStatesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DeviceConfigurationStatesRequestBuilderGetQueryParameters;
}
