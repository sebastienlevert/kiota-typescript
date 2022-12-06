import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UnsubmitRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
