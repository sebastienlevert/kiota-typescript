import {ManagedAppStatusItemRequestBuilderGetQueryParameters} from './managedAppStatusItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedAppStatusItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ManagedAppStatusItemRequestBuilderGetQueryParameters;
}
