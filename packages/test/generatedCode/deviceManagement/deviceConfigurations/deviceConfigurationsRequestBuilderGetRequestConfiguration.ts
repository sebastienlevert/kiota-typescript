import {DeviceConfigurationsRequestBuilderGetQueryParameters} from './deviceConfigurationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DeviceConfigurationsRequestBuilderGetQueryParameters;
}
