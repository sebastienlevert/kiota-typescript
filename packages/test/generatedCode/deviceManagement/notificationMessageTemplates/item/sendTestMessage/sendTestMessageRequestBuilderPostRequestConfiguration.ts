import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SendTestMessageRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
