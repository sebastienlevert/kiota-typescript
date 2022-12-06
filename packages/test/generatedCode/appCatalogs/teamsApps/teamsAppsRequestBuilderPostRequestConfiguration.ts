import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsAppsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
