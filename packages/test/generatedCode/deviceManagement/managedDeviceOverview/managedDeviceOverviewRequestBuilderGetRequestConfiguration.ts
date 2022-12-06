import {ManagedDeviceOverviewRequestBuilderGetQueryParameters} from './managedDeviceOverviewRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceOverviewRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ManagedDeviceOverviewRequestBuilderGetQueryParameters;
}
