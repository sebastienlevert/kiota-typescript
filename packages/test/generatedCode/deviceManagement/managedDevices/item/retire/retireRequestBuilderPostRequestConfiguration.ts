import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RetireRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
