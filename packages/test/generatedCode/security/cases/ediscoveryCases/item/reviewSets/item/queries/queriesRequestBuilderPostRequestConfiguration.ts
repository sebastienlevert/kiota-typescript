import {RequestOption} from '@microsoft/kiota-abstractions';

export interface QueriesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
