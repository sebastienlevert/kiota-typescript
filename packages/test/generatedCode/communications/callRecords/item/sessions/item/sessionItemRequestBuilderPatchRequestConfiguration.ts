import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SessionItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
