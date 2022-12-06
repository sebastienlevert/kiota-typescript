import {RequestOption} from '@microsoft/kiota-abstractions';

export interface HostedContentsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
