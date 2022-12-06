import {ManagedDeviceItemRequestBuilderGetQueryParameters} from './managedDeviceItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ManagedDeviceItemRequestBuilderGetQueryParameters;
}
