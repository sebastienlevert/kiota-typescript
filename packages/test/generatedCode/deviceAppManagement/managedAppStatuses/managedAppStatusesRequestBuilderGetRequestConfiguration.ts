import {ManagedAppStatusesRequestBuilderGetQueryParameters} from './managedAppStatusesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedAppStatusesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ManagedAppStatusesRequestBuilderGetQueryParameters;
}
