import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CallsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
