import {RequestOption} from '@microsoft/kiota-abstractions';

export interface WipeRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
