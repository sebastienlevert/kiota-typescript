import {RegisteredDevicesRequestBuilderGetQueryParameters} from './registeredDevicesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RegisteredDevicesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: RegisteredDevicesRequestBuilderGetQueryParameters;
}
