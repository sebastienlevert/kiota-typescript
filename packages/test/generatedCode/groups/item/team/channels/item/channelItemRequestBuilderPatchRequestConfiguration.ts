import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ChannelItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
