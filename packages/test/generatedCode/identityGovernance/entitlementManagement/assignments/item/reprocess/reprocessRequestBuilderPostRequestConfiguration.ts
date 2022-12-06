import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ReprocessRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
