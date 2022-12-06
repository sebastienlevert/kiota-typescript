import {RequestOption} from '@microsoft/kiota-abstractions';

export interface KeepAliveRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
