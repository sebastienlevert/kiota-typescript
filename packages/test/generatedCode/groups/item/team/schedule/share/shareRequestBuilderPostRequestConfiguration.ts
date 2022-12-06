import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ShareRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
