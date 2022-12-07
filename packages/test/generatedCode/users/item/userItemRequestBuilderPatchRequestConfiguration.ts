import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
