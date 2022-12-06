import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ContractsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
