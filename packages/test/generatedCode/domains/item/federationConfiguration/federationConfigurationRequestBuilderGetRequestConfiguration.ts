import {FederationConfigurationRequestBuilderGetQueryParameters} from './federationConfigurationRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface FederationConfigurationRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: FederationConfigurationRequestBuilderGetQueryParameters;
}
