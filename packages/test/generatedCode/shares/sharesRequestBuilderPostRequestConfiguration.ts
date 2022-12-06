import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SharesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
