import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PinnedMessagesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
