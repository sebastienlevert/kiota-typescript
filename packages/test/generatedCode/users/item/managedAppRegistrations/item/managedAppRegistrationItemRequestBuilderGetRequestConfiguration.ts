import {ManagedAppRegistrationItemRequestBuilderGetQueryParameters} from './managedAppRegistrationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedAppRegistrationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ManagedAppRegistrationItemRequestBuilderGetQueryParameters;
}
