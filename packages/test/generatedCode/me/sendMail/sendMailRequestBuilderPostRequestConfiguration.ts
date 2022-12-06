import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SendMailRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
