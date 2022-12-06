import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ResourcesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
