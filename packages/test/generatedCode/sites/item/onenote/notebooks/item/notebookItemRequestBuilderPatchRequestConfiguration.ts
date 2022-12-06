import {RequestOption} from '@microsoft/kiota-abstractions';

export interface NotebookItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
