import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TransferRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
