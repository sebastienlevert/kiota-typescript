import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TodoTaskItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
