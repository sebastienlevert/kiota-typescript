import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CustomersRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
