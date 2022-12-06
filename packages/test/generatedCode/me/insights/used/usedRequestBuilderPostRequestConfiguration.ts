import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UsedRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
