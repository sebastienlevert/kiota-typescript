import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ThreadsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
