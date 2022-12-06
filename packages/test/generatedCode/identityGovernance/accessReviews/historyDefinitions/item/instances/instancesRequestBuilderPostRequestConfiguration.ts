import {RequestOption} from '@microsoft/kiota-abstractions';

export interface InstancesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
