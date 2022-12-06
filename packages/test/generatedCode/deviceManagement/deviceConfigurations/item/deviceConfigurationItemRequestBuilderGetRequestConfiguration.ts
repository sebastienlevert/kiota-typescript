import {DeviceConfigurationItemRequestBuilderGetQueryParameters} from './deviceConfigurationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DeviceConfigurationItemRequestBuilderGetQueryParameters;
}
