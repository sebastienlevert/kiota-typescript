import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrimaryChannelRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
