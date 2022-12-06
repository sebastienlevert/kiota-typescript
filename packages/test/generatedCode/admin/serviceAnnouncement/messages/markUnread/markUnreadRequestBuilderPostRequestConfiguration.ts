import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MarkUnreadRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
