import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SendRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
