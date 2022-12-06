import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RejectRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
