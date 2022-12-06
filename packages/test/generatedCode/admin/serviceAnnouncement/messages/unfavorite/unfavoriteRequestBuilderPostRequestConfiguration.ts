import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UnfavoriteRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
