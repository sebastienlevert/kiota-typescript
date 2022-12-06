import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TargetAppsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
