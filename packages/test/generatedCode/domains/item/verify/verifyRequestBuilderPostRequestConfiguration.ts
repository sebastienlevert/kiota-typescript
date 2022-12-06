import {RequestOption} from '@microsoft/kiota-abstractions';

export interface VerifyRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
