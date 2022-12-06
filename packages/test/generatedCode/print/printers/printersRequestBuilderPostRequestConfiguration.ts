import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrintersRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
