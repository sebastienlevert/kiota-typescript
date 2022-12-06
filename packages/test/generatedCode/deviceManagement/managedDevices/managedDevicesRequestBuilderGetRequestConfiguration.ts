import {ManagedDevicesRequestBuilderGetQueryParameters} from './managedDevicesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedDevicesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ManagedDevicesRequestBuilderGetQueryParameters;
}
