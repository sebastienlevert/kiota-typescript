import {ManagedAppRegistrationsRequestBuilderGetQueryParameters} from './managedAppRegistrationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedAppRegistrationsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ManagedAppRegistrationsRequestBuilderGetQueryParameters;
}
