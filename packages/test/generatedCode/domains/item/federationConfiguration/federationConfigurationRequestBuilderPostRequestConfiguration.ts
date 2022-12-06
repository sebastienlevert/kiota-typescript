import {RequestOption} from '@microsoft/kiota-abstractions';

export interface FederationConfigurationRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
