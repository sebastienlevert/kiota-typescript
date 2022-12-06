import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BucketsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
