import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OrderRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
