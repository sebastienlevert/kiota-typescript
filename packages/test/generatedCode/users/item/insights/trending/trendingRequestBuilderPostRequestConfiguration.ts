import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TrendingRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
