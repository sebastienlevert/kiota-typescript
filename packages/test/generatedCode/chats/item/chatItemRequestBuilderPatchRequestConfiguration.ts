import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ChatItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
