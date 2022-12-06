import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SessionsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
